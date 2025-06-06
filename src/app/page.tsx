"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";
import Link from "next/link";
import ExploreCoursesSection from "@/components/ExploreCourses";
import StartLearning from "@/components/StartLearning";
import AnnouncementSlider from "@/components/AnnouncementSlider";

const features = [
  { icon: "/images/icons/online.svg", label: "AI-assisted learning" },
  {
    icon: (
      <div className="border border-[#FBBF5D] rounded-full p-2">
        <Fingerprint className="text-[#FBBF5D] w-6 h-6" />
      </div>
    ),
    label: "Online/offline interactive teaching sessions"
  },
  {
    icon: "/images/icons/active.svg",
    label: "Flexible and intuitive study plan"
  },
  {
    icon: "/images/icons/course.svg",
    label: "Project-based and skill-based curriculum"
  }
];

export default function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero section */}
      <section className="bg-white w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1600px] mx-auto bg-[#8DB3DB] rounded-[60px] px-4 sm:px-6 lg:px-8">
          <div className="w-full h-auto md:h-[640px] flex flex-col-reverse md:flex-row items-center justify-center gap-[40px] lg:gap-[210px] py-10">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl order-2 md:order-1 text-center md:text-left"
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-primary text-[#214586] mb-4 leading-14">
                Awakening the Light Within - Through Integral Education
              </h1>
              <p className="text-[#214586] mb-6 md:text-[22px] text-[18px]">
                Inspired by The Mother and Sri Aurobindo’s vision on Education,
                Aurugurukul brings forward an AI-enabled learning domain to
                nurture the mind, body and spirit of every learner.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#EE842C] text-white px-6 py-2 rounded-[8px] font-semibold text-[16px] w-[208px]"
              >
                Join our Community
              </motion.button>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <Image
                src="/images/hero-banner.webp"
                alt="Happy Student"
                width={480}
                height={600}
                className="w-full md:h-[600px] h-[400px] max-w-4xl mx-auto relative top-10 md:top-5"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Hero section End */}

      {/* Features */}
      <section className="w-full py-16  bg-white overflow-hidden">
        <div className="max-w-full mx-auto  grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-[#000] text-center">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex flex-row items-center gap-1 sm:gap-2 md:gap-3 w-fit mx-auto"
            >
              {typeof item.icon === "string" ? (
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={40}
                  height={40}
                />
              ) : (
                item.icon
              )}
              <span className="font-bold font-primary text-[12px] md:text-[16px] leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* Feature End */}

      <AnnouncementSlider />

      {/* Explorecourse  */}
      <ExploreCoursesSection />

      {/* StartLearning education */}
      <StartLearning />

      {/* About Us */}
      <section className="relative bg-[#fff] py-28 px-6 md:px-16 text-center overflow-hidden">
        {/* Background SVG */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/icons/double-line.svg"
            alt="Decorative line"
            fill
            className="object-cover object-center opacity-60"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-primary font-semibold text-[#EE842C] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Aurogurukul?
          </motion.h2>

          <motion.h3
            className="text-xl md:text-2xl font-primary font-semibold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A Progressive and Futuristic Learning Platform
          </motion.h3>

          <motion.p
            className="max-w-6xl mx-auto text-gray-800 leading-relaxed text-base md:text-lg font-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AuroGurukul is a transformative learning space inspired by the
            philosophy of Sri Aurobindo and The Mother. We nurture future-ready
            individuals by integrating academic excellence with inner
            development, creativity, and real-world skills.
          </motion.p>
        </div>
      </section>
      {/* About end */}

      {/* Call to action */}
      <section className="bg-[#FAF8F5] py-24 px-6 md:px-0 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EE842C] font-primary mb-4">
            Ready to begin your learning journey?
          </h2>

          <p className="text-gray-700 font-secondary text-md mb-8">
            Unlock a world of knowledge and skills tailored just for you.
            Explore dynamic courses, engage in interactive activities, and watch
            your potential soar. Join us and start transforming your future
            today!
          </p>

          <div className="flex justify-center gap-8 flex-wrap">
            <Link
              href="/enrol"
              className="bg-[#EE842C] hover:bg-[#d8701d] text-white px-8 py-2 rounded-[8px] text-[16px]  font-semibold"
            >
              Enrol Now
            </Link>
            <Link
              href="/contact"
              className="border border-[#EE842C] text-[#EE842C] hover:bg-[#FFF4EC] px-8 py-2 rounded-[8px] text-[16px] font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      {/* Call to action end */}
    </main>
  );
}
