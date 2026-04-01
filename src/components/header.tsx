"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import BookingModal from "@/components/booking-modal";

const navLinks = [
  { href: "/", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/destinations", labelKey: "nav.destinations" },
  { href: "/our-fleet", labelKey: "nav.fleet" },
  { href: "/faq", labelKey: "nav.faq" },
  { href: "/contact", labelKey: "nav.contact" },
];

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          background: scrolled
            ? "rgba(253, 252, 249, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(200%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(200%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201, 169, 110, 0.12)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.03)" : "none",
        }}
      >
        <div className="container-main">
          <div className="flex items-center justify-between" style={{ height: scrolled ? "60px" : "70px", transition: "height 0.6s cubic-bezier(0.23, 1, 0.32, 1)" }}>
            {/* Logo */}
            <Link href="/" style={{ flexShrink: 0, position: "relative", height: scrolled ? "40px" : "45px", width: scrolled ? "140px" : "160px", transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)" }}>
              <Image
                src="/images/logo white.png"
                alt="HB Transfert"
                fill
                className="object-contain transition-opacity duration-500"
                style={{ opacity: scrolled ? 0 : 1 }}
                priority
              />
              <Image
                src="/images/logo black.png"
                alt="HB Transfert"
                fill
                className="object-contain transition-opacity duration-500"
                style={{ opacity: scrolled ? 1 : 0 }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center" style={{ gap: "4px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative transition-all duration-300 group"
                  style={{
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: scrolled ? "var(--slate)" : "rgba(255,255,255,0.75)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? "var(--gold-dark)" : "var(--gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "var(--slate)" : "rgba(255,255,255,0.75)")}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center" style={{ gap: "8px" }}>
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 transition-all duration-300"
                style={{
                  padding: "7px 14px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: scrolled ? "var(--slate)" : "rgba(255,255,255,0.7)",
                  borderRadius: "100px",
                  border: scrolled ? "1px solid rgba(201, 169, 110, 0.2)" : "1px solid rgba(255,255,255,0.15)",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <Globe size={13} />
                {lang === "fr" ? "EN" : "FR"}
              </button>

              <div className="hidden lg:block">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="btn-primary"
                  style={{ padding: "10px 24px", fontSize: "12px" }}
                >
                  {t("nav.book")}
                </button>
              </div>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden flex items-center justify-center transition-all duration-300"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  width: "40px", height: "40px", borderRadius: "12px",
                  background: scrolled ? "rgba(201, 169, 110, 0.06)" : "rgba(255,255,255,0.06)",
                  border: scrolled ? "1px solid rgba(201, 169, 110, 0.15)" : "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  color: scrolled ? "var(--charcoal)" : "#ffffff",
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="lg:hidden animate-in"
            style={{
              background: "rgba(253, 252, 249, 0.98)",
              backdropFilter: "blur(24px)",
              borderTop: "1px solid rgba(201, 169, 110, 0.1)",
              padding: "20px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
            }}
          >
            <nav className="flex flex-col" style={{ gap: "2px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-medium transition-colors duration-200"
                  style={{
                    padding: "14px 18px",
                    fontSize: "15px",
                    color: "var(--charcoal)",
                    borderRadius: "14px",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(201, 169, 110, 0.06)";
                    e.currentTarget.style.color = "var(--gold-dark)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--charcoal)";
                  }}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              <div style={{ height: "1px", background: "rgba(201, 169, 110, 0.12)", margin: "8px 0" }} />
              <button
                onClick={() => { setBookingOpen(true); setMobileOpen(false); }}
                className="btn-primary mt-2"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {t("nav.book")}
              </button>
            </nav>
          </div>
        )}
      </header>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
