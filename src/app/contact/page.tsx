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
    line1: "123 Education Street",
    line2: "Learning City, LC 12345"
  },
  {
    icon: <FaPhone className="text-white text-lg" />,
    bgColor: "bg-green-500",
    title: "Call Us",
    line1: "+1 (555) 123-4567",
    line2: "Mon–Fri 8AM–6PM"
  },
  {
    icon: <FaEnvelope className="text-white text-lg" />,
    bgColor: "bg-purple-600",
    title: "Email Us",
    line1: "info@edusite.com",
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
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" }
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
        <h2 className="text-3xl font-bold mb-12 font-primary">
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
                <h3 className="text-lg font-semibold font-primary">
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
        <h3 className="text-xl font-semibold text-gray-800 mb-6 font-primary">Follow Us</h3>
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
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
              />
            </div>

            <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]">
              <option>Select inquiry type</option>
              <option>Admissions</option>
              <option>Support</option>
              <option>General</option>
            </select>

            <input
              type="text"
              placeholder="Brief subject line"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
            />

            <textarea
              placeholder="Tell us how we can help you..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF8A00] to-[#1B3C73] text-white py-3 rounded-md font-medium hover:opacity-90 transition duration-200"
            >
              Send Message ✈️
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
              123 Education Street
            </p>
            <p className="text-[#FF8A00] mb-4">Learning City, LC 12345</p>
          </div>
          <div className="w-full h-64 rounded-md overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1321954555933!2d-122.42177868468117!3d37.77492927975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2e0a7f2e6f%3A0xc6cb85e9db60c863!2s123%20Education%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000"
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
