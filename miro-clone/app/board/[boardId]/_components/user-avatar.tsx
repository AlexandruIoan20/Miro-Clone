import { Hint } from "@/app/(dashboard)/_components/sidebar/hint";
import {
    Avatar, 
    AvatarFallback, 
    AvatarImage, 
} from "@radix-ui/react-avatar";

interface UserAvatarProps { 
    src?: string, 
    name?: string, 
    fallback?: string, 
    borderColor?: string, 
}

export const UserAvatar = ({ 
    src, 
    name, 
    fallback, 
    borderColor, 
}: UserAvatarProps) => { 
    return ( 
        <Hint
            label = { name || "Teammate"}
            side = "bottom"
            sideOffset = { 18 }
        >
            <Avatar
                className = "h-8 w-8 border-2 flex items-center justify-center rounded-3xl"
                style = {{ borderColor: borderColor }}
            >
                <AvatarImage
                    src = { src }
                    className = "rounded-3xl p-0"
                />
                <AvatarFallback className = "text-xs font-semibold rounded-3xl">
                    { fallback }    
                </AvatarFallback> 
            </Avatar>
        </Hint>
    )
}