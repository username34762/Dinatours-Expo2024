"use client"
import { Button } from "@/components/ui/button";
import { ButtonEditTourProps } from "./ButtonEditTour.types";
import { Dialog, DialogContent,DialogDescription,DialogHeader,DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { FormEditTour } from "../FormEditTour/FormEditTour";


export function ButtonEditTour( props: ButtonEditTourProps){
    const{tourData} = props;
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
                        <FormEditTour setOpenDialog={setOpenDialog} tourData={tourData} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}