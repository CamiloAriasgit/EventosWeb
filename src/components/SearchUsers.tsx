import { useState, useEffect } from 'react';

// --- Definición de tipos ---
interface Usuario {
  id: string;
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
}

interface EstadoCarga {
  cargando: boolean;
  error: string | null;
  completado: boolean;
}
// ---------------------------

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [estado, setEstado] = useState<EstadoCarga>({
    cargando: false,
    error: null,
    completado: false
  });

  useEffect(() => {
    const obtenerUsuarios = async () => {
      setEstado({ cargando: true, error: null, completado: false });

      try {
        const respuesta = await fetch('https://playground.mockoon.com/users');

        if (!respuesta.ok) {
          throw new Error(`Error: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        setUsuarios(datos);
        setEstado({ cargando: false, error: null, completado: true });
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        setEstado({
          cargando: false,
          error: error instanceof Error ? error.message : 'Error desconocido',
          completado: true
        });
      }
    };

    obtenerUsuarios();
  }, []);

  return (
    <div className="container mx-auto p-4 sm:p-6 bg-black rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">
        Lista de Usuarios
      </h2>

      {estado.cargando && (
        <div className="flex justify-center items-center py-8">
          <div className="w-8 h-8 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
          <p className="ml-4 text-gray-600 font-medium">Cargando usuarios...</p>
        </div>
      )}

      {estado.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold mr-2">¡Error!</strong>
          <span className="block sm:inline">No se pudo cargar la lista de usuarios.</span>
          <p className="mt-1 text-sm">{estado.error}</p>
        </div>
      )}

      {estado.completado && !estado.error && usuarios.length === 0 && (
        <p className="text-center text-gray-500 py-8">No se encontraron usuarios.</p>
      )}

      <ul className="grid gap-4">
        {usuarios.map(usuario => (
          <li
            key={usuario.id}
            className={`
              p-4 rounded-xl shadow-md transition-all duration-300 transform
              hover:scale-105 hover:shadow-lg
              ${usuario.isActive ? 'bg-emerald-900' : 'bg-neutral-900'}
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <strong className="text-lg font-semibold text-gray-200">{usuario.name}</strong>
              <span
                className={`
                  text-sm font-medium py-1 px-3 rounded-full
                  ${usuario.isActive ? 'bg-emerald-500 text-emerald-200' : 'bg-neutral-500 text-neutral-200'}
                `}
              >
                {usuario.isActive ? 'Activo' : 'Inactivo'}
              </span>
            </div>
            <div className="text-gray-300 text-sm">
              <p className="flex items-center mb-1">
                <svg className="w-4 h-4 mr-2 text-gray-200" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <span className="truncate">{usuario.email}</span>
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                <span className="truncate">{usuario.phone}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;