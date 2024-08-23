'use client'
import { CardPlaceProps } from "./CardPlace.type"
import { Button } from "@/components/ui/button"
import { Toast } from "@/components/ui/toast"
import { Car, Fuel,Gauge,Gem,Trash,Upload,Users,Wrench ,MapPin} from "lucide-react"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { FaStar, FaSuitcase, FaHeart } from 'react-icons/fa'; 
import { ButtonEditPlace } from "./ButtonEditPlace"
import { toast } from "@/components/ui/use-toast"
import axios, { Axios } from "axios"



export function CardPlace(props: CardPlaceProps){
    const {place} = props
    const router = useRouter();
    
    const deletePlace = async ()=>{
      try {
        await axios.delete(`/api/place/${place.id}`)
        toast({
          title:"Place deleted"
        });
        router.refresh();
      } catch (error) {
        toast({
          title: "something went wrong",
          variant: "destructive"
        })
      }
    }
    const handerPublishPlace = async(publish:boolean)=>{
      try {
        await axios.patch(`/api/place/${place.id}`, {isPublish:publish});
        if(publish){
          toast({
            title:"Car published"
          })
        } else{
          toast({
            title:"Car unpublish"
          })
        }
        router.refresh();
        
      } catch (error) {
        toast({
          title: "somethin went wrong",
          variant: "destructive"
        })
      }
    }

    return ( 
        
        <div >
        
        
        <div key={place.id} className=" relative p-1  rounded-3xl  shadow-md hover:shadow-lg">
        
        <div className="p-4">
        <Image src={place.photo} alt={place.name} width={400} height={600} className="rounded-lg" />
        {place.isPublish? (
            <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-600 rounded-t-lg">
                Published</p>
        ):( 
            <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-red-300 rounded-t-lg">
                Not Published</p>
        ) }

          <div className="font-bold text-lg mb-1">{place.name}</div>
          <p className="text-gray-700 text-sm mb-2">{place.description}</p>
          
          <div className="flex items-center">
          <MapPin className="mb-2 ml-1 mr-1 w-4 h-4" />
          <span className=" text-gray-600 text-sm mb-2">{place.ubication}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-yellow-500">
              <span className="text-lg font-semibold">{place.rating}</span>
              <FaStar className="ml-1" />
            </div>
            <button className="flex items-center justify-center bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
              GO <FaSuitcase className="ml-1" />
            </button>
            <FaHeart className="text-red-500" />
          </div>
          <div className="flex justify-between  mt-3 gap-x-4">
            <Button variant="outline" onClick={deletePlace}>
                Delete 
                <Trash className="w-4 h-4 ml-2"/>
            </Button>
            <ButtonEditPlace placeData={place}/>
          </div>
        {place.isPublish? (
            <Button className="w-full mt-3" variant="outline" onClick={()=>handerPublishPlace(false)}>
                Unpublish
            </Button>
        ) : (
            <Button className="w-full mt-3" variant="outline" onClick={()=>handerPublishPlace(true)}>
                Publish
                <Upload className="w-4 h-4 ml-2"/>
            </Button>
        )
    
    }

        </div>
      </div>

        
        
        </div>
        
    );

    }
    