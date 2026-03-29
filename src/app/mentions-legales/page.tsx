"use client";

import { useLanguage } from "@/lib/language-context";

export default function MentionsLegales() {
  const { t } = useLanguage();
  return (
    <div style={{ paddingTop: "clamp(120px, 16vw, 160px)", paddingBottom: "clamp(48px, 8vw, 80px)", background: "var(--cream)" }}>
      <div className="container-main" style={{ maxWidth: "896px" }}>
        <h1 className="font-serif font-semibold mb-8" style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--charcoal)" }}>{t("legal.title")}</h1>
        <div className="space-y-6" style={{ color: "var(--slate)", lineHeight: "1.75" }}>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Éditeur du site</h2>
          <p>Habib Transfert<br/>Nice, Côte d&apos;Azur, France<br/>Téléphone : +33 6 XX XX XX XX<br/>Email : contact@habibtransfert.fr</p>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Hébergement</h2>
          <p>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Propriété intellectuelle</h2>
          <p>L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par le droit d&apos;auteur. Toute reproduction, représentation ou diffusion, en tout ou partie, sans autorisation préalable est interdite.</p>
          <h2 className="font-serif font-semibold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>Responsabilité</h2>
          <p>Habib Transfert s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site. Toutefois, elle ne peut garantir l&apos;exactitude, la complétude et l&apos;actualité des informations.</p>
        </div>
      </div>
    </div>
  );
}
