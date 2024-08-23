import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Toast } from '@/components/ui/toast';
import { Place } from '@prisma/client';
import { toast } from '@/components/ui/use-toast';

interface UseLovedPlacesType {
    lovedItems: Place[];
    addLovedItem: (data: Place) => void;
    removeLovedItem: (id: string) => void;
}

export const useLovedPlaces = create(
    persist<UseLovedPlacesType>(
        (set, get) => ({
            lovedItems: [],
            addLovedItem: (data: Place) => {
                const currentLovedItems = get().lovedItems;
                const existingItem = currentLovedItems.find((item) => item.id === data.id);

                if (existingItem) {
                    return toast({
                        title: "The place has already been selected",
                    });
                }

                set({
                    lovedItems: [...get().lovedItems, data],
                });
                toast({
                    title: "Place added to the list",
                });
            },
            removeLovedItem: (id: string) => {
                set({
                    lovedItems: get().lovedItems.filter((item) => item.id !== id),
                });
                toast({
                    title: "Place has been deleted",
                });
            },
        }),
        {
            name: 'loved-places-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
