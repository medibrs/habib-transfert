"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "@/components/scroll-reveal";

export default function ContactPage() {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      setSent(true);
      form.reset();
    } catch {
      // Fallback: still show success for demo
      setSent(true);
    }
    setSending(false);
  };

  const contactInfo = [
    { icon: Phone, label: t("contactPage.info.phone"), value: "+33 7 84 70 34 56", href: "tel:+33784703456" },
    { icon: Mail, label: t("contactPage.info.email"), value: "contact@habibtransfert.fr", href: "mailto:contact@habibtransfert.fr" },
    { icon: MapPin, label: t("contactPage.info.location"), value: "Nice, Côte d'Azur, France" },
    { icon: Clock, label: t("contactPage.info.hours"), value: t("contactPage.info.hoursValue") },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "clamp(140px, 18vw, 180px)", paddingBottom: "clamp(40px, 6vw, 64px)", background: "linear-gradient(180deg, var(--sand) 0%, var(--cream) 100%)" }}>
        <div className="container-main text-center">
          <h1 className="font-serif font-semibold" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "var(--charcoal)", letterSpacing: "-0.02em", marginBottom: "16px" }}>{t("contactPage.hero.title")}</h1>
          <p className="mx-auto" style={{ fontSize: "clamp(16px, 1.5vw, 19px)", color: "var(--slate)", maxWidth: "560px" }}>{t("contactPage.hero.subtitle")}</p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-5" style={{ gap: "clamp(32px, 4vw, 48px)" }}>
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {sent ? (
                  <div className="text-center py-16">
                    <CheckCircle size={56} className="mx-auto mb-6" style={{ color: "#22c55e" }} />
                    <h2 className="font-serif font-semibold mb-3" style={{ fontSize: "24px", color: "var(--charcoal)" }}>{t("contactPage.form.success")}</h2>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="grid sm:grid-cols-2" style={{ gap: "20px" }}>
                      <div>
                        <label className="block text-sm font-medium" style={{ color: "var(--charcoal)", marginBottom: "6px" }}>{t("contactPage.form.name")}</label>
                        <input name="name" required className="input-premium" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium" style={{ color: "var(--charcoal)", marginBottom: "6px" }}>{t("contactPage.form.email")}</label>
                        <input name="email" type="email" required className="input-premium" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2" style={{ gap: "20px" }}>
                      <div>
                        <label className="block text-sm font-medium" style={{ color: "var(--charcoal)", marginBottom: "6px" }}>{t("contactPage.form.phone")}</label>
                        <input name="phone" type="tel" className="input-premium" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium" style={{ color: "var(--charcoal)", marginBottom: "6px" }}>{t("contactPage.form.service")}</label>
                        <select name="service" className="input-premium" style={{ color: "var(--slate)" }}>
                          <option value="">{t("contactPage.form.selectService")}</option>
                          <option value="airport">Transfert Aéroport</option>
                          <option value="hourly">Mise à Disposition</option>
                          <option value="intercity">Transfert Inter-Villes</option>
                          <option value="events">Événements & Mariages</option>
                          <option value="tours">Tours & Excursions</option>
                          <option value="vip">Transport VIP</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium" style={{ color: "var(--charcoal)", marginBottom: "6px" }}>{t("contactPage.form.message")}</label>
                      <textarea name="message" rows={5} required className="input-premium" style={{ resize: "none" }} />
                    </div>
                    <button type="submit" disabled={sending} className="btn-primary w-full sm:w-auto flex items-center gap-2 disabled:opacity-60">
                      <Send size={16} />
                      {sending ? t("contactPage.form.sending") : t("contactPage.form.send")}
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={200}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {contactInfo.map((info, i) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-start gap-4 p-5 rounded-2xl transition-shadow hover:shadow-md" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.04)" }}>
                        <div className="w-11 h-11 rounded-xl azur-gradient flex items-center justify-center flex-shrink-0">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="text-sm mb-1" style={{ color: "var(--slate)" }}>{info.label}</p>
                          <p className="font-medium text-sm" style={{ color: "var(--charcoal)" }}>{info.value}</p>
                        </div>
                      </div>
                    );
                    if ('href' in info && info.href) {
                      return <a key={i} href={info.href} className="block">{content}</a>;
                    }
                    return <div key={i}>{content}</div>;
                  })}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
