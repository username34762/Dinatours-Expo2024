"use client"
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose, // Importa DialogClose para cerrar el modal
  } from "@/components/ui/dialog"
import { Plus, PlusCircle } from "lucide-react";
import { useState } from "react"; 
import { FormAddTour } from "../ButtonAddTour/FornAddTour/FormAddTour";

export function ButtonAddTour(){
    const [openDialog, setOpenDialog] = useState(false)
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setOpenDialog(true)}>
                    Add new Tour
                    <PlusCircle className="ml-2"/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a New Tour</DialogTitle>
                    <DialogClose asChild>
                        <Button variant="ghost" className="absolute right-2 top-2" onClick={() => setOpenDialog(false)}>
                            ✕
                        </Button>
                    </DialogClose>
                    <DialogDescription>
                        <FormAddTour setOpenDialog={setOpenDialog}/>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
