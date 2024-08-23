import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";

export default function FirstBlock() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-0 lg:py-24 items-center overflow-hidden lg:mt-0 lg:pt-12 gap-6">
      <Reveal
        classname="p-6 lg:pl-16 flex flex-col justify-center"
        position="bottom"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Places
          <span className="block text-xl md:text-2xl lg:text-3xl">
            in El Salvador
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-4 lg:mt-6 max-w-md lg:max-w-lg">
         El Salvador is more than just beaches. It's a country full of hidden treasures waiting 
         to be explored. Discover unique places where nature and culture meet. Start your journey and see the real El Salvador
        </p>
      </Reveal>
      <Reveal
        classname="flex justify-center items-center mt-6 lg:mt-0"
        position="right"
      >
        <Image
          src="/images/elsalvador.jpeg"
          alt="Vista panorámica de un parque de diversiones en El Salvador al atardecer"
          height={400}
          width={600}
          priority
          className="rounded-3xl object-cover"
        />
      </Reveal>
    </div>
  );
}
