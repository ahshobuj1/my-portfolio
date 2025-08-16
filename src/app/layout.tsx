import type {Metadata} from 'next';
import {Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';
import Footer from '@/components/Shared/Footer';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';
import Providers from '@/lib/Providers/Providers';
import Header from '@/components/Shared/Header';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'A H Shobuj',
  description: 'Frontend, Backend, MERN Stack Developer',
  icons: {
    icon: '/my-logo.png', // Path from public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} antialiased transition-colors duration-300 dark:bg-[#0f1b2b] text-gray-900 dark:text-gray-200`}>
        <Providers>
          <AppRouterCacheProvider>
            {/* Background Grid (fixed) */}
            <div
              className="fixed inset-0 -z-50 bg-primary-main/10 dark:bg-[#0f1b2b] transition-colors duration-300"
              style={{
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

            {/* Main Content */}
            <div className="relative z-0 min-h-screen w-full transition-colors duration-300 dark:bg-[#0f1b2b]">
              <div className="px-1 lg:px-0">
                <Header />
                <main className="relative z-10">{children}</main>
                <Footer />
              </div>
            </div>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
