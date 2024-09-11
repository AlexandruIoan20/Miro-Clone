"use client"; 

import Link from "next/link";
import Image from "next/image";
import { Overlay } from "./overlay";

interface BoardCardProps { 
    id: string; 
    title: string; 
    authorName: string; 
    authorId: string; 
    createdAt: number; 
    imageUrl: string;
    orgId: string; 
    isFavourite: boolean; 
}

export const BoardCard = ({
    id, 
    title, 
    authorName, 
    authorId, 
    createdAt, 
    imageUrl, 
    orgId, 
    isFavourite
}: BoardCardProps) => { 
    return ( 
        <div>
            <Link href = { `/board/${id}`}>
                <div className = "group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
                    <div className = "relative flex-1 bg-amber-50">
                        <Image
                            src = { imageUrl }
                            alt = { title }
                            className = "object-fit"
                            fill
                        /> 
                        <Overlay /> 
                    </div>
                </div>
            </Link>
        </div>
    )
}