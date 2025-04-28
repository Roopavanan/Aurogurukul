"use client";

import { useState } from "react";

interface BundleDetailsProps {
  title: string;
  baseFee: number;
  defaultAddons?: string[];
}

const addonCost = 1350;
const gstRate = 0.18;

const standardSubjects = [
  "Mathematics",
  "Environmental Science",
  "Social Studies",
  "Biology",
  "Chemistry",
];

const addons = [
  "Music",
  "Dance",
  "Keyboard",
  "Typewriting",
  "Tennis",
  "Cricket",
  "Cooking",
];

export default function BundleDetails({
  title,
  baseFee,
  defaultAddons = [],
}: BundleDetailsProps) {
  const [selectedAddons, setSelectedAddons] = useState<string[]>(defaultAddons);

  const toggleAddon = (addon: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const totalAddonFees = selectedAddons.length * addonCost;
  const gst = Math.round((baseFee + totalAddonFees) * gstRate);
  const total = baseFee + totalAddonFees + gst;

  return (
    <div className="min-h-screen bg-gray-100 py-14 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-12 text-center font-primary">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Left: Subjects + Addons */}
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold font-primary mb-4">
              Standard Syllabus
            </h2>
            <ul className="space-y-3">
              {standardSubjects.map((subject, i) => (
                <li key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="accent-black w-4 h-4"
                  />
                  <span className="text-gray-800 font-secondary">
                    {subject}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold font-primary mb-4">Addons</h2>
            <ul className="flex flex-col gap-3">
              {addons.map((addon, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 cursor-pointer text-gray-800 font-secondary "
                >
                  <input
                    type="checkbox"
                    checked={selectedAddons.includes(addon)}
                    onChange={() => toggleAddon(addon)}
                    className="accent-green-500 w-4 h-4"
                  />
                  {addon}
                </label>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:max-w-sm mx-auto ">
          <ul className="space-y-4 text-gray-700 text-sm mb-6 ">
            <li className="flex justify-between font-primary">
              <span>Standard course fees</span>
              <span>₹{baseFee}/-</span>
            </li>
            <li className="flex justify-between font-primary">
              <span>Addons fees</span>
              <span>₹{totalAddonFees}/-</span>
            </li>
            <li className="flex justify-between font-primary">
              <span>GST 18%</span>
              <span>₹{gst}/-</span>
            </li>
            <li className="flex justify-between font-semibold text-base border-t pt-3 font-primary">
              <span>Total</span>
              <span>₹{total}/-</span>
            </li>
          </ul>

          <button className="w-50 mx-auto font-primary bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full  flex justify-center transition duration-200">
            Proceed to Checkout
          </button>

          <div className="border-t my-14"></div>

          <div className="text-center ">
            <h3 className="font-bold mb-1 text-md font-primary">
              Learner Archetype
            </h3>
            <p className="text-sm mb-3 font-secondary">
              Take the quiz to know your learning archetype and get a
              recommended study bundle.
            </p>
            <button className="bg-orange-500 font-primary hover:bg-orange-500 text-white font-bold px-4 py-2 rounded-full transition duration-200 text-sm">
              Take Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
