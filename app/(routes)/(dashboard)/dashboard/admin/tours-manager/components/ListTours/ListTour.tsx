import { CardTour } from "./CardTour";
import { ListTourProps } from "./ListTour.types";

export function ListTours(props: ListTourProps) {
    const { tours } = props;

    return (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {tours.map((tour) => {
                return (
                    <CardTour tour={tour} key={tour.id} />
                );
            })}
        </div>
    );
}
