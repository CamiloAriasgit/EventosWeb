// src/Town.tsx
import React from 'react';
import Item from './Item';
import Carta from './Carta';
import VillaFeaturesSection from './VillaFeaturesSection';

const Town: React.FC = () => {
    return (
        <div className="bg-black min-h-screen">
            <div className="container mx-auto px-2 pt-14">
                {/* Contenedor principal que se vuelve una cuadrícula de 2 columnas en pantallas grandes */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {/* Carta a la izquierda */}
                   
                    
                    {/* Cuadrícula de ítems a la derecha */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
                        <Item
                            titulo="Villas y fincas"
                            imagenUrl="https://thompsonteam.ca/media/6f6a6b75-742a-41c5-a14a-0bdbe244b932/ZXsjDA/Donna%20Thompson/Exclusive%20Listings/COSTA%20RICA%20LISTING%201%20-%20Atenas/PRIMARY%20Front.jpg"
                            linkHref="/fincas" // Agrega la prop linkHref
                        />
                        <Item
                            titulo="Lugares"
                            imagenUrl="https://puebliandoporantioquia.com.co/wp-content/uploads/2019/05/San-Jeronimo-Antioquia-La-Gruta-2.jpg"
                            linkHref="/lugares" // Agrega la prop linkHref
                        />
                        <Item
                            titulo="Arte"
                            imagenUrl="https://www.sanjeronimo-antioquia.gov.co/NuestraAlcaldia/SaladePrensa/PublishingImages/pars.jpg"
                            linkHref="/arte" // Agrega la prop linkHref
                        />
                        <Item
                            titulo="Eventos"
                            imagenUrl="https://tse3.mm.bing.net/th/id/OIP.PEuAaKw8MwiXQgZRTSp6CwHaG0?w=950&h=875&rs=1&pid=ImgDetMain&o=7&rm=3"
                            linkHref="/historia" // Agrega la prop linkHref
                        />
                    </div>
                </div>
            </div>
            <VillaFeaturesSection />
        </div>
    );
};

export default Town;