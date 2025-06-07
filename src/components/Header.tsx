"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

type SubmenuItem = {
  label: string;
  href: string;
};

type CourseDropdownItem = {
  label: string;
  submenu: SubmenuItem[];
  href?: string;
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { label: "Activities", href: "/activities" },
    { label: "Resources", href: "/resources" },
    { label: "Skill Development", href: "/skill-development" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Careers", href: "/#careers" }
  ];

  const courseDropdown: CourseDropdownItem[] = [
    { label: "Grade 9 - 12", submenu: [], href: "/courses/grade-9-12" },
    { label: "Grade 1 - 3", submenu: [], href: "#" },
    { label: "Grade 4 - 8", submenu: [], href: "#" },
  ];

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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 min-w-0 overflow-hidden">
          <Image
            src="/images/logo.svg"
            alt="Aurogurukul Logo"
            width={40}
            height={40}
            className="w-20 h-10 md:w-25 md:h-15 object-contain"
          />
          <div className="leading-tight whitespace-nowrap">
            <span className="text-[#6EA1D6] font-bold text-lg">AUROGURUKUL</span>
            <div className="text-xs text-[#214586] font-semibold text-center">JOY OF LEARNING</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 items-center font-semibold font-secondary text-[#214586] relative">
          {/* Courses Dropdown */}
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
            <button className="hover:text-[#6EA1D6] transition flex items-center gap-1">
              Courses <IoIosArrowDown className="mt-[2px]" />
            </button>

           {coursesOpen && (
  <div
    ref={dropdownRef}
    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-60 z-50"
  >
    {courseDropdown.map(({ label, href }) => {
      const isComingSoon = label === "Grade 1 - 3" || label === "Grade 4 - 8";
      return (
        <div
          key={label}
          className={`relative group px-4 py-2 text-sm ${
            isComingSoon ? "text-gray-400 cursor-not-allowed opacity-50" : "text-[#214586] hover:bg-gray-100"
          }`}
        >
          {isComingSoon ? (
            <div className="flex justify-between items-center">
              <span>{label}</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            </div>
          ) : (
            <Link href={href!} className="block w-full">
              {label}
            </Link>
          )}
        </div>
      );
    })}
  </div>
)}

          </div>

          {navItems.map(({ label, href }) => (
            <Link key={label} href={href} className="hover:text-[#6EA1D6] transition">
              {label}
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <div className="hidden lg:flex">
          <Link
            href="https://learn.aurogurukul.site/login"
            className="bg-[#214586] hover:bg-[#6EA1D6] text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
          >
            Login / Sign In
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
          <button
            onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
            className="flex items-center justify-between text-left text-sm w-full text-[#214586] hover:text-[#6EA1D6] transition font-bold"
          >
            Courses
            <IoIosArrowDown
              className={`transform transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {mobileCoursesOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden flex flex-col gap-1 pl-3"
              >
                {courseDropdown.map(({ label, submenu, href }) => (
                  <div key={label} className="pl-1">
                    {submenu.length === 0 && href ? (
                      <Link
                        href={href}
                        className="text-left text-sm text-[#214586] hover:text-[#6EA1D6] transition font-bold block py-1"
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            setOpenSubmenu(openSubmenu === label ? null : label)
                          }
                          className="flex items-center justify-between text-left text-sm w-full text-[#214586] hover:text-[#6EA1D6] transition"
                        >
                          {label}
                          <IoIosArrowDown
                            className={`transform transition-transform ${
                              openSubmenu === label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openSubmenu === label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-4 overflow-hidden"
                            >
                              {submenu.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className="block text-sm hover:text-[#6EA1D6] transition"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  ↳ {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

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
            href="https://learn.aurogurukul.site/login"
            className="bg-[#214586] hover:bg-[#6EA1D6] text-white px-5 py-2 rounded-full text-sm font-semibold transition text-center"
          >
            Login / Sign In
          </Link>
        </motion.div>
      )}
    </header>
  );
}
