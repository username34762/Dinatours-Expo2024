import Link from "next/link";
import { cn } from "@/lib/utils";
import { SidebarItemProps } from "./SidebarItem.types";
import { usePathname } from "next/navigation";


export function SidebarItem(props: SidebarItemProps){
    const {item} = props;
    const {href,icon: Icon,label}= item;
    const pathname = usePathname()
    const activePath = pathname === href;

    return <Link className={cn(`flex gap-x2 mt-2 text-slate-700 text-sm items-center hover:bg-slate-300 p-2 rounded-lg cursor-pointer`, activePath && "bg-slate-400")} href={href}>
        <Icon className="h-5 w-5" strokeWidth={1}/>
        {label}</Link>
}