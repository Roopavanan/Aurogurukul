"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

type SubjectTag = {
  name: string;
  id: string;
};

type CourseCategory = {
  id: string;
  title: string;
  course: string;
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
      id: "class 9",
      title: "Class 9",
      course: "CourseA - 160 Hours",
      description:
        "In Mathematics, Science, and Aptitude to build a strong foundation in Ideal for: (NEET/ JEE Foundation, , NTSE, Olympiads )",
      bgColor: "#F8F3FD",
      textColor: "#8363A9",
      arrowBgColor: "#C5A0F1",
      subjects: [
        { name: "Physics", id: "physics-9" },
        { name: "Chemistry", id: "chemistry-9" },
        { name: "Biology", id: "biology-9" },
        { name: "Mathematics", id: "mathematics-9" },
        { name: "Mental Ability", id: "mental ability-9" }
      ]
    },
    {
      id: "class-9-1",
      title: "Class 9",
      course: "CourseB - 160 Hours",
      description:
        "Development of Language Skills, Aptitude, General Knowledge, and General Science, mathematics Ideal for: Aspirants of IAS, IPS, IFS, Leadership, and Entrepreneurship  ",
      bgColor: "#FFF9EF",
      textColor: "#B28842",
      arrowBgColor: "#FCCB7A",
      subjects: [
        { name: "English", id: "english-9-1" },
        { name: "General studies", id: "general studies-9-1" },
        { name: "Mental Ability", id: "mental ability-9-1" },
        { name: "General Science", id: "general science-9-1" },
        { name: "Mathematics", id: "mathematics-9-1" }
      ]
    },
    {
      id: "class-10",
      title: "Class 10",
      course: "CourseA - 160 Hours",
      description:
        "Advanced training in Science and Mathematics for careers in Medicine, Engineering, and Technology.",
      bgColor: "#F4FCF5",
      textColor: "#669E6E",
      arrowBgColor: "#A4E4AD",
      subjects: [
        { name: "Mathematics", id: "mathematics-10" },
        { name: "Physics", id: "physics-10" },
        { name: "Biology", id: "biology-10" },
        { name: "Chemistry", id: "chemistry-10" },
        { name: "Mental Ability", id: "mental-ability-10" }
      ]
    },
    {
      id: "class-10-1",
      title: "Class 10",
      course: "CourseB - 160 Hours",
      description: "IAS, IPS, IFS Aspirants, Leadership, and Entrepreneurs.",
      bgColor: "#FEEFEB",
      textColor: "#AD4027",
      arrowBgColor: "#F6785B",
      subjects: [
        { name: "JEE", id: "jee-10-1" },
        { name: "Engineer", id: "engineer-10-1" },
        { name: "French", id: "french-10-1" },
        { name: "Civil Service", id: "civil-service-10-1" },
        { name: "B.Tech", id: "btech-10-1" }
      ]
    },
    {
      id: "class-10-2",
      title: "Class 10",
      course: "CourseC - 160 Hours",
      description: "Optimized Performance in Class 10 Board Exams.",
      bgColor: "#F8F3FD",
      textColor: "#8363A9",
      arrowBgColor: "#C5A0F1",
      subjects: [
        { name: "English", id: "english-10-2" },
        { name: "Science", id: "science-10-2" },
        { name: "Social Science", id: "social-science-10-2" },
        { name: "Mathematics", id: "mathematics-10-2" }
      ]
    },
    {
      id: "class-11-12",
      title: "Class 11 & 12",
      course: "CourseA - 320 Hours",
      description: " (Integrated) Board + NEET Preparation.  ",
      bgColor: "#FFF9EF",
      textColor: "#B28842",
      arrowBgColor: "#FCCB7A",
      subjects: [
        { name: "Physics", id: "physics-11-12" },
        { name: "Chemistry", id: "chemistry-11-12" },
        { name: "Botany", id: "botany-11-12" },
        { name: "Zology", id: "zology-11-12" }
      ]
    },
    {
      id: "class-11-12-1",
      title: "Class 11 & 12",
      course: "CourseB - 320 Hours",
      description: "Board + IIT-JEE Preparation.",
      bgColor: "#F4FCF5",
      textColor: "#669E6E",
      arrowBgColor: "#A4E4AD",
      subjects: [
        { name: "Mathematics", id: "mathematics-11-12" },
        { name: "Physics", id: "physics-11-12" },
        { name: "Chemistry", id: "chemistry-11-12" }
      ]
    },
    {
      id: "class-11-12-2",
      title: "Class 11 & 12",
      course: "CourseC - 320 Hours",
      description: "Board ( Commerce Stream ) + CA foundation.",
      bgColor: "#FEEFEB",
      textColor: "#AD4027",
      arrowBgColor: "#F6785B",
      subjects: [
        { name: "Business Mathematics", id: "business-mathematics-11-12-2" },
        { name: "Accounting", id: "accounting-11-12-2" },
        { name: "Economics", id: "economics-11-12-2" }
      ]
    },
    {
      id: "12th Pass",
      title: "12th Pass ",
      course: "CourseA - 540 Hours",
      description: "Integrated + NEET",
      bgColor: "#F8F3FD",
      textColor: "#8363A9",
      arrowBgColor: "#C5A0F1",
      subjects: [
        { name: "Physics", id: "physics-12th" },
        { name: "Chemistry", id: "chemistry-12th" },
        { name: "Zoology", id: "zoology-12th" },
        { name: "Botany", id: "botany-12th" }
      ]
    },
    {
      id: "12th Pass-1",
      title: "12th Pass",
      course: "CourseB - 540 Hours",
      description: "JEE Mains/ Advanced",
      bgColor: "#FFF9EF",
      textColor: "#B28842",
      arrowBgColor: "#FCCB7A",
      subjects: [
        { name: "Physics", id: "physics-12th-2" },
        { name: "Chemistry", id: "chemistry-12th-2" },
        { name: "Mathematics", id: "mathematics-12th-2" }
      ]
    }
  ];

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
                className="h-[340px] w-[280px] flex-shrink-0 rounded-2xl p-6 relative overflow-hidden cursor-pointer"
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
