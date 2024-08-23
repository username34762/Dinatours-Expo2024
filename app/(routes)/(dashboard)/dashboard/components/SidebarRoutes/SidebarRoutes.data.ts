import { Calendar, Map, Heart, BarChartHorizontalBig } from "lucide-react";

export const dataGeneralSidebar =[
    { 
    icon: Map,
    label: "Places",
    href: "/dashboard"
    },
    { 
    icon: Calendar,
    label: "Tours",
    href: "/tours"
    },
    { 
    icon: Heart,
    label: "Loved places",
    href: "/loved-places"
    },
]
export const dataGeneralAdmin=[
    {
        icon: BarChartHorizontalBig,
        label: "Manage your places",
        href: "/dashboard/admin/places-manager"
    },
    {
        icon: BarChartHorizontalBig,
        label: "Manage your tours",
        href: "/dashboard/admin/tours-manager"
    }
]