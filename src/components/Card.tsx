// src/components/Carta.tsx
import React from 'react';

interface CartaProps {
    titulo: string;
    imagenUrl: string;
    linkHref: string;
}

const Carta: React.FC<CartaProps> = ({ titulo, imagenUrl, linkHref }) => {
    return (
        <a href={linkHref} className="group relative rounded-xl overflow-hidden block">
            <img
                src={imagenUrl}
                alt={titulo}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparentn"></div>

            <div className="absolute bottom-4 left-4 text-2xl w-11/12 text-white">
                <h3 className="font-bold text-2xl">
                    {titulo}
                </h3>
            </div>
        </a>
    );
};

export default Carta;