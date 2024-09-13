import { v } from "convex/values"; 
import { query } from "./_generated/server";

export const get = query({ 
    args: { 
        orgId: v.string(),
    }, 
    handler: async (context, args) => { 
        const identity = await context.auth.getUserIdentity(); 

        if(!identity) throw new Error("Unauthorized"); 
        
        const boards = await context.db
            .query("boards")  
            .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
            .order("desc")
            .collect();
            
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