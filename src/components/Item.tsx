// src/components/Item.tsx
import React from 'react';

// Actualiza las props para incluir el enlace
interface ItemProps {
    titulo: string;
    imagenUrl: string;
    linkHref: string; // Se agrega la propiedad del enlace
}

const Item: React.FC<ItemProps> = ({ titulo, imagenUrl, linkHref }) => {
    return (
        // El div principal ahora es un <a>
        <a href={linkHref} className="group relative rounded-xl overflow-hidden block">
            <img
                src={imagenUrl}
                alt={titulo}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-4 left-4 text-2xl w-11/12 text-white">
                <h3 className="font-bold">
                    {titulo}
                </h3>
            </div>
        </a>
    );
};

export default Item;