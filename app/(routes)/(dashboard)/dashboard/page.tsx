import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { ListPlaces } from "./components/ListPlaces"


export default async function DashboardPage(){
   const places = await db.place.findMany({
    where:{
        isPublish:true
    },
    orderBy:{
        createdAt: "desc"
    }
   })
   console.log(places)
    
    return(
        <div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">List of places</h2>
            </div>
            <ListPlaces places={places}/>
        </div>
    )
}