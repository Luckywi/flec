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
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="FL" />
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

