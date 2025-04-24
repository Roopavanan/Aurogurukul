"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";
import {
  BookText,
  Video,
  FlaskConical,
  FileText,
  BarChart,
} from "lucide-react";
import EnrollModal from "@/components/EnrollModal";
import { useState } from "react";
import CurriculumBundles from "@/components/CurriculumBundles";

const formats = [
  { icon: <BookText className="w-8 h-8 text-orange-400" />, label: "Text" },
  { icon: <Video className="w-8 h-8 text-orange-400" />, label: "Videos" },
  {
    icon: <FlaskConical className="w-8 h-8 text-orange-400" />,
    label: "Experiments",
  },
  { icon: <FileText className="w-8 h-8 text-orange-400" />, label: "Tests" },
  {
    icon: <BarChart className="w-8 h-8 text-orange-400" />,
    label: "AI-based Test Reports",
  },
];

const features = [
  { icon: "/images/icons/online.svg", label: "Online tutoring" },
  {
    icon: (
      <div className="border border-[#FBBF5D] rounded-full p-2">
        <Fingerprint className="text-[#FBBF5D] w-10 h-10" />
      </div>
    ),
    label: "Lifetime access",
  },
  { icon: "/images/icons/active.svg", label: "Active learning" },
  { icon: "/images/icons/course.svg", label: "10x courses" },
];

