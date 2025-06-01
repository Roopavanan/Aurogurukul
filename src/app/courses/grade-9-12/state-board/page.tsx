"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GradeSelector() {
  const router = useRouter();
  const [selectedClass, setSelectedClass] = useState("9");
  const [selectedBoard, setSelectedBoard] = useState("cbse");

  const handleSubmit = () => {
    router.push(`/courses/grade-9-12/${selectedBoard}?class=${selectedClass}`);
  };

  return (
    <div className="max-w-xl mx-auto mt-20 px-4 text-center">
      <h1 className="text-2xl font-bold text-[#214586] mb-6">Choose Your Class & Board</h1>

      <div className="flex flex-col gap-4 mb-6">
        <select
          className="p-3 border rounded"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
        </select>

        <select
          className="p-3 border rounded"
          value={selectedBoard}
          onChange={(e) => setSelectedBoard(e.target.value)}
        >
          <option value="cbse">CBSE</option>
          <option value="state-board">State Board</option>
          <option value="icse">ICSE</option>
          <option value="igcse">IGCSE</option>
          <option value="nios">NIOS</option>
          <option value="homeschooled">Homeschooled</option>
          <option value="unschooled">Unschooling</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-[#214586] text-white px-6 py-3 rounded-lg hover:bg-[#6EA1D6] transition"
      >
        View Course
      </button>
    </div>
  );
}
