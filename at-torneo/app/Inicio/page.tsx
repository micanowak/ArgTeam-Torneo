'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TorneoPage() {
  const secciones = [
    { titulo: 'Fixture', ruta: '/Pags/Page1' },
    { titulo: 'Resultados', ruta: '/Pags/Page2' },
    { titulo: 'Tabla de Posiciones', ruta: '/Pags/Page3' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-6">
      {/* Encabezado */}
      <div className="flex items-center gap-4 mb-8">
        <Image src="/logo-at.png" alt="Logo ArgTeam" width={60} height={60} />
        <h1 className="text-2xl font-bold text-blue-800">Torneo ArgTeam</h1>
      </div>

      {/* Título */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Bienvenido al Panel del Torneo 🏆
      </h2>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {secciones.map((sec) => (
          <Link key={sec.ruta} href={sec.ruta}>
            <div className="bg-white hover:bg-blue-100 transition-all duration-200 shadow-md rounded-xl p-6 text-center cursor-pointer">
              <h3 className="text-xl font-semibold text-blue-700">{sec.titulo}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
