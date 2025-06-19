import Link from "next/link";

export default function FixturePage() {
  const partidos = [
    { fecha: 'Sábado 22/06', hora: '10:00', equipoA: 'Los Halcones', equipoB: 'Tiburones' },
    { fecha: 'Sábado 22/06', hora: '11:00', equipoA: 'Águilas', equipoB: 'Leones' },
    { fecha: 'Domingo 23/06', hora: '10:00', equipoA: 'Los Halcones', equipoB: 'Águilas' },
    { fecha: 'Domingo 23/06', hora: '11:00', equipoA: 'Tiburones', equipoB: 'Leones' },
  ];

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Fixture del Torneo</h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {partidos.map((partido, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-gray-700 mb-2 md:mb-0">
              <strong>{partido.fecha}</strong> – {partido.hora}
            </div>
            <div className="text-lg font-semibold text-blue-600 text-center">
              {partido.equipoA} vs {partido.equipoB}
            </div>
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