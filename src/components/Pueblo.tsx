// src/components/Carta.tsx
import React from 'react';
import Carta from "../components/Carta";


interface PuebloProps {
    linkHref: string;
}

const Pueblo: React.FC<PuebloProps> = ({ linkHref }) => {
    return (
        <div>
            <a href={linkHref} className="inline-block bg-neutral-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-neutral-800 transition-color">
                Ver más
            </a>
        </div>
    );
};

export default Pueblo;