'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Parent',
    quote: 'At AuroGurukul, I rediscovered the joy of learning at my own pace.',
    image: '/images/impact/boy.png',
  },
  {
    name: 'Student',
    quote: 'At AuroGurukul, I rediscovered the joy of learning at my own pace.',
    image: '/images/impact/girl.png',
  },
  {
    name: 'Parent',
    quote: 'It’s not just a school. It’s a space for becoming who you truly are.',
    image: '/images/impact/men.png',
  },
];

const ImpactStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-20 px-4 md:px-16 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-primary text-[#EE842C] mb-4">Impact Stories</h2>
        <p className="text-gray-600 text-lg font-secondary">Hear what people think about us!</p>
      </div>

      <div className="max-w-6xl mx-auto overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((testimonial, idx) => {
            const centerIndex = (activeIndex + 1) % testimonials.length;
            const isActive = idx === centerIndex;

            return (
              <div key={idx} className="px-4 py-12 flex justify-center">
                <div
                  className={`relative w-full max-w-[360px] h-[213px] bg-white border-l-4 rounded-2xl px-6 py-6 shadow-md flex flex-col justify-between transition-all duration-300 ease-in-out
                    ${isActive ? 'border-[#34B1E2] scale-105 opacity-100 shadow-lg z-10' : 'border-gray-200 md:scale-95 md:opacity-50'}
                  `}
                >
                  <div className="absolute top-2 right-4 text-6xl text-gray-200 font-serif">“</div>

                  <div className="flex items-center gap-3 z-10 mb-2">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-gray-800">{testimonial.name}</span>
                  </div>

                  <p className="text-gray-700 text-sm leading-snug font-light">{testimonial.quote}</p>

                  <div className="text-right mt-4">
                    <p className="text-xs text-gray-500 font-medium">– {testimonial.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ImpactStories;
