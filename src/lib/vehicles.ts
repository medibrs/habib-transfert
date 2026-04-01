import { Vehicle } from "./types";

export const vehicles: Vehicle[] = [
  {
    id: "classe-e", name: "Mercedes Classe E", passengers: 3, luggage: 3,
    image: "/images/fleet/class E 2.png",
    description: { fr: "L'alliance parfaite du confort et de l'élégance. La Mercedes Classe E offre un habitacle raffiné avec sièges en cuir, climatisation bi-zone et un silence de roulement remarquable.", en: "The perfect blend of comfort and elegance. The Mercedes E-Class offers a refined cabin with leather seats, dual-zone climate control and remarkable ride quietness." },
    features: [
      { fr: "Sièges cuir chauffants", en: "Heated leather seats" },
      { fr: "Climatisation bi-zone", en: "Dual-zone climate control" },
      { fr: "Wi-Fi embarqué", en: "Onboard Wi-Fi" },
      { fr: "Eau & rafraîchissements", en: "Water & refreshments" },
    ],
  },
  {
    id: "classe-s", name: "Mercedes Classe S", passengers: 3, luggage: 3,
    image: "/images/fleet/class s 2.png",
    description: { fr: "Le summum du luxe automobile. La Mercedes Classe S est la référence absolue en matière de confort, de technologie et de prestige.", en: "The pinnacle of automotive luxury. The Mercedes S-Class is the absolute benchmark in comfort, technology and prestige." },
    features: [
      { fr: "Massage & sièges ventilés", en: "Massage & ventilated seats" },
      { fr: "Éclairage d'ambiance 64 couleurs", en: "64-color ambient lighting" },
      { fr: "Isolation acoustique premium", en: "Premium sound insulation" },
      { fr: "Champagne & rafraîchissements", en: "Champagne & refreshments" },
    ],
  },
  {
    id: "eqe", name: "Mercedes EQE", passengers: 3, luggage: 3,
    image: "/images/fleet/eqe.png",
    description: { fr: "L'avenir du transport de luxe, 100% électrique. La Mercedes EQE combine silence absolu, performance et conscience environnementale.", en: "The future of luxury transport, 100% electric. The Mercedes EQE combines absolute silence, performance and environmental consciousness." },
    features: [
      { fr: "100% électrique", en: "100% electric" },
      { fr: "Silence absolu", en: "Absolute silence" },
      { fr: "Écran hyperscreen", en: "Hyperscreen display" },
      { fr: "Autonomie 600km+", en: "600km+ range" },
    ],
  },

  {
    id: "classe-v", name: "Mercedes Classe V", passengers: 7, luggage: 7,
    image: "/images/fleet/v class3.webp",
    description: { fr: "Le van premium pour les groupes et familles. La Mercedes Classe V offre un espace généreux avec configuration modulable.", en: "The premium van for groups and families. The Mercedes V-Class offers generous space with modular configuration." },
    features: [
      { fr: "7 places spacieuses", en: "7 spacious seats" },
      { fr: "Configuration modulable", en: "Modular configuration" },
      { fr: "Tables rabattables", en: "Fold-out tables" },
      { fr: "Climatisation arrière indépendante", en: "Independent rear AC" },
    ],
  },
  {
    id: "sprinter", name: "Mercedes Sprinter VIP", passengers: 16, luggage: 16,
    image: "/images/fleet/sprinter.webp",
    description: { fr: "La solution grand groupe par excellence. Le Mercedes Sprinter VIP est aménagé pour offrir un confort exceptionnel jusqu'à 16 passagers.", en: "The ultimate large group solution. The Mercedes Sprinter VIP is designed for exceptional comfort for up to 16 passengers." },
    features: [
      { fr: "Jusqu'à 16 passagers", en: "Up to 16 passengers" },
      { fr: "Aménagement VIP", en: "VIP interior" },
      { fr: "Espace bagages XL", en: "XL luggage space" },
      { fr: "Système audio premium", en: "Premium audio system" },
    ],
  },
];
