"use client";

import { categories } from "@/data/courseData";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useParams } from "next/navigation"; 


export default function CourseDetailsPage() {
  const { courseId } = useParams() as { courseId: string };
  const course = categories.find((cat) => cat.id === courseId);

  if (!course) return notFound();

  return (
    <>
      <section className="bg-white">
        {/* 🔹 Section 1: Header */}
        <motion.div
          className="bg-[#FFECE4] py-22 px-4 sm:px-10 lg:px-28 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#D65104] mb-2 font-primary">
              {course.title}
            </h1>
            <h2 className="text-xl font-semibold text-[#AD4027] mb-3 font-primary">
              {course.course}
            </h2>
            <p className="text-[#AD4027] font-secondary text-sm sm:text-base leading-relaxed">
              <strong className="font-semibold">Focus:</strong>{" "}
              {course.description}
            </p>
            {course.idealFor && (
              <p className="text-[#AD4027] font-secondary text-sm sm:text-base mt-2 leading-relaxed">
                <strong className="font-semibold">Ideal for:</strong>{" "}
                {course.idealFor}
              </p>
            )}
          </div>
        </motion.div>

        {/* ⚪ Section 2: Subjects */}
        <motion.div
          className="bg-white py-24 px-6 sm:px-12 lg:px-28"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-[40px]">
            <h3 className="text-sm sm:text-[20px] font-primary font-semibold text-[#1E3A8A]">
              Subjects covered:
            </h3>

            <div className="flex flex-wrap gap-[40px]">
              {course.subjects.map((subject) => (
                <span
                  key={subject.id}
                  className="text-lg px-4 py-1 rounded-full font-primary"
                  style={{
                    backgroundColor: `${course.bgColor}80`,
                    color: course.textColor
                  }}
                >
                  {subject.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#FFF9EF]">
        <motion.div
          className="max-w-7xl mx-auto py-14 px-6 sm:px-12 lg:px-28 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-start justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* ✅ Features Container */}
          <div className="w-full max-w-2xl">
            <h4 className="text-xl sm:text-4xl font-semibold text-[#D65104] mb-5 font-primary">
              Features
            </h4>
            <ul className="list-disc pl-6 space-y-4 text-gray-800 text-base font-secondary">
              {course.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* ✅ Booking/Fee Container */}
          <div className="bg-white rounded-xl p-8 sm:p-10 shadow-md text-center max-w-sm w-full self-start">
            <h5 className="text-lg font-bold font-secondary text-[#000] mb-1">FEES</h5>
            <p className=" text-gray-400 text-sm">
              <span className="line-through">₹75,000</span> <span className="text-[#7ABD84]"> (15% OFF) </span>
            </p>
            <p className="text-2xl font-bold text-black mt-2 mb-4">
              ₹{course.fees}{" "}
              <span className="text-sm font-normal">per annum</span>
            </p>
            <button className="px-6 py-2 bg-[#EE842C] text-white rounded-[8px] hover:bg-[#ea6205] transition font-medium">
              Buy Course
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
