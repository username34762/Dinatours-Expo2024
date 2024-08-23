import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(req:Request, {params}: {params:{tourId:string}}) {
    try {
        const {userId} = auth();
        const {tourId} = params
        const values = await req.json()
        if(!userId){
            return new NextResponse("Unauthorized")
        }  
        const tour = await db.tour.update({
            where: {
                id: tourId,
                userId,
            },
            data:{
                ... values,
            }
        });
        return NextResponse.json(tour);
    } catch (error) {
        console.log("[TOUR FORM ID]", error)
        return new NextResponse("Internal Error")
    }
    
}