"use client";

import { LanguageProvider } from "@/lib/language-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}
