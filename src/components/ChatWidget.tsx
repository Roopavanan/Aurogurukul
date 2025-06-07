'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdSend } from 'react-icons/io';

const getCurrentTimestamp = () => {
  const now = new Date();
  return `Today, ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { type: 'user' | 'bot'; text: string; timestamp: string }[]
  >([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickQuestions = ['Class 9', 'Class 10', 'Class 11 & 12', '12th Pass'];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
useEffect(() => {
  if (isOpen && messages.length === 0) {
    setMessages([
      {
        type: 'bot',
        text: "Hi there 👋 I'm VOCA — How can I help you?",
        timestamp: getCurrentTimestamp(),
      },
    ]);
  }
}, [isOpen, messages.length]);

  const handleSendMessage = async (preset?: string) => {
    const userText = preset ?? input;
    if (!userText.trim()) return;

    const userMessage = {
      type: 'user' as const,
      text: userText,
      timestamp: getCurrentTimestamp(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(
        `https://lms-backend-526588758494.europe-west1.run.app/webchatbot/chat?messages=${encodeURIComponent(userText)}`,
        { method: 'POST' }
      );

      if (!response.body) throw new Error('No response body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let botText = '';
      let interimMessageIndex = -1;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter((line) => line.startsWith('data: '));

        for (const line of lines) {
          const jsonStr = line.replace('data: ', '');
          try {
            const { content } = JSON.parse(jsonStr);
            if (content) {
              botText += content;
              if (interimMessageIndex === -1) {
                interimMessageIndex = messages.length + 1;
                setMessages((prev) => [
                  ...prev,
                  { type: 'bot', text: content, timestamp: getCurrentTimestamp() },
                ]);
              } else {
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[interimMessageIndex] = {
                    type: 'bot',
                    text: botText,
                    timestamp: getCurrentTimestamp(),
                  };
                  return updated;
                });
              }
            }
          } catch (err) {
            console.warn('Invalid JSON:', jsonStr, err);
          }
        }
      }

      if (!botText.trim()) {
        setMessages((prev) => [
          ...prev,
          {
            type: 'bot',
            text: 'Sorry, no response received.',
            timestamp: getCurrentTimestamp(),
          },
        ]);
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: `Error: ${message}`,
          timestamp: getCurrentTimestamp(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-6 z-50 w-16 h-16 rounded-full shadow-lg bg-white flex items-center justify-center"
      >
        <Image src="/images/bot.svg" alt="Chatbot Icon" width={60} height={60} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-5 z-50 w-80 max-h-[80vh] bg-[#FFF7ED] border border-[#FCD799] rounded-2xl shadow-xl flex flex-col"
          >
            {/* Header with Close */}
            <div className="bg-gradient-to-r from-[#F9C46B] to-[#FCD799] rounded-t-2xl p-4 text-center relative">
              <Image
                src="/images/bot.svg"
                alt="Bot"
                width={50}
                height={50}
                className="mx-auto mb-2"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-3 text-gray-500 text-xl font-bold hover:text-gray-700"
                aria-label="Close chat"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm bg-white max-h-[50vh] scrollbar-thin scrollbar-thumb-gray-300">
              {messages.map((msg, index) => (
                <div key={index} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`rounded-xl px-4 py-2 max-w-[80%] text-sm ${
                      msg.type === 'user'
                        ? 'bg-[#214586] text-white'
                        : 'bg-[#FEF0D8] text-[#B28842] border border-[#FCD799]'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1">{msg.timestamp}</span>
                </div>
              ))}
              {loading && <p className="text-left text-xs text-gray-400">Typing...</p>}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Options */}
            {messages.length === 1 && (
              <div className="flex flex-wrap justify-center gap-2 p-3  bg-[#FFF9EF]">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSendMessage(q)}
                    className="bg-[#FFF7ED] border border-[#FCD799] px-3 py-1 rounded-full text-xs text-[#B28842] hover:bg-[#FCD799]/40 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Box */}
            <div className="p-3  bg-white">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="w-full border border-[#FCD799] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FCD799]"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#F97316] text-xl"
                >
                  <IoMdSend />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
