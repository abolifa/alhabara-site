"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative w-full min-h-dvh overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[url('/patterns/cotton.jpg')] bg-cover bg-center opacity-[0.3] blur-[1px]" />

      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.22, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute -right-20 top-10 w-[600px] h-[600px] bg-[#8d1536]/30 blur-[200px] rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.24, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute -left-16 bottom-0 w-[500px] h-[500px] bg-[#d4a065]/35 blur-[200px] rounded-full"
      />

      <div className="container relative z-20 grid lg:grid-cols-2 gap-14 px-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8d1536] leading-snug">
            {t("about.heading")}
          </h2>

          <p className="text-gray-700 max-w-md text-base leading-relaxed mt-6">
            {t("about.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-[420px] h-[420px] rounded-[30px] overflow-hidden shadow-2xl shadow-[#8d1536]/25">
            <Image
              src="/images/about-3.webp"
              alt={t("about.image_alt")}
              fill
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 right-0 bg-white p-6 rounded-3xl shadow-xl text-[#8d1536] text-sm font-semibold"
          >
            {t("about.badge")}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
