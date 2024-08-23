import { Place } from "@prisma/client"
import { Dispatch, SetStateAction } from "react";

export type FormEditPlaceProps = {
    placeData : Place;
    setOpenDialog: Dispatch<SetStateAction<boolean>>;
}