"use client";

import { useLanguage } from "@/lib/language-context";

export default function PolitiqueConfidentialite() {
  const { t } = useLanguage();
  return (
    <div style={{ paddingTop: "clamp(120px, 16vw, 160px)", paddingBottom: "clamp(48px, 8vw, 80px)", background: "var(--cream)" }}>
      <div className="container-main" style={{ maxWidth: "896px" }}>
        <h1 className="font-serif font-semibold mb-8" style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--charcoal)" }}>{t("privacy.title")}</h1>
        <div className="space-y-6" style={{ color: "var(--slate)", lineHeight: "1.75" }}>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Collecte des données</h2>
          <p>Nous collectons les données personnelles que vous nous fournissez volontairement via nos formulaires de contact et de réservation : nom, e-mail, téléphone, message.</p>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Utilisation des données</h2>
          <p>Vos données sont utilisées uniquement pour traiter vos demandes de réservation et vous recontacter. Elles ne sont jamais cédées à des tiers à des fins commerciales.</p>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Durée de conservation</h2>
          <p>Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernière interaction avec nous.</p>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Vos droits</h2>
          <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données. Contactez-nous à contact@habibtransfert.fr.</p>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Cookies</h2>
          <p>Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site (préférence de langue).</p>
        </div>
      </div>
    </div>
  );
}
