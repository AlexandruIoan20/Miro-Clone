import { v } from "convex/values"; 
import { query } from "./_generated/server";
import { getAll, getAllOrThrow } from "convex-helpers/server/relationships"; 

export const get = query({ 
    args: { 
        orgId: v.string(),
        search: v.optional(v.string()), 
        favourites: v.optional(v.string()), 
    }, 
    handler: async (context, args) => { 
        const identity = await context.auth.getUserIdentity(); 

        if(!identity) throw new Error("Unauthorized"); 

        if(args.favourites) { 
            const favouriteBoards = await context.db
                .query("userFavourites")
                .withIndex("by_user_org", (q) => 
                    q
                        .eq("userId", identity.subject)
                        .eq("orgId", args.orgId)
                )
                .order("desc")
                .collect(); 

            const ids = favouriteBoards.map((board) => board.boardId); 
            const boards = await getAllOrThrow(context.db, ids); 

            console.log(boards); 

            return boards.map( (board) => ({ 
                ...board, 
                isFavourite: true, 
            }))
        }

        const title = args.search as string; 
        let boards = []; 

        if(title) { 
            boards = await context.db
                .query("boards")
                .withSearchIndex("search_title", (q) => 
                    q 
                        .search("title", title)
                        .eq("orgId", args.orgId)
                )
                .collect(); 
        } else { 
            boards = await context.db
            .query("boards")  
            .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
            .order("desc")
            .collect();
        }

        const boardWithFavouriteRelation = boards.map((board) => { 
            return context.db
                .query("userFavourites")
                .withIndex("by_user_board", (q) => 
                    q   
                        .eq("userId", identity.subject)
                        .eq("boardId", board._id)
                )
                .unique()
                .then((favourite) => { 
                    return { 
                        ...board, 
                        isFavourite: !!favourite
                    }; 
                }); 
        }); 

        const boardsWithFavouriteBoolean = Promise.all(boardWithFavouriteRelation); 
        return boardsWithFavouriteBoolean; 
    }
})