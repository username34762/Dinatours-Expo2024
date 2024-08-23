import { Button } from "@nextui-org/button";
import { MoveRight } from "lucide-react";
import { categoryOurPlaces, dataFirstBlockOurCategories, dataSecondBlockOurCategories } from "./OurPlacesCategories.data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function OurPlacesCategories() {
  return (
    <div className="max-w-6xl mx-auto text-center py-12 lg:py-24 px-6">
      <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold">Our Categories</h3>
      <p className="text-base md:text-lg lg:text-xl mt-2 lg:mt-5 text-center max-w-3xl mx-auto mb-5 lg:mb-10">
        These are our excellent categories
      </p>
      <div className="flex flex-wrap gap-4 items-center justify-center mb-5">
        {categoryOurPlaces.map(({ name, active }) => (
          <div
            key={name}
            className={cn("rounded-xl py-2 px-4 text-base md:text-lg", active ? 'bg-black text-white' : 'bg-slate-100')}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {dataFirstBlockOurCategories.map(({ url }) => (
            <div key={url} className="overflow-hidden rounded-xl">
              <Image
                src={`/images/${url}`}
                alt="Place"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {dataSecondBlockOurCategories.map(({ url }) => (
            <div key={url} className="overflow-hidden rounded-xl">
              <Image
                src={`/images/${url}`}
                alt="Place"
                width={400}
                height={300}
                className="w-full h-auto object-cover aspect-[3/2]"
              />
            </div>
          ))}
        </div>
      </div>
      <Link href="/places">
        <Button variant="ghost" className="rounded-xl p-4 md:p-6 text-base md:text-lg mt-5">
          Show all places
          <MoveRight className="ml-2" />
        </Button>
      </Link>
    </div>
  );
}
