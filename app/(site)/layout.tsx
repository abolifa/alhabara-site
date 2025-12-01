"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/i18n";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-dvh flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
