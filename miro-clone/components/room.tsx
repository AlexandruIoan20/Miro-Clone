"use client"; 

import { ClientSideSuspense } from "@liveblocks/react/suspense";
import { RoomProvider } from "@liveblocks/react"; // ? 
import { LiveblocksProvider } from "@liveblocks/react";

interface RoomProps { 
    children: React.ReactNode, 
    roomId: string, 
    fallback: React.ReactNode
}

export const Room = ({ children, roomId, fallback}: RoomProps) => { 

    return ( 
        <LiveblocksProvider authEndpoint = "/api/liveblocks-auth">
            <RoomProvider id = { roomId } initialPresence={{}}>
                <ClientSideSuspense fallback = { fallback }>
                    { () => children }
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    )
}