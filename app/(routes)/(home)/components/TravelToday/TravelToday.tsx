import { Reveal } from "@/components/Shared/Reveal"
import { Button } from "@nextui-org/button"
import Image from "next/image"
import Link from "next/link"

export default function TavelToday(){
    return(
        <div className="p-6 lg:my-32 max-w-7xl mx-auto">
            <div className="bg-[url('/images/background.jpg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative">
            <div className="lg:flex gap-x-6">
                <div>
                    <h3 className="text-4xl text-white">Travel to your favorite place TODAY</h3>
                    <p className="text-white text-xl my-5">Register and explore the best places of El Salvador</p>
                    <Link href="/sign-up">
                    <Button variant='ghost' size="lg" className="text-white">Register here</Button>
                    </Link>
                </div>
                <Reveal classname="lg:absolute lg:-right-31 top-5" position="bottom">
                <Image src="/images/image9.png" alt="Place" width={550} height={250}/>
                </Reveal>
            </div>
            </div>
                        
        </div>
    )
}