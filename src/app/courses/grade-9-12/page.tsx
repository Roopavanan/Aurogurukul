"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const classOptions = ["Class 9", "Class 10", "Class 11 & 12", "12th Pass"];
const courseOptions = ["Course A", "Course B", "Course C"];

export default function Grade912() {
  const router = useRouter();

  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const handleViewCourse = () => {
    if (!selectedClass || !selectedCourse) return;

const classSlugMap: { [key: string]: string } = {
  "Class 9": "class-9",
  "Class 10": "class-10",
  "Class 11 & 12": "class-11-12",
  "12th Pass": "12th-Pass", 
};

const formattedClass = classSlugMap[selectedClass];


    const formattedCourse = selectedCourse.slice(-1).toLowerCase();

    const courseId = `${formattedClass}-${formattedCourse}`;
    router.push(`/courses/details/${courseId}`);
  };

  const isFormComplete = selectedClass && selectedCourse;

  const isCourseCDisabled =
    selectedClass === "Class 9" || selectedClass === "12th Pass";

  return (
    <main className="max-w-4xl mx-auto px-4 py-24 text-[#214586] items-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center font-primary">
        Choose Your Class and Course
      </h1>

      {/* Class Selection */}
      <section className="mb-10 text-center">
        <h2 className="font-semibold mb-3 font-primary">Select Class</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {classOptions.map((cls) => (
            <button
              key={cls}
              onClick={() => {
                setSelectedClass(cls);
                setSelectedCourse(null); // Reset course if class changes
              }}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                selectedClass === cls
                  ? "bg-[#214586] text-white font-secondary"
                  : "border-gray-300 text-[#214586] hover:bg-[#6EA1D6]/20"
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </section>

      {/* Course Selection */}
      <section className="mb-10 text-center">
        <h2 className="font-semibold mb-3 font-primary">Select Course</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {courseOptions.map((course) => {
            const isDisabled =
              course === "Course C" && isCourseCDisabled;

            return (
              <button
                key={course}
                onClick={() => !isDisabled && setSelectedCourse(course)}
                disabled={isDisabled}
                className={`px-4 py-2 text-sm rounded-full border transition ${
                  isDisabled
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : selectedCourse === course
                    ? "bg-[#214586] text-white font-secondary"
                    : "border-gray-300 text-[#214586] hover:bg-[#6EA1D6]/20"
                }`}
              >
                {course}
              </button>
            );
          })}
        </div>
      </section>

      {/* View Course Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleViewCourse}
          disabled={!isFormComplete}
          className={`font-semibold px-6 py-3 rounded-lg text-sm transition ${
            isFormComplete
              ? "bg-[#F45A37] text-white hover:bg-[#EE842C] font-primary"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          View course
        </button>
      </div>
    </main>
  );
}
