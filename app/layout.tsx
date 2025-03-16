import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from './components/ClientLayout'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Way to Growth - Professional Coaching",
  description: "Professional coaching services to help you grow and reach your full potential",
  icons: {
    icon: {
      url: '/favicon.jpg',
      type: 'image/jpeg'
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
