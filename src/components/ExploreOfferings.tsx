// components/ExploreOfferings.tsx
"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const ExploreOfferings: FC = () => {
  return (
    <section className="relative py-20 px-6 md:px-0 bg-white overflow-hidden">
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-primary text-[#EE842C] mb-2">
          Explore Our Offerings
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto font-secondary text-md">
          Dive into our courses, activities, and resources designed for
          21st-century learners.
        </p>
      </div>

      <div className="relative z-0 w-full">
        {/* Full-width SVG lines (positioned absolutely inside this block) */}
        <div className="absolute top-0 inset-0 pointer-events-none z-0">
          <Image
            src="/icons/violet-line.svg"
            alt="Line 1"
            fill
            className="object-cover object-center"
          />
          <Image
            src="/icons/yellow-line.svg"
            alt="Line 2"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Layout with exact sizes */}
        <div className="relative z-10 max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-4 items-center justify-center">
          {/* Left tall card */}
          <motion.div
  className="bg-[#E3F4FA] border border-[#9BD9F2] rounded-[30px] p-6 shadow-sm flex flex-col justify-between w-full max-w-[506px]"
  style={{ height: 370 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-800 mb-6 text-[14px] md:text-[18px] font-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              in tellus quis leo condimentum porttitor ac vestibulum magna.
              Phasellus cursus lacinia purus, at molestie nunc dignissim eget.
              Donec gravida, mauris non porttitor ullamcorper, lacus neque
              condimentum orci, eu tristique arcu turpis sed eros. Maecenas id
              hendrerit nibh. In hac habitasse platea dictumst.
            </p>
            <Link
              href="/courses"
              className="text-sky-800 font-semibold flex justify-end gap-2 text-sm"
            >
              View All Courses <span className="text-lg"><IoIosArrowForward />
</span>
            </Link>
          </motion.div>

          {/* Right stacked cards */}
          <div className="flex flex-col gap-2">
            <motion.div
              className="bg-[#F0E7FF] border border-[#D4B9FF] rounded-[30px] p-6 shadow-sm flex flex-col justify-between"
              style={{ width: "100%", maxWidth: "506px", height: "180px" }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-800 mb-6 text-[14px] md:text-[18px] font-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent in tellus quis leo condimentum porttitor ac vestibulum
                magna.
              </p>
              <Link
                href="/resources"
                className="text-purple-700 font-semibold flex justify-end gap-2 text-sm"
              >
                Explore Resources <span className="text-lg"><IoIosArrowForward />
</span>
              </Link>
            </motion.div>

            <motion.div
              className="bg-[#FFF6E5] border border-[#FFDDA4] rounded-[30px] p-6 shadow-sm flex flex-col justify-between"
              style={{ width: "100%", maxWidth: "506px", height: "180px" }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-gray-800 mb-6 text-[14px] md:text-[18px] font-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent in tellus quis leo condimentum porttitor ac vestibulum
                magna.
              </p>
              <Link
                href="/activities"
                className="text-yellow-700 font-semibold flex justify-end gap-2 text-sm"
              >
                See Activities <span className="text-lg"><IoIosArrowForward /></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOfferings;
