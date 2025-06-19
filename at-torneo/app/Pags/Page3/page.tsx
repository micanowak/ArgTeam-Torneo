import Link from "next/link";

export default function EquiposPage() {
  const zonas = {
    'Zona A': ['Los Halcones', 'Tiburones', 'Pumas', 'Cóndores'],
    'Zona B': ['Águilas', 'Leones', 'Panteras', 'Zorros'],
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Equipos del Torneo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {Object.entries(zonas).map(([zona, equipos]) => (
          <div key={zona} className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">{zona}</h2>
            <ul className="space-y-2">
              {equipos.map((equipo, i) => (
                <li
                  key={i}
                  className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg shadow-sm"
                >
                  {equipo}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/Inicio"
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded"
        >
          ← Volver al Menú
        </Link>
      </div>
    </main>
  );
}
