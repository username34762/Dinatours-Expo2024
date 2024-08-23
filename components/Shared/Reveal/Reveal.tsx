"use client";
import { motion, useAnimation, useInView } from 'framer-motion';
import { RevealProps } from "./Reveal.types";
import { useEffect, useRef } from 'react';

export const fadeIN = (position: string, delay?: number) => {
    return {
        visible: {
            y: position === "bottom" ? 80 : 0,
            x: position === "right" ? 80 : 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: delay ? delay : 0.5,
                ease: [0.25, 0.25, 0.75, 0.75], // Asegúrate de tener cuatro valores aquí
            },
        },
        hidden: {
            y: position === "bottom" ? -80 : 0,
            x: position === "right" ? 80 : 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: delay ? delay : 0.5,
                ease: [0.25, 0.25, 0.75, 0.75], // Asegúrate de tener cuatro valores aquí
            },
        },
    };
};

export function Reveal(props: RevealProps) {
    const { delay, classname, position, children } = props;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <div ref={ref}>
            <motion.div className={classname} variants={fadeIN(position,delay)} initial="hidden" animate={mainControls} exit="hidden" transition={{
                duration: 0.5,
                delay:0.5,
            }}>
                {children}
            </motion.div>
        </div>
    );
}
