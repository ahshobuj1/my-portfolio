import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'A H Shobuj',
  description: 'Frontend, Backend, MERN Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Background Container (fixed position) */}
        <div
          className="fixed inset-0 -z-50"
          style={{
            background: '#f8fafc',
            backgroundImage: `
              linear-gradient(to right, #e2e8f0 1px, transparent 1px),
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
            `,
            backgroundSize: '20px 30px',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
          }}
        />

        {/* Content Container (relative position) */}
        <div className="relative z-0 min-h-screen w-full">
          <div className="max-w-[1280px] mx-auto px-1 lg:px-0">
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
