 
import { auth } from "@clerk/nextjs/server";
import { ButtonAddPlace } from "./components/ButtonAddPlace";
import { ListPlaces } from "./components/ButtonAddPlace/ListPlaces";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { isAdministrator } from "@/lib/isAdministrator";


export default async function placeManagerPage(){
    const {userId} = auth()
    if(!userId|| !isAdministrator(userId)){
        return redirect("/")
    }
    const place = await db.place.findMany({
        where:{
            userId,
        },
        orderBy:{
            createdAt: "desc"
        }
    })
    

    return(
        <div>
            <div className="flex justify-between">
                <h2 className="font-bold text-2xl">Manage your places</h2>
                <ButtonAddPlace/>
            </div>
            <ListPlaces places={place}/>
        </div>
    )
}