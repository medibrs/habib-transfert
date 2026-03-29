"use client";

import { useLanguage } from "@/lib/language-context";

export default function ConditionsGenerales() {
  const { t } = useLanguage();
  return (
    <div style={{ paddingTop: "clamp(120px, 16vw, 160px)", paddingBottom: "clamp(48px, 8vw, 80px)", background: "var(--cream)" }}>
      <div className="container-main" style={{ maxWidth: "896px" }}>
        <h1 className="font-serif font-semibold mb-8" style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--charcoal)" }}>{t("terms.title")}</h1>
        <div className="space-y-6" style={{ color: "var(--slate)", lineHeight: "1.75" }}>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Objet</h2>
          <p>Les présentes Conditions Générales régissent l&apos;utilisation des services de transport proposés par Azur Prestige.</p>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Réservation</h2>
          <p>Toute réservation est considérée comme ferme et définitive après confirmation par notre équipe. Un acompte peut être demandé selon le type de prestation.</p>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Annulation</h2>
          <p>Toute annulation effectuée moins de 6 heures avant le trajet prévu pourra donner lieu à une facturation de 50% du montant total de la prestation.</p>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Tarifs</h2>
          <p>Les tarifs indiqués sur le site sont donnés à titre indicatif. Le tarif définitif est communiqué lors de la confirmation de la réservation et inclut le véhicule, le chauffeur, les péages et l&apos;eau à bord.</p>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Responsabilité</h2>
          <p>Azur Prestige est titulaire d&apos;une assurance responsabilité civile professionnelle couvrant l&apos;ensemble de ses activités de transport.</p>
        </div>
      </div>
    </div>
  );
}
