"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";

const page = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="bg-white w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1600px] mx-auto bg-[#8DB3DB] rounded-[60px] px-4 sm:px-6 lg:px-8">
          <div className="w-full h-auto md:h-[640px] flex flex-col-reverse md:flex-row items-center justify-center gap-[40px] lg:gap-[210px] py-10">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl order-2 md:order-1 text-center md:text-left"
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-primary text-[#214586] mb-4 leading-14">
                Activities at Aurogurukul
              </h1>
              <p className="text-[#214586] mb-6 md:text-[22px] text-[18px]">
                Our learners explore and grow through enriching activities like{" "}
                <strong>Field Trips</strong>, hands-on{" "}
                <strong>Workshops</strong>, engaging{" "}
                <strong>Guest Lectures</strong>, and personalized{" "}
                <strong>Counselling</strong> sessions — all aligned with our
                holistic education philosophy.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#EE842C] text-white px-6 py-2 rounded-[8px] font-semibold text-[16px] w-[208px]"
              >
                Explore More
              </motion.button>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <Image
                src="/images/hero.webp"
                alt="Happy Student"
                width={480}
                height={600}
                className="w-full md:h-[600px] h-[400px] max-w-4xl mx-auto relative top-10 md:top-5"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* talks, workshops & health */}
      <section className="relative bg-[#fff] pt-[120px] pb-[164px] px-6 lg:px-16 ">
        <div className="relative container max-w=[1240px] space-y-12 mx-auto items-center justify-center z-10 hidden lg:block ">
          {/* Expert Talks */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row z-10 items-center bg-[#FEEFEB] rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]"
          >
            {/* Image Section */}
            <div className="relative w-full lg:w-[40%] h-[450px] rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden">
              <Image
                src="/images/field-trip.png"
                alt="Field Trip"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 p-6 lg:p-10">
              <h3 className="text-[24px] md:text-[48px] font-semibold font-primary text-[#AD4027] mx-2 md:mx-0">
                Field Trips
              </h3>
              <p className="text-[#AD4027] text-[18px] mt-4 mx-2 md:mx-0 font-secondary font-normal">
                Our field trips offer immersive learning beyond the classroom.
                Students explore nature, heritage sites, science centers, and
                local communities — making learning tangible, interactive, and
                deeply memorable.
              </p>
            </div>
          </motion.div>

          {/* Workshops (Alternate Layout) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex z-10 flex-col-reverse lg:flex-row items-center bg-[#F4FCF5] rounded-tr-[200px] rounded-bl-[200px] rounded-tl-[50px] rounded-br-[50px] overflow-hidden"
          >
            {/* Text Section */}
            <div className="relative z-10 w-full lg:w-[60%] p-6 lg:p-18">
              <h3 className="text-[24px] md:text-[48px] text-end md:text-start font-primary font-semibold text-[#669E6E]">
                Workshops
              </h3>
              <p className="text-[#669E6E] mt-4 text-end md:text-start font-secondary font-normal">
                By engaging in practical workshops, our team is able to discover
                and grow not just as professionals but as people. These
                workshops are an important aspect of our work towards our core
                mission: the holistic development of our youth.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[40%] flex justify-end h-[450px] relative">
              <Image
                src="/images/workshop.png"
                alt="Workshops"
                fill
                className="object-cover rounded-tr-[200px] rounded-bl-[200px] rounded-tl-[50px] rounded-br-[50px]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Integral Health */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col z-10 lg:flex-row items-center bg-[#EEE3FB] rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]"
          >
            {/* Image Section */}
            <div className="relative z-10 w-full lg:w-[40%] h-[450px] rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden">
              <Image
                src="/images/guest-lectures.png"
                alt="Guest Lectures"
                fill
                className="object-cover rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 p-6 lg:p-10">
              <h3 className="text-[24px] md:text-[48px] font-semibold font-primary text-[#8363A9] mx-2 md:mx-0">
                Guest Lectures
              </h3>
              <p className="text-[#8363A9] text-[18px] mt-4 mx-2 md:mx-0 font-secondary font-normal">
                We regularly invite experts and thought leaders from diverse
                backgrounds to share insights with our learners. These
                interactive sessions aim to broaden perspectives, ignite
                curiosity, and bridge the gap between academic concepts and
                real-world experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex z-10 flex-col-reverse lg:flex-row items-center bg-[#FEF0D8] rounded-tr-[200px] rounded-bl-[200px] rounded-tl-[50px] rounded-br-[50px] overflow-hidden"
          >
            {/* Text Section */}
            <div className="relative z-10 w-full lg:w-[60%] p-6 lg:p-18">
              <h3 className="text-[24px] md:text-[48px] text-end md:text-start font-primary font-semibold text-[#B28842]">
                Counselling
              </h3>
              <p className="text-[#B28842] mt-4 text-end md:text-start font-secondary font-normal">
                At Aurogurukul, we believe in supporting the emotional and
                mental well-being of our learners. Our counselling sessions
                create a safe and nurturing environment where students can
                openly discuss their challenges, build resilience, and develop a
                positive outlook towards life and learning.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[40%] flex justify-end h-[450px] relative">
              <Image
                src="/images/counselling.png"
                alt="Counselling"
                fill
                className="object-cover rounded-tr-[200px] rounded-bl-[200px] rounded-tl-[50px] rounded-br-[50px]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>
        </div>

        {/* mobile & tab view */}

        <div className="container mx-auto px-4 py-8 block lg:hidden ">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 place-items-center">
            {/* Expert Talks */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#FEEFEB] rounded-[50px] overflow-hidden shadow-md flex flex-col items-center text-center z-10 max-w-[350px] w-full"
            >
              {/* Image Section */}
              <div className="relative w-full h-[250px]">
                <Image
                  src="/images/field-trip.png"
                  alt="Field Trip"
                  fill
                  className="object-cover rounded-t-[50px]"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>

              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-[24px] md:text-[32px] font-semibold font-primary text-[#AD4027]">
                  Field Trips
                </h3>
                <p className="text-[#AD4027] text-[16px] mt-4 font-secondary">
                  Our field trips offer immersive learning beyond the
                  classroom—exploring nature, heritage sites, science centers,
                  and local communities for a hands-on experience.
                </p>
              </div>
            </motion.div>

            {/* Workshops */}

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#F4FCF5] rounded-[50px] overflow-hidden shadow-md flex flex-col items-center text-center z-10 max-w-[350px] w-full"
            >
              {/* Image Section */}
              <div className="relative w-full h-[250px]">
                <Image
                  src="/images/workshop.png"
                  alt="Workshops"
                  fill
                  className="object-cover rounded-t-[50px]"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>

              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-[24px] md:text-[32px] font-semibold font-primary text-[#669E6E]">
                  Workshops
                </h3>
                <p className="text-[#669E6E] text-[16px] mt-4 font-secondary">
                  Engaging in hands-on workshops allows our team to grow both
                  personally and professionally.
                </p>
              </div>
            </motion.div>

            {/* Integral Health */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-[350px] w-full md:col-span-2 md:justify-self-center items-center text-center lg:col-span-1 z-10 bg-[#EEE3FB] rounded-[50px]"
            >
              {/* Image */}
              <div className="relative w-full h-[250px]">
                <Image
                  src="/images/guest-lectures.png"
                  alt="Guest Lectures"
                  fill
                  className="object-cover rounded-t-[50px]"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-[24px] md:text-[32px] font-semibold font-primary text-[#8363A9]">
                  Guest Lectures
                </h3>
                <p className="text-[#8363A9] text-[16px] mt-4 font-secondary">
                  Experts from diverse backgrounds share their journeys and
                  knowledge, inspiring youth through meaningful conversations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#FEF0D8] rounded-[50px] overflow-hidden shadow-md flex flex-col items-center text-center z-10 max-w-[350px] w-full"
            >
              {/* Image Section */}
              <div className="relative w-full h-[250px]">
                <Image
                  src="/images/counselling.png"
                  alt="Counselling"
                  fill
                  className="object-cover rounded-t-[50px]"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>

              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-[24px] md:text-[32px] font-semibold font-primary text-[#B28842]">
                  Counselling
                </h3>
                <p className="text-[#B28842] text-[16px] mt-4 font-secondary">
                  Through individual and group counselling, we guide learners to
                  reflect, overcome challenges, and grow with clarity and
                  emotional strength.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="shapes">
          <motion.svg
            width="260"
            height="259"
            viewBox="0 0 260 259"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[0.2%] top-[85%] md:right-[10%] md:top-[75%] lg:right-[5%] lg:top-[85%] scale-50 xl:scale-100"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <rect
              x="100.289"
              width="187.637"
              height="187.637"
              transform="rotate(32.0259 100.289 0)"
              fill="#FCD7CF"
            />
          </motion.svg>

          {/* circle */}
          <motion.svg
            width="404"
            height="403"
            viewBox="0 0 404 403"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute lg:left-[5%] lg:top-[45%] left-[18%] top-[50%] md:left-[45%] md:top-[30%] scale-50 xl:scale-100"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <circle cx="202.281" cy="201.5" r="201.5" fill="#E4F7E7" />
          </motion.svg>

          {/* triangle */}
          <motion.svg
            width="600"
            height="600"
            viewBox="0 0 251 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute lg:top-[2%] lg:right-[15%] -top-[6%] right-[10%] scale-50 xl:scale-100"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <path
              d="M250.547 0.865651L192.006 255.82L0.479068 77.6452L250.547 0.865651Z"
              fill="#FEF0D8"
            />
          </motion.svg>
        </div>
      </section>
    </main>
  );
};

export default page;
