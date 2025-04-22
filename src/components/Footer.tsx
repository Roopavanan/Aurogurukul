import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
      const currentYear = new Date().getFullYear();

    
  return (
    <footer className="bg-[#214586] text-white py-10 px-4">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Logo */}
        <div className="flex flex-col items-center text-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="Aurogurukul Logo"
            width={80}
            height={80}
            className="w-60 h-auto object-contain"
          />
          <span className="text-[#6EA1D6] font-semibold text-lg">
            AUROGURUKUL
          </span>
          <div className="text-xs text-white font-bold">JOY OF LEARNING</div>
        </div>

        {/* Center: Menu */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-row gap-8 text-center font-semibold">
            <Link href="#" className="hover:underline">
              Home
            </Link>
            <Link href="#" className="hover:underline">
              About Us
            </Link>
            <Link href="#" className="hover:underline">
              Our Curriculum
            </Link>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col gap-3 items-center md:items-end text-center md:text-right">
          <h4 className="font-bold">Get in touch:</h4>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>contact@aurogurukul.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 75300 17093</span>
          </div>
          <Link
            href="#"
            className="mt-3 border border-white rounded-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-white hover:text-[#214586] transition"
          >
            Get Direction <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <hr className="my-8 mx-auto border-white/30 w-[1440px] " />

        <p className="text-center text-sm text-white/70">
          © {currentYear} AuroGurukul. All rights reserved.
      </p>
    </footer>
  );
}
