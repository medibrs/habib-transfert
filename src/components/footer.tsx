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
              <span className="font-serif font-bold" style={{ fontSize: "24px", color: "#ffffff" }}>HB</span>
              <span className="font-serif" style={{ fontSize: "24px", fontWeight: 300, color: "var(--gold)" }}>Transfert</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ maxWidth: "280px", color: "rgba(255,255,255,0.4)", lineHeight: "1.8" }}>
              {t("footer.desc")}
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3" style={{ marginTop: "20px" }}>
              <a href="https://www.instagram.com/hb_drivers_06" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", border: "none" }} aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://share.google/7GTjnPmQaUKDtCCiC" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#fff", border: "none" }} aria-label="Google Business">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#1877F2", border: "none" }} aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
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
                { icon: Phone, text: "+33 7 84 70 34 56" },
                { icon: Mail, text: "Hbdrivers06@outlook.it" },
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
            © {new Date().getFullYear()} HB Drivers 06. {t("footer.rights")}
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
