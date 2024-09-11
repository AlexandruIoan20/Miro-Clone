import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoards = () => { 
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
                <Button size = "lg">
                    Create Board
                </Button>
            </div>
        </div>
    )
}