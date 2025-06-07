"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample images (replace with real paths)
const galleryItems = [
  { id: 1, category: "labs", src: "/images/workshop.png" },
  { id: 2, category: "labs", src: "/images/counselling.png" },
  { id: 3, category: "classroom", src: "/images/guest-lectures.png" },
  { id: 4, category: "materials", src: "/images/kit-1.png" },
  { id: 5, category: "materials", src: "/images/kit-2.png" },
  { id: 6, category: "classroom", src: "/images/teaching.png" },
];

const filters = ["all", "labs", "classroom", "materials"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* 🔹 Hero Section */}
      <section className="bg-[#FFF6F0] py-20 px-6 sm:px-12 lg:px-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#D65104] mb-4 font-primary">
            Explore Our Campus in Pictures
          </h1>
          <p className="text-[#444] text-lg font-secondary">
            A visual journey through our learning spaces — labs, classrooms, and educational resources.
          </p>
        </motion.div>
      </section>

      {/* 🔸 Filter & Gallery */}
      <section className="py-16 px-6 sm:px-12 lg:px-28 bg-white">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium transition border ${
                activeFilter === filter
                  ? "bg-[#EE842C] text-white border-[#EE842C]"
                  : "bg-white text-[#EE842C] border-[#EE842C]"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={item.src}
                alt={item.category}
                width={500}
                height={300}
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
