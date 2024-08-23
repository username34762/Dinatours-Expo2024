import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function PATCH(req:Request,
 {params}:{params:{placeId:string}}
){
    try {
        const {userId}=auth();
        const {placeId}=params;
        const{isPublish}= await req.json()
        if(!userId){
            return new NextResponse("Internal Server Error")
        }
        const place = await db.place.update({
            where:{
                id:placeId,
                userId
            },
            data:{
                isPublish:isPublish
            }
        })
        return NextResponse.json(place);
        

    } catch (error) {
        console.log("[PLACE ID PATCH]")
        return new NextResponse("Internal Error")
    }
}



export async function DELETE(
   req: Request,
   {
    params,
   }:{
    params: {placeId: string};
   }

){
    try {
      const {userId}= auth()
      const {placeId}=params  
      if(!userId){
        return new NextResponse("Unauthorized",)
      }
      const deletePlace= await db.place.delete({
        where:{
            id: placeId,
        },
      });

      return NextResponse.json(deletePlace)
    } catch (error) {
        console.log("[Delete car id]",error)
        return new NextResponse("internal error")
    }
}