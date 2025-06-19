'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [clave, setClave] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (clave === '1234') {
      router.push('/Inicio');
    } else {
      alert('Clave incorrecta');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl mb-4">Ingresá la llave de acceso</h1>
      <input
        type="password"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
        className="border px-4 py-2 rounded mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Ingresar
      </button>
    </main>
  );
}