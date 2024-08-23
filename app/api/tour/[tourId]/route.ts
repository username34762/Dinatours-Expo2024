import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function PATCH(req:Request,
 {params}:{params:{tourId:string}}
){
    try {
        const {userId}=auth();
        const {tourId}=params;
        const{isPublish}= await req.json()
        if(!userId){
            return new NextResponse("Internal Server Error")
        }
        const tour = await db.tour.update({
            where:{
                id:tourId,
                userId
            },
            data:{
                isPublish:isPublish
            }
        })
        return NextResponse.json(tour);
        

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
    params: {tourId: string};
   }

){
    try {
      const {userId}= auth()
      const {tourId}=params  
      if(!userId){
        return new NextResponse("Unauthorized",)
      }
      const deletePlace= await db.tour.delete({
        where:{
            id: tourId,
        },
      });

      return NextResponse.json(deletePlace)
    } catch (error) {
        console.log("[Delete car id]",error)
        return new NextResponse("internal error")
    }
}