// src/components/Reservar.tsx
import React from 'react';

// REMOVED: The import line that caused the error
// import Register from './Register';

interface ReservarProps {
    text: string; // Changed 'String' to 'text' for clarity
    linkHref: string;
}

const Reservar: React.FC<ReservarProps> = ({ text, linkHref }) => {
    return (
        <div>
            <a href={linkHref} className="inline-block bg-emerald-950 text-emerald-400 border-1 border-emerald-500 px-4 py-2 rounded text-sm font-normal hover:bg-emerald-900 transition-colors duration-300">
                {text}
            </a>
        </div>
    );
};

export default Reservar;