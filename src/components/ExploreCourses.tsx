"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { categories } from "@/data/courseData"; 




export default function ExploreCourses() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });


  return (
    <section
      ref={sectionRef}
      className="w-full py-28  relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/icons/red-line.svg"
          alt="Decorative line background"
          fill
          className="object-fill object-center opacity-50"
        />
      </div>

      <div className="max-w-full mx-auto ">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-primary text-[#F97316] mb-4">
            Explore Courses
          </h2>
         
        </motion.div>

        {/* Infinite Scrolling Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 animate-slide "
            style={{ width: `${categories.length * 280 * 2}px` }}
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }}
          >
            {[...categories, ...categories].map((category, index) => (
              <div
                key={index}
                className="h-[340px] w-[300px] flex-shrink-0 rounded-2xl p-6 relative overflow-hidden cursor-pointer"
                style={{ backgroundColor: category.bgColor }}
              >
<Link href={`/courses/${category.id}`} className="block">
                  <div className="flex justify-between items-start mb-2">
                    <h3
                      className="text-xl font-bold font-primary"
                      style={{ color: category.textColor }}
                    >
                      {category.title}
                       <p
                    className="mb-4 text-sm font-primary"
                    style={{ color: category.textColor }}
                  >
                     {category.course}
                  </p>
                    </h3>
                    
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: category.arrowBgColor }}
                    >
                      <IoIosArrowForward className="text-white text-lg" />
                    </div>
                  </div>
                  
                  <p
                    className="mb-4 text-sm font-secondary"
                    style={{ color: category.textColor }}
                  >
                    <strong>Focus:</strong> {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.subjects.map((subject) => (
                      <span
                        key={subject.id}
                        className="text-xs px-3 py-1 rounded-[6px] border"
                        style={{
                          borderColor: category.textColor,
                          color: category.textColor
                        }}
                      >
                        {subject.name}
                      </span>
                    ))}
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
