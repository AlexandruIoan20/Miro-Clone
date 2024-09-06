"use client";
import { UserButton } from "@clerk/nextjs";

 

export const NavigationBar = () => { 
    return ( 
        <div className = "flex items-center gap-x-4 p-5 bg-green-500">
            <div className = "hidden lg:flex lg:flex-1 bg-yellow-500 ">
                { /* TO DO: Add Search  */ }
                Search!
            </div>
            <UserButton /> 
        </div>
    ); 
}