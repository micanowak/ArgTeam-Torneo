import Link from "next/link";

export default function TablaPage() {
  const posiciones = [
    { equipo: 'Los Halcones', pts: 6, pj: 2, pg: 2, pe: 0, pp: 0, gf: 5, gc: 1 },
    { equipo: 'Águilas', pts: 3, pj: 2, pg: 1, pe: 0, pp: 1, gf: 3, gc: 2 },
    { equipo: 'Tiburones', pts: 1, pj: 2, pg: 0, pe: 1, pp: 1, gf: 2, gc: 4 },
    { equipo: 'Leones', pts: 1, pj: 2, pg: 0, pe: 1, pp: 1, gf: 1, gc: 4 },
  ];

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Tabla de Posiciones</h1>

      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-blue-500 text-white text-sm">
            <tr>
              <th className="px-4 py-2 text-left">Equipo</th>
              <th className="px-2 py-2">Pts</th>
              <th className="px-2 py-2">PJ</th>
              <th className="px-2 py-2">PG</th>
              <th className="px-2 py-2">PE</th>
              <th className="px-2 py-2">PP</th>
              <th className="px-2 py-2">GF</th>
              <th className="px-2 py-2">GC</th>
              <th className="px-2 py-2">DIF</th>
            </tr>
          </thead>
          <tbody className="text-center text-sm">
            {posiciones.map((equipo, i) => {
              const dif = equipo.gf - equipo.gc;
              return (
                <tr key={i} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2 text-left font-medium">{equipo.equipo}</td>
                  <td className="px-2 py-2">{equipo.pts}</td>
                  <td className="px-2 py-2">{equipo.pj}</td>
                  <td className="px-2 py-2">{equipo.pg}</td>
                  <td className="px-2 py-2">{equipo.pe}</td>
                  <td className="px-2 py-2">{equipo.pp}</td>
                  <td className="px-2 py-2">{equipo.gf}</td>
                  <td className="px-2 py-2">{equipo.gc}</td>
                  <td className="px-2 py-2">{dif}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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