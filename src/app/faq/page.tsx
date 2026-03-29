"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { faqItems } from "@/lib/faq";
import ScrollReveal from "@/components/scroll-reveal";

export default function FAQPage() {
  const { lang, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats: { key: string; label: string; items: typeof faqItems }[] = [];
    const seen = new Set<string>();
    for (const item of faqItems) {
      if (!seen.has(item.category)) {
        seen.add(item.category);
        cats.push({ key: item.category, label: item.categoryLabel[lang], items: [] });
      }
      cats.find((c) => c.key === item.category)?.items.push(item);
    }
    return cats;
  }, [lang]);

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "clamp(140px, 18vw, 180px)", paddingBottom: "clamp(40px, 6vw, 64px)", background: "linear-gradient(180deg, var(--sand) 0%, var(--cream) 100%)" }}>
        <div className="container-main text-center">
          <h1 className="font-serif font-semibold" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "var(--charcoal)", letterSpacing: "-0.02em", marginBottom: "16px" }}>{t("faqPage.hero.title")}</h1>
          <p className="mx-auto" style={{ fontSize: "clamp(16px, 1.5vw, 19px)", color: "var(--slate)", maxWidth: "560px" }}>{t("faqPage.hero.subtitle")}</p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="container-main" style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 48px)" }}>
          {categories.map((cat) => (
            <ScrollReveal key={cat.key}>
              <div>
                <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", color: "var(--charcoal)", marginBottom: "clamp(20px, 3vw, 24px)", display: "flex", alignItems: "center", gap: "12px" }}>
                  <span className="w-1 h-7 rounded-full azur-gradient inline-block" />
                  {cat.label}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {cat.items.map((item) => (
                    <div key={item.id} className="overflow-hidden transition-colors duration-300" style={{ border: "1px solid rgba(201,169,110,0.12)", borderRadius: "16px", background: "#ffffff" }}>
                      <button
                        onClick={() => setOpenId(openId === item.id ? null : item.id)}
                        className="w-full flex items-center justify-between text-left"
                        style={{ padding: "18px 20px", cursor: "pointer", background: "transparent", border: "none" }}
                      >
                        <span className="font-medium pr-4" style={{ color: "var(--charcoal)", fontSize: "15px" }}>{item.question[lang]}</span>
                        <ChevronDown
                          size={18}
                          className={`flex-shrink-0 transition-transform duration-300 ${openId === item.id ? "rotate-180" : ""}`}
                          style={{ color: openId === item.id ? "var(--gold)" : "var(--slate)" }}
                        />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openId === item.id ? "max-h-96 pb-5" : "max-h-0"}`}>
                        <div className="leading-relaxed text-sm" style={{ padding: "0 20px", color: "var(--slate)" }}>
                          {item.answer[lang]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding sand-section">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(26px, 3.5vw, 38px)", color: "var(--charcoal)", marginBottom: "16px" }}>{t("faqPage.cta.title")}</h2>
            <p style={{ fontSize: "16px", color: "var(--slate)", lineHeight: "1.75", marginBottom: "32px" }}>{t("faqPage.cta.subtitle")}</p>
            <Link href="/contact" className="btn-primary inline-flex">
              {t("faqPage.cta.button")}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
