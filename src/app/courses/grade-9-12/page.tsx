"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const classOptions = ["Class 9", "Class 10", "Class 11", "Class 12"];
const boardOptions = ["CBSE", "ICSE", "State Board", "IGCSE", "NIOS"];
const examOptions = ["School 2025–2026", "School 2024–2025", "School 2023–2024"];

export default function Grade912() {
  const router = useRouter();

  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  const handleViewCourse = () => {
    if (!selectedClass || !selectedBoard || !selectedExam) return;

    const formattedClass = selectedClass.toLowerCase().replace(/\s+/g, "-");
    const formattedBoard = selectedBoard.toLowerCase().replace(/\s+/g, "-");

    router.push(
      `/courses/grade-9-12/${formattedBoard}?class=${formattedClass}&exam=${encodeURIComponent(
        selectedExam
      )}`
    );
  };

  const isFormComplete = selectedClass && selectedBoard && selectedExam;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-[#214586]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center font-primary">
        Select Your Grade
      </h1>

      {/* Class Selection */}
      <section className="mb-10">
        <h2 className="font-semibold mb-3 font-primary">Select Class</h2>
        <div className="flex flex-wrap gap-2">
          {classOptions.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
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

      {/* Board Selection */}
      <section className="mb-10">
        <h2 className="font-semibold mb-3 font-primary">Select Board</h2>
        <div className="flex flex-wrap gap-3">
          {boardOptions.map((board) => (
            <button
              key={board}
              onClick={() => setSelectedBoard(board)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                selectedBoard === board
                  ? "bg-[#214586] text-white font-secondary"
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
        <h2 className="font-semibold mb-3 font-primary">Select Exam</h2>
        <div className="flex flex-wrap gap-3">
          {examOptions.map((exam) => (
            <button
              key={exam}
              onClick={() => setSelectedExam(exam)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                selectedExam === exam
                  ? "bg-[#214586] text-white font-secondary"
                  : "border-gray-300 text-[#214586] hover:bg-[#6EA1D6]/20"
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
