import { Button } from "@/components/ui/button";
import { ModalAddReservationProps } from "./ModalAddReservation.types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Tour } from "@prisma/client";
import { CalendarSelector } from "./CalendarSelector";
import { useState } from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
  

export function ModalAddReservation(props: ModalAddReservationProps){
   const {tour} = props;
   const [dateSelected,setDateSelected]=useState<{
    from: Date | undefined,
    to:Date | undefined
   }>({
    from: new Date(),
    to: addDays(new Date(),5)
   })
  const onReserveTour = async (tour: Tour, dateSelected: DateRange) =>{};

    return(
        <AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline" className="w-full mt-3">
        Add my reservation
    </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Select the date</AlertDialogTitle>
      <AlertDialogDescription>
        <CalendarSelector setDateSelected={setDateSelected} />
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=> onReserveTour(tour,dateSelected)}>Add reservation</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    )
}