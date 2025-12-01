"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();

  return (
    <section id="products" className="relative w-full py-28 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 0.22, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-[url('/patterns/cotton.jpg')] bg-cover bg-center opacity-[0.32] blur-[1px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 container px-6 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#8d1536] tracking-wide">
          {t("products.title")}
        </h2>

        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {t("products.slogan")}
        </p>
      </motion.div>
    </section>
  );
}
