import Image from "next/image";

export const EmptyFavourites = () => { 
    return ( 
        <div className = "h-full flex flex-col items-center justify-center">
            <Image 
                src = "/no-favourites.jpeg"
                alt = "Empty"
                height = { 180 }
                width = { 180 }
            /> 

            <h2 className = "text-2xl font-semibold mt-6">
                No favourite boards
            </h2>
            <p className = "text-muted-foreground text-sm mt-2">
                Try favoritting a board
            </p>
        </div>
    )
}