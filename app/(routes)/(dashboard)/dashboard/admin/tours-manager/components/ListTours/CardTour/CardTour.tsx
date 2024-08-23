'use client'
import { useEffect, useState } from 'react';
import { CardTourProps } from "./CardTour.type";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";
import { Car, Fuel, Gauge, Gem, Trash, Upload, Users, Wrench, MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { FaStar, FaSuitcase, FaHeart } from 'react-icons/fa';
import { ButtonEditTour } from "./ButtonEditTour/ButtonEditTour";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";

export function CardTour(props: CardTourProps) {
    const { tour } = props;
    const router = useRouter();
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const response = await axios.get(`/api/user/${tour.userId}`);
                setUserName(response.data.name); // Ajusta según la respuesta de tu API
            } catch (error) {
                console.error("Failed to fetch user name", error);
            }
        };

        fetchUserName();
    }, [tour.userId]);

    const deleteTour = async () => {
        try {
            await axios.delete(`/api/tour/${tour.id}`);
            toast({
                title: "Tour deleted"
            });
            router.refresh();
        } catch (error) {
            toast({
                title: "Something went wrong",
                variant: "destructive"
            });
        }
    };

    const handlePublishTour = async (publish: boolean) => {
        try {
            await axios.patch(`/api/tour/${tour.id}`, { isPublish: publish });
            toast({
                title: publish ? "Tour published" : "Tour unpublished"
            });
            router.refresh();
        } catch (error) {
            toast({
                title: "Something went wrong",
                variant: "destructive"
            });
        }
    };

    return (
        <div>
            <div key={tour.id} className="relative p-1 rounded-3xl shadow-md hover:shadow-lg">
                <div className="p-4">
                    <Image src={tour.photo} alt={tour.placeName} width={400} height={600} className="rounded-lg" />
                    {tour.isPublish ? (
                        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-600 rounded-t-lg">
                            Published
                        </p>
                    ) : (
                        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-red-300 rounded-t-lg">
                            Not Published
                        </p>
                    )}

                    <div className="font-bold text-lg mb-1">{tour.ubication}</div>
                    <p className="text-gray-700 text-sm mb-2">{userName || 'Loading...'}</p>

                    <div className="flex items-center">
                        <MapPin className="mb-2 ml-1 mr-1 w-4 h-4" />
                        <span className="text-gray-600 text-sm mb-2">{tour.ubication}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-yellow-500">
                            <span className="text-lg font-semibold">{/* Rating logic here */}</span>
                            <FaStar className="ml-1" />
                        </div>
                        <button className="flex items-center justify-center bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                            GO <FaSuitcase className="ml-1" />
                        </button>
                        <FaHeart className="text-red-500" />
                    </div>
                    <div className="flex justify-between mt-3 gap-x-4">
                        <Button variant="outline" onClick={deleteTour}>
                            Delete
                            <Trash className="w-4 h-4 ml-2" />
                        </Button>
                        <ButtonEditTour tourData={tour} />
                    </div>
                    {tour.isPublish ? (
                        <Button className="w-full mt-3" variant="outline" onClick={() => handlePublishTour(false)}>
                            Unpublish
                        </Button>
                    ) : (
                        <Button className="w-full mt-3" variant="outline" onClick={() => handlePublishTour(true)}>
                            Publish
                            <Upload className="w-4 h-4 ml-2" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
