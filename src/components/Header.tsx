"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
       { label: "Home", href: "/" },
    { label: "Activities", href: "/#activities" },
    { label: "Resources", href: "/#resources" },
    { label: "Skill Development", href: "/#skills" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Careers", href: "/#careers" },
  ];

  const courseDropdown = [
    { label: "Courses 1", href: "/steam/about" },
    { label: "courses 2", href: "/steam/program" },
    { label: "Courses 3", href: "/steam/calendar" },
  ];

  // Handle dropdown hover tracking
  useEffect(() => {
    const dropdownElement = dropdownRef.current;

    const handleMouseEnter = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setCoursesOpen(true);
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setCoursesOpen(false);
      }, 200);
    };

    if (dropdownElement) {
      dropdownElement.addEventListener("mouseenter", handleMouseEnter);
      dropdownElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (dropdownElement) {
        dropdownElement.removeEventListener("mouseenter", handleMouseEnter);
        dropdownElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <header className="w-full px-4 md:px-10 py-4 bg-white sticky top-0 z-50">
      <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between flex-wrap">
        {/* Logo + Title */}
        <div className="flex items-center gap-2 min-w-0 overflow-hidden">
          <Image
            src="/images/logo.svg"
            alt="Aurogurukul Logo"
            width={40}
            height={40}
            className="w-20 h-10 md:w-25 md:h-15 object-contain"
          />
          <div className="leading-tight whitespace-nowrap">
            <span className="text-[#6EA1D6] font-bold text-lg">AUROGURUKUL</span>
            <div className="text-xs text-[#214586] font-semibold text-center">
              JOY OF LEARNING
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 items-center font-semibold font-secondary text-[#214586] relative">
          {/* STEAM Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              setCoursesOpen(true);
            }}
            onMouseLeave={() => {
              timeoutRef.current = setTimeout(() => setCoursesOpen(false), 200);
            }}
          >
            <button className="hover:text-[#6EA1D6] transition">Courses</button>

            {coursesOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-50"
              >
                {courseDropdown.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-[#214586]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="hover:text-[#6EA1D6] transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <div className="hidden lg:flex">
          <Link
            href="#"
            className="bg-[#214586] hover:bg-[#6EA1D6] text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
          >
            Login / Sign IN
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#214586] focus:outline-none"
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
          className="lg:hidden mt-4 px-4 flex flex-col gap-4 font-semibold text-[#214586]"
        >
          {/* STEAM Dropdown */}
          <div className="flex flex-col gap-1">
            <span className="font-bold">Courses</span>
            {courseDropdown.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="pl-3 text-sm hover:text-[#6EA1D6] transition"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>

          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="hover:text-[#6EA1D6] transition"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            href="#"
            className="bg-[#214586] hover:bg-[#6EA1D6] text-white px-5 py-2 rounded-full text-sm font-semibold transition text-center"
          >
            Login / sign In
          </Link>
        </motion.div>
      )}
    </header>
  );
}
