import { redirect } from "next/navigation";
import ListLovedPlaces from "./components/ListLovedPlaces/ListLovedPlaces";
import { auth } from "@clerk/nextjs/server";

export default function pageLovedPlaces(){
    const {userId} = auth();
    if (!userId){
        return redirect("/");
    }
    return(
    
    <div>
        <h1 className="text-2xl">Places that you like</h1>
        <ListLovedPlaces/>
    </div>
    );
}