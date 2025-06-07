'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFlask,
  faBook,
  faShirt,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';

const resources = [
  {
    title: 'Experimental Kits',
    description: 'Hands-on kits for science experiments.',
    start: 'From July 2025',
    icon: faFlask,
    borderColor: '#669E6E',
    bgColor: '#F4FCF5',
    iconBg: '#669E6E',
  },
  {
    title: 'Books',
    description: 'Educational books on various subjects.',
    start: 'From August 2025',
    icon: faBook,
    borderColor: '#AD4027',
    bgColor: '#FEEFEB',
    iconBg: '#AD4027',
  },
  {
    title: 'Merchandise',
    description: 'Branded apparel and accessories.',
    start: 'From September 2025',
    icon: faShirt,
    borderColor: '#B28842',
    bgColor: '#FFF9EF',
    iconBg: '#B28842',
  },
  {
    title: 'Workshops',
    description: 'Interactive educational workshops.',
    start: 'From October 2025',
    icon: faChalkboardTeacher,
    borderColor: '#8363A9',
    bgColor: '#F8F3FD',
    iconBg: '#8363A9',
  },
];

export default function VerticalTabs() {
  return (
    <div className="min-h-screen px-6 py-16 sm:px-10 lg:px-20 w-full max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-[34px] font-bold text-center font-primary mb-12 text-[#EE842C]">
        Resources at Aurogurukul
      </h2>
      <div className="flex flex-col gap-6">
        {resources.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            style={{
              border: `2px solid ${item.borderColor}`,
              backgroundColor: item.bgColor,
            }}
            className="rounded-[20px] p-6 flex justify-between items-start flex-col sm:flex-row"
          >
            <div className="flex items-start gap-4 max-w-xl">
              <div
                className="p-3 rounded-full text-white"
                style={{
                  backgroundColor: item.iconBg,
                }}
              >
                <FontAwesomeIcon icon={item.icon} size="4x" />
              </div>
              <div>
                <h3
                  className="text-xl font-semibold font-primary"
                  style={{ color: item.iconBg }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 mt-1">{item.description}</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:text-right">
              <p className="text-sm text-gray-800">This course is scheduled to start</p>
              <p
                className="font-semibold text-md"
                style={{ color: item.iconBg }}
              >
                {item.start}
              </p>
              <button
                className="mt-2 px-4 py-2 rounded text-white text-sm font-medium"
                style={{
                  backgroundColor: item.iconBg,
                }}
              >
                Coming Soon
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
