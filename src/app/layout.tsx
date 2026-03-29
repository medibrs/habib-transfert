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
  title: "Chauffeur Privé Côte d'Azur | VTC Premium & Transfert Aéroport — Habib Transfert",
  description: "Service de chauffeur privé premium sur la Côte d'Azur. Transferts aéroport Nice, Monaco, Cannes, Saint-Tropez. Véhicules haut de gamme Mercedes & BMW. Réservation 24/7.",
  keywords: [
    "chauffeur privé", "VTC", "Côte d'Azur", "Nice", "Monaco", "Cannes",
    "Saint-Tropez", "transfert aéroport", "limousine", "Mercedes", "transport premium",
    "French Riviera", "private driver", "airport transfer", "luxury transport"
  ],
  openGraph: {
    title: "Habib Transfert — Chauffeur Privé Côte d'Azur",
    description: "Service premium de chauffeur privé sur la Côte d'Azur. Véhicules haut de gamme, chauffeurs professionnels.",
    url: "https://www.habibtransfert.fr",
    siteName: "Habib Transfert",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Habib Transfert — Chauffeur Privé Côte d'Azur",
    description: "Service premium de chauffeur privé sur la Côte d'Azur.",
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
      name: "Habib Transfert",
      description: "Service de chauffeur privé premium sur la Côte d'Azur",
      url: "https://www.habibtransfert.fr",
      telephone: "+33600000000",
      email: "contact@habibtransfert.fr",
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
      name: "Habib Transfert",
      url: "https://www.habibtransfert.fr"
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
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
