// src/components/VillaFeaturesSection.tsx
import React from 'react';
import FeatureCard from './FeatureCard';
import Register from './Register';
import EventoPublico from './EventoPublico';
import CategoryButton from './CategoryButton';

const VillaFeaturesSection: React.FC = () => {
    return (
        <div className="bg-black pt-14 font-sans">
            <div className="container mx-auto px-3 lg:px-">
                <h2 className="text-center text-xl font-semibold text-emerald-500">
                    ¡Arma tu evento sin límites!
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-2xl tracking-tight text-white sm:text-3xl">
                    Descubre el lugar que mejor se acomoda a tu evento.
                </p>

                <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <FeatureCard
                            title="Espacios para eventos en Antioquia."
                            description={
                                <>
                                    Este también es tu espacio, ¡Utilízalo con confianza!
                                    <br /><br />
                                    <span className='text-emerald-500'>✔</span> ¿Tienes que celebrar un cumpleaños, una boda, un evento empresarial o una reunión social? ¡Estás en el sitio web indicado!
                                    <br /><br />
                                    ✔ ¿Eres una entidad logística que arma eventos? ¡Encuentra el espacio que buscas en nuestras categorías!
                                    <br /><br />
                                    ✔ ¿Tienes un inmueble o espacio sin usar y sin generar ingresos? ¡Esta es tu oportunidad para <a href="/register" className="text-emerald-500 hover:underline">registrarte</a>!
                                </>
                            }
                            icon="https://assets.entrepreneur.com/content/3x2/2000/1701107803-latin-america-business-expansion-1123-g1171615860.jpg"
                            size="large"
                        />
                    </div>

                    <FeatureCard
                        title="¿Qué tipo de espacio buscas?"
                        description="Encuentra el espacio que tu evento privado se merece en nuestra gama de categorías."
                        icon="https://www.valenzhealth.com/wp-content/uploads/2020/10/Professional-800x800-L.png"
                    >
                        <CategoryButton text="Villas y Fincas" linkHref="/espacios/villas-fincas" />
                        <CategoryButton text="Salones de Eventos" linkHref="/espacios/salones-eventos" />
                        <CategoryButton text="Hoteles y Resorts" linkHref="/espacios/hoteles-resorts" />
                        <CategoryButton text="Restaurantes y Bares" linkHref="/espacios/restaurantes-bares" />
                        <CategoryButton text="Mansiones y Casas de Lujo" linkHref="/espacios/mansiones-lujo" />
                        <CategoryButton text="Espacios Corporativos" linkHref="/espacios/corporativos" />
                        <CategoryButton text="Lugares para Espectáculos" linkHref="/espacios/espectaculos" />
                        <CategoryButton text="Espacios al Aire Libre" linkHref="/espacios/aire-libre" />
                    </FeatureCard>

                    <FeatureCard
                        title="Participa en eventos de público abierto."
                        description="Explora y únete a eventos disponibles en los espacios que nuestros establecimientos ofrecen."
                        icon="https://www.greanpipe.com/wp-content/uploads/2019/11/dealer-768x707.png"
                    >
                        <EventoPublico text="Eventos Sociales" linkHref="/eventos/sociales" />
                        <EventoPublico text="Eventos Corporativos" linkHref="/eventos/corporativos" />
                        <EventoPublico text="Eventos Culturales" linkHref="/eventos/culturales" />
                        <EventoPublico text="Eventos Académicos" linkHref="/eventos/academicos" />
                        <EventoPublico text="Fiestas" linkHref="/eventos/fiestas" />
                        <EventoPublico text="Bodas" linkHref="/eventos/bodas" />
                    </FeatureCard>
                </div>
            </div>
        </div>
    );
};

export default VillaFeaturesSection;