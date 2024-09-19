"use client"; 

import { memo } from "react";

import { shallow, useOthersConnectionIds, useOthersMapped } from "@liveblocks/react/suspense";
import { Cursor } from "./cursor";
import { colorToCss } from "@/lib/utils";
import { Path } from "./path";

const Drafts = () => { 
    const others = useOthersMapped(other => ({ 
        pencilDraft: other.presence.pencilDraft, 
        penColor: other.presence.penColor, 
    }), shallow); 

    return ( 
        <>
            { others.map(([key, other]) => { 
                if(other.pencilDraft) { 
                    return ( 
                        <Path
                            key = { key }
                            x = { 0 }
                            y = { 0 }
                            points = { other.pencilDraft }
                            fill = { other.penColor ? colorToCss(other.penColor) : "#000" }
                        /> 
                    )
                }
            })}
        </>
    )
}

const Cursors = () => { 
    const ids = useOthersConnectionIds(); 

    return ( 
        <>
            { ids.map((connectionId) => {
                return ( 
                    <Cursor
                        key = { connectionId }
                        connectionId = { connectionId }
                    /> 
                )
            })}
        </>
    )
}

export const CursorsPresence = memo(() => { 
    return ( 
        <>
            <Drafts /> 
            <Cursors /> 
        </>
    )
}); 

CursorsPresence.displayName = ""; 