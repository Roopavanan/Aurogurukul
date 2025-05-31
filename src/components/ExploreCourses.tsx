"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type SubjectTag = {
  name: string;
  id: string;
};

type CourseCategory = {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  arrowBgColor: string;
  subjects: SubjectTag[];
};

export default function ExploreCourses() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const categories: CourseCategory[] = [
    {
      id: "class-1-3",
      title: "Class 1 - 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nisl tempus, ultrices mi in, finibus ligula.",
      bgColor: "#F8F3FD",
      textColor: "#8363A9",
      arrowBgColor: "#C5A0F1",
      subjects: [
        { name: "English", id: "english-1-3" },
        { name: "Hindi", id: "hindi-1-3" },
        { name: "Mathematics", id: "mathematics-1-3" },
        { name: "Social Science", id: "social-science-1-3" },
        { name: "Visual Elements", id: "visual-elements-1-3" }
      ]
    },
    {
      id: "class-4-8",
      title: "Class 4 - 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nisl tempus, ultrices mi in, finibus ligula.",
      bgColor: "#FFF9EF",
      textColor: "#B28842",
      arrowBgColor: "#FCCB7A",
      subjects: [
        { name: "English", id: "english-4-8" },
        { name: "Language", id: "language-4-8" },
        { name: "Mathematics", id: "mathematics-4-8" },
        { name: "Visual Studies", id: "visual-studies-4-8" },
        { name: "History", id: "history-4-8" },
        { name: "Biology", id: "biology-4-8" }
      ]
    },
    {
      id: "class-9-12",
      title: "Class 9 - 12",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nisl tempus, ultrices mi in, finibus ligula.",
      bgColor: "#F4FCF5",
      textColor: "#669E6E",
      arrowBgColor: "#A4E4AD",
      subjects: [
        { name: "JEE", id: "jee-9-12" },
        { name: "English", id: "english-9-12" },
        { name: "Maths", id: "maths-9-12" },
        { name: "History", id: "history-9-12" },
        { name: "Geographical Study", id: "geographical-study-9-12" },
        { name: "French", id: "french-9-12" },
        { name: "Artificial Intelligence", id: "ai-9-12" },
        { name: "Visual Communication", id: "visual-communication-9-12" }
      ]
    },
    {
      id: "under-graduate",
      title: "Under Graduate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nisl tempus, ultrices mi in, finibus ligula.",
      bgColor: "#FEEFEB",
      textColor: "#AD4027",
      arrowBgColor: "#F6785B",
      subjects: [
        { name: "JEE", id: "jee-ug" },
        { name: "Engineer", id: "engineer-ug" },
        { name: "French", id: "french-ug" },
        { name: "Civil Service", id: "civil-service-ug" },
        { name: "B.Tech", id: "btech-ug" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#e67e22",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background SVG Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/icons/red-line.svg"
          alt="Decorative line background"
          fill
          className="object-cover object-center opacity-50 "
        />
    
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F97316] mb-4">
            Explore Courses
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet nisl tempus, ultrices mi in, finibus ligula.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="rounded-2xl p-6 relative overflow-hidden cursor-pointer"
              style={{ backgroundColor: category.bgColor }}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Link href={`/courses/${category.id}`} className="block">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: category.textColor }}
                  >
                    {category.title}
                  </h3>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: category.arrowBgColor }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.subjects.map((subject) => (
                    <span
                      key={subject.id}
                      className="text-xs px-3 py-1 rounded-[6px] border"
                      style={{
                        borderColor: category.textColor,
                        color: category.textColor,
                        backgroundColor: "transparent"
                      }}
                    >
                      {subject.name}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={buttonVariants}
        >
          <Link
            href="/courses"
            className="bg-[#F97316] hover:bg-[#e67e22] text-white font-medium px-8 py-3 rounded-full transition-all duration-300"
          >
            Explore All Courses
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
