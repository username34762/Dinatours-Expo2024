import { ReactNode } from 'react';

export interface RevealProps {
    children: ReactNode; // Este tipo acepta arrays de elementos, strings, números, etc.
    classname?: string; // Clase opcional
    position: "bottom" | "right"; // Posición restringida a "bottom" o "right"
    delay?: number; // Retraso opcional en la animación
}
