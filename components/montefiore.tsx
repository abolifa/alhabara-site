"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function ProductMontefiore() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen overflow-hidden select-none bg-[#e43626] flex items-center justify-center">
      {/* BASE COLOR */}
      <div className="absolute inset-0 bg-[#e43626]" />
      {/* MILK WAVE */}
      <motion.img
        src="/products/nipiol/milk-wave.png"
        alt={t("montefiore.milk_alt")}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute bottom-0 w-full left-0 object-cover"
      />

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between px-10">
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-[45%] w-full text-center lg:text-left text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight">
            {t("montefiore.title")}
          </h1>

          <p className="mt-6 text-lg lg:text-xl opacity-90 leading-relaxed">
            {t("montefiore.description")}
          </p>

          <p className="mt-4 text-sm opacity-85">{t("montefiore.details")}</p>
        </motion.div>

        {/* PRODUCT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full mt-20 max-w-[450px] flex justify-center"
        >
          <Image
            src="/products/montefiore/side.png"
            alt={t("montefiore.alt")}
            width={1800}
            height={1800}
            className="drop-shadow-[0_40px_80px_rgba(0,0,0,0.40)] scale-[1.07]"
          />
        </motion.div>
      </div>
    </section>
  );
}
