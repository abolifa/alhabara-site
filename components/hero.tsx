"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        delay: Math.random() * 4,
        duration: Math.random() * 7 + 7,
        opacity: Math.random() * 0.45 + 0.15,
      })),
    []
  );

  return (
    <section
      id="hero"
      className="relative w-full min-h-svh overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 -z-10 bg-[url('/patterns/white-flag.jpeg')] bg-cover bg-center bg-no-repeat opacity-[0.72] blur-[1px]" />
      <div className="absolute inset-0 -z-8 bg-white/40 backdrop-blur-[2px]" />

      <motion.div
        initial={{ opacity: 0.05, scale: 0.8 }}
        animate={{ opacity: 0.22, scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute w-[900px] h-[900px] bg-[#8d1536]/30 blur-[200px] rounded-full -top-40 -right-32 -z-7"
      />
      <motion.div
        initial={{ opacity: 0.05, scale: 0.8 }}
        animate={{ opacity: 0.28, scale: 1 }}
        transition={{ duration: 4, ease: "easeOut", delay: 1.2 }}
        className="absolute w-[700px] h-[700px] bg-[#d4a065]/40 blur-[200px] rounded-full bottom-0 left-0 -z-7"
      />

      <div className="container relative z-10 px-6 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="mb-6"
        >
          <Image
            src="/meta/logo-icon.png"
            alt={t("hero.logo_alt")}
            width={145}
            height={145}
            priority
            className="drop-shadow-[0_0_25px_rgba(141,21,54,0.28)] scale-[1.02] w-40 h-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-bold text-[#8d1536] tracking-wide"
        >
          {t("hero.title")}
          <span className="block text-[#4e4e4e] font-light mt-3 text-2xl sm:text-3xl">
            {t("hero.subtitle")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.25 }}
          className="max-w-[650px] mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed backdrop-blur-[1px]"
        >
          {t("hero.description")}
        </motion.p>

        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.35 }}
          className="mt-10 px-10 py-4 rounded-full text-lg font-medium text-white bg-linear-to-r from-[#8d1536] to-[#b61e50] shadow-[0_0_28px_rgba(141,21,54,0.48)] hover:shadow-[0_0_45px_rgba(141,21,54,0.7)] transition-all"
        >
          {t("hero.cta")}
        </motion.a>
      </div>
    </section>
  );
}
