import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
export async function POST(req: Request){
    try{
       const {userId} = auth()
       console.log("User ID:", userId)
       const data = await req.json()
       console.log("Request Data:", data)
 
       if(!userId){
          return new NextResponse("unauthorized", { status: 401 })
       }
 
       const place = await db.place.create({
          data: {
             userId,
             ...data
          }
       })
 
       return NextResponse.json(place)
 
    } catch(error){
       console.error("[PLACE]", error)
       return new NextResponse("Internal Error", { status: 500 })
    } 
 }
 