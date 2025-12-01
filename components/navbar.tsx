"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LanguageToggle } from "./language-switcher";
import { Linkedin, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import NoSSR from "./no-ssr";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return setScrolled(false);

    const handle = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, [pathname]);

  const menu = [
    { title: t("nav.home"), path: "#hero" },
    { title: t("nav.about"), path: "#about" },
    { title: t("nav.products"), path: "#products" },
    { title: t("nav.contact"), path: "#contact" },
  ];

  const go = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setOpen(false);

    if (pathname === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  const isHome = pathname === "/";
  const textColor = isHome && !scrolled ? "text-black" : "text-black";

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-20 flex items-center z-50 transition-all duration-300 backdrop-blur-lg",
        isHome
          ? scrolled
            ? "bg-white/90 shadow-sm"
            : "bg-transparent"
          : "bg-white shadow-sm"
      )}
    >
      <header className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center justify-center">
          <Image
            src="/meta/logo-icon.png"
            alt="Logo"
            className="w-10 h-auto object-contain"
            width={500}
            height={500}
            priority
            loading="eager"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menu.map((i) => (
            <a
              key={i.path}
              href={i.path}
              onClick={(e) => go(e, i.path)}
              className={cn(
                "text-lg font-light hover:text-[#8d1536] hover:underline underline-offset-4 transition",
                textColor
              )}
            >
              {i.title}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/218913535003"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            <FaWhatsapp size={18} />
          </a>
          <NoSSR>
            <LanguageToggle />
          </NoSSR>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn("md:hidden p-2 rounded-lg transition", textColor)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-xl md:hidden shadow-xl">
          <div className="flex flex-col py-6 items-center gap-5">
            {menu.map((i) => (
              <a
                key={i.path}
                href={i.path}
                onClick={(e) => go(e, i.path)}
                className="text-white text-lg hover:text-amber-400 transition"
              >
                {i.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
