"use client"; 

import { ClientSideSuspense } from "@liveblocks/react/suspense";
import { RoomProvider } from "@liveblocks/react"; // ? 
import { LiveblocksProvider } from "@liveblocks/react";
import { LiveMap, LiveObject, LiveList } from "@liveblocks/client";
import { Layer } from "@/types/canvas";

interface RoomProps { 
    children: React.ReactNode, 
    roomId: string, 
    fallback: React.ReactNode
}

export const Room = ({ children, roomId, fallback}: RoomProps) => { 

    return ( 
        <LiveblocksProvider throttle = { 16 } authEndpoint = "/api/liveblocks-auth">
            <RoomProvider id = { roomId } initialPresence={{
                cursor: null, 
                selection: [], 
            }}
                initialStorage={{
                    layers: new LiveMap<string, LiveObject<Layer>>(), 
                    layerIds: new LiveList([])
                }}
            >
                <ClientSideSuspense fallback = { fallback }>
                    { () => children }
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    )
}