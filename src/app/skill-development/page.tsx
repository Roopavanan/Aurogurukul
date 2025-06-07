"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ActivitiesSection() {
  return (
    <main>
      <section className="w-full px-4 md:px-10 py-16 space-y-12">
        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#F8F3FD] rounded-3xl text-center px-6 py-14 max-w-7xl mx-auto  "
        >
          <h2 className="text-2xl md:text-[34px] font-bold text-[#8363A9] font-primary mb-2">
            Skill Development at AuroGurukul
          </h2>
          <p className="text-sm md:text-[18px] font-secondary text-[#8C79B6] mb-6">
            Where Exploration Meets Expression
          </p>
          <button className="bg-[#EE842C] hover:bg-[#ef8f1bde] text-white text-sm px-5 py-2 rounded-md font-semibold">
            Join Our Community
          </button>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center text-[#214586] text-sm md:text-base font-primary leading-8 "
        >
          <p className="mb-6 ">
            At AuroGurukul, activities are not just “extra” — they are
            essential. Each co-curricular experience is intentionally designed
            to nurture emotional intelligence, creativity, physical vitality,
            and life skills. Rooted in Integral Education, our activities bridge
            joy and purpose, helping learners grow through doing, feeling, and
            reflecting.
          </p>

          <p>
            Engage in a variety of co-curricular activities designed to foster
            creativity and collaboration:
          </p>
        </motion.div>
      </section>

      {/* Inquiry section */}
      <section className="w-full px-4 md:px-10 py-24 bg-[#FEEFEB]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center space-y-6"
        >
          {/* Heading */}
          <h2 className="text-[#EE842C] font-primary text-xl md:text-[34px] font-bold">
            Inquiry & Discovery: Science, Math & Maker Labs
          </h2>

          {/* Paragraph */}
          <p className="text-[#3F3F3F] text-sm md:text-base leading-relaxed font-secondary max-w-3xl mx-auto">
            Learners engage in hands-on experiments, STEM challenges, and
            interdisciplinary projects that stimulate curiosity and cultivate
            problem-solving abilities. Activities include:
          </p>

          {/* Activity Buttons */}
          <div className="flex flex-wrap justify-center gap-12 pt-2">
            {[
              "Maker Labs & DIY Science Kits",
              "Nature-Based Math Exploration",
              "Robotics & Engineering Challenges"
            ].map((item) => (
              <button
                key={item}
                className="text-[#AD4027] font-primary border border-[#F89781] bg-[#FCD7CF] text-sm px-8 py-4 rounded-[20px] hover:bg-[#ee9484b7] transition"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Expression section */}
      <section className="relative w-full px-4 md:px-10 py-24 bg-[#fff] overflow-hidden">
        {/* SVG Line Backgrounds */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/icons/pink-line.svg"
            alt="blue line"
            width={600}
            height={300}
            className="absolute top-0 left-5 w-500 max-w-none opacity-40"
          />
          <Image
            src="/icons/gold-line.svg"
            alt="violet line"
            width={600}
            height={300}
            className="absolute top-50 right-0 w-500 max-w-none opacity-40"
          />
        </div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto text-center space-y-6"
        >
          <h2 className="text-[#8363A9] font-primary text-xl md:text-[34px] font-bold">
            Expression & Emotion: Art, Music & Theatre
          </h2>

          <p className="text-[#3F3F3F] text-sm md:text-base leading-relaxed font-secondary max-w-3xl mx-auto">
            We offer diverse artistic outlets for learners to explore their
            inner world and communicate ideas creatively. Activities promote
            emotional well-being, imagination, and cultural appreciation:
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-2">
            {[
              "Studio Art & Clay Modeling",
              "Indian & Western Music Workshops",
              "Theatre, Storytelling & Movement Arts"
            ].map((item) => (
              <button
                key={item}
                className="text-[#8363A9] font-primary border border-[#D2B6F4] bg-[#F8F3FD] text-sm px-8 py-4 rounded-[20px] hover:bg-[#b988e9a6] transition"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Embodiment section */}
      <section className="w-full px-4 md:px-10 py-24 bg-[#F4FCF5]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center space-y-6"
        >
          {/* Heading */}
          <h2 className="text-[#669E6E] font-primary text-xl md:text-[34px] font-bold">
            Embodiment & Energy: Sports & Physical Wellness
          </h2>

          {/* Paragraph */}
          <p className="text-[#3F3F3F] text-sm md:text-base leading-relaxed font-secondary max-w-3xl mx-auto">
            Physical activity is central to our curriculum. Sports and yoga
            sessions develop strength, discipline, and harmony between body and
            mind:
          </p>

          {/* Activity Buttons */}
          <div className="flex flex-wrap justify-center gap-6 pt-2">
            {[
              "Regular Sports Training(Team & Individual)",
              "Yoga, Movement & Breathwork",
              "Outdoor Games & Nature Fitness Trails"
            ].map((item) => (
              <button
                key={item}
                className="text-[#669E6E] font-primary border border-[#A4E4AD] bg-[#E4F7E7] text-sm px-8 py-4 rounded-[20px] hover:bg-[#8bd897a4] transition"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Awareness section */}
      <section className="relative w-full px-4 md:px-10 py-24 bg-[#fff] overflow-hidden">
        {/* SVG Line Backgrounds */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/icons/darkblue-line.svg"
            alt="blue line"
            width={600}
            height={300}
            className="absolute bottom-10 left-5 w-500 max-w-none opacity-40"
          />
        </div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto text-center space-y-6"
        >
          <h2 className="text-[#357E8E] font-primary text-xl md:text-[34px] font-bold">
            Awareness & Agency: Life Skills & Values
          </h2>

          <p className="text-[#3F3F3F] text-sm md:text-base leading-relaxed font-secondary max-w-3xl mx-auto">
            Our life skills sessions equip students with tools to live
            consciously and connect deeply with themselves and others. Sessions
            include:
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-3 pt-2">
            {[
              "Mindfulness Practices & Journaling",
              "Community Circles & Values Dialogues",
              "Decision-making & Communications Games"
            ].map((item) => (
              <button
                key={item}
                className="text-[#357E8E] font-primary border border-[#8ECEDC] bg-[#EDF7FA] text-sm px-8 py-4 rounded-[20px] hover:bg-[#9bdaeea8] transition"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Creativity section */}
      <section className="w-full px-4 md:px-10 py-24 bg-[#FFF9EF]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center space-y-6"
        >
          {/* Heading */}
          <h2 className="text-[#B28842] font-primary text-xl md:text-[34px] font-bold">
            Creativity & Challenge: Skill Labs & Tinker Zones
          </h2>

          {/* Paragraph */}
          <p className="text-[#3F3F3F] text-sm md:text-base leading-relaxed font-secondary max-w-3xl mx-auto">
            To spark innovation and entrepreneurial thinking, students
            participate in project-based modules like:{" "}
          </p>

          {/* Activity Buttons */}
          <div className="flex flex-wrap justify-center gap-6 pt-2">
            {[
              "Coding & App Building Labs",
              "Design Thinking Sprints",
              "Chess,Strategy Games & Business Simulations"
            ].map((item) => (
              <button
                key={item}
                className="text-[#B28842] font-primary border border-[#FCD799] bg-[#FEF0D8] text-sm px-8 py-4 rounded-[20px] hover:bg-[#eccc94b7] transition"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="w-full px-4 md:px-10 py-20 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* Heading */}
          <h2 className="text-[#EE842C] text-2xl md:text-[34px] font-bold font-primary">
            Get Involved
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-[#000] font-secondary">
            Participate in activities designed to awaken joy, curiosity, and
            collaboration
          </p>

          {/* CTA Button */}
          <button className="bg-[#EE842C] hover:bg-[#ee832cd0] text-white text-sm font-semibold px-8 py-3 rounded-md shadow-sm transition">
            Access Activity Modules on LMS
          </button>
        </motion.div>
      </section>
    </main>
  );
}
