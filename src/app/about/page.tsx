"use client";

import React from "react";
import Image from "next/image";
import { Award, Clock, Shield } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/scroll-reveal";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { icon: Award, titleKey: "about.value1.title", descKey: "about.value1.desc" },
    { icon: Clock, titleKey: "about.value2.title", descKey: "about.value2.desc" },
    { icon: Shield, titleKey: "about.value3.title", descKey: "about.value3.desc" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0" style={{ background: "var(--navy)" }}>
          <Image src="/images/about-hero.jpg" alt="About" fill className="object-cover opacity-50" priority />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 w-full container-main page-hero">
          <h1 className="font-serif font-semibold text-white" style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.02em", marginBottom: "16px" }}>
            {t("about.hero.title")}
          </h1>
          <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", color: "rgba(255,255,255,0.6)", maxWidth: "560px" }}>{t("about.hero.subtitle")}</p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="container-main">
          <ScrollReveal>
            <h2 className="font-serif font-semibold text-center" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "var(--charcoal)", marginBottom: "clamp(40px, 5vw, 56px)" }}>
              {t("about.values.title")}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3" style={{ gap: "clamp(20px, 3vw, 32px)" }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={i} delay={i * 150}>
                  <div className="text-center rounded-3xl bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2" style={{ padding: "clamp(24px, 3vw, 32px)", border: "1px solid rgba(0,0,0,0.04)" }}>
                    <div className="mx-auto rounded-2xl azur-gradient flex items-center justify-center" style={{ width: "56px", height: "56px", marginBottom: "20px" }}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-serif font-bold" style={{ color: "var(--charcoal)", fontSize: "18px", marginBottom: "12px" }}>{t(v.titleKey)}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--slate)" }}>{t(v.descKey)}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding sand-section">
        <div className="container-main" style={{ maxWidth: "896px" }}>
          <ScrollReveal>
            <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--charcoal)", marginBottom: "clamp(24px, 3vw, 32px)" }}>
              {t("about.philosophy.title")}
            </h2>
            <div style={{ color: "var(--slate)", fontSize: "16px", lineHeight: "1.7", display: "flex", flexDirection: "column", gap: "20px" }}>
              <p>{t("about.philosophy.p1")}</p>
              <p>{t("about.philosophy.p2")}</p>
              <p>{t("about.philosophy.p3")}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
