import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <h1>Esto es parte del Layout</h1>
        {children}
        <footer className='py-10 flex justify-center items-center'>
          Hecho con amor, ArgTeam
        </footer>
      </body>
    </html>
  );
}