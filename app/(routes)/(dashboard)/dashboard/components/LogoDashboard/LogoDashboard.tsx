import Link from "next/link";
import Image from "next/image";

export function LogoDashboard(){
    return (
        <Link href="/" className="flex items-center h-20 gap-2 border-b cursor-pointer min-h-20 px-6">
            <Image src='/logo1.png' alt='logo' width={225} height={79} priority/>
            
        </Link>
    )
}