// src/App.tsx
import React from 'react';
import Carta from './Carta';

const App: React.FC = () => {
    return (
        <div className="bg-black py-20 font-sans">
            <div className="container mx-auto px-3">
                <div className='text-center mb-8 text-white text-2xl font-semibold'>
                    <h1>¡Encuentra el lugar que tu <span className='text-emerald-500 font-bold'>evento</span> merece!</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {/* Todas las cartas ahora tienen la misma estructura de diseño */}
                    <Carta
                        titulo="Mansión Lujosa"
                        description="Tu celebración merece una experiencia de lujo."
                        imagenUrl="https://i.pinimg.com/originals/ef/96/38/ef9638958ddbc9b6897a0355995dcf7c.jpg"
                        linkHref="/informacion"
                    />
                    <Carta
                        titulo="Salón de conferencias"
                        description="El lugar ideal para exponer ideas."
                        imagenUrl="https://image-tc.galaxy.tf/wijpeg-a0qm9gdlf0mh2qupji0fd1dev/meeting-room-6-result_wide.jpg?crop=0%2C100%2C1920%2C1080&width=2100"
                        linkHref="/informacion"
                    />
                    <Carta
                        titulo="Coliseo Live"
                        description="El espacio perfecto para grandes eventos y espectáculos."
                        imagenUrl="https://laud.udistrital.edu.co/sites/default/files/imagen-noticia/2022-06/Coliseo%20Live.jpg"
                        linkHref="/informacion"
                    />
                    <Carta
                        titulo="Finca para Eventos"
                        description="Un entorno natural para tus celebraciones."
                        imagenUrl="https://thompsonteam.ca/media/6f6a6b75-742a-41c5-a14a-0bdbe244b932/ZXsjDA/Donna%20Thompson/Exclusive%20Listings/COSTA%20RICA%20LISTING%201%20-%20Atenas/PRIMARY%20Front.jpg"
                        linkHref="/informacion"
                    />
                </div>
            </div>
        </div>
    );
};

export default App;