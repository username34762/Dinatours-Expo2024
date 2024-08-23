import { Skeleton } from "@/components/ui/skeleton";
export function SkeletonPlaces(){
    const numberItems = 8;
    return(
        <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
            {[...Array(numberItems)].map((_, index)=>(
                <div key={index}>
                    <Skeleton className="h-[200px] w-full rounded-xl" />
                    <Skeleton className="h-4 w-full mt-5" />
                    <Skeleton className="h-4 w-full mt-5" />
                    <Skeleton className="h-4 w-full mt-5" />s
                </div>
            ))}
        </div>
    )
}