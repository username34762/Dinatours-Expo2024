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
import { PlusCircle } from "lucide-react";
import { useState } from "react"; 
import { FormAddPlace } from "./FormAddPlace";

export function ButtonAddPlace(){
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setOpenDialog(true)}>
                    Add new Place
                    <PlusCircle className="ml-2"/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a New Place</DialogTitle>
                    <DialogClose asChild>
                        <Button variant="ghost" className="absolute right-2 top-2" onClick={() => setOpenDialog(false)}>
                            ✕
                        </Button>
                    </DialogClose>
                    <DialogDescription>
                        <FormAddPlace setOpenDialog={setOpenDialog} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
