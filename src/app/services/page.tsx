"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plane, Clock, ArrowRight, Heart, MapPin, Shield, Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import BookingModal from "@/components/booking-modal";

export default function ServicesPage() {
  const { lang, t } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);

  const services = [
    { titleKey: "servicesPage.s1.title", descKey: "servicesPage.s1.desc", features: ["servicesPage.s1.f1", "servicesPage.s1.f2", "servicesPage.s1.f3"], img: "/images/services/aeroport-transfert.webp", icon: Plane },
    { titleKey: "servicesPage.s2.title", descKey: "servicesPage.s2.desc", features: ["servicesPage.s2.f1", "servicesPage.s2.f2", "servicesPage.s2.f3"], img: "/images/services/disposal-detail.jpg", icon: Clock },
    { titleKey: "servicesPage.s3.title", descKey: "servicesPage.s3.desc", features: ["servicesPage.s3.f1", "servicesPage.s3.f2", "servicesPage.s3.f3"], img: "/images/services/intercity-detail.jpg", icon: ArrowRight },
    { titleKey: "servicesPage.s4.title", descKey: "servicesPage.s4.desc", features: ["servicesPage.s4.f1", "servicesPage.s4.f2", "servicesPage.s4.f3"], img: "/images/services/events-detail.jpg", icon: Heart },
    { titleKey: "servicesPage.s5.title", descKey: "servicesPage.s5.desc", features: ["servicesPage.s5.f1", "servicesPage.s5.f2", "servicesPage.s5.f3"], img: "/images/services/tours-detail.jpg", icon: MapPin },
    { titleKey: "servicesPage.s6.title", descKey: "servicesPage.s6.desc", features: ["servicesPage.s6.f1", "servicesPage.s6.f2", "servicesPage.s6.f3"], img: "/images/services/vip-detail.jpg", icon: Shield },
  ];

  const stats = [
    { value: "24/7", label: t("servicesPage.stats.available") },
    { value: "39+", label: t("servicesPage.stats.destinations") },
    { value: "6", label: t("servicesPage.stats.vehicles") },
    { value: "5★", label: t("servicesPage.stats.rating") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0" style={{ background: "var(--navy)" }}>
          <Image src="/images/services-hero.jpg" alt="Services" fill className="object-cover opacity-50" priority />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 w-full container-main page-hero">
          <h1 className="font-serif font-semibold text-white" style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.02em", marginBottom: "16px" }}>{t("servicesPage.hero.title")}</h1>
          <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", color: "rgba(255,255,255,0.6)", maxWidth: "560px" }}>{t("servicesPage.hero.subtitle")}</p>
        </div>
      </section>

      {/* Services Alternating */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="container-main" style={{ display: "flex", flexDirection: "column", gap: "clamp(48px, 7vw, 80px)" }}>
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isReversed = i % 2 === 1;
            return (
              <ScrollReveal key={i} direction={isReversed ? "right" : "left"}>
                <div className={`grid md:grid-cols-2 items-center`} style={{ gap: "clamp(32px, 4vw, 48px)" }}>
                  <div className={`${isReversed ? "md:order-2" : ""}`}>
                    <div className="relative h-72 md:h-[420px] overflow-hidden" style={{ borderRadius: "clamp(16px, 3vw, 24px)" }}>
                      <Image src={svc.img} alt={t(svc.titleKey)} fill className="object-cover" />
                    </div>
                  </div>
                  <div className={`${isReversed ? "md:order-1" : ""}`}>
                    <div className="rounded-xl azur-gradient flex items-center justify-center" style={{ width: "48px", height: "48px", marginBottom: "16px" }}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-serif font-bold" style={{ fontSize: "clamp(22px, 3vw, 30px)", color: "var(--charcoal)", marginBottom: "16px" }}>{t(svc.titleKey)}</h3>
                    <p style={{ color: "var(--slate)", fontSize: "15px", lineHeight: "1.7", marginBottom: "24px" }}>{t(svc.descKey)}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
                      {svc.features.map((f, fi) => (
                        <span key={fi} className="feature-tag text-sm">
                          <Check size={14} /> {t(f)}
                        </span>
                      ))}
                    </div>
                    <button onClick={() => setBookingOpen(true)} className="btn-primary">
                      {t("servicesPage.book")}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) 0" }} className="azur-gradient">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "clamp(24px, 3vw, 32px)" }}>
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="font-serif font-bold text-white" style={{ fontSize: "clamp(32px, 4vw, 48px)", marginBottom: "8px" }}>{stat.value}</div>
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="container-main text-center">
          <ScrollReveal>
            <Sparkles className="mx-auto" size={36} style={{ color: "var(--gold)", marginBottom: "16px" }} />
            <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "var(--charcoal)", marginBottom: "16px" }}>{t("cta.title")}</h2>
            <p style={{ fontSize: "16px", color: "var(--slate)", lineHeight: "1.75", marginBottom: "32px" }}>{t("cta.subtitle")}</p>
            <button onClick={() => setBookingOpen(true)} className="btn-primary">
              {t("cta.book")}
            </button>
          </ScrollReveal>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
