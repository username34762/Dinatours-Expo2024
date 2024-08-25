import { NavBar } from "@/components/Shared/NavBar";
import { NavbarDashboard } from "./(routes)/(dashboard)/dashboard/components/NavbarDashboard";
import FirstBlock from "./(routes)/(home)/components/FirstBlock/FirstBlock";
import { SliderBrands } from "./(routes)/(home)/components/SliderBrands";

import { OurPlacesCategories } from "./(routes)/(home)/components/OurPlacesCategories";
import TravelToday from "./(routes)/(home)/components/TravelToday/TravelToday"



export default function Home() {
  return (
     <div>
      <NavBar/>
      <FirstBlock/>
      
      <SliderBrands/>
      
      
      <OurPlacesCategories/>
      
      <TravelToday/>
     
      
    </div>
  );
}
