import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"

export async function POST(req: Request){
   try{
    const {userId} = auth()
    const data = await req.json()
    if(!userId){
        return new NextResponse("unauthorized")
    }
    const place=await db.place.create({
        data:{
            userId,
            ...data
        }
    })
    return NextResponse.json(place)

   } catch(error){
    console.log("[PLACE]",error)
    return new NextResponse("Internal Error")
   } 
}