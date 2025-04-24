"use client";

import { useEffect } from "react";

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrollModal({ isOpen, onClose }: EnrollModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold font-primary mb-4 text-[#214586] text-left">
          Enrolment Form
        </h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-regular font-secondary mb-1 text-left"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-regular font-secondary mb-1 text-left"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-regular font-secondary  mb-1 text-left"
            >
              Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Phone"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-regular font-secondary  mb-1 text-left"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="School"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="grade"
              className="block text-sm font-regular font-secondary  mb-1 text-left"
            >
              Grade <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="w-full p-2 border border-gray-300 rounded bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select Grade
              </option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={`Grade ${i + 1}`}>
                  Grade {i + 1}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="board"
              className="block text-sm font-regular font-secondary  mb-1 text-left"
            >
              Board <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="w-full p-2 border border-gray-300 rounded bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select Board
              </option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="IB">IB</option>
              <option value="IGCSE">IGCSE</option>
              <option value="State Board">State Board</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#EE842C] text-white px-4 py-2 rounded-full w-30 font-semibold font-secondary justify-center  flex"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
