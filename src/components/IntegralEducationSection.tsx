"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5
    }
  })
};

const cards = [
  {
    title: "Deepens Understanding",
    content:
      "Concepts in Math or Science are explored through hands-on activities, cross-disciplinary connections, and real-life applications.",
    color: "bg-[#FCD7CF] text-[#AD4027]"
  },
  {
    title: "Builds Contextual Intelligence",
    content:
      "Subjects like Literature or History are approached through storytelling, reflection, and relevance to present-day life.",
    color: "bg-[#EEE3FB] text-[#8363A9]"
  },
  {
    title: "Encourages Expression",
    content:
      "Art, Music, and Theatre become core mediums for emotional exploration, communication, and creativity.",
    color: "bg-[#E4F7E7] text-[#669E6E]"
  },
  {
    title: "Strengthens Inner Resilience",
    content:
      "Practices like mindfulness, journaling, and value discussions foster mental well-being and ethical awareness.",
    color: "bg-[#D4ECF2] text-[#357E8E]"
  },
  {
    title: "Promotes Physical Vitality",
    content:
      "Regular sports, yoga, and physical challenges develop strength, discipline, and body-mind coordination.",
    color: "bg-[#FEF0D8] text-[#B28842]"
  }
];

export default function IntegralEducationSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <svg
        className="absolute left-0 top-[50%] w-full z-[-1]"
        height="300"
        viewBox="0 0 1440 320"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,160 C360,80 1080,240 1440,160"
          stroke="#FBBF24"  // Tailwind yellow-400
          strokeWidth="3"
          fill="transparent"
          strokeDasharray="8 6"
        />
      </svg>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-primary text-[#EE842C] mb-4"
      >
        How Does It Add Value to Mainstream Curriculums?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-[#214586] max-w-5xl mx-auto mb-12"
      >
        Integral Education doesn’t seek to replace established frameworks like
        CBSE, ICSE, IB, CAIE, or GCSE—instead, it enhances and elevates them. It
        brings depth, relevance, and real-world meaning to subjects by
        integrating experiential learning, creative expression, value education,
        and life skills into the academic journey.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-[#214586] max-w-5xl font-bold font-secondary mx-auto mb-12"
      >
        By integrating these elements, AuroGurukul transforms conventional
        schooling into a living, breathing, learner-centered journey.{" "}
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6 relative z-10">
        {cards.slice(0, 3).map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            className={`w-full md:w-[30%] p-13 rounded-[30px] shadow-md ${card.color}`}
          >
            <h3 className="text-lg font-semibold font-primary text-start mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-start font-secondary">{card.content}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {cards.slice(3).map((card, i) => (
          <motion.div
            key={i + 3}
            custom={i + 3}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            className={`w-full md:w-[30%] p-14 rounded-[30px] shadow-md ${card.color}`}
          >
            <h3 className="text-lg font-semibold mb-2 font-primary text-start">
              {card.title}
            </h3>
            <p className="text-sm font-secondary text-start">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
