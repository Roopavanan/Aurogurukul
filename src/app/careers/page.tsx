"use client";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function CareersPage() {
  return (
    <section className="bg-[#FFF6F0] py-24 px-6 sm:px-12 lg:px-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-[#D65104] mb-6 font-primary">
          Careers at Aurogurukul
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl mb-8 font-secondary">
          Currently, we aren’t offering any positions.
        </p>
        <p className="text-gray-600 text-base sm:text-lg mb-6 font-secondary">
          Follow us on LinkedIn to stay updated on future opportunities.
        </p>
        <a
          href="https://www.linkedin.com/company/aurogurukul/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 bg-[#0A66C2] text-white rounded-md font-medium hover:bg-[#084c96] transition"
        >
          <FaLinkedin size={20} /> Visit our LinkedIn Page
        </a>
      </motion.div>
    </section>
  );
}
