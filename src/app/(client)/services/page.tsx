"use client";

import React, { Suspense, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
// import type { Variants } from "framer-motion";
import {
    FiMonitor,
    FiSmartphone,
    FiPenTool,
    FiHeadphones,
    FiShoppingCart,
    FiTrendingUp,
} from "react-icons/fi";
import { FaCaretRight } from "react-icons/fa";
import Link from "next/link";

const services = [
    {
        title: "Web Design & Development",
        description:
            "Modern, responsive, SEO-friendly websites tailored to your brand and business goals.",
        icon: FiMonitor,
        route: "services/web-design-development",
    },
    {
        title: "Mobile App Development",
        description:
            "High-performance cross-platform apps with smooth UI/UX for iOS and Android.",
        icon: FiSmartphone,
        route: "services/mobile-app-development",

    },
    {
        title: "Logo & Brand Design",
        description:
            "Create a unique visual identity with custom logos, color palettes, and brand systems.",
        icon: FiPenTool,
        route: "services/logo-design-graphic-design",
    },
    {
        title: "Support & Maintenance",
        description:
            "Ongoing technical support, updates, and monitoring to keep everything running smoothly.",
        icon: FiHeadphones,
        route: "services/support-maintenance",

    },
    {
        title: "E-commerce Development",
        description:
            "Scalable online stores with secure payments, inventory management, and analytics.",
        icon: FiShoppingCart,
        route: "services/ecommerce-development"
    },
    {
        title: "SEO & Digital Marketing",
        description:
            "Result-driven SEO and marketing strategies to grow your visibility and conversions.",
        icon: FiTrendingUp,
        route: "services/seo-digital-marketing"
    },
];



const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.12,
        },
    },
} as const;

const iconVariants: Variants = {
    initial: { y: 0 },
    animate: {
        y: [0, -6, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};


const ServicesSection: React.FC = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);



    return (

        <section className="services-section py-20 lg:py-24">
            {/* Glow background handled in SCSS */}

            <div className="container mx-auto max-w-6xl px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-300 mb-3">
                        Our Services
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Everything You Need to Grow Online
                    </h3>
                    <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
                        InfoZenX IT offers comprehensive technology solutions to help your business thrive in the digital world.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{
                                    y: -6,
                                    scale: 1.02,
                                    boxShadow:
                                        "0 18px 45px rgba(0, 0, 0, 0.45)",
                                }}
                                className="service-card group"
                            >
                                <div className="service-card-inner">
                                    <motion.div
                                        variants={iconVariants}
                                        initial="initial"
                                        animate="animate"
                                        className="icon-wrapper"
                                    >
                                        <div className="icon-orbit" />
                                        <Icon className="icon" />
                                    </motion.div>

                                    <h4 className="title">{service.title}</h4>
                                    <p className="description">
                                        {service.description}
                                    </p>

                                    <button className="learn-more">
                                        <Link href={service.route} >     <span>Learn more</span></Link>
                                        <span className="arrow"><FaCaretRight /></span>
                                    </button>

                                    <div className="index-pill">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>

    );
};

export default ServicesSection;
