import './globals.css';
import Navbar from './components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kodivia',
  description: 'Kodivia is a trusted global trade partner, providing efficient export-import solutions with a focus on logistics, compliance, and customer-centric services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-black text-white transition-colors duration-300">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
