// src/components/Footer.jsx
import React from 'react';
// Importamos los iconos que necesitas de la librería React Icons
// Puedes elegir el set que prefieras, por ejemplo, los de Material Design (Md)
import { MdHome, MdCategory, MdPeople } from 'react-icons/md';

export default function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-neutral-950 text-white p-4 shadow-lg z-50">
      <ul className="flex justify-around">
        <li>
          <a href="#home" className="flex flex-col items-center text-white hover:text-gray-300">
            {/* Ícono de Home */}
            <MdHome className="w-6 h-6 mb-1" />
            <span className="text-xs">Inicio</span>
          </a>
        </li>
        <li>
          <a href="#categoria" className="flex flex-col items-center text-white hover:text-gray-300">
            {/* Ícono de Categoría */}
            <MdCategory className="w-6 h-6 mb-1" />
            <span className="text-xs">Categoría</span>
          </a>
        </li>
        <li>
          <a href="#comunidad" className="flex flex-col items-center text-white hover:text-gray-300">
            {/* Ícono de Comunidad */}
            <MdPeople className="w-6 h-6 mb-1" />
            <span className="text-xs">Comunidad</span>
          </a>
        </li>
        {/* Aquí puedes añadir más enlaces si lo necesitas */}
      </ul>
    </nav>
  );
}