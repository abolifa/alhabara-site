"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function ProductNipiol() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen overflow-hidden select-none bg-[#48b5ff] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#48b5ff]" />

      <motion.img
        src="/products/nipiol/cloud-2.webp"
        alt={t("nipiol.cloud_alt")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.28, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute top-10 left-0 w-64 h-auto object-contain object-top z-100"
      />

      <motion.img
        src="/products/nipiol/milk-wave.png"
        alt={t("nipiol.milk_wave_alt")}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute bottom-0 w-full left-0 object-cover"
      />

      <motion.img
        src="/products/nipiol/whale.png"
        alt={t("nipiol.whale_alt")}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.9 }}
        viewport={{ once: true }}
        className="absolute bottom-[15vh] lg:bottom-[22vh] right-[40vw] w-[200px] z-40"
      />

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between px-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-[45%] w-full text-center lg:text-left text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight">
            {t("nipiol.title")}
          </h1>

          <p className="mt-6 text-lg lg:text-xl opacity-90 leading-relaxed">
            {t("nipiol.description")}
          </p>

          <p className="mt-4 text-sm opacity-80">{t("nipiol.details")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full mt-20 max-w-[620px] flex justify-center"
        >
          <Image
            src="/products/nipiol/bis.webp"
            alt={t("nipiol.biscuit_alt")}
            width={2000}
            height={2000}
            className="drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)] scale-[1.05]"
          />
        </motion.div>
      </div>
    </section>
  );
}
