"use client";

import React, { useEffect, useState,useRef } from "react";
import { motion } from "framer-motion";
import {
    FiCode,
    FiDatabase,
    FiSmartphone,
    FiCloud,
    FiBarChart2,
    FiCpu,
    FiLayers,
    FiServer,
    FiChevronLeft,
    FiChevronRight,

} from "react-icons/fi";

import img1 from "@/assets/image/internship/internship-1.jpg"
import img2 from "@/assets/image/internship/internship-2.jpg"
import img3 from "@/assets/image/internship/internship-3.jpg"

import { InternshipItem } from "./data";
import Link from "next/link";

import Image from "next/image";



const sliderImages: string[] = [
    img1.src, img2.src, img3.src
];

const internshipItems: InternshipItem[] = [
    {
        slug: "python-django",
        title: "Python Django",
        subtitle: "Backend Web Development",
        description:
            "Build secure, scalable backends and REST APIs using Python and Django.",
        icon: <FiServer />,

    },
    {
        slug: "machine-learning-data-science",
        title: "Machine Learning ",
        subtitle: "AI & Predictive Modelling",
        description:
            "Work with real datasets, ML models, and data visualisation tools.",
        icon: <FiCpu />,
    },
    {
        slug: "php-web-development",
        title: "PHP Web Development",
        subtitle: "Dynamic Web Apps",
        description:
            "Create dynamic websites and dashboards using PHP, MySQL, and MVC patterns.",
        icon: <FiCode />,
    },
    {
        slug: "java",
        title: "Java",
        subtitle: "Object-Oriented Programming",
        description:
            "Learn core Java, OOP, and build console and desktop-style projects.",
        icon: <FiLayers />,
    },
    {
        slug: "react-js",
        title: "React JS",
        subtitle: "Frontend Development",
        description:
            "Build modern, interactive UIs using React, hooks, and component patterns.",
        icon: <FiCode />,
    },
    {
        slug: "android",
        title: "Android",
        subtitle: "Mobile Development",
        description:
            "Create native Android apps with Java/Kotlin and follow material design.",
        icon: <FiSmartphone />,
    },
    {
        slug: "software-testing",
        title: "Software Testing",
        subtitle: "Manual & Automation",
        description:
            "Understand test planning, test cases, and basic automation concepts.",
        icon: <FiDatabase />,
    },
    {
        slug: "flutter",
        title: "Flutter",
        subtitle: "Cross-Platform Apps",
        description:
            "Develop beautiful apps for Android & iOS using Flutter and Dart.",
        icon: <FiSmartphone />,
    },
    {
        slug: "aws-solution-architect",
        title: "AWS Solution Architect",
        subtitle: "Cloud Computing",
        description:
            "Design and deploy scalable solutions using AWS core services.",
        icon: <FiCloud />,
    },
    {
        slug: "data-analytics",
        title: "Data Analytics",
        subtitle: "Insights & Dashboards",
        description:
            "Analyse data, build reports, and create dashboards using analytics tools.",
        icon: <FiBarChart2 />,
    },
];

