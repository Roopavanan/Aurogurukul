"use client"; // if using app dir
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const contactData = [
  {
    icon: <FaMapMarkerAlt className="text-white text-lg" />,
    bgColor: "bg-blue-600",
    title: "Visit Us",
    line1: "6, Lally Tollendal St, ",
    line2: "Heritage Town, Puducherry, 605002"
  },
  {
    icon: <FaPhone className="text-white text-lg" />,
    bgColor: "bg-green-500",
    title: "Call Us",
    line1: "+91 7530017093",
    line2: "Mon–Fri 8AM–6PM"
  },
  {
    icon: <FaEnvelope className="text-white text-lg" />,
    bgColor: "bg-purple-600",
    title: "Email Us",
    line1: "contact@aurogurukul.com",
    line2: "Response within 24hrs"
  },
  {
    icon: <FaClock className="text-white text-lg" />,
    bgColor: "bg-orange-500",
    title: "Office Hours",
    line1: "Mon–Fri: 8AM–6PM",
    line2: "Sat: 9AM–3PM"
  }


];


 const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577110350187", color: "hover:text-blue-600" },
    { icon: Twitter, href: "https://x.com/AuroGurukul", color: "hover:text-blue-400" },
    { icon: Instagram, href: "https://www.instagram.com/aurogurukul?igsh=MXNjbXZnbjU3OXNlMQ==", color: "hover:text-pink-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/aurogurukul/", color: "hover:text-blue-700" }
  ];

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 py-12 px-4 md:px-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#EE842C] font-primary">
          Get in Touch
        </h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto font-secondary">
          Have questions about our programs? Need guidance on your educational
          journey? We&apos;re here to help you every step of the way.
        </p>
      </div>

      <div className="text-center my-12 max-w-7xl mx-auto w-full py-12">
        <h2 className="text-3xl text-[#EE842C] font-bold mb-12 font-primary">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">
          {contactData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] p-6 w-[280px] mx-auto"
            >
              <div className="flex flex-col items-center space-y-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bgColor}`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold font-primary text-[#EE842C]">
                  {item.title}
                </h3>
                <p className="font-bold font-secondary">{item.line1}</p>
                <p className="text-gray-500 font-secondary">{item.line2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center py-12"
      >
        <h3 className="text-xl font-semibold text-[#EE842C] mb-6 font-primary">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 ${social.color} transition-colors duration-200 hover:shadow-xl`}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto w-full">
        {/* Left: Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-[#1B3C73] mb-6 font-primary">
            Send us a Message
          </h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
              />
            </div>

            <select required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]">
              <option>Select inquiry type</option>
              <option>Admissions</option>
              <option>Support</option>
              <option>General</option>
            </select>

            <input
              type="text"
              required
              placeholder="Brief subject line"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
            />

            <textarea
              placeholder="Tell us how we can help you..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
            />

            <button
              type="submit"
              className="w-full bg-[#EE842C] text-white py-3 rounded-md font-medium hover:opacity-90 transition duration-200"
            >
              Send Message 
            </button>
          </form>
        </div>

        {/* Right: Campus Info + Map */}
        <div className="bg-[#FFF6ED] rounded-xl p-8 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#1B3C73] mb-2">
              Visit Our Campus
            </h3>
            <p className="text-[#1B3C73] text-lg font-medium">
              6, Lally Tollendal St, 
            </p>
            <p className="text-[#FF8A00] mb-4">Heritage Town, Puducherry, 605002</p>
          </div>
          <div className="w-full h-64 rounded-md overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487.94012605670275!2d79.8355634!3d11.9383861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5363d155051fd7%3A0x8f317119bae6a6bc!2s6%2C%20Lally%20Tollendal%20St%2C%20Heritage%20Town%2C%20Puducherry%2C%20605002!5e0!3m2!1sen!2sin!4v1749318535238!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
