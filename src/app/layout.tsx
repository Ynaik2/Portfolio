import type { Metadata } from 'next';
import { Lato, Montserrat } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-montserrat',
});
import './globals.css';

export const metadata: Metadata = {
  title: 'YashVerse',
  description: 'The personal portfolio of Yash.',
  icons: {
    icon: '/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${montserrat.variable} dark`}>
      <body className="font-body antialiased bg-background text-foreground font-lato">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
