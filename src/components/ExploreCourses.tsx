"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { categories } from "@/data/courseData";

export default function ExploreCourses() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/icons/red-line.svg"
          alt="Decorative line background"
          fill
          className="object-fill object-center opacity-50"
        />
      </div>

      <div className="w-full  ">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-primary text-[#F97316] mb-4">
            Explore Courses
          </h2>
        </div>

        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="px-2">
              <Link href={`/courses/${category.id}`} className="block">
                <div
                  className="h-[340px] w-full md:w-[280px] rounded-2xl p-6 relative overflow-hidden cursor-pointer"
                  style={{ backgroundColor: category.bgColor }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3
                      className="text-xl font-bold font-primary"
                      style={{ color: category.textColor }}
                    >
                      {category.title}
                      <p
                        className="mb-4 text-sm font-primary"
                        style={{ color: category.textColor }}
                      >
                        {category.course}
                      </p>
                    </h3>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: category.arrowBgColor }}
                    >
                      <IoIosArrowForward className="text-white text-lg" />
                    </div>
                  </div>
                  <p
                    className="mb-4 text-sm font-secondary"
                    style={{ color: category.textColor }}
                  >
                    <strong>Focus:</strong> {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.subjects.map((subject) => (
                      <span
                        key={subject.id}
                        className="text-xs px-3 py-1 rounded-[6px] border"
                        style={{
                          borderColor: category.textColor,
                          color: category.textColor,
                        }}
                      >
                        {subject.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