const InternshipPage: React.FC = () => {


    const [cardStartIndex, setCardStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3); // how many cards to show
const internshipSectionRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {

        const updateVisible = () => {
            if (typeof window === "undefined") return;

            const width = window.innerWidth;
            if (width < 768) {
                setVisibleCount(1); // mobile
            } else if (width < 1024) {
                setVisibleCount(2); // tablet
            } else {
                setVisibleCount(3); // desktop
            }
        };

        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    const handleCardNext = () => {
        setCardStartIndex((prev) => (prev + visibleCount) % internshipItems.length);
    };

    const handleCardPrev = () => {
        setCardStartIndex((prev) => {
            const next = prev - visibleCount;
            return next < 0
                ? (internshipItems.length + next) % internshipItems.length
                : next;
        });
    };

    // compute visible cards
    const visibleInternships = Array.from({ length: visibleCount }).map((_, i) => {
        const index = (cardStartIndex + i) % internshipItems.length;
        return internshipItems[index];
    });



    return (
        <div className="internship-page bg-slate-950 text-white">
            {/* ======================= Banner Section ======================= */}
           <section className="relative overflow-hidden py-16">
  <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-4 md:flex-row md:items-center">

    {/* Left Content */}
    <motion.div
      className="md:w-1/2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <span className="inline-flex rounded-full bg-slate-900/70 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300 ring-1 ring-cyan-500/40">
        Internship Programs 2025
      </span>

      <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
        Kick-start your{" "}
        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          IT Career
        </span>{" "}
        with real-time internships.
      </h1>

      <p className="mt-4 text-sm text-slate-300 md:text-base">
        Work on live-like projects, learn directly from industry experts,
        and build a portfolio that proves your skills in modern technologies
        like React, Flutter, Python, Cloud, and more.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
       onClick={() =>
    internshipSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
                className="cursor-pointer rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-2 text-sm font-semibold shadow-lg shadow-violet-500/30 transition hover:scale-105 hover:shadow-cyan-500/40">
          View Internship Openings
        </button>

        <span className="text-xs text-slate-400 md:text-sm">
          100% Internship Certificate • Mentor Support • Project-based Learning
        </span>
      </div>
    </motion.div>

    {/* Right Image */}
    <div className="md:w-1/2 flex justify-center">
      <Image
        src={img1}
        alt="Office"
        priority
        className="w-full h-auto object-cover rounded-xl"
      />
    </div>
  </div>
</section>


            {/* ======================= Internship Cards ======================= */}
            <section className="bg-slate-950 py-16"  ref={internshipSectionRef}>
                <div className="container mx-auto max-w-7xl px-4">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                            Internship Programs
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                            Choose your{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                technology track
                            </span>
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
                            Select the internship that matches your career goal. Every program
                            includes mentor guidance, hands-on tasks, and a completion
                            certificate.
                        </p>
                    </motion.div>

                    <div className="mt-10">
                        {/* cards row (1 / 2 / 3 based on visibleCount) */}
                        <div
                            className={`grid gap-6 ${visibleCount === 1
                                ? "grid-cols-1"
                                : visibleCount === 2
                                    ? "grid-cols-1 md:grid-cols-2"
                                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                                }`}
                        >
                            {visibleInternships.map((item) => {
                                const originalIndex = internshipItems.findIndex(
                                    (i) => i.slug === item.slug
                                );

                                return (
                                    <motion.article
                                        key={item.slug}
                                        className="internship-card group rounded-2xl bg-slate-900/80 p-6 shadow-lg shadow-black/40 ring-1 ring-slate-800/80"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                        whileHover={{ y: -6 }}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-start gap-3">
                                                <div className="internship-card__icon-wrapper">
                                                    <span className="internship-card__icon">
                                                        {item.icon}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                                                        {item.subtitle}
                                                    </p>
                                                    <h3 className="mt-1 text-lg font-semibold text-white">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200">
                                                {originalIndex + 1 < 10
                                                    ? `0${originalIndex + 1}`
                                                    : originalIndex + 1}
                                            </span>
                                        </div>

                                        <p className="mt-3 text-sm text-slate-300">
                                            {item.description}
                                        </p>

                                        <Link href={`internship/${item.slug}`} className="cursor-pointer">
                                            <button className="cursor-pointer mt-5 inline-flex items-center text-sm font-semibold text-cyan-300 transition group-hover:text-violet-300">
                                                Apply Now
                                                <span className="ml-1 inline-flex transition-transform group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </button>
                                        </Link>
                                    </motion.article>
                                );
                            })}
                        </div>

                        {/* slider navigation buttons (like your 2nd image) */}
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={handleCardPrev}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 ring-1 ring-slate-700 transition hover:bg-slate-700 hover:ring-slate-500"
                            >
                                <FiChevronLeft />
                            </button>
                            <button
                                type="button"
                                onClick={handleCardNext}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-slate-200 ring-1 ring-slate-700 transition hover:bg-slate-700 hover:ring-slate-500"
                            >
                                <FiChevronRight />
                            </button>
                        </div>
                    </div>

                    {/* === */}
                </div>
            </section>



            {/* <div className="container mx-auto max-w-7xl px-5">
                <motion.div
                    className="mb-6 text-center md:mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold md:text-3xl">
                        Submit your{" "}
                        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            Internship Application
                        </span>
                    </h2>
                    <p className="mt-3 text-sm text-slate-300 md:text-base">
                        Share your details and preferred internship. Our team will contact
                        you with the next steps and schedule.
                    </p>
                </motion.div>
                <TestimonialsOne />

                <FormHorizontal name="internship" Items={[{ slug: "android", title: "Android" }]} />
            </div> */}
        </div>
    );
};

export default InternshipPage;
