"use client"
import  {FiltersAndListPlacesProps} from './FiltersAndListPlaces.types'
import { Place } from '@prisma/client'
import { useEffect, useState } from 'react'
import { ListPlaces } from '../../ListPlaces'
import { FilterPlaces } from '../../FilterPlaces'

export function FiltersAndListPlaces(props: FiltersAndListPlacesProps){
    const {places} = props
    const [filteredPlaces, setFilteredPlaces]= useState<Place[]>()
    const [filters, setFilters] = useState({
        rating:""
    })
    useEffect(()=>{
        let filtered = places
        if(filters.rating){
            filtered = filtered.filter((place)=>place.rating.toLowerCase().includes(filters.rating.toLowerCase()))
        }
        setFilteredPlaces(filtered);
    },[filters,places]
) 
const handleFilterChange = (filterName: string, filterValue:string)=>{
    setFilters((prevFilters)=>({
        ...prevFilters,[filterName]: filterValue
    }))
}
const clearFilters = ()=>{
    setFilters({
        rating: "",
    })
}

    return(
        <div>
        <FilterPlaces setFilters={handleFilterChange} clearFilters={clearFilters}/>
        <ListPlaces places={filteredPlaces}/>
        </div>
        )

}