'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const leftContent = [
  {
    title: 'Course',
    desc: 'Our courses meticulously cover core to advanced topics, structured into logical modules for progressive, incremental learning.',
  },
  {
    title: 'Easy-to-follow Text Content',
    desc: 'Clear, concise, and engaging text content for every chapter, breaking down complex topics with explanations and visuals.',
  },
  {
    title: 'Experiments & Simulations',
    desc: 'Hands-on learning through experiments, activities, and simulations to apply concepts and foster problem-solving.',
  },
];

const rightContent = [
  {
    title: 'AI-enabled Tests',
    desc: 'Intelligent, AI-powered tests (MCQ and subjective) assess your understanding, providing a robust evaluation of your learning.',
  },
  {
    title: 'Test Analysis',
    desc: 'In-depth AI-driven analysis identifies strengths and weaknesses, offering targeted feedback for improvement.',
  },
  {
    title: 'Test Report',
    desc: 'Comprehensive, personalized reports summarize your progress and suggest next steps for mastery.',
  },
];

export default function StartLearning() {
  return (
    <section className="bg-[#FFF3EC] px-4 py-24 overflow-hidden">
      {/* Header */}
      <div className="max-w-8xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EE842C] mb-4 font-primary"
        >
          Start learning with Aurogurukul
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-[#000] text-sm  font-secondary"
        >
          Unlock your potential with Aurogurukul’s structured and interactive learning, guiding you
          from fundamentals to mastery with AI-enabled tools and personalized feedback.
        </motion.p>
      </div>

      {/* Content Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 items-center px-12">
        {/* Left Column */}
        <div className="space-y-10 text-center md:text-left mx-8">
          {leftContent.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-[#000] text-[20px] font-primary">{item.title}</h3>
              <p className="text-[14px] text-[#3F3F3F] font-secondary">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          className=" md:flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/svg/venn.svg" 
            alt="Venn Diagram"
            width={600}
            height={300}
            className="z-10"
          />
        </motion.div>

        {/* Right Column */}
        <div className="space-y-10 text-center md:text-left mx-8">
          {rightContent.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-[#222] text-[20px] font-primary">{item.title}</h3>
              <p className="text-sm text-[#444] font-secondary">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <button className="bg-[#EE842C] hover:bg-[#EE842C] text-white px-6 py-2 rounded-lg text-sm font-bold font-secondary">
          Enrol Now
        </button>
      </motion.div>
    </section>
  );
}
