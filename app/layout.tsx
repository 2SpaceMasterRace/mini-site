import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://varsha.lol'),
  title: {
    default: 'Hari Varsha',
    template: '%s | Hari Varsha',
  },
  description: 'systems programming  ✦ machine learning  ✦ multidisciplinary front-end engineering',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className} [scrollbar-gutter:stable]`}>
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    { name: 'mail', url: 'mailto:v.harivarsha@gmail.com' },
    { name: 'github', url: 'https://github.com/2SpaceMasterRace' },
    { name: 'twitter', url: 'https://x.com/nanod1jkstra' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/harivarshav' },
    { name: 'reading-group', url: 'https://github.com/Arcane-Systems-Reading-Group' },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
