"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const classOptions = [
  "All Classes", "Repeater", "Class 12 Science", "Class 12 Science (PCM)", "Class 12 Science (PCB)",
  "Class 12 Commerce", "Class 11 Science (PCM)", "Class 11 Science (PCB)", "Class 11 Commerce",
  "Class 10", "Class 9", "Class 8", "Class 7", "Class 6", "Class 5", "Class 4", "Class 3"
];

const boardOptions = ["CBSE", "ICSE", "State Board", "IGCSE", "NIOS"];
const examOptions = ["School 2025–2026", "School 2024–2025", "School 2023–2024"];

export default function Grade912() {
  const router = useRouter();

  const [selectedClass, setSelectedClass] = useState("Class 12 Commerce");
  const [selectedBoard, setSelectedBoard] = useState("CBSE");
  const [selectedExam, setSelectedExam] = useState("School 2025–2026");

  const handleViewCourse = () => {
    const formattedClass = selectedClass.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");
    const formattedBoard = selectedBoard.toLowerCase().replace(/\s+/g, "-");
    router.push(`/courses/grade-9-12/${formattedBoard}?class=${formattedClass}&exam=${encodeURIComponent(selectedExam)}`);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-[#214586]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-[#214586]">
        Let&apos;s find the best course for you
      </h1>

      {/* Class Selection */}
      <section className="mb-10">
        <h2 className="font-semibold mb-3">Select Class</h2>
        <div className="flex flex-wrap gap-2">
          {classOptions.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                selectedClass === cls
                  ? "bg-[#214586] text-white"
                  : "border-gray-300 text-[#214586] hover:bg-[#FBBF5D]/20"
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </section>

      {/* Board Selection */}
      <section className="mb-10">
        <h2 className="font-semibold mb-3">Select board</h2>
        <div className="flex flex-wrap gap-3">
          {boardOptions.map((board) => (
            <button
              key={board}
              onClick={() => setSelectedBoard(board)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                selectedBoard === board
                  ? "bg-[#6EA1D6] text-white"
                  : "border-gray-300 text-[#214586] hover:bg-[#6EA1D6]/20"
              }`}
            >
              {board}
            </button>
          ))}
        </div>
      </section>

      {/* Exam Selection */}
      <section className="mb-10">
        <h2 className="font-semibold mb-3">Select exam</h2>
        <div className="flex flex-wrap gap-3">
          {examOptions.map((exam) => (
            <button
              key={exam}
              onClick={() => setSelectedExam(exam)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                selectedExam === exam
                  ? "bg-[#F45A37] text-white"
                  : "border-gray-300 text-[#214586] hover:bg-[#F45A37]/20"
              }`}
            >
              {exam}
            </button>
          ))}
        </div>
      </section>

      {/* View Course Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleViewCourse}
          className="bg-[#F45A37] hover:bg-[#EE842C] text-white font-semibold px-6 py-3 rounded-lg text-sm transition"
        >
          View course
        </button>
      </div>
    </main>
  );
}
