"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function ProductGoon() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden select-none bg-linear-to-b from-[#ffd9e4] to-white">
      {/* Soft breathing cloud fog */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-[url('/products/goon/mist.png')] bg-cover bg-center"
      />

      <div className="relative z-20 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between px-12 py-24 gap-16">
        {/* TEXT — Premium look */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-[48%] text-center lg:text-left"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-[#b6224d] tracking-tight">
            {t("goon.title")}
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
            {t("goon.description")}
          </p>

          <p className="mt-4 text-sm text-gray-500 tracking-wide">
            {t("goon.details")}
          </p>
        </motion.div>

        {/* PRODUCT PACK — Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-[45%] w-[90%] max-w-[750px]"
        >
          <Image
            src="/products/goon/goon.png"
            alt={t("goon.alt_box")}
            width={1500}
            height={1500}
            className="rounded-xl w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
