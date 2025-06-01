'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Icon */}
     <button
  onClick={() => setIsOpen(!isOpen)}
  className="fixed bottom-5 right-6 z-50 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
>
  <Image src="/images/bot.svg" alt="Chatbot Icon" width={40} height={40} />
</button>


      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-72 md:w-80 bg-[#FEEFEB] rounded-3xl shadow-xl p-4 text-center"
          >
              {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold"
              aria-label="Close chat"
            >
              ×
            </button>
            
            <p className="text-sm font-medium text-[#EE842C] font-primary">Hi</p>
            <h3 className="text-lg font-semibold text-[#AD4027] italic mt-1 font-primary">I&apos;m VOCA</h3>

            <Image
              src="/images/bot.svg"
              alt="Chatbot"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
                        <p className="text-sm text-[#AD4027] font-primary mb-4">How can I help you?</p>


            <div className="relative">
              <input
                type="text"
                placeholder="Type your message here..."
                className="w-full rounded-full border px-4 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#F45A37]"
              />
              <button className="absolute right-1 top-1 bottom-1 px-3 bg-[#F45A37] text-white rounded-full text-sm">
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
