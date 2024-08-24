"use client";

import { CalendarSelectorProps } from "./CalendarSelector.types";
import * as React from 'react';
import { CalendarIcon, ClockIcon } from "lucide-react";
import { addHours, format, setHours, setMinutes } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function CalendarSelector(props: CalendarSelectorProps) {
    const { setDateSelected, className } = props;
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addHours(new Date(), 5)
    });
    const [fromTime, setFromTime] = useState<string>("00:00");
    const [toTime, setToTime] = useState<string>("23:59");

    useEffect(() => {
        if (date?.from) {
            const [fromHours, fromMinutes] = fromTime.split(":").map(Number);
            const newFrom = setHours(setMinutes(date.from, fromMinutes), fromHours);
    
            const [toHours, toMinutes] = toTime.split(":").map(Number);
            const newTo = date?.to ? setHours(setMinutes(date.to, toMinutes), toHours) : undefined;
    
            setDate({
                from: newFrom,
                to: newTo,
            });
    
            setDateSelected({
                from: newFrom,
                to: newTo
            });
        }
    }, [fromTime, toTime, date, setDateSelected]);

    const calculateHoursBetween = (from: Date, to: Date): number => {
        const oneHour = 60 * 60 * 1000; // Milisegundos en una hora
        const diffInTime = to.getTime() - from.getTime();
        return Math.round(diffInTime / oneHour);
    };

    const hoursBetween = date?.from && date?.to ? calculateHoursBetween(date.from, date.to) : 0;

    return (
        <div className={cn("grid gap-2", className)}>
            {date?.from && date?.to && (
                <p className="mt-4 text-lg text-black">Horas totales: {hoursBetween}</p>
            )}
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <input
                        type="time"
                        value={fromTime}
                        onChange={(e) => setFromTime(e.target.value)}
                        className="border rounded-md px-2 py-1"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <input
                        type="time"
                        value={toTime}
                        onChange={(e) => setToTime(e.target.value)}
                        className="border rounded-md px-2 py-1"
                    />
                </div>
            </div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant="outline"
                        className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y hh:mm a")} - {""}
                                    {format(date.to, "LLL dd, y hh:mm a")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y hh:mm a")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
