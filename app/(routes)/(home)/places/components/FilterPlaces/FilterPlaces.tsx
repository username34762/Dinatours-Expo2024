
import * as React from 'react'
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from '@radix-ui/react-select'
import { FilterPlacesProps } from './FilterPlaces.types'
import { Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
export function FilterPlaces(props: FilterPlacesProps){
    const {clearFilters, setFilters} = props;
    const handleFilter= (filter:string,value: string)=>{
        setFilters(filter,value)
    }

    return (
        <div className='mt-5 mb-8 gap-x-4'>
            <Select onValueChange={(value) => handleFilter("rating", value)}>
    <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder="Rating" />
    </SelectTrigger>
    <SelectContent className='bg-white rounded-md'>
        <SelectGroup>
            <SelectLabel>Rating</SelectLabel>
            <SelectItem value='4.1'>4.1</SelectItem>
            <SelectItem value='4.2'>4.2</SelectItem>
            <SelectItem value='4.3'>4.3</SelectItem>
            <SelectItem value='4.4'>4.4</SelectItem>
            <SelectItem value='4.5'>4.5</SelectItem>
            <SelectItem value='4.6'>4.6</SelectItem>
            <SelectItem value='4.7'>4.7</SelectItem>
            <SelectItem value='4.8'>4.8</SelectItem>
            <SelectItem value='4.9'>4.9</SelectItem>
            <SelectItem value='5'>5</SelectItem>
        </SelectGroup>
    </SelectContent>
</Select>
            <Button onClick={clearFilters}>Remove Filters<Trash className='w-4 h-4 ml-2'/></Button>
        </div>
    )
}