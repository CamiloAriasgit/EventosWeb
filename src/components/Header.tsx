import React, { useState } from 'react';
import Register from './Register';

// Define las props para el componente Header
interface HeaderProps {
  currentPath: string;
}

const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Nosotros', href: '/acerca-de' },
  { name: 'Contacto', href: '/contacto' },
];

const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black fixed top-0 left-0 right-0 z-50 shadow-lg font-sans">
      <nav className="container mx-auto px-3 py-1 flex justify-between items-center" role="navigation" aria-label="Navegación Principal">
        {/* Logo o Nombre de la Marca */}
        <a href="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-emerald-500 tracking-wider transition-transform transform hover:scale-105 duration-300">
          <span className=''>EVENT</span><span className='text-white'>IN</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-black to-[#0000ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>

        {/* Menú de Escritorio */}
        <ul className="hidden md:flex space-x-8 items-center">
          {links.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-base transition-colors duration-300 relative group
                  ${currentPath === link.href ? 'text-emerald-500' : 'text-neutral-400 hover:text-neutral-300'}`
                }
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-950 to-[#4b764c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </a>
            </li>
          ))}
          <Register linkHref="/register" text='Registra tu inmueble' />
        </ul>

        {/* Botón del menú móvil (hamburguesa) */}
        <button
          className="md:hidden text-gray-300 p-2 rounded hover:bg-neutral-950 transition-all duration-200"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menú Móvil */}
      <div
        className={`md:hidden bg-black absolute top-full left-0 w-full shadow-lg transition-all duration-300 ease-in-out transform ${menuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 -translate-y-2'
          } origin-top`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          {links.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-lg transition-colors duration-200 block w-full text-center
                  ${currentPath === link.href ? 'text-emerald-500' : 'text-neutral-400 hover:text-white'}`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-4">
          </li>
          <Register linkHref="/register" text='Registra tu inmueble' />
        </ul>
      </div>
    </header>
  );
};

export default Header;