export interface Destination {
  id: string;
  name: string;
  price: number;
  region: string;
  image: string;
  description: { fr: string; en: string };
}

export interface Vehicle {
  id: string;
  name: string;
  passengers: number;
  luggage: number;
  image: string;
  description: { fr: string; en: string };
  features: { fr: string; en: string }[];
}

export interface FAQItem {
  id: string;
  category: string;
  categoryLabel: { fr: string; en: string };
  question: { fr: string; en: string };
  answer: { fr: string; en: string };
}

export const regionLabels: Record<string, { fr: string; en: string }> = {
  monaco: { fr: "Monaco & Environs", en: "Monaco & Surroundings" },
  nice: { fr: "Nice & Arrière-Pays", en: "Nice & Hinterland" },
  cannes: { fr: "Cannes & Pays de Grasse", en: "Cannes & Grasse Area" },
  var: { fr: "Var & Saint-Tropez", en: "Var & Saint-Tropez" },
  italie: { fr: "Italie", en: "Italy" },
  "longue-distance": { fr: "Longue Distance", en: "Long Distance" },
  montagne: { fr: "Stations de Montagne", en: "Mountain Resorts" },
};
