// components/PopularCourses.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

type Course = {
  title: string;
  href: string;
  icon: string;
  arrowIcon: string;
  bgColor: string;
};

const courses: Course[] = [
  {
    title: 'Mid - School Courses',
    href: '/courses/mid-school',
    icon: '/icons/book.svg',
    arrowIcon: '/icons/org.svg',
    bgColor: 'bg-[#FEE4DC]',
  },
  {
    title: 'JEE Courses',
    href: '/courses/jee',
    icon: '/icons/engineer.svg',
    arrowIcon: '/icons/violet.svg',
    bgColor: 'bg-[#EEE5FF]',
  },
  {
    title: 'NEET Foundation',
    href: '/courses/neet',
    icon: '/icons/campus.svg',
    arrowIcon: '/icons/green.svg',
    bgColor: 'bg-[#E3F7E9]',
  },
  {
    title: 'Olympiad',
    href: '/courses/olympiad',
    icon: '/icons/books.svg',
    arrowIcon: '/icons/blue.svg',
    bgColor: 'bg-[#DFF2F8]',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const PopularCourses: FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* SVG Line Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/icons/dashed-line.svg"
          alt="Background Curve"
          fill
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>

      <div className="relative z-10 text-center">
        <h2 className="text-[34px] font-primary font-bold text-[#EE842C] mb-12">Popular Courses</h2>

        <div className="flex flex-wrap justify-center gap-12 px-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              className={`w-68 p-6 rounded-4xl shadow-md cursor-pointer ${course.bgColor} relative`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              whileHover={{ scale: 1.05 }}
            >
              <Link href={course.href}>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <Image src={course.icon} alt={course.title} width={60} height={60} />
                    <Image src={course.arrowIcon} alt="arrow" width={20} height={20} />
                  </div>
                  <p className="text-lg font-medium font-primary text-left">{course.title}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
