"use client"; 

import { ClientSideSuspense } from "@liveblocks/react/suspense";
import { RoomProvider } from "@liveblocks/react"; // ? 
import { LiveblocksProvider } from "@liveblocks/react";

interface RoomProps { 
    children: React.ReactNode, 
    roomId: string, 
}

export const Room = ({ children, roomId }: RoomProps) => { 

    return ( 
        <LiveblocksProvider publicApiKey = "pk_dev_i28qhYwVGOJ7PoAu6EP2-r8oeDib3DUAlq6uTEHjW7R_lK0lCgekRtwFHefLNxID">
            <RoomProvider id = { roomId } initialPresence={{}}>
                <ClientSideSuspense fallback = { <div> Loading... </div>}>
                    { () => children }
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    )
}