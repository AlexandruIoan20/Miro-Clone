"use client"; 

import { EmptySearch } from "./empty-search";
import { EmptyFavourites } from "./empty-favourites";
import { EmptyBoards } from "./empty-boards";

interface BoardListProps { 
    orgId: string; 
    query: { 
        search?: string; 
        favourites?: string; 
    }; 
}; 

export const BoardList = ( { orgId, query }: BoardListProps) => { 
    const data = [] // TODO - API DATA 

    if(!data?.length && query.search) { 
        return <EmptySearch />;
    }

    if(!data?.length && query.favourites) { 
        return <EmptyFavourites />;
    
    }

    if(!data?.length) {     
        return <EmptyBoards />; 
    }
    return ( 
        <div>
            { JSON.stringify(query) }
        </div>
    )
}