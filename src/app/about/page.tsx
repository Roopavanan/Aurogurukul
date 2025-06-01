"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";
import Link from "next/link";
import IntegralEducationSection from "@/components/IntegralEducationSection";

const features = [
  { icon: "/images/icons/online.svg", label: "Online tutoring" },
  {
    icon: (
      <div className="border border-[#FBBF5D] rounded-full p-2">
        <Fingerprint className="text-[#FBBF5D] w-10 h-10" />
      </div>
    ),
    label: "Lifetime access"
  },
  { icon: "/images/icons/active.svg", label: "Active learning" },
  { icon: "/images/icons/course.svg", label: "10x courses" }
];

export default function HeroSection() {

  return (
    <main className="overflow-x-hidden">
      {/* Hero section */}
      <section className="bg-white w-full overflow-hidden px-4">
        <div className="max-w-[1400px] mx-auto bg-[#EDF7FA] rounded-[80px] px-4 sm:px-6 lg:px-8">
          <div className=" h-auto md:h-[640px] flex flex-col-reverse md:flex-row items-center justify-center gap-[40px] lg:gap-[160px] py-10">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl order-2 md:order-1 text-center md:text-left"
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-primary text-[#214586] mb-4 leading-14">
                “Where Learning is a Journey of Becoming”{" "}
              </h1>
              <p className="text-[#214586] mb-6 md:text-[22px] text-[18px]">
                Inspired by Sri Aurobindo and The Mother, AuroGurukul nurtures
                the mind, body, and spirit of every learner.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#EE842C] text-white px-10 py-3 rounded-lg font-semibold text-lg w-[280px]"
              >
                Join Our Community
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
                src="/images/about.png"
                alt="Happy Student"
                width={480}
                height={600}
                className="w-full md:h-[600px] h-[500px] max-w-8xl mx-auto relative top-10 md:top-5"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Hero section End */}

      {/* About us */}
      <motion.section
        className="relative min-h-[400px] md:min-h-[500px] py-20 px-4 md:px-16 bg-white overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* SVG Line in Center as BG */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <Image
            src="/icons/violet-line.svg" // Put actual path in `public/` folder
            alt="Background Curve Line"
            width={1920}
            height={600}
            className="w-full h-auto object-contain opacity-50"
          />
        </div>

        {/* Content Behind SVG */}
        <div className="relative z-0 max-w-6xl mx-auto text-center px-4">
          <h2 className="max-w-6xl mx-auto text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-[#EE842C] mb-4">
            AuroGurukul – A Progressive and Futuristic Learning Platform
          </h2>
          <p className="max-w-4xl mx-auto text-[#214586] mb-4 leading-relaxed font-secondary">
            Rooted in the integral vision of The Mother and Sri Aurobindo,
            AuroGurukul is designed by global experts and implemented with
            proven results. It is not just another educational platform—it is a{" "}
            <span className="font-semibold   ">
              holistic learning ecosystem that fosters academic excellence,
              creativity, physical vitality, emotional intelligence, and life
              skills.
            </span>
          </p>
          <p className="leading-relaxed max-w-4xl mx-auto font-secondary text-[#214586]">
            Whether online, offline, or hybrid, our multilingual and accessible
            platform supports students at every stage—from preschool to
            post-graduation and skill development.
          </p>
        </div>
      </motion.section>

      {/* Vision & mission  */}
      <motion.section
        className="relative bg-white overflow-hidden py-20 px-6 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background SVG */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/abt-bg.svg" // Replace with your SVG background file
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Image */}
          <div className="rounded-[30px] overflow-hidden shadow-md border border-gray-200">
            <Image
              src="/images/teaching.png"
              alt="Teaching"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Vision and Mission Cards */}
          <div className="space-y-6">
            <div className="rounded-[30px] bg-blue-100 p-6 shadow border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To ignite a lifelong love for learning through a holistic,
                value-based education system that nurtures all dimensions of a
                child’s being—intellectual, physical, emotional, and spiritual.
              </p>
            </div>
            <div className="rounded-[30px] bg-red-100 p-6 shadow border border-red-200">
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To implement the ideals of integral education by designing
                engaging curricula and offering personalized learning
                experiences in academics, sports, arts, music, and life skills.
                We empower students to grow into conscious, compassionate, and
                competent individuals ready to meet the challenges of life.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative py-20 px-6 md:px-12 bg-white overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* SVG Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/icons/blue-line.svg" 
            alt="Decorative background"
            fill
            className="object-cover opacity-50"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center  p-8  ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-[#EE842C] mb-2">
            Integral Education at AuroGurukul
          </h2>
          <h3 className="text-lg sm:text-xl font-semibold font-primary text-gray-800  mb-6">
            A New Paradigm in Learning
          </h3>
          <p className="text-[#214586] font-secondary leading-relaxed">
            Integral Education is a transformative and holistic approach that
            sees education as a journey of self-discovery, self-mastery, and
            inner growth—not just a means to acquire degrees or secure a career.
            Rooted in the ideals of Sri Aurobindo and The Mother, it seeks the
            harmonious development of all parts of the being: physical, mental,
            emotional (vital), psychic, and spiritual.
          </p>
          <p className="text-[#214586] font-secondary mt-4 leading-relaxed">
            Unlike conventional systems that prioritize academic results and
            uniform benchmarks, Integral Education values the uniqueness of each
            learner, encouraging the unfolding of their deeper purpose and full
            potential. It reimagines education as a dynamic, living process—one
            that evolves with the learner and connects deeply with life itself.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="bg-[#FEEFEB] py-20 px-6 md:px-12 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-primary text-[#EE842C] mb-8">
            Why is Integral Education Relevant Today?
          </h2>
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4">
            In today’s rapidly changing world, students are often burdened by
            information overload, academic stress, and emotional disconnection.
            Traditional education systems focus heavily on marks and
            memorization, often leaving behind essential aspects of
            growth—emotional intelligence, creativity, empathy, physical
            wellness, and moral clarity.
          </p>
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            Integral Education addresses this imbalance by nurturing the whole
            child, creating a space where learning becomes joyful, purposeful,
            and deeply human. It helps children build resilience, develop inner
            balance, and become more conscious, confident, and compassionate
            individuals, fully prepared to meet life’s challenges—not just
            exams.
          </p>
        </div>
      </motion.section>

      {/* 5-cards section */}
      <IntegralEducationSection />

      {/* Features */}
      <section className="w-full py-16 px-4 bg-white overflow-hidden">
        <div className="max-w-[1640px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-black text-center">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex flex-row items-center gap-4 md:gap-8 w-fit mx-auto"
            >
              {typeof item.icon === "string" ? (
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={60}
                  height={60}
                />
              ) : (
                item.icon
              )}
              <span className="font-bold font-primary text-[12px] sm:text-[18px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* Feature End */}

      {/* Call to action */}
      <section className="bg-[#FAF8F5] py-24 px-6 md:px-0 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EE842C] font-primary mb-4">
            Ready to begin your learning journey?
          </h2>

          <p className="text-gray-700 font-secondary text-md mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet nisl tempus, ultrices mi in, finibus ligula.
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