export default function HeroSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="overflow-x-hidden">
      {/* Hero section */}
      <section className="bg-white w-full overflow-hidden px-4">
        <div className="max-w-[1700px] mx-auto bg-[#8DB3DB] rounded-none px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1680px] mx-auto h-auto md:h-[640px] flex flex-col-reverse md:flex-row items-center justify-center gap-[40px] md:gap-[210px] py-10">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl order-2 md:order-1 text-center md:text-left"
            >
              <h1 className="text-2xl md:text-4xl font-semibold font-primary text-[#214586] mb-4 leading-14">
                Awakening the Light Within - Through Integral Education
              </h1>
              <p className="text-[#214586] mb-6 md:text-[22px] text-[18px]">
                Inspired by Sri Aurobindo and The Mother, AuroGurukul nurtures
                the mind, body, and spirit of every learner.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setModalOpen(true)} // ← This line fixes it!
                className="bg-[#EE842C] text-white px-6 py-3 rounded-full font-semibold text-lg w-[180px]"
              >
                Enrol Now
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
                src="/images/hero.webp"
                alt="Happy Student"
                width={480}
                height={600}
                className="w-full md:h-[600px] h-[500px] max-w-xl mx-auto relative top-10 md:top-5"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Hero section End */}

      {/* Features */}
      <section className="w-full py-16 px-4 bg-white overflow-hidden">
        <div className="max-w-[1640px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-[#214586] text-center">
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
              <span className="font-bold font-primary text-[18px] sm:text-2xl">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* Feature End */}

      {/* About Us */}
      <section className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-[#EE842C] font-bold text-2xl sm:text-3xl md:text-4xl mb-4 leading-tight font-primary">
            About Us
          </h2>
          <h3 className="text-[#214586] font-semibold text-lg sm:text-xl md:text-2xl mb-8 leading-snug font-primary">
            AUROGURUKUL – A Progressive and Futuristic Learning Platform
          </h3>
          <div className="space-y-6 text-[#214586] text-sm sm:text-base md:text-lg leading-[35px] font-secondary">
            <p>
              AuroGurukul is a global educational initiative inspired by the
              timeless ideals of The Mother and Sri Aurobindo. Founded by a
              group of educationists, researchers, and entrepreneurs—many of
              whom have studied or taught at the Sri Aurobindo International
              Centre of Education (SAICE)—AuroGurukul aspires to offer the world
              a living model of Integral Education.
            </p>
            <p>
              Our mission is to foster the development of every learner across
              the four key dimensions of being—Physical, Vital (emotional),
              Mental, and Spiritual—through a carefully designed, dynamic
              curriculum that blends academic excellence with personal growth.
            </p>
            <p>
              At AuroGurukul, we believe that education should awaken the full
              potential of the individual. By progressing across all
              domains—Science, Mathematics, Logic, Language, Arts, Sports, and
              Values—students not only achieve academic mastery but also
              cultivate self-awareness, inner strength, and a lifelong love for
              learning.
            </p>
            <p>
              We don’t just prepare students for exams—we prepare them for life.
              AuroGurukul nurtures champions who are conscious, competent, and
              compassionate, ready to lead and serve a world in transition.
            </p>
          </div>
        </div>
      </section>
      {/* About end */}

      {/* mission & vision */}
      <section className="w-full overflow-hidden bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[670px] md:h-[370px]">
          {/* Vision Box */}
          <div className="bg-[#214586] text-white px-6 sm:px-10 flex items-center justify-center text-center">
            <div className="max-w-lg">
              <h3 className="text-[34px] font-bold font-primary mb-8 flex items-center justify-center gap-2">
                <span className="w-6 h-6 bg-yellow-400 rounded-full"></span>{" "}
                Vision
              </h3>
              <p className="text-sm sm:text-base leading-[35px] font-regular font-secondary">
                To ignite a lifelong love for learning through a holistic,
                value-based education system that nurtures all dimensions of a
                child’s being— intellectual, physical, emotional, and spiritual.
              </p>
            </div>
          </div>

          {/* Mission Box */}
          <div className="bg-white text-[#214586] px-6 sm:px-10 flex items-center justify-center text-center">
            <div className="max-w-lg">
              <h3 className="text-[34px] font-bold font-primary mb-8 flex items-center justify-center gap-4">
                <span className="w-6 h-6 bg-yellow-400 rounded-full"></span>{" "}
                Mission
              </h3>
              <p className="text-sm sm:text-base leading-[35px] font-regular font-secondary">
                To implement the ideals of integral education by designing
                engaging curricula and offering personalized learning
                experiences in academics, sports, arts, music, and life skills.
                We empower students to grow into conscious, compassionate, and
                competent individuals ready to meet the challenges of life.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* mission & vision end */}

      {/* Integral education */}
      <section className="w-full py-20 px-4 bg-[#F9F9F9] overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-primary text-[#EE842C]">
              Integral Education: A New Paradigm of Learning
            </h2>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-[69px] items-center py-10">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto">
              <Image
                src="/images/book.jpg"
                alt="Lightbulb on book"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text */}
            <div className="text-[#214586] max-w-6xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold font-primary text-center md:text-start mb-4">
                What is Integral Education?
              </h3>
              <p className="text-base md:text-lg font-secondary font-regular leading-[35px] text-center md:text-start">
                Integral Education is a transformative approach to learning that
                goes beyond conventional academics. It seeks the harmonious
                development of all parts of the being—body, mind, vital
                (emotional), and soul. It is inspired by the teachings of Sri
                Aurobindo and The Mother, where education is not merely for
                livelihood but for life itself.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Integral education end */}

      {/* Relevant today */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-[#214586]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-white max-w-xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold font-primary mb-4 text-center md:text-start">
              Why is it Relevant Today?
            </h3>
            <p className="text-base md:text-lg leading-[35px] font-secondary font-regular text-center md:text-start">
              In an age of information overload and academic pressure,
              traditional systems often overlook emotional well-being,
              creativity, and moral grounding. Integral Education addresses this
              gap, preparing learners not just to succeed in exams but to thrive
              in life.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-md max-w-xl mx-auto">
            <Image
              src="/images/bulb.jpg"
              alt="Lightbulb education concept"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      {/* relevant today end */}

      {/* mainstream */}
      <section className="w-full py-20 px-4 bg-[#F9F9F9] overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-[69px] items-center py-10">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto">
              <Image
                src="/images/education.jpg"
                alt="Lightbulb on book"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text */}
            <div className="text-[#214586] max-w-6xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold font-primary mb-4 text-center md:text-start">
                How Does It Add Value to Mainstream Curriculums?
              </h3>
              <p className="text-base md:text-lg font-secondary font-regular leading-[35px] text-center md:text-start">
                Integral Education can be beautifully woven into existing
                frameworks like CBSE, ICSE, IB, CAIE, GCSE, and more. It
                enhances the curriculum by adding depth, meaning, and real-world
                relevance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* mainstream end */}

      {/* Integral Education  */}
      <section className="w-full py-20 px-4 bg-[#214586] text-white">
        <div className="max-w-[1640px] mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-primary text-[#FBBF5D]">
            Integral Education: A New Paradigm of Learning
          </h2>
        </div>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {[
            {
              title: "Science & Math",
              desc: "Promotes logical reasoning, inquiry, and hands-on experimentation. Builds a strong foundation for STEM pathways while nurturing curiosity and problem-solving.",
            },
            {
              title: "Art & Music",
              desc: "Develops creativity, self-expression, and emotional intelligence. Art and music are not just co-curricular—they're integral to developing a balanced personality.",
            },
            {
              title: "Sports & Physical Education",
              desc: "Fosters discipline, team spirit, physical fitness, and resilience. Sports are essential for building a healthy body and character.",
            },
            {
              title: "Life Skills & Values",
              desc: "Nurtures empathy, decision-making, communication, and mindfulness. Our life skills modules help learners become confident and conscious global citizens.",
            },
            {
              title: "Skill Development & Creativity Labs",
              desc: "Hands-on, project-based modules in Robotics, Chess, Design Thinking, Coding, and Entrepreneurship prepare students for future careers and real-world problem solving.",
            },
            {
              title: "Academic Mastery",
              desc: "Structured, examination-ready academic modules for Grade 9–12, entrance tests (JEE, NEET, CLAT, etc.), and global benchmarks (SAT, TOEFL, GRE) with interactive lessons, test analysis, and AI-powered performance reports.",
            },
          ].map((item, index) => (
            <div key={index} className="pt-4">
              <div className="w-35 border-t-2 border-white mb-2"></div>
              <h3 className="font-bold text-[18px] font-secondary text-[#FBBF5D] mb-2">
                {item.title}:
              </h3>
              <p className="text-white text-[18px] font-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Integaral education end */}

      {/* Curriculum */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-[1440px] mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-primary text-[#EE842C]">
            Our Curriculum
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            "Pre-School",
            "Grade 1–3",
            "Grade 4–8",
            "Grade 9–12",
            "Graduate & Postgraduate",
            "Skill Development",
            "Art & Music",
            "Sports",
            "Entrance & Competitive Exams",
          ].map((label, index) => (
            <div
              key={index}
              className="bg-[#B7D3F7] border border-[#214586] text-[#214586] font-semibold text-[20px] py-6 px-6 rounded-[25px] text-center hover:shadow-md transition duration-300"
            >
              {label}
            </div>
          ))}
        </div>
      </section>
      {/* curriculum end */}

      <CurriculumBundles/>

      {/* Domain */}
      <section className="w-full py-20 px-4 bg-white text-center">
        <h3 className="text-[#214586] font-semibold text-2xl font-primary mb-6">
          Each domain is carefully crafted with content formats like:
        </h3>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center items-start md:items-center gap-10 md:gap-14 py-10 px-4 md:px-10 mb-16">
          {formats.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-[#214586] text-base md:text-lg font-bold font-primary max-w-full"
            >
              <div className="w-12 h-12 m rounded-full border border-orange-500 bg-orange-100 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <span className="whitespace-normal break-words">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-[#8DB3DB] max-w-7xl mx-auto py-12 px-6 ">
          <h4 className="text-[#214586] font-bold font-primary text-xl md:text-2xl mb-2">
            Join Us in Shaping the Future of Learning
          </h4>
          <p className="text-[#214586] text-[20px] font-bold font-secondary mb-1">
            Admissions Open for 2025
          </p>
          <p className="text-[#214586] mb-6 text-[20px] font-semibold font-secondary">
            Online | Offline | Hybrid Options Available
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#EE842C] text-white px-6 py-3 rounded-full font-semibold text-lg"
          >
            Enroll Now
          </button>

          <EnrollModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        </div>
      </section>
      {/* Domain end */}
    </main>
  );
}
