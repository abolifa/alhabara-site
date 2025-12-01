import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-kufi",
  preload: true,
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alhabara.com.ly"),
  title: {
    default: "Alhabara — Mother & Baby Products",
    template: "%s | Alhabara",
  },
  description:
    "Alhabara specializes in mother and baby products — premium diapers, baby biscuits, infant care and gentle supplies carefully selected for softness, comfort, and safety.",
  keywords: [
    "Alhabara",
    "Baby Products Libya",
    "Mother care Libya",
    "Diapers Libya",
    "Nipiol Libya",
    "Montefiore Biscuit",
    "Baby supplies Misurata",
    "Infant products Libya",
    "Premium baby biscuits",
    "GOO.N baby diapers Libya",
  ],
  openGraph: {
    type: "website",
    locale: "ar_LY",
    url: "https://alhabara.com.ly",
    siteName: "Alhabara",
    title: "Alhabara — Mother & Baby Products",
    description:
      "Premium infant and mother care products — soft, safe and quality tested. Trusted brands including Nipiol, GOON, Montefiore and more.",
    images: ["/meta/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alhabara — Mother & Baby Supplies",
    description:
      "Safe, soft and trusted baby products — diapers, biscuits, infant care & more.",
    images: ["/meta/og-image.jpg"],
  },
  alternates: {
    canonical: "https://alhabara.com.ly",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("antialiased", kufi.variable, kufi.className)}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
