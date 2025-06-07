import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#214586] text-white py-10 px-4">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Logo */}
        <Link href="/" className="flex flex-col items-start  gap-2">
          <Image
            src="/images/footer-logo.svg"
            alt="Aurogurukul Logo"
            width={60}
            height={60}
            className="w-40 h-auto object-contain"
          />
        </Link>

        {/* Center: Menu */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row gap-5 text-center font-semibold font-secondary">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="#" className="hover:underline">
              Gallery
            </Link>
            <Link href="#" className="hover:underline">
              Careers
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col gap-3 items-center md:items-end text-center md:text-right">
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61577110350187"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-5 h-5 hover:text-blue-600 transition" />
            </a>
            <a
              href="https://x.com/AuroGurukul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-5 h-5 hover:text-blue-400 transition" />
            </a>
            <a
              href="https://www.instagram.com/aurogurukul?igsh=MXNjbXZnbjU3OXNlMQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-5 h-5 hover:text-pink-500 transition" />
            </a>
            <a
              href="https://www.linkedin.com/company/aurogurukul/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="w-5 h-5 hover:text-blue-700 transition" />
            </a>
            <a
              href="https://youtube.com/@aurogurukul?si=jL2U8C_YiR_qD35y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-5 h-5 hover:text-red-500 transition" />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-8 mx-auto border-white/30 w-[300px] md:w-[600px] lg:w-[1300px]  " />

      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-sm text-white/70 text-center">
        <p>© {currentYear} AuroGurukul. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/terms" className="hover:underline">
            Terms of Use
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
