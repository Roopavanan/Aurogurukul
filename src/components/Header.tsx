"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 md:px-10 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.svg" // place your image in public/logo.png
            alt="Aurogurukul Logo"
            width={40}
            height={40}
            className="w-25 h-15 object-contain"
          />
          <div className="leading-tight">
            <span className="text-[#6EA1D6] font-semibold text-lg">
              AUROGURUKUL
            </span>
            <div className="text-xs text-[#6EA1D6] text-bold font-secondary text-center">JOY OF LEARNING</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-[60px] items-center font-semibold text-[#214586]">
          <Link href="#" className="hover:text-[#6EA1D6] transition">
            Home
          </Link>
          <Link href="#" className="hover:text-[#6EA1D6] transition">
            About Us
          </Link>
          <Link href="#" className="hover:text-[#6EA1D6] transition">
            Our Curriculum
          </Link>
          <Link href="#" className="hover:text-[#6EA1D6] transition">
            Enrol Now
          </Link>
        </nav>

        {/* Login Button */}
        <div className="hidden md:flex">
          <Link
            href="#"
            className="bg-[#214586] hover:bg-[#6EA1D6] text-white px-5 py-2 rounded-full text-sm font-semibold transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#214586] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-4 px-4 flex flex-col gap-4 font-semibold text-[#214586]"
        >
          <Link href="#" className="hover:text-[#6EA1D6] transition">
            Home
          </Link>
          <Link href="#" className="hover:text-[#6EA1D6] transition">
            About Us
          </Link>
          <Link href="#" className="hover:text-[#6EA1D6] transition">
            Our Curriculum
          </Link>
          <Link href="#" className="hover:text-[#6EA1D6] transition">
            Enrol Now
          </Link>
          <Link
            href="#"
            className="bg-[#214586] hover:bg-[#6EA1D6] text-white px-5 py-2 rounded-full text-sm font-semibold transition text-center"
          >
            Login
          </Link>
        </motion.div>
      )}
    </header>
  );
}
