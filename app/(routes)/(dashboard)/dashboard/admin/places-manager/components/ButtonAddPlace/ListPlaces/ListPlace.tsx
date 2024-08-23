import { CardPlace } from "./CardPlace";
import { ListPlaceProps } from "./ListPlace.types";

export function ListPlaces(props: ListPlaceProps){
   const {places} = props;
   return(
    <div className="grid grid-cols-2 gap-6 my-4 lg:grid-cols-4">
        {
            places.map((place)=>(
                <CardPlace place={place} key={place.id}/>
            ))
        }
    </div>
   )
}