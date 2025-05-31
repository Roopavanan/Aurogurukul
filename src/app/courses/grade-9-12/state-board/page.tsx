'use client';

import { useState } from "react";
import classNames from "classnames";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

// Define tab types
const tabs = ["Online Courses", "Offline Courses", "Sports & Music"] as const;
type TabType = typeof tabs[number];

// Define course type
type Course = {
  title: string;
  description: string;
  bg: string;
  iconColor: string;
  textColor: string;
};

// Define course data type
const courseData: Record<TabType, Course[]> = {
  "Online Courses": [
    {
      title: "Social Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nisi tempus, ultrices mi in, finibus ligula.",
      bg: "#F8F3FD",
      iconColor: "#C5A0F1",
      textColor: "#8363A9"
    },
    {
      title: "Language",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nisi tempus, ultrices mi in, finibus ligula.",
      bg: "#FFF9EF",
      iconColor: "#FCCB7A",
      textColor: "#B28842"
    },
    {
      title: "Artificial Intelligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nisi tempus, ultrices mi in, finibus ligula.",
      bg: "#F4FCF5",
      iconColor: "#A4E4AD",
      textColor: "#669E6E"
    },
    {
      title: "JEE/NEET",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nisi tempus, ultrices mi in, finibus ligula.",
      bg: "#FEEFEB",
      iconColor: "#F6785B",
      textColor: "#AD4027"
    }
  ],
  "Offline Courses": [
    {
      title: "Biology Lab",
      description:
        "Hands-on sessions for human anatomy, botany, and zoology practicals.",
      bg: "#EDF7FA",
      iconColor: "#4BB1C8",
      textColor: "#357E8E"
    }
  ],
  "Sports & Music": [
    {
      title: "Music (Vocal)",
      description:
        "Indian classical and western vocal training with theory and performance.",
      bg: "#F4FCF5",
      iconColor: "#90DE9B",
      textColor: "#669E6E"
    },
    {
      title: "Football Coaching",
      description:
        "Skill development, matches, and physical fitness tailored for teens.",
      bg: "#FEEFEB",
      iconColor: "#F6785B",
      textColor: "#8B331F"
    }
  ]
};

export default function Class9Courses() {
  const [activeTab, setActiveTab] = useState<TabType>("Online Courses");

  return (
    <div className="w-full px-4 md:px-10 py-10 space-y-10">
      {/* Hero Section */}
      <section className="bg-[#FEEFEB] rounded-[40px] px-6 py-10 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold font-primary text-[#AD4027] mb-4">
          Class 9
        </h2>
        <p className="text-md text-[#AD4027] max-w-2xl mx-auto mb-6 font-secondary">
          At AuroGurukul, each course is a pathway to both academic excellence
          and inner growth—blending real-world skills with the values of
          Integral Education.
        </p>
        <button className="bg-[#EE842C] text-white px-6 py-1 rounded-md hover:bg-[#ee832cd0]">
          Enrol Now
        </button>
      </section>

      {/* Tab Filter */}
      <div className="w-full max-w-7xl mx-auto flex justify-start gap-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={classNames(
              "pb-2 text-sm font-semibold",
              activeTab === tab
                ? "text-[#F45A37] border-b-2 border-[#F45A37]"
                : "text-[#BEBEBE]"
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courseData[activeTab].map(
            ({ title, description, bg, iconColor, textColor }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl p-6 flex flex-col justify-between text-sm"
                style={{ backgroundColor: bg }}
              >
                {/* Arrow icon top-right */}
                <div className="absolute top-4 right-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: iconColor }}
                  >
                    <IoIosArrowForward className="text-white text-xs" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-semibold font-primary text-base mb-2"
                  style={{ color: textColor }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm font-secondary leading-relaxed mb-6"
                  style={{ color: textColor }}
                >
                  {description}
                </p>

                {/* Button */}
                <div className="flex justify-center">
                  <button className="bg-[#EE842C] hover:bg-[#ee832cea] text-white text-xs px-4 py-1.5 rounded-md">
                    Add to cart →
                  </button>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
