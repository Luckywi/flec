import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SchemaOrg from "./components/SchemaOrg"; 
import "@/styles/main.css";
import Script from "next/script"; 

// Style pour garantir que les polices Next.js sont disponibles sans perturber les styles existants

// Font configuration pour Next.js - on utilise uniquement les polices nécessaires
// mais on garde aussi la balise link pour assurer la compatibilité
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabinet Franck Lebeurre - Expert-Comptable",
  description: "Cabinet d'expertise comptable avec une équipe pluridisciplinaire spécialisée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        {/* Font Awesome est toujours chargé via CDN car il n'est pas optimisé par next/font */}
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.webp" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <SchemaOrg />

        <Script src="/register-sw.js" strategy="afterInteractive" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

