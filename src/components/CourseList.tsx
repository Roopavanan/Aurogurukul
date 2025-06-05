'use client';

import { CourseCategory } from "@/data/courseData";
import { motion } from "framer-motion";
import Link from "next/link";


export default function CourseList({
  courses,
}: {
  baseClass: string;
  courses: CourseCategory[];
}) {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white">
      <motion.div
        className="bg-[#FEEFEB] p-8 rounded-3xl text-center max-w-8xl mx-auto mb-16 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-[#AD4027] mb-4 font-primary">
          {courses[0].title}
        </h1>
        <p className="text-[#AD4027] max-w-3xl mx-auto leading-relaxed font-secondary">
          At AuroGurukul, each course is a pathway to both academic excellence
          and inner growth—blending real-world skills with the values of Integral
          Education.
        </p>
        <button className="mt-6 px-6 py-1 bg-[#EE842C] text-white rounded-md hover:bg-[#ea6205] transition">
          Enroll Now
        </button>
      </motion.div>

      <div className="flex flex-wrap gap-6 justify-start">
{courses.map((category, index) => (
  <Link
    href={`/courses/details/${category.id}`}
    className="block"
    key={category.id} // 🔁 Moved here
  >          <motion.div
            key={category.id}
            className="w-[300px] h-[340px] rounded-4xl p-6  flex flex-col justify-start gap-6"
            style={{ backgroundColor: category.bgColor }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div>
              <h3 className="text-lg font-bold font-primary mb-1" style={{ color: category.textColor }}>
                {category.title}
              </h3>
              <p className="text-sm font-semibold mb-2 font-primary" style={{ color: category.textColor }}>
                {category.course}
              </p>
              <p className="text-sm mb-4 font-secondary" style={{ color: category.textColor }}>
                <strong>Focus:</strong> {category.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 ">
              {category.subjects.map((subject) => (
                <span
                  key={subject.id}
                  className="text-xs px-3 py-1 rounded-md border font-primary"
                  style={{
                    borderColor: category.textColor,
                    color: category.textColor,
                  }}
                >
                  {subject.name}
                </span>
              ))}
            </div>
          </motion.div>
            </Link>

        ))}
      </div>
    </section>
  );
}
