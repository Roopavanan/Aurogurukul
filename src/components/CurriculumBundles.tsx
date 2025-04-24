"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";


interface Bundle {
  title: string;
  description: string;
}

const bundles: Bundle[] = [
  {
    title: "6–8 Grade",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mattis justo. Sed in consequat libero.",
  },
  {
    title: "9–12 Grade",
    description:
      "Curriculum tailored for high school success, with emphasis on core subjects.",
  },
  {
    title: "Graduation",
    description:
      "Resources and guidance for graduation requirements and final-year prep.",
  },
  {
    title: "Unschooling",
    description:
      "Flexible, interest-driven educational paths for alternative learning styles.",
  },
];

export default function CurriculumBundles() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-blue-300 py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-primary text-black mb-12">
        Curriculum Bundles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {bundles.map((bundle, index) => (
          <motion.div
            key={index}
            className="relative group bg-[#fdddc3] rounded-[25px] h-48 md:h-56 flex items-center justify-center shadow-md cursor-pointer overflow-hidden transition-transform duration-300"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="text-center font-semibold font-secondary text-black text-lg">
              {bundle.title}
            </div>

            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-[#fbbf77] rounded-[25px] p-8 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-md md:text-lg font-bold font-primary text-black mb-2">
                      {bundle.title}
                    </h3>
                    <p className="text-sm text-black font-secondary">
                      {bundle.description}
                    </p>
                  </div>
                  <Link
                    href={`/bundle/${bundle.title
                      .toLowerCase()
                      .replace(/–| /g, "-")}`}
                    className="mt-4"
                  >
                    <button className="bg-[#f88c2b] font-primary hover:bg-[#ff9b3e] text-white font-bold py-2 px-4 rounded-full mx-auto transition-all duration-200 text-sm">
                      View Bundle
                    </button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
