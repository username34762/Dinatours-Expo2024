"use client"
import { useLovedPlaces } from "@/hooks/use-loved-places"
import { Place } from "@prisma/client"
import Image from "next/image"
import { FaStar, FaSuitcase, FaHeart } from 'react-icons/fa';
import { MapPin ,Heart} from "lucide-react";



export default function ListLovedPlaces(){
    const {lovedItems,removeLovedItem}= useLovedPlaces()

    return <>
    {lovedItems.length===0?(
        <h2>Your list is empty</h2>
    ):(
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {lovedItems.map((place: Place)=>{
                const {photo,name,description,ubication,rating,id} = place;

                return(
                    <div key={id} className="p-1 rounded-3xl shadow-md hover:shadow-lg">
                    <Image src={photo} alt={name} width={400} height={600} className="rounded-3xl"></Image>
                    <div className="p-3">
                        <div className="flex flex-col mb-3 gap-x-4">
                            <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                            <p>{description}</p>
                        </div>
                        <p className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 " strokeWidth={1}/>
                            {ubication}
                        </p>
                        <div className="flex items-center justify-between">
                         <div className="flex items-center text-yellow-500">
                            <span className="text-lg font-semibold">{place.rating}</span>
                            <FaStar className="ml-1" />
                        </div>
                            <button className="flex items-center justify-center bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                            GO <FaSuitcase className="ml-1" />
                            </button>
                            <Heart className="mt-2 cursor-pointer fill-black"  onClick={ ()=>removeLovedItem(place.id)} />
                         </div>
                    </div>
                </div>
                )
            })}
        </div>
    )

}
    </>
}