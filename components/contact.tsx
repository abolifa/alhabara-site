"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaMapPin, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function ContactAlhabara() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("جاري الإرسال...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("to", "info@watanalmajd.com.ly");

    try {
      const response = await fetch("https://relay.eratech.com.ly/send", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();

      if (text.includes("OK")) {
        setStatus("✔ تم الإرسال بنجاح");
        form.reset();
      } else {
        setStatus("⚠ حدث خطأ أثناء الإرسال");
      }
    } catch {
      setStatus("⚠ فشل الاتصال بالخادم");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden select-none bg-[#fdfdfd]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.3 }}
        whileInView={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-[-25%] right-[-15%] w-[900px] h-[900px] bg-[#ffd6e6] blur-[240px] rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, scale: 1.3 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-[-20%] left-[-15%] w-[800px] h-[800px] bg-[#9fdcff] blur-[220px] rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-7xl grid lg:grid-cols-2 gap-10 px-10 py-10"
      >
        {/* LEFT = MAIN FORM CARD */}
        <div className="rounded-3xl h-full min-h-[620px] backdrop-blur-xl bg-white/20 border border-white/30 shadow-[0_0_45px_rgba(0,0,0,0.06)] p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl font-bold text-[#8d1536] tracking-tight">
              {t("contact.title")}
            </h2>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>

          <form action="#" onSubmit={handleSubmit} className="mt-10 space-y-6">
            <input
              type="text"
              placeholder={t("contact.fullname")}
              className="w-full bg-white/70 rounded-xl px-5 py-3 text-gray-800 shadow-sm outline-none"
            />

            <input
              type="email"
              placeholder={t("contact.email")}
              className="w-full bg-white/70 rounded-xl px-5 py-3 text-gray-800 shadow-sm outline-none"
            />

            <input
              type="text"
              placeholder={t("contact.phone")}
              className="w-full bg-white/70 rounded-xl px-5 py-3 text-gray-800 shadow-sm outline-none"
            />

            <textarea
              placeholder={t("contact.message")}
              rows={4}
              className="w-full bg-white/70 rounded-xl px-5 py-3 text-gray-800 shadow-sm outline-none"
            />

            <button
              type="submit"
              className="w-full py-4 text-lg font-semibold rounded-xl bg-[#8d1536] text-white hover:bg-[#6d0e28] transition-all"
            >
              {t("contact.send")}
            </button>
          </form>
        </div>

        {/* RIGHT = CONTACT CARD + MAP STACKED CLEANLY */}
        <div className="flex flex-col gap-5 h-full min-h-[620px]">
          <div className="rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-8 flex flex-col justify-center gap-4">
            <h3 className="text-3xl font-bold text-[#8d1536] mb-1">
              {t("contact.card_title")}
            </h3>

            <div className="flex items-center gap-3">
              <FaMapPin className="text-[#8d1536]" />
              <p>{t("contact.card_address")}</p>
            </div>
            <Link
              href="mailto:info@alhabara.com.ly"
              className="flex items-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-[#8d1536]" />
              <p className="underline">{t("contact.card_email")}</p>
            </Link>
            <Link
              href="tel:+218912131319"
              className="flex items-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone className="text-[#8d1536]" />
              <p className="underline">{t("contact.card_phone")}</p>
            </Link>
            <Link
              href="https://wa.me/218913535003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <FaWhatsapp className="text-[#8d1536]" />
              <p className="underline">{t("contact.card_whatsapp")}</p>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden h-full bg-white p-5 shadow-[0_15px_45px_rgba(0,0,0,0.12)]"
          >
            <iframe
              src="https://www.google.com/maps?q=32.33865326713221,15.112961706867829&hl=en&z=18&output=embed"
              className="w-full h-full border-none rounded-xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
