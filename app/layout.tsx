import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KOL Engage - Earn Crypto with Farcaster Challenges',
  description: 'Create challenges, get KOL amplification, earn rewards on Base',
  openGraph: {
    title: 'KOL Engage',
    description: 'Earn crypto by getting KOLs to repost your Farcaster challenges',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
