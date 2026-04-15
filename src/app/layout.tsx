import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/client-layout";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Airport Transfer Nice | VTC Chauffeur Privé Côte d'Azur — Transfert Aéroport Nice",
  description: "Airport transfer Nice ✈ Service de chauffeur privé premium sur la Côte d'Azur. Transferts aéroport Nice, Monaco, Cannes, Saint-Tropez. Véhicules haut de gamme Mercedes & BMW. Réservation 24/7.",
  keywords: [
    "airport transfer nice", "chauffeur privé nice", "VTC nice", "Côte d'Azur", "Nice", "Monaco", "Cannes",
    "Saint-Tropez", "transfert aéroport nice", "limousine nice", "Mercedes", "transport premium nice",
    "French Riviera", "private driver nice", "airport transfer", "luxury transport",
    "navette aéroport nice", "VTC aéroport nice", "chauffeur privé côte d'azur"
  ],
  openGraph: {
    title: "Airport Transfer Nice — Chauffeur Privé & VTC Côte d'Azur",
    description: "Airport transfer Nice — Service premium de chauffeur privé sur la Côte d'Azur. Véhicules haut de gamme, chauffeurs professionnels.",
    url: "https://www.habibtransfert.fr",
    siteName: "Airport Transfer Nice — VTC Côte d'Azur",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airport Transfer Nice — Chauffeur Privé & VTC Côte d'Azur",
    description: "Airport transfer Nice — Service premium de chauffeur privé sur la Côte d'Azur.",
  },
  other: {
    "geo.region": "FR-06",
    "geo.placename": "Nice",
    "geo.position": "43.7102;7.2620",
    "ICBM": "43.7102, 7.2620",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TransportService"],
      name: "Airport Transfer Nice — VTC Chauffeur Privé Côte d'Azur",
      description: "Airport transfer Nice — Service de chauffeur privé premium sur la Côte d'Azur",
      url: "https://www.habibtransfert.fr",
      telephone: "+33784703456",
      email: "Hbdrivers06@outlook.it",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nice",
        addressRegion: "Provence-Alpes-Côte d'Azur",
        addressCountry: "FR"
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59"
      },
      areaServed: ["Nice","Monaco","Cannes","Antibes","Saint-Tropez","Menton","Grasse"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de Transport",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transfert Aéroport" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mise à Disposition" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transfert Inter-Villes" } },
        ]
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "150"
      }
    },
    {
      "@type": "WebSite",
      name: "Airport Transfer Nice — VTC Côte d'Azur",
      url: "https://www.habibtransfert.fr"
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y0LH2EZVFF" />
        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17794306907" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                'analytics_storage': 'granted'
              });
              gtag('config', 'G-Y0LH2EZVFF');
              gtag('config', 'AW-17794306907');
            `,
          }}
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
