"use client"; 

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useOrganization } from "@clerk/clerk-react";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";
import { toast } from "sonner";

export const EmptyBoards = () => { 
    const { organization } = useOrganization(); 
    const { mutate, pending } = useApiMutation(api.board.create); 

    const onClick = () => { 
        if(!organization) return; 
        mutate({ 
            orgId: organization.id, 
            title: "Untitled"
        }).then((id) => { toast.success("Board created")}) // TO DO: redirect to board/{id}
        .catch((err) => { toast.error("Failed to create the board")})
    }
    return ( 
        <div className = "h-full flex flex-col items-center justify-center">
            <Image 
                src = "/note.png"
                alt = "Empty"
                height = { 140 }
                width = { 140 }
            /> 

            <h2 className = "text-2xl font-semibold mt-6">
                Create your first board!
            </h2>
            
            <p className = "text-muted-foreground text-sm mt-2">
                Start by creating a board for your organization. 
            </p>

            <div className = "mt-6">
                <Button disabled = { pending } onClick = { onClick } size = "lg">
                    Create Board
                </Button>
            </div>
        </div>
    )
}