import Image from 'next/image';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { FaStar } from 'react-icons/fa';
import { Button } from '@nextui-org/button';
import { MapPin } from 'lucide-react';
import { NavBar } from '@/components/Shared/NavBar';

type PlaceProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const places = await db.place.findMany({
    select: { id: true },
  });

  return places.map((place) => ({
    id: place.id.toString(),
  }));
}

async function getPlace(id: string) {
  const place = await db.place.findUnique({
    where: { id: String(id) },
  });

  if (!place) {
    notFound();
  }

  return place;
}

export default async function PlacePage({ params }: PlaceProps) {
  const place = await getPlace(params.id);

  const availability = [
    "Public Restrooms",
    "Shops or Kiosks",
    "Trash Cans or Waste Containers",
    "Picnic Areas",
    "Camping Zones",
    "Hiking Trails",
    "Viewpoints",
    "Parking Lots",
    "Information Booths",
    "Fishing Areas",
    "Swimming Areas",
  ];

  const hours = {
    Monday: "8:00 AM - 5:00 PM",
    Tuesday: "8:00 AM - 6:00 PM",
    Wednesday: "Closed",
    Thursday: "8:00 AM - 6:00 PM",
    Friday: "8:00 AM - 6:00 PM",
    Saturday: "8:00 AM - 4:00 PM",
    Sunday: "8:00 AM - 6:00 PM",
  };

  return (
    <>
    <NavBar/>
    <div className="container mx-auto px-6 py-12">
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
       
        <div className="relative col-span-2 h-[300px] md:h-[400px]">
          <Image
            src={place.photo}
            alt={place.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute top-4 right-4">
            <button className="bg-white text-black py-1 px-3 rounded-lg shadow-md">ALL PHOTOS</button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 gap-6">
          <div className="relative h-[145px] md:h-[195px]">
            <Image
              src={place.photo}
              alt="Secondary Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-[145px] md:h-[195px]">
            <Image
              src={place.photo}
              alt="Secondary Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div className="md:col-span-2">
          <h1 className="text-4xl font-semibold mb-4">{place.name}</h1>
          <div className="flex items-center mb-6">
            <FaStar className="text-yellow-500 mr-2" />
            <span className="text-xl font-semibold">{place.rating}</span>
            <span className="text-gray-500 ml-2">(18 Reviews)</span>
          </div>
          <h2 className="text-2xl font-semibold mb-6">About</h2>
          <p className="text-gray-700 leading-relaxed mb-10">{place.description}</p>

          <h3 className="text-xl font-semibold mb-4">Amenities</h3>
          <ul className="list-disc ml-4 text-gray-700 space-y-2">
            {availability.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right Column: Location and Hours */}
        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <p className="flex items-center mb-6">
            <MapPin className="h-4 w-4 mr-2" strokeWidth={1} />
            {place.ubication}
          </p>

          <Button className="w-full py-2 rounded-lg mt-6" variant="ghost">
            Tours Coming Soon!
          </Button>

          <h3 className="text-xl font-semibold mt-10 mb-4">Hours</h3>
          <ul className="text-gray-700 space-y-2">
            {Object.entries(hours).map(([day, hours], index) => (
              <li key={index}>
                <span className="font-semibold">{day}:</span> {hours}
              </li>
            ))}
          </ul>

          <h3 className="text-bold text-3xl text-center mt-8">Tours coming soon!</h3>
        </div>
      </div>
    </div>
    </>
  );
}
