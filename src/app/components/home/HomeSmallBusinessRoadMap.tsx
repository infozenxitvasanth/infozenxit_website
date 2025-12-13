"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";


const steps = [
    { id: 1, title: "Identify" },
    { id: 2, title: "Implement" },
    { id: 3, title: "Manage" },
];

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
    },
};

const stepsContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.25,
        },
    },
};

const stepVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
};

const HomeSmallBusinessRoadMap = () => {
    return (
        <div
            className="roadmap-section"
        // variants={sectionVariants}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-4 roadmap-section-container">
                {/* White card */}
                <div
                    className="roadmap-card mx-auto max-w-3xl text-center"
                // variants={cardVariants}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 mb-3">
                        Let Us Help with Your Business IT Needs
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                        We are a unique product development company offering competitive
                        software solutions to unlock your business potential. We help brands
                        navigate their digital transformation journey.
                    </p>
                </div>

                {/* Circles */}
                {/* <motion.div
                    className="roadmap-steps flex items-center justify-center gap-8 md:gap-16"
                    variants={stepsContainerVariants}
                >
            
                    <div className="roadmap-line" />

                    {steps.map((step) => (
                        <motion.div
                            key={step.id}
                            className="roadmap-step flex flex-col items-center text-center"
                            variants={stepVariants}
                        >
                            <div className="roadmap-circle flex items-center justify-center">
                                <span className="roadmap-number">{step.id}</span>
                            </div>
                            <span className="mt-3 text-sm md:text-base text-slate-50 font-medium">
                                {step.title}
                            </span>
                        </motion.div>
                    ))}
                </motion.div> */}
            </div>
        </div>
    );
};

export default HomeSmallBusinessRoadMap;
