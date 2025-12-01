"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative w-full bg-white overflow-hidden select-none">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute right-[-25%] bottom-[-40%] w-[900px] h-[900px] bg-[#ffd6e6] blur-[300px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 0.33, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute left-[-25%] top-[-40%] w-[850px] h-[850px] bg-[#9fdcff] blur-[300px] rounded-full"
        />
      </div>

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 py-24 grid md:grid-cols-3 gap-16">
        {/* COLUMN 1 – Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <Image
            src="/meta/logo-icon.png"
            alt={t("footer.logo_alt")}
            width={110}
            height={110}
            className="mb-6 opacity-95"
          />

          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            {t("footer.brand_desc")}
          </p>
        </motion.div>

        {/* COLUMN 2 – Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.25 }}
          viewport={{ once: true }}
        >
          <h4 className="font-semibold text-[#8d1536] text-lg mb-5 tracking-wide">
            {t("footer.explore_title")}
          </h4>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li>
              <a href="#hero" className="hover:text-[#8d1536]">
                {t("nav.home")}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#8d1536]">
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#8d1536]">
                {t("nav.products")}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#8d1536]">
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </motion.div>

        {/* COLUMN 3 – Contact + Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
        >
          <h4 className="font-semibold text-[#8d1536] text-lg mb-5 tracking-wide">
            {t("footer.contact_title")}
          </h4>

          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <a
              href="https://maps.google.com/?q=Tripoli+Libya"
              target="_blank"
              className="flex items-center gap-3 hover:text-[#8d1536]"
            >
              <FaMapPin className="text-[#8d1536] w-4 h-4" />
              {t("footer.address")}
            </a>

            <a
              href="mailto:info@alhabara.com.ly"
              className="flex items-center gap-3 hover:text-[#8d1536]"
            >
              <FaEnvelope className="text-[#8d1536] w-4 h-4" />
              {t("footer.email")}
            </a>

            <a
              href="tel:+218912131319"
              className="flex items-center gap-3 hover:text-[#8d1536]"
            >
              <FaPhone className="text-[#8d1536] w-4 h-4" />
              {t("footer.phone")}
            </a>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 border-t border-gray-200 text-center py-6 text-xs tracking-widest text-gray-500">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
