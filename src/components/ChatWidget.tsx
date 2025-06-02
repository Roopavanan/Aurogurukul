'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdSend } from "react-icons/io";


export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Icon */}
     <button
  onClick={() => setIsOpen(!isOpen)}
  className="fixed bottom-5 right-6 z-50 w-16 h-16  rounded-full shadow-lg flex items-center justify-center"
>
  <Image src="/images/bot.svg" alt="Chatbot Icon" width={60} height={60} />
</button>


      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-15 z-50 w-72 md:w-80 bg-[#FEF0D8]  border-2 border-[#FCD799] rounded-3xl shadow-xl p-6 text-center"
          >
              {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold"
              aria-label="Close chat"
            >
              ×
            </button>
            
            <p className="text-sm font-medium text-[#B28842] font-primary">Hi</p>
            <h3 className="text-lg font-semibold text-[#B28842] italic mt-1 font-primary">I&apos;m VOCA</h3>

            <Image
              src="/images/bot.svg"
              alt="Chatbot"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
                        <p className="text-sm text-[#B28842] font-primary mb-4">How can I help you?</p>


            <div className="relative">
              <input
                type="text"
                placeholder="Type your message here..."
                className="w-full rounded-full border px-4 py-2 text-sm text-gray-700 bg-white outline-none focus:ring-2 focus:ring-[#FCD799]"
              />
              <button className="absolute right-1 top-1 bottom-1 px-3  text-grey-200 rounded-full text-sm">
               <IoMdSend />

              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
