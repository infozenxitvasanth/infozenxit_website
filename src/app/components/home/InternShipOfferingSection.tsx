"use client";

import React from "react";
import Image from "next/image";
import { FiCheckCircle, FiZap } from "react-icons/fi";
import { motion, type Variants } from "framer-motion";
import img from "../../../assets/image/home/intern_ship.jpg";
import Link from "next/link";


const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -40, rotateY: -8 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.1,
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

// --------------------------------------------------------

const InternShipOfferingSection = () => {
  const internships = [
{name:"Python Django",route:"/internship/python-django"},
{name:"Machine Learning & Data Sciences",route:"/internship/machine-learning-data-science"},
{name:"PHP Web Development",route:"/internship/php-web-development"},
{name:"Java",route:"/internship/java"},
{name:"React JS",route:"/internship/react-js"},
{name:"Android",route:"/internship/android"},
{name:"Software Testing",route:"/internship/software-testing"},
{name:"Flutter",route:"/internship/flutter"},
{name:"AWS Solution Architect",route:"/internship/aws-solution-architect"},
{name:"Data Analytics",route:"/internship/data-analytics"},

 
  ];

  return (
    <motion.section
      className="internship-section relative overflow-hidden py-16 md:py-20 text-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <div className="px-4">
          <div className="grid gap-10 md:grid-cols-2 items-center">


            <motion.div
              className="space-y-4"
              variants={contentVariants}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm internship-badge"
                initial={{ opacity: 0, y: -8, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <FiZap className="text-cyan-300 text-lg" />
                <span className="text-xs tracking-[0.25em] uppercase text-cyan-200">
                  Internship Programs
                </span>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Our Internship Offerings
              </h2>

              <p className="text-sm sm:text-base text-slate-200 max-w-xl">
                Gain real-time project experience, industry exposure, and mentor
                guidance across multiple trending technologies.
              </p>


              <motion.ul
                className="grid gap-2 sm:gap-3 sm:grid-cols-2 mt-4"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {internships.map((item,idx) => (
              <Link href={item.route}  key={idx}>
                  <motion.li
                   
                    className="internship-list-item flex items-center gap-2 text-sm md:text-base"
                    variants={listItemVariants}
                  >
                    <span className="inline-flex items-center justify-center rounded-full">
                      <FiCheckCircle className="text-cyan-300 text-lg" />
                    </span>
                    <span>{item.name}</span>
                  </motion.li>
              </Link>
                ))}
              </motion.ul>

            </motion.div>


            {/* ---------------- IMAGE SIDE ---------------- */}
            <motion.div
              className="internship-image-wrapper relative"
              variants={imageVariants}
            >
              <div className="internship-image-card rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={img}
                  alt="Internship"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="internship-image-glow" />
              </div>
            </motion.div>


          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InternShipOfferingSection;
