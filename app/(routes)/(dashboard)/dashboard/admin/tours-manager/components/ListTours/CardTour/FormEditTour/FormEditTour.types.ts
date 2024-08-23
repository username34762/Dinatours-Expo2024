import { Tour } from "@prisma/client"
import { Dispatch, SetStateAction } from "react";

export type FormEditTourProps = {
    tourData : Tour;
    setOpenDialog: Dispatch<SetStateAction<boolean>>;
}