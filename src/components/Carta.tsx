// src/components/Carta.tsx
import React from 'react';
import Pueblo from './Pueblo';
import Reservar from './Reservar';

interface CartaProps {
    titulo: string;
    description: string; // Nueva prop para la descripción
    imagenUrl: string;
    linkHref: string;
}

const Carta: React.FC<CartaProps> = ({ titulo, description, imagenUrl, linkHref }) => {
    return (
        <div className="bg-neutral-950 rounded-xl overflow-hidden shadow-lg border border-neutral-900">
            {/* Imagen en la parte superior de la carta */}
            <img
                src={imagenUrl}
                alt={titulo}
                className="w-full h-48 object-cover"
            />

            {/* Contenedor del texto y el botón */}
            <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{titulo}</h3>
                <p className="text-sm text-neutral-400 mb-4">{description}</p>

                <div className='flex gap-2'>
                    <Pueblo linkHref={linkHref} />
                    <Reservar text="¡Reservar ahora!" linkHref={linkHref} />
                </div>
            </div>
        </div>
    );
};

export default Carta;