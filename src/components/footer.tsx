"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { lang, t } = useLanguage();

  const links = [
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/destinations", label: t("nav.destinations") },
    { href: "/our-fleet", label: t("nav.fleet") },
    { href: "/faq", label: t("nav.faq") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const destinations = ["Monaco", "Nice", "Cannes", "Saint-Tropez", "Antibes", "Menton"];

  return (
    <footer style={{ background: "var(--navy)", color: "rgba(255,255,255,0.7)" }}>
      {/* Main Footer */}
      <div className="container-main" style={{ paddingTop: "clamp(48px, 8vw, 88px)", paddingBottom: "clamp(36px, 6vw, 56px)" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "clamp(32px, 5vw, 48px)" }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-6">
              <span className="font-serif font-bold" style={{ fontSize: "24px", color: "#ffffff" }}>Habib</span>
              <span className="font-serif" style={{ fontSize: "24px", fontWeight: 300, color: "var(--gold)" }}>Transfert</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ maxWidth: "280px", color: "rgba(255,255,255,0.4)", lineHeight: "1.8" }}>
              {t("footer.desc")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6 uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--gold)" }}>
              {t("footer.links")}
            </h4>
            <ul className="space-y-3.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-[var(--gold-light)]"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold mb-6 uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--gold)" }}>
              {t("footer.popular")}
            </h4>
            <ul className="space-y-3.5">
              {destinations.map((dest) => (
                <li key={dest}>
                  <Link
                    href="/destinations"
                    className="text-sm transition-colors duration-300 hover:text-[var(--gold-light)]"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--gold)" }}>
              Contact
            </h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+33 6 XX XX XX XX" },
                { icon: Mail, text: "contact@habibtransfert.fr" },
                { icon: MapPin, text: "Nice, Côte d'Azur" },
                { icon: Clock, text: lang === "fr" ? "Disponible 24h/24, 7j/7" : "Available 24/7" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(201, 169, 110, 0.08)", border: "1px solid rgba(201, 169, 110, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={13} style={{ color: "var(--gold)" }} />
                    </div>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(201, 169, 110, 0.08)" }}>
        <div className="container-main flex flex-col sm:flex-row items-center justify-between" style={{ padding: "clamp(16px, 3vw, 22px) 24px" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.02em" }}>
            © {new Date().getFullYear()} Habib Transfert. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6 mt-3 sm:mt-0">
            {[
              { href: "/mentions-legales", label: t("footer.legal") },
              { href: "/politique-de-confidentialite", label: t("footer.privacy") },
              { href: "/conditions-generales", label: t("footer.terms") },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs transition-colors duration-300 hover:text-[var(--gold-light)]" style={{ color: "rgba(255,255,255,0.25)" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
