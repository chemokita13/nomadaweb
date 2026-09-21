import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Nómada | Valladolid",
  description: "Desayunos, tapas, cocktails y buen ambiente en Valladolid.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {/* Añadimos font-sans para que Tailwind aplique la tipografía Geist */}
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
