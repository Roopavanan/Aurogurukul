'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Announcement = {
  id: number;
  title: string;
  date: string;
  description: string;
  images: string[];
};

const announcements: Announcement[] = [
  {
    id: 1,
    title: 'Electrostatics Experimental Kit Release',
    date: 'June 9, 2025',
    description:
      'Unveiling our revolutionary Electrostatics Experimental Kit, perfect for students eager to dive into hands-on physics learning.',
    images: ['/images/kit-2.png', '/images/kit-1.png'],
  },
  {
    id: 2,
    title: 'AI Skill Bootcamp',
    date: 'July 15, 2025',
    description:
      'An immersive bootcamp focused on AI and machine learning fundamentals for school students.',
    images: ['/images/kit-1.png', '/images/kit-2.png'],
  },
  // Add more announcements as needed
];

type ArrowProps = {
  onClick?: () => void;
};

// Custom Next Arrow
const NextArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-[#FCCB7A] hover:bg-[#f4c489] text-white p-2 rounded-full shadow"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-[#FCCB7A] hover:bg-[#f4c489] text-white p-2 rounded-full shadow"
  >
    <FaChevronLeft />
  </button>
);


const AnnouncementSlider: React.FC = () => {
  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,           
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  pauseOnHover: true,
  centerMode: false,         
  variableWidth: false,      
};


  return (
    <section className="w-full px-4 sm:px-6 lg:px-16">
      <div className="relative max-w-[1600px] mx-auto">
        <Slider {...settings}>
          {announcements.map((announcement) => (
            <div key={announcement.id} className="w-full px-2">
              <div className="bg-[#FEF0D8] rounded-[24px] px-6 md:px-16 lg:px-28 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Text Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 font-primary">
                    {announcement.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-800 mt-1 mb-2 font-primary">
                    <span className="font-bold">Release Date:</span> {announcement.date}
                  </p>
                  <p className="text-sm text-gray-700 mb-4 max-w-md font-secondary">
                    {announcement.description}
                  </p>
                  <button className="bg-[#EE842C] hover:bg-orange-300 text-white text-sm px-5 py-2 rounded-md font-medium transition">
                    Know More
                  </button>
                </div>

                {/* Images */}
                <div className="relative flex justify-end items-center gap-4 min-w-[120px] h-auto">
                  {announcement.images.map((img, i) => (
                    <div
                      key={i}
                      className={`w-30 h-30 relative  rounded-full border-2 border-[#EE842C] overflow-hidden ${
                        i === 1 ? 'absolute right-10 top-8 z-0' : 'z-10'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`announcement-${i}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AnnouncementSlider;
