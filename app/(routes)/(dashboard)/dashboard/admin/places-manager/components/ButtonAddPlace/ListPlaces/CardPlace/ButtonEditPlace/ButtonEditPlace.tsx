"use client"
import { Button } from "@/components/ui/button";
import { ButtonEditPlaceProps } from "./ButtonEditPlace.types";
import { Dialog, DialogContent,DialogDescription,DialogHeader,DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { FormEditPlace } from "../FormEditPlace";


export function ButtonEditPlace( props: ButtonEditPlaceProps){
    const{placeData} = props;
    const [openDialog, setOpenDialog] = useState(false);
    return(
        <Dialog open={openDialog}> 
            <DialogTrigger asChild>
                <Button variant="outline" onClick={()=> setOpenDialog(true)}>
                    Edit 
                    <Pencil className="w-4 h-4 ml-2" />
                 </Button>   
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <FormEditPlace setOpenDialog={setOpenDialog} placeData={placeData} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}