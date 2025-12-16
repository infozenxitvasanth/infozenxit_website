"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { FiUsers, FiHeart, FiArrowRightCircle } from "react-icons/fi";
import Link from "next/link";


const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

const leftBlockVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
    },
};

const rightBlockVariants: Variants = {
    hidden: { opacity: 0, x: 30, scale: 0.96 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
    },
};

const expertiseList = [
   {name: "Mobile app development",route:"/services/web-design-development"},
   {name: "Android app development",route:"/services/mobile-app-development"},
   {name:  "Flutter app development",route:"services/mobile-app-development"},
   {name: "WordPress  development",route:"services/web-design-development"},
   {name: "Front-end development",route:"services/web-design-development"},
   {name:  "UI design",route:"services/logo-design-graphic-design"},

];

const HomeSeactionThree = () => {
    return (
        <motion.section
            className="your-suggestion-section relative overflow-hidden py-16 md:py-20 text-white"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-4">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-center">

                    <motion.div
                        className="space-y-5 your-suggestion-left pt-5"
                        variants={leftBlockVariants}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur-sm">
                            <FiUsers className="text-cyan-300 text-lg" />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-cyan-100">
                                Our Expertise &amp; Support
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
                            Our Expertise &amp; Support
                        </h2>

                        {/* 🔹 short line kept here */}
                        <p className="text-sm sm:text-base text-black max-w-xl">
                            We have a team of experts who help developers in multiple ways.
                        </p>

                        <div className="your-suggestion-highlight-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-md">
                            <div className="flex items-start gap-3">
                                <div className="your-suggestion-icon-wrap">
                                    <FiHeart className="text-pink-300 text-xl" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg md:text-xl text-black font-semibold">
                                        Grab The Opportunity to Work with Us &amp; Learn As Well
                                    </h3>

                                    {/* 🔹 add the same line inside card if you want it there too */}
                                    <p className="text-xs sm:text-sm text-black">
                                        We have a team of experts who help developers in multiple ways.
                                    </p>

                                    <p className="text-sm sm:text-[17px] text-black">
                                        InfoZen&apos;s internship will allow you to work alongside and
                                        pick the brains of a group of web developers with the ultimate
                                        knowledge for Mobile app development, Android app development,
                                        Flutter app development, WordPress web development, Front-end
                                        development, UI design, Software development, etc.
                                    </p>
                                </div>
                            </div>
                            <motion.div
                                className="your-suggestion-cta mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Link className="flex gap-2" href={'/contact'}><span>contact</span>  <FiArrowRightCircle className="text-base" /></Link>
                              
                            </motion.div>
                            <span className="your-suggestion-shine" />
                        </div>
                    </motion.div>


                    {/* RIGHT SIDE */}
                    <motion.div
                        className="your-suggestion-right space-y-4 py-5"
                        variants={rightBlockVariants}
                    >
                        <p className="text-xs uppercase tracking-[0.28em]  mb-1">
                            Areas of focus
                        </p>

                        <div className="your-suggestion-grid grid gap-3 sm:grid-cols-2 ">
                            {expertiseList.map((item,idx) => (
                              <Link href={item.route}  key={idx}>  <motion.div
                                   
                                    className="your-suggestion-pill flex items-center gap-2 rounded-full px-4 py-3 text-sm sm:text-[17px]"
                                    whileHover={{ y: -3, scale: 1.02 }}
                                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <span className="your-suggestion-dot" />
                                    <span>{item.name}</span>
                                </motion.div></Link>
                            ))}
                        </div>

                        <p className="text-xs mt-2 text-dark"> 
                            {/*  text-slate-300/80 */}
                            Learn with hands-on guidance, code reviews, and practical exposure to
                            live projects.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default HomeSeactionThree;
