"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { destinations } from "@/lib/destinations";
import { regionLabels } from "@/lib/types";
import ScrollReveal from "@/components/scroll-reveal";
import BookingModal from "@/components/booking-modal";

export default function DestinationsPage() {
  const { lang, t } = useLanguage();
  const [search, setSearch] = useState("");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState<typeof destinations[0] | null>(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return destinations;
    const q = search.toLowerCase();
    return destinations.filter((d) => d.name.toLowerCase().includes(q) || d.description[lang].toLowerCase().includes(q));
  }, [search, lang]);

  const regions = useMemo(() => {
    const order = ["monaco", "nice", "cannes", "var", "italie", "longue-distance", "montagne"];
    const grouped: Record<string, typeof destinations> = {};
    for (const d of filtered) {
      if (!grouped[d.region]) grouped[d.region] = [];
      grouped[d.region].push(d);
    }
    return order.filter((r) => grouped[r]).map((r) => ({ key: r, label: regionLabels[r], dests: grouped[r] }));
  }, [filtered]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0" style={{ background: "var(--navy)" }}>
          <Image src="/images/destinations-hero.png" alt="Destinations Côte d'Azur" fill className="object-cover opacity-60" priority sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,25,41,0.85) 0%, rgba(11,25,41,0.4) 40%, rgba(11,25,41,0.15) 100%)" }} />
        </div>
        <div className="relative z-10 w-full container-main" style={{ paddingBottom: "clamp(48px, 6vw, 72px)" }}>
          <h1 className="font-serif font-semibold text-white mb-4" style={{ fontSize: "clamp(36px, 5.5vw, 64px)", letterSpacing: "-0.02em", lineHeight: "1.1" }}>{t("destinationsPage.hero.title")}</h1>
          <p style={{ fontSize: "clamp(16px, 1.5vw, 20px)", color: "rgba(255,255,255,0.7)", maxWidth: "560px", lineHeight: "1.7" }}>{t("destinationsPage.hero.subtitle")}</p>
        </div>
      </section>

      {/* Search */}
      <section style={{ padding: "40px 0", background: "var(--cream)", borderBottom: "1px solid rgba(201,169,110,0.08)" }}>
        <div className="container-main">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--slate)" }} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("destinationsPage.search")}
              className="input-premium"
              style={{ paddingLeft: "48px", paddingTop: "16px", paddingBottom: "16px", borderRadius: "20px", fontSize: "16px" }}
            />
          </div>
        </div>
      </section>

      {/* Destinations by Region */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="container-main" style={{ display: "flex", flexDirection: "column", gap: "clamp(48px, 6vw, 64px)" }}>
          {regions.map((region) => (
            <div key={region.key}>
              <ScrollReveal>
                <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(22px, 3vw, 30px)", color: "var(--charcoal)", marginBottom: "clamp(24px, 3vw, 32px)", display: "flex", alignItems: "center", gap: "12px" }}>
                  <MapPin size={22} style={{ color: "var(--gold)" }} />
                  {region.label[lang]}
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: "clamp(24px, 3vw, 28px)" }}>
                {region.dests.map((dest, i) => (
                  <ScrollReveal key={dest.id} delay={i * 60}>
                    <div className="group overflow-hidden transition-all duration-500 hover:-translate-y-2" style={{ borderRadius: "20px", background: "#ffffff", border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 2px 8px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.04)" }}>
                      <div className="relative overflow-hidden" style={{ height: "200px" }}>
                        <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,25,41,0.7) 0%, transparent 60%)" }} />
                        <div className="absolute bottom-3 left-3 right-3 flex gap-1.5">
                          {[
                            { label: "Berline", val: dest.priceBerline },
                            { label: "Van", val: dest.priceVan },
                            { label: "Classe S", val: dest.priceClasseS },
                          ].map((p) => (
                            <div key={p.label} className="flex-1 text-center" style={{ padding: "6px 4px", borderRadius: "10px", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)" }}>
                              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "2px" }}>{p.label}</div>
                              <div className="text-white font-bold" style={{ fontSize: "14px" }}>{p.val}€</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ padding: "18px 20px 20px" }}>
                        <h3 className="font-serif font-bold mb-2" style={{ fontSize: "17px", color: "var(--charcoal)" }}>{dest.name}</h3>
                        <p className="text-sm line-clamp-2 mb-4" style={{ color: "var(--slate)", lineHeight: "1.7" }}>{dest.description[lang]}</p>
                        <button
                          onClick={() => { setSelectedDest(dest); setBookingOpen(true); }}
                          className="w-full font-semibold text-sm transition-all duration-300"
                          style={{ padding: "10px", borderRadius: "100px", background: "rgba(201,169,110,0.08)", color: "var(--gold-dark)", border: "1px solid rgba(201,169,110,0.12)", cursor: "pointer" }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--gold)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(201,169,110,0.08)"; e.currentTarget.style.color = "var(--gold-dark)"; e.currentTarget.style.borderColor = "rgba(201,169,110,0.12)"; }}
                        >
                          {t("destinationsPage.bookNow")}
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mise à disposition */}
      <section style={{ padding: "clamp(32px, 5vw, 48px) 0", background: "var(--cream)", borderTop: "1px solid rgba(201,169,110,0.1)" }}>
        <div className="container-main">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center", alignItems: "center", padding: "clamp(24px, 4vw, 36px)", borderRadius: "20px", background: "#ffffff", border: "1px solid rgba(201,169,110,0.1)", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ textAlign: "center" }}>
              <h3 className="font-serif font-semibold" style={{ fontSize: "clamp(18px, 2.5vw, 22px)", color: "var(--charcoal)", marginBottom: "8px" }}>
                {lang === "fr" ? "Mise à disposition" : "Hourly hire"}
              </h3>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <span style={{ fontSize: "15px", color: "var(--gold-dark)", fontWeight: 600 }}>Berline 80€/h</span>
                <span style={{ color: "var(--slate)" }}>|</span>
                <span style={{ fontSize: "15px", color: "var(--gold-dark)", fontWeight: 600 }}>Van 90€/h</span>
              </div>
              <p style={{ fontSize: "13px", color: "var(--slate)", marginTop: "8px" }}>
                {lang === "fr" ? "Réduction de 10% au-delà de 8h" : "10% discount beyond 8 hours"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Not listed */}
      <section className="section-padding sand-section">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(26px, 3.5vw, 38px)", color: "var(--charcoal)", marginBottom: "16px" }}>{t("destinationsPage.notListed")}</h2>
            <p style={{ fontSize: "16px", color: "var(--slate)", lineHeight: "1.75", marginBottom: "32px" }}>{t("destinationsPage.notListedDesc")}</p>
            <Link href="/contact" className="btn-primary inline-flex">
              {t("destinationsPage.contactUs")}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => { setBookingOpen(false); setSelectedDest(null); }} destination={selectedDest} />
    </>
  );
}
