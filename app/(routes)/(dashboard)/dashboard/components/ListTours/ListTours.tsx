"use client";
import { Tour } from "@prisma/client";
import { ListToursProps } from "./ListTours.types";
import Image from "next/image";
import { FaStar, FaSuitcase, FaHeart } from 'react-icons/fa';
import { MapPin, Heart, CalendarClock, CalendarX } from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { useUser } from "@clerk/nextjs";

export function ListTours(props: ListToursProps) {
    const { tours } = props;
    const { user } = useUser();

    return (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {tours.map((tour: Tour) => {
                const { photo, userId, tourEndDate, tourDate, placeName, id, ubication } = tour;
                return (
                    <div key={id} className="p-1 rounded-3xl shadow-md hover:shadow-lg">
                        <Image src={photo} alt={placeName} width={400} height={600} className="rounded-3xl" />
                        <div className="p-3">
                            <div className="flex flex-col mb-3 gap-x-4">
                                <p className="text-xl min-h-16 lg:min-h-fit">{placeName}</p>
                                {user && (
                                    <p className="text-sm text-gray-700">
                                        Organizado por: {user.fullName}
                                    </p>
                                )}
                            </div>
                            <p className="flex items-center">
                                <MapPin className="h-5 w-5 mr-2 text-purple-900" strokeWidth={1} />
                                {ubication}
                            </p>
                            <p className="flex items-center">
                                <CalendarClock className="h-5 w-5 mr-2 text-purple-900" strokeWidth={1} />
                                {tourDate}
                            </p>
                            <p className="flex items-center">
                                <CalendarX className="h-5 w-5 mr-2 text-purple-900" strokeWidth={1} />
                                {tourEndDate}
                            </p>
                            <div className="flex items-center justify-center gap-x-4">
                                <ModalAddReservation tour={tour} />
                                <Heart className="mt-2 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
