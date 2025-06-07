"use client";

import React, { useState } from "react";
import Image from "next/image";

type BuyCourseFormProps = {
  onClose: () => void;
  courseName: string;
  classTitle: string; // ⬅️ maybe this, instead of `className`
};

const BuyCourseForm: React.FC<BuyCourseFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    class: "",
    course: "",
    paymentType: "",
    upiId: "",
    screenshot: null as File | null
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, screenshot: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm px-4">
<div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-[#D65104] mb-6">
          🎓 Buy Course
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 text-sm">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-300 outline-none"
            required
          />
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-300 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-300 outline-none"
            required
          />
          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-300 outline-none"
            required
          >
            <option value="">Select Class</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>Class 11 & 12</option>
            <option>12th Pass</option>
          </select>

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-300 outline-none"
            required
          >
            <option value="">Select Course</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>

          <select
            name="paymentType"
            value={formData.paymentType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-300 outline-none"
            required
          >
            <option value="">Select Payment Type</option>
            <option>Full Payment</option>
            <option>Partial Payment</option>
          </select>

          {/* QR Code Section */}
          <div className="text-center">
            <label className="block text-gray-600 mb-1 text-xs">
              Scan to Pay
            </label>
            <div className="inline-block bg-gray-100 p-2 rounded-lg shadow-md">
              <Image
                src="/images/qr.jpg" // ✅ Place your QR image in the public/images folder
                alt="Payment QR Code"
                width={100}
                height={100}
                className="mx-auto object-contain"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-xs">
              Our UPI ID:
            </label>
            <div className="text-sm mb-2 font-semibold text-[#D65104]">
              your-upi-id@bank
            </div>
            <input
              type="text"
              name="upiId"
              placeholder="Your UPI ID"
              value={formData.upiId}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-300 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-xs">
              Upload Payment Screenshot
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-sm file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#F97316] text-white font-semibold py-2 rounded-xl hover:bg-[#ea6205] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyCourseForm;
