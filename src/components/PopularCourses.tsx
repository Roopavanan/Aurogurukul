'use client';

import { motion, useAnimationFrame } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FC, useRef } from 'react';

type Course = {
  title: string;
  href: string;
  icon: string;
  arrowIcon: string;
  bgColor: string;
  textColor: string;
};

const courses: Course[] = [
  {
    title: 'Mid - School Courses',
    href: '/courses/mid-school',
    icon: '/icons/book.svg',
    arrowIcon: '/icons/org.svg',
    bgColor: 'bg-[#FEE4DC]',
    textColor: "#AD4027"
  },
  {
    title: 'JEE Courses',
    href: '/courses/jee',
    icon: '/icons/engineer.svg',
    arrowIcon: '/icons/violet.svg',
    bgColor: 'bg-[#EEE5FF]',
    textColor: "#8363A9"
  },
  {
    title: 'NEET Foundation',
    href: '/courses/neet',
    icon: '/icons/campus.svg',
    arrowIcon: '/icons/green.svg',
    bgColor: 'bg-[#E3F7E9]',
    textColor:"#669E6E"
  },
  {
    title: 'Olympiad',
    href: '/courses/olympiad',
    icon: '/icons/books.svg',
    arrowIcon: '/icons/blue.svg',
    bgColor: 'bg-[#DFF2F8]',
    textColor: "#357E8E"
  },
  {
    title: 'NTSE',
    href: '/courses/ntse',
    icon: '/icons/book.svg',
    arrowIcon: '/icons/org.svg',
    bgColor: 'bg-[#FEE4DC]',
    textColor: "#AD4027"
  },
  {
    title: 'CA foundation',
    href: '/courses/ca',
    icon: '/icons/engineer.svg',
    arrowIcon: '/icons/violet.svg',
    bgColor: 'bg-[#EEE5FF]',
    textColor: "#8363A9"
  },
  {
    title: 'IAS Foundation',
    href: '/courses/ias',
    icon: '/icons/campus.svg',
    arrowIcon: '/icons/green.svg',
    bgColor: 'bg-[#E3F7E9]',
    textColor:"#669E6E"
  },
  {
    title: 'Board exams',
    href: '/courses/olympiad',
    icon: '/icons/books.svg',
    arrowIcon: '/icons/blue.svg',
    bgColor: 'bg-[#DFF2F8]',
    textColor: "#357E8E"
  },
];

// Duplicate array for infinite effect
const infiniteCourses = [...courses, ...courses];

const PopularCourses: FC = () => {
  const x = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    if (containerRef.current) {
      x.current -= delta * 0.05; // Adjust speed
      const width = containerRef.current.scrollWidth / 2;
      if (-x.current >= width) x.current = 0;
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background SVG */}
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

        <div className="overflow-hidden w-full py-4">
          <motion.div
            ref={containerRef}
            className="flex gap-6 whitespace-nowrap w-max px-4"
          >
            {infiniteCourses.map((course, i) => (
              <div
                key={`${course.title}-${i}`}
                className={`min-w-[260px] p-6 rounded-4xl shadow-md cursor-pointer ${course.bgColor} relative`}
              >
                <Link href={course.href}>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <Image src={course.icon} alt={course.title} width={60} height={60} />
                      <Image src={course.arrowIcon} alt="arrow" width={20} height={20} />
                    </div>
                    <p className="text-lg font-medium font-primary text-left"
                      style={{ color: course.textColor }}
                    >{course.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
