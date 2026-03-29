"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users, Briefcase, Check, Car, Wrench, Armchair, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { vehicles } from "@/lib/vehicles";
import ScrollReveal from "@/components/scroll-reveal";
import BookingModal from "@/components/booking-modal";

export default function FleetPage() {
  const { lang, t } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);

  const whyCards = [
    { icon: Car, titleKey: "fleetPage.why1.title", descKey: "fleetPage.why1.desc" },
    { icon: Wrench, titleKey: "fleetPage.why2.title", descKey: "fleetPage.why2.desc" },
    { icon: Armchair, titleKey: "fleetPage.why3.title", descKey: "fleetPage.why3.desc" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0" >
          <Image src="/images/fleet/fleethero.png" alt="Fleet" fill className="object-cover " priority />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 w-full container-main page-hero">
          <h1 className="font-serif font-semibold text-white" style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.02em", marginBottom: "16px" }}>{t("fleetPage.hero.title")}</h1>
          <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", color: "rgba(255,255,255,0.6)", maxWidth: "560px" }}>{t("fleetPage.hero.subtitle")}</p>
        </div>
      </section>

      {/* Vehicles */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="container-main" style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 6vw, 64px)" }}>
          {vehicles.map((vehicle, i) => {
            const isReversed = i % 2 === 1;
            return (
              <ScrollReveal key={vehicle.id} direction={isReversed ? "right" : "left"}>
                <div className="overflow-hidden transition-shadow hover:shadow-xl" style={{ borderRadius: "clamp(16px, 3vw, 24px)", background: "#ffffff", border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 2px 8px rgba(0,0,0,0.03), 0 8px 32px rgba(0,0,0,0.05)" }}>
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className={`relative h-64 md:h-full min-h-[340px] overflow-hidden ${isReversed ? "md:order-2" : ""}`}>
                      <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" />
                    </div>
                    <div className={`flex flex-col justify-center ${isReversed ? "md:order-1" : ""}`} style={{ padding: "clamp(28px, 5vw, 48px) clamp(24px, 5vw, 48px)" }}>
                      <h3 className="font-serif font-bold" style={{ fontSize: "clamp(22px, 3vw, 28px)", color: "var(--charcoal)", marginBottom: "12px" }}>{vehicle.name}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "16px" }}>
                        <div className="flex items-center gap-2">
                          <Users size={16} style={{ color: "var(--gold)" }} />
                          <span className="text-sm font-medium" style={{ color: "var(--charcoal)" }}>{vehicle.passengers} {t("fleet.passengers")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} style={{ color: "var(--gold)" }} />
                          <span className="text-sm font-medium" style={{ color: "var(--charcoal)" }}>{vehicle.luggage} {t("fleet.luggage")}</span>
                        </div>
                      </div>
                      <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.7", marginBottom: "20px" }}>{vehicle.description[lang]}</p>
                      <div className="grid grid-cols-2" style={{ gap: "8px", marginBottom: "24px" }}>
                        {vehicle.features.map((f, fi) => (
                          <div key={fi} className="flex items-center gap-2 text-sm" style={{ color: "var(--slate)" }}>
                            <Check size={14} className="flex-shrink-0" style={{ color: "var(--gold)" }} />
                            {f[lang]}
                          </div>
                        ))}
                      </div>
                      <button onClick={() => setBookingOpen(true)} className="btn-primary self-start">
                        {t("fleetPage.book")}
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding sand-section">
        <div className="container-main">
          <ScrollReveal>
            <h2 className="font-serif font-semibold text-center" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "var(--charcoal)", marginBottom: "clamp(40px, 5vw, 56px)" }}>{t("fleetPage.why.title")}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3" style={{ gap: "clamp(20px, 3vw, 32px)" }}>
            {whyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={i} delay={i * 150}>
                  <div className="text-center rounded-3xl bg-white transition-all duration-500 hover:-translate-y-2" style={{ padding: "clamp(24px, 3vw, 32px)", border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 2px 8px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.04)" }}>
                    <div className="mx-auto rounded-2xl azur-gradient flex items-center justify-center" style={{ width: "56px", height: "56px", marginBottom: "20px" }}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-serif font-bold" style={{ color: "var(--charcoal)", fontSize: "18px", marginBottom: "12px" }}>{t(card.titleKey)}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--slate)" }}>{t(card.descKey)}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding azur-gradient">
        <div className="container-main text-center">
          <ScrollReveal>
            <Sparkles className="mx-auto" size={36} style={{ color: "rgba(255,255,255,0.8)", marginBottom: "16px" }} />
            <h2 className="font-serif font-semibold text-white" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", marginBottom: "16px" }}>{t("cta.title")}</h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: "1.75", marginBottom: "32px" }}>{t("cta.subtitle")}</p>
            <button onClick={() => setBookingOpen(true)} className="btn-white">
              {t("cta.book")}
            </button>
          </ScrollReveal>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
