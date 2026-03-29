"use client";

import React, { useState } from "react";
import { X, MessageCircle, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const inputClass = "w-full px-4 py-3.5 rounded-2xl border border-[rgba(201,169,110,0.15)] bg-[var(--sand)] focus:border-[var(--gold)] focus:ring-2 focus:ring-[rgba(201,169,110,0.12)] outline-none transition-all duration-300 text-sm text-[var(--charcoal)] placeholder:text-[var(--slate)]";

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const { t } = useLanguage();
  const [tab, setTab] = useState<"whatsapp" | "email">("whatsapp");

  if (!open) return null;

  const whatsappNumber = "33784703456";

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Bonjour, je souhaite réserver un chauffeur privé.");
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent("Réservation Habib Transfert");
    const body = encodeURIComponent(
      `Nom: ${data.get("name")}\nEmail: ${data.get("email")}\nTéléphone: ${data.get("phone")}\nService: ${data.get("service")}\nDate: ${data.get("date")}\nDépart: ${data.get("pickup")}\nDestination: ${data.get("destination")}\nPassagers: ${data.get("passengers")}\n\nMessage:\n${data.get("message")}`
    );
    window.location.href = `mailto:contact@habibtransfert.fr?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: "rgba(11, 25, 41, 0.65)", backdropFilter: "blur(12px)" }} />
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in"
        style={{ background: "#ffffff", borderRadius: "32px", boxShadow: "0 32px 100px rgba(0,0,0,0.25), 0 8px 32px rgba(0,0,0,0.1)", border: "1px solid rgba(201, 169, 110, 0.08)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold accent bar at top */}
        <div style={{ height: "4px", background: "linear-gradient(90deg, var(--gold-dark), var(--gold), var(--gold-light))", borderRadius: "32px 32px 0 0" }} />

        <div style={{ padding: "36px 36px 32px" }}>
          {/* Header */}
          <div className="flex items-start justify-between" style={{ marginBottom: "28px" }}>
            <div>
              <h2 className="font-serif font-semibold" style={{ fontSize: "28px", color: "var(--charcoal)", lineHeight: 1.2 }}>
                {t("booking.title")}
              </h2>
              <p style={{ fontSize: "13px", color: "var(--slate)", marginTop: "6px" }}>
                {t("booking.whatsappDesc")}
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center transition-all duration-300 hover:scale-105"
              style={{ width: "38px", height: "38px", borderRadius: "12px", background: "var(--sand)", border: "1px solid rgba(0,0,0,0.06)", cursor: "pointer", flexShrink: 0, marginLeft: "16px" }}
            >
              <X size={16} style={{ color: "var(--slate)" }} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex" style={{ padding: "4px", borderRadius: "16px", background: "var(--sand)", border: "1px solid rgba(201, 169, 110, 0.06)", marginBottom: "28px" }}>
            <button
              onClick={() => setTab("whatsapp")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2.5 py-3 text-sm font-semibold transition-all duration-300",
                tab === "whatsapp"
                  ? "text-white"
                  : "text-[var(--slate)] hover:text-[var(--charcoal)]"
              )}
              style={{
                borderRadius: "12px",
                background: tab === "whatsapp" ? "#25D366" : "transparent",
                boxShadow: tab === "whatsapp" ? "0 4px 16px rgba(37, 211, 102, 0.25)" : "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <MessageCircle size={16} />
              WhatsApp
            </button>
            <button
              onClick={() => setTab("email")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2.5 py-3 text-sm font-semibold transition-all duration-300",
                tab === "email"
                  ? "text-white"
                  : "text-[var(--slate)] hover:text-[var(--charcoal)]"
              )}
              style={{
                borderRadius: "12px",
                background: tab === "email" ? "linear-gradient(135deg, var(--gold-dark), var(--gold))" : "transparent",
                boxShadow: tab === "email" ? "0 4px 16px rgba(201, 169, 110, 0.25)" : "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Mail size={16} />
              Email
            </button>
          </div>

          {/* WhatsApp Tab */}
          {tab === "whatsapp" && (
            <div className="text-center" style={{ padding: "16px 0 8px" }}>
              <div
                className="flex items-center justify-center mx-auto"
                style={{ width: "80px", height: "80px", borderRadius: "28px", background: "rgba(37, 211, 102, 0.08)", border: "1px solid rgba(37, 211, 102, 0.12)", marginBottom: "20px" }}
              >
                <MessageCircle size={36} style={{ color: "#25D366" }} />
              </div>
              <h3 className="font-serif font-semibold" style={{ fontSize: "20px", color: "var(--charcoal)", marginBottom: "8px" }}>{t("booking.whatsapp")}</h3>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: "1.7", maxWidth: "320px", margin: "0 auto 28px" }}>{t("booking.whatsappDesc")}</p>
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ padding: "16px", borderRadius: "16px", background: "#25D366", fontSize: "15px", border: "none", cursor: "pointer", boxShadow: "0 6px 24px rgba(37, 211, 102, 0.3)", letterSpacing: "0.04em", textTransform: "uppercase" }}
              >
                <MessageCircle size={18} />
                WhatsApp
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "20px 0 0" }}>
                <div style={{ flex: 1, height: "1px", background: "rgba(201, 169, 110, 0.12)" }} />
                <span style={{ fontSize: "12px", color: "var(--slate)", textTransform: "uppercase", letterSpacing: "0.1em" }}>ou</span>
                <div style={{ flex: 1, height: "1px", background: "rgba(201, 169, 110, 0.12)" }} />
              </div>
              <div className="flex items-center justify-center gap-2" style={{ color: "var(--slate)", fontSize: "14px", marginTop: "16px" }}>
                <Phone size={14} style={{ color: "var(--gold)" }} />
                <a href="tel:+33784703456" className="transition-colors duration-300 hover:text-[var(--gold)]" style={{ fontWeight: 500 }}>
                  +33 7 84 70 34 56
                </a>
              </div>
            </div>
          )}

          {/* Email Tab */}
          {tab === "email" && (
            <form onSubmit={handleEmailSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <input name="name" required placeholder={t("booking.form.name")} className={inputClass} />
              <div className="grid grid-cols-2" style={{ gap: "14px" }}>
                <input name="email" type="email" required placeholder={t("booking.form.email")} className={inputClass} />
                <input name="phone" type="tel" placeholder={t("booking.form.phone")} className={inputClass} />
              </div>
              <select name="service" className={inputClass} defaultValue="" style={{ color: "var(--slate)" }}>
                <option value="" disabled>{t("booking.form.service")}</option>
                <option value="airport">Transfert Aéroport</option>
                <option value="hourly">Mise à Disposition</option>
                <option value="intercity">Transfert Inter-Villes</option>
                <option value="events">Événements & Mariages</option>
                <option value="tours">Tours & Excursions</option>
                <option value="vip">Transport VIP</option>
              </select>
              <div className="grid grid-cols-2" style={{ gap: "14px" }}>
                <input name="date" type="date" className={inputClass} />
                <input name="passengers" type="number" min="1" max="16" placeholder={t("booking.form.passengers")} className={inputClass} />
              </div>

              <div style={{ height: "1px", background: "rgba(201, 169, 110, 0.1)", margin: "4px 0" }} />

              <input name="pickup" placeholder={t("booking.form.pickup")} className={inputClass} />
              <input name="destination" placeholder={t("booking.form.destination")} className={inputClass} />
              <textarea name="message" rows={3} placeholder={t("booking.form.message")} className={cn(inputClass, "resize-none")} />
              <button
                type="submit"
                className="btn-primary w-full justify-center"
                style={{ marginTop: "4px", borderRadius: "16px", padding: "17px 32px" }}
              >
                {t("booking.form.send")}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
