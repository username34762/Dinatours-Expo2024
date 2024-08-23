 
import { auth } from "@clerk/nextjs/server";
import { ButtonAddTour } from './components/ButtonAddTour/butttonAddTour';
import { isAdministrator } from "@/lib/isAdministrator";
import {ListTours} from './components/ListTours/ListTour';


import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { CardTour } from "./components/ListTours/CardTour";


export default async function tourManagerPage(){
    const {userId} = auth()
    if(!userId|| !isAdministrator(userId)){
        return redirect("/")
    }
    const tour = await db.tour.findMany({
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
                <h2 className="font-bold text-2xl">Manage your tours</h2>
               <ButtonAddTour/>
            </div>
            <ListTours tours={tour}/>
        </div>
    )
}