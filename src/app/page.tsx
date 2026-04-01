"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plane, Clock, ArrowRight, MapPin, Users, Briefcase, ChevronLeft, ChevronRight, Sparkles, Heart, Star, Shield, Award, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { destinations } from "@/lib/destinations";
import { vehicles } from "@/lib/vehicles";
import ScrollReveal from "@/components/scroll-reveal";
import BookingModal from "@/components/booking-modal";

const serviceData = [
  { icon: Plane, titleKey: "services.airport.title", descKey: "services.airport.desc", img: "/images/services/airport1.png" },
  { icon: Clock, titleKey: "services.disposal.title", descKey: "services.disposal.desc", img: "/images/services/mise a disposition.webp" },
  { icon: ArrowRight, titleKey: "services.intercity.title", descKey: "services.intercity.desc", img: "/images/services/intercity.jpg" },
  { icon: Heart, titleKey: "services.events.title", descKey: "services.events.desc", img: "/images/services/events.jpg" },
  { icon: MapPin, titleKey: "services.tours.title", descKey: "services.tours.desc", img: "/images/services/tours.jpg" },
];

function ServiceCard({ svc, delay, t }: { svc: typeof serviceData[0]; delay: number; t: (key: string) => string }) {
  const Icon = svc.icon;
  return (
    <ScrollReveal delay={delay}>
      <div
        className="group cursor-pointer overflow-hidden transition-all duration-700 hover:-translate-y-3"
        style={{
          borderRadius: "24px",
          background: "#ffffff",
          border: "1px solid rgba(0,0,0,0.04)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03), 0 8px 32px rgba(0,0,0,0.04)",
        }}
      >
        <div className="relative overflow-hidden" style={{ height: "280px" }}>
          <Image src={svc.img} alt={t(svc.titleKey)} fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11, 25, 41, 0.75) 0%, rgba(11, 25, 41, 0.1) 50%, transparent 100%)" }} />
          <div
            className="absolute bottom-5 left-5 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{ width: "48px", height: "48px", borderRadius: "16px", background: "rgba(201, 169, 110, 0.2)", backdropFilter: "blur(16px)", border: "1px solid rgba(201, 169, 110, 0.3)" }}
          >
            <Icon size={22} style={{ color: "var(--gold-light)" }} />
          </div>
        </div>
        <div style={{ padding: "24px 24px 28px" }}>
          <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: "var(--charcoal)" }}>{t(svc.titleKey)}</h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--slate)", lineHeight: "1.75" }}>{t(svc.descKey)}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function HomePage() {
  const { lang, t } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [fleetIndex, setFleetIndex] = useState(0);

  const nextFleet = useCallback(() => {
    setFleetIndex((prev) => (prev + 1) % vehicles.length);
  }, []);
  const prevFleet = useCallback(() => {
    setFleetIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextFleet, 5000);
    return () => clearInterval(timer);
  }, [nextFleet]);

  const popularDests = destinations.filter((d) =>
    ["monaco", "nice", "cannes", "saint-tropez", "antibes", "eze", "saint-jean", "menton"].includes(d.id)
  );

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative flex items-center" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          {/* Desktop hero */}
          <Image src="/images/herof.png" alt="Côte d'Azur" fill className="object-cover hidden md:block" priority quality={90} />
          {/* Mobile hero */}
          <Image src="/images/heromm.png" alt="Côte d'Azur" fill className="object-cover md:hidden" priority quality={85} />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(160deg, rgba(10,25,41,0.92) 0%, rgba(10,25,41,0.50) 40%, rgba(10,25,41,0.70) 100%)" }}
          />
          {/* Decorative gold glow */}
          <div className="absolute" style={{ bottom: "20%", right: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(201, 169, 110, 0.06)", filter: "blur(100px)" }} />
        </div>

        <div className="relative z-10 w-full container-main" style={{ paddingTop: "clamp(140px, 20vw, 180px)", paddingBottom: "clamp(80px, 12vw, 120px)" }}>
          <div style={{ maxWidth: "720px" }}>
            {/* Elegant label */}
            <div className="flex items-center gap-4 mb-6 sm:mb-10">
              <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
              <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold-light)" }}>
                {lang === "fr" ? "Transport Premium" : "Premium Transport"}
              </span>
            </div>

            <h1
              className="font-serif text-white"
              style={{ fontSize: "clamp(36px, 5.5vw, 76px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 500, marginBottom: "clamp(32px, 5vw, 40px)" }}
            >
              {t("hero.title")}
            </h1>
            <p className="hidden sm:block" style={{ fontSize: "clamp(15px, 1.6vw, 18px)", lineHeight: 1.75, color: "rgba(255, 255, 255, 0.91)", maxWidth: "520px", marginBottom: "clamp(40px, 5vw, 56px)" }}>
              {t("hero.subtitle")}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "clamp(56px, 8vw, 96px)" }}>
              <button
                onClick={() => setBookingOpen(true)}
                className="btn-primary"
                style={{ fontSize: "14px" }}
              >
                {t("hero.book")}
              </button>
              <Link
                href="/services"
                className="btn-outline"
                style={{ fontSize: "14px", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
              >
                {t("hero.services")}
              </Link>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(24px, 4vw, 40px)" }}>
              {[
                { icon: Star, val: "5.0", lbl: lang === "fr" ? "Note Google" : "Google Rating" },
                { icon: Shield, val: "24/7", lbl: lang === "fr" ? "Disponible" : "Available" },
                { icon: Award, val: "150+", lbl: lang === "fr" ? "Clients" : "Clients" },
              ].map((b, i) => {
                const Ic = b.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div style={{ width: "36px", height: "36px", borderRadius: "12px", background: "rgba(201, 169, 110, 0.1)", border: "1px solid rgba(201, 169, 110, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Ic size={16} style={{ color: "var(--gold-light)" }} />
                    </div>
                    <div>
                      <div className="text-white font-bold" style={{ fontSize: "16px", lineHeight: 1.2 }}>{b.val}</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{b.lbl}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
            {lang === "fr" ? "Défiler" : "Scroll"}
          </span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--gold), transparent)", opacity: 0.5 }} />
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="container-main">
          <ScrollReveal>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "clamp(40px, 5vw, 64px)" }}>
              <div className="section-label justify-center">
                {lang === "fr" ? "Nos Services" : "Our Services"}
              </div>
              <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(28px,4vw,50px)", color: "var(--charcoal)", letterSpacing: "-0.02em", marginBottom: "clamp(16px, 2vw, 20px)" }}>
                {t("services.title")}
              </h2>
              <p style={{ fontSize: "clamp(15px, 1.5vw, 17px)", color: "var(--slate)", lineHeight: 1.75, maxWidth: "540px", textAlign: "center" }}>
                {t("services.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          {/* Top 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "clamp(24px, 3vw, 36px)" }}>
            {serviceData.slice(0, 3).map((svc, i) => (
              <ServiceCard key={i} svc={svc} delay={i * 120} t={t} />
            ))}
          </div>
          {/* Bottom 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto" style={{ gap: "clamp(24px, 3vw, 36px)", marginTop: "clamp(24px, 3vw, 36px)", maxWidth: "960px" }}>
            {serviceData.slice(3).map((svc, i) => (
              <ServiceCard key={i + 3} svc={svc} delay={(i + 3) * 120} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FLEET CAROUSEL ===================== */}
      <section className="sand-section section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "clamp(40px, 5vw, 64px)" }}>
              <div className="section-label justify-center">
                {lang === "fr" ? "Notre Flotte" : "Our Fleet"}
              </div>
              <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(28px,4vw,50px)", color: "var(--charcoal)", letterSpacing: "-0.02em", marginBottom: "clamp(16px, 2vw, 20px)" }}>
                {t("fleet.title")}
              </h2>
              <p style={{ fontSize: "clamp(15px, 1.5vw, 17px)", color: "var(--slate)", lineHeight: 1.75, maxWidth: "540px", textAlign: "center" }}>
                {t("fleet.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="relative mx-auto" style={{ maxWidth: "1140px" }}>
            <div
              className="overflow-hidden"
              style={{ borderRadius: "clamp(16px, 3vw, 28px)", background: "#ffffff", border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 4px 20px rgba(0,0,0,0.03), 0 20px 60px rgba(0,0,0,0.06)" }}
            >
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
                  <Image
                    src={vehicles[fleetIndex].image}
                    alt={vehicles[fleetIndex].name}
                    fill
                    className="object-cover transition-all duration-700"
                    key={fleetIndex}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11, 25, 41, 0.15) 0%, transparent 60%)" }} />
                </div>
                <div className="flex flex-col justify-center" style={{ padding: "clamp(28px, 4vw, 48px) clamp(24px, 4vw, 52px)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div style={{ width: "24px", height: "2px", background: "var(--gold)" }} />
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
                      {String(fleetIndex + 1).padStart(2, "0")} / {String(vehicles.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-serif font-semibold" style={{ fontSize: "clamp(22px, 3vw, 28px)", color: "var(--charcoal)", marginBottom: "16px" }}>
                    {vehicles[fleetIndex].name}
                  </h3>
                  <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.75", marginBottom: "28px" }}>
                    {vehicles[fleetIndex].description[lang]}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "32px", marginBottom: "28px" }}>
                    {[
                      { icon: Users, val: vehicles[fleetIndex].passengers, lbl: t("fleet.passengers") },
                      { icon: Briefcase, val: vehicles[fleetIndex].luggage, lbl: t("fleet.luggage") },
                    ].map((item, idx) => {
                      const Ic = item.icon;
                      return (
                        <div key={idx} className="flex items-center gap-3">
                          <div
                            className="flex items-center justify-center"
                            style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(201, 169, 110, 0.08)", border: "1px solid rgba(201, 169, 110, 0.12)" }}
                          >
                            <Ic size={17} style={{ color: "var(--gold)" }} />
                          </div>
                          <div>
                            <div className="font-bold" style={{ fontSize: "16px", color: "var(--charcoal)" }}>{item.val}</div>
                            <div style={{ fontSize: "12px", color: "var(--slate)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{item.lbl}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <Link href="/our-fleet" className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all duration-300" style={{ color: "var(--gold-dark)", letterSpacing: "0.04em", textTransform: "uppercase", fontSize: "13px" }}>
                    {t("fleet.discover")} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={prevFleet}
              className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ left: "8px", width: "40px", height: "40px", borderRadius: "50%", background: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid rgba(201, 169, 110, 0.15)", cursor: "pointer", zIndex: 10 }}
            >
              <ChevronLeft size={18} style={{ color: "var(--charcoal)" }} />
            </button>
            <button
              onClick={nextFleet}
              className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ right: "8px", width: "40px", height: "40px", borderRadius: "50%", background: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid rgba(201, 169, 110, 0.15)", cursor: "pointer", zIndex: 10 }}
            >
              <ChevronRight size={18} style={{ color: "var(--charcoal)" }} />
            </button>

            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "clamp(24px, 3vw, 40px)" }}>
              {vehicles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setFleetIndex(i)}
                  style={{
                    width: i === fleetIndex ? "32px" : "8px", height: "8px", borderRadius: "100px",
                    background: i === fleetIndex ? "var(--gold)" : "rgba(201, 169, 110, 0.2)", border: "none", cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DESTINATIONS ===================== */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="container-main">
          <ScrollReveal>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "clamp(40px, 5vw, 64px)" }}>
              <div className="section-label justify-center">
                Destinations
              </div>
              <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(28px,4vw,50px)", color: "var(--charcoal)", letterSpacing: "-0.02em", marginBottom: "clamp(16px, 2vw, 20px)" }}>
                {t("destinations.title")}
              </h2>
              <p style={{ fontSize: "clamp(15px, 1.5vw, 17px)", color: "var(--slate)", lineHeight: 1.75, maxWidth: "540px", textAlign: "center" }}>
                {t("destinations.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "clamp(20px, 3vw, 28px)" }}>
            {popularDests.map((dest, i) => (
              <ScrollReveal key={dest.id} delay={i * 80}>
                <div
                  className="group cursor-pointer overflow-hidden transition-all duration-700 hover:-translate-y-3"
                  style={{
                    borderRadius: "24px",
                    background: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.04)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.02), 0 8px 32px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="relative overflow-hidden" style={{ height: "260px" }}>
                    <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11, 25, 41, 0.8) 0%, rgba(11, 25, 41, 0.15) 50%, transparent 100%)" }} />
                    <div
                      className="absolute top-4 right-4 px-5 py-2.5 text-white"
                      style={{ borderRadius: "100px", background: "rgba(201, 169, 110, 0.85)", backdropFilter: "blur(8px)", fontSize: "14px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}
                    >
                      {t("destinations.from")} {dest.price}€
                    </div>
                    <div className="absolute bottom-4 left-5">
                      <h3 className="text-white font-serif font-semibold" style={{ fontSize: "20px", textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
                        {dest.name}
                      </h3>
                    </div>
                  </div>
                  <div style={{ padding: "18px 22px 22px" }}>
                    <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--slate)", lineHeight: "1.7" }}>{dest.description[lang]}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center" style={{ marginTop: "clamp(40px, 5vw, 56px)" }}>
              <Link
                href="/destinations"
                className="btn-primary"
              >
                {t("destinations.viewAll")} <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="section-padding" style={{ background: "var(--sand)" }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 items-center" style={{ gap: "clamp(40px, 5vw, 64px)" }}>
            <ScrollReveal>
              <div>
                <div className="section-label">
                  {lang === "fr" ? "Pourquoi Nous" : "Why Us"}
                </div>
                <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "var(--charcoal)", letterSpacing: "-0.02em", marginBottom: "clamp(20px, 3vw, 24px)" }}>
                  {lang === "fr" ? "L'Excellence à Chaque Trajet" : "Excellence in Every Journey"}
                </h2>
                <p style={{ fontSize: "15px", color: "var(--slate)", lineHeight: "1.8", marginBottom: "24px" }}>
                  {lang === "fr"
                    ? "Nous redéfinissons le transport premium sur la Côte d'Azur avec un engagement sans compromis envers la qualité, le confort et la ponctualité."
                    : "We redefine premium transport on the French Riviera with an uncompromising commitment to quality, comfort and punctuality."}
                </p>
                <div className="space-y-5">
                  {[
                    { title: lang === "fr" ? "Chauffeurs Professionnels" : "Professional Chauffeurs", desc: lang === "fr" ? "Formés, discrets et bilingues" : "Trained, discreet and bilingual" },
                    { title: lang === "fr" ? "Véhicules Haut de Gamme" : "Premium Vehicles", desc: lang === "fr" ? "Mercedes & BMW dernière génération" : "Latest-generation Mercedes & BMW" },
                    { title: lang === "fr" ? "Service Personnalisé" : "Personalized Service", desc: lang === "fr" ? "Adapté à vos besoins spécifiques" : "Tailored to your specific needs" },
                    { title: lang === "fr" ? "Disponibilité 24/7" : "24/7 Availability", desc: lang === "fr" ? "À votre service jour et nuit" : "At your service day and night" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(201, 169, 110, 0.1)", border: "1px solid rgba(201, 169, 110, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                        <Check size={14} style={{ color: "var(--gold)" }} />
                      </div>
                      <div>
                        <div className="font-semibold" style={{ color: "var(--charcoal)", fontSize: "15px", marginBottom: "2px" }}>{item.title}</div>
                        <div style={{ color: "var(--slate)", fontSize: "14px" }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div style={{ borderRadius: "28px", overflow: "hidden", aspectRatio: "4/5", position: "relative" }}>
                  <Image src="/images/about.png" alt="Premium Service" fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11, 25, 41, 0.3) 0%, transparent 50%)" }} />
                </div>
                {/* Floating stat card */}
                <div
                  className="absolute"
                  style={{
                    bottom: "24px", left: "16px", padding: "20px 24px", borderRadius: "18px",
                    background: "rgba(253, 252, 249, 0.95)", backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)", border: "1px solid rgba(201, 169, 110, 0.15)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div style={{ width: "44px", height: "44px", borderRadius: "14px", background: "linear-gradient(135deg, var(--gold-dark), var(--gold))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Star size={20} style={{ color: "#ffffff" }} />
                    </div>
                    <div>
                      <div className="font-bold" style={{ fontSize: "22px", color: "var(--charcoal)" }}>5.0</div>
                      <div style={{ fontSize: "12px", color: "var(--slate)", letterSpacing: "0.03em" }}>Google Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--azur-dark) 50%, var(--azur) 100%)" }} />
        <div className="absolute inset-0" style={{ opacity: 0.08 }}>
          <div className="absolute" style={{ top: "-10%", right: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "var(--gold)", filter: "blur(150px)" }} />
          <div className="absolute" style={{ bottom: "-15%", left: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "var(--gold-light)", filter: "blur(120px)" }} />
        </div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(201, 169, 110, 0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative container-main text-center">
          <ScrollReveal>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
              <div
                style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(201, 169, 110, 0.15)", border: "1px solid rgba(201, 169, 110, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Sparkles size={26} style={{ color: "var(--gold-light)" }} />
              </div>
            </div>
            <h2 className="font-serif text-white" style={{ fontSize: "clamp(26px,4vw,48px)", lineHeight: 1.08, letterSpacing: "-0.02em", fontWeight: 500, marginBottom: "clamp(20px, 3vw, 24px)" }}>
              {t("cta.title")}
            </h2>
            <p style={{ fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.75, color: "rgba(255,255,255,0.5)", maxWidth: "480px", marginBottom: "clamp(32px, 4vw, 48px)", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
              {t("cta.subtitle")}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
              <button
                onClick={() => setBookingOpen(true)}
                className="btn-primary"
              >
                {t("cta.book")}
              </button>
              <a
                href="tel:+33600000000"
                className="btn-outline"
              >
                {t("cta.call")}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
