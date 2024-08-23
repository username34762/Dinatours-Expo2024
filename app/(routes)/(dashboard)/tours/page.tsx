import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { ListTours } from "../dashboard/components/ListTours/ListTours"


export default async function DashboardPage(){
   const tours = await db.tour.findMany({
    where:{
        isPublish:true
    },
    orderBy:{
        createdAt: "desc"
    }
   })
   console.log(tours)
    
    return(
        <div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-purple-900">List of tours</h2>
            </div>
            <ListTours tours={tours}/>
        </div>
    )
}