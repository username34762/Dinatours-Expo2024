import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { placeId: string } }) {
    try {
        const { userId } = auth();
        const placeId = params.placeId;  // Usar la variable directamente sin redeclararla
        const values = await req.json();
        
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }  

        const place = await db.place.update({
            where: {
                id: placeId,
                userId,
            },
            data: {
                ...values,
            },
        });

        return NextResponse.json(place);
    } catch (error) {
        console.log("[PLACE FORM ID]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
