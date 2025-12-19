"use client";

import { motion } from "framer-motion";
import {
    FiCheck,
    FiUsers,
    FiClock,
    FiDollarSign,
    FiLayers,
    FiStar,
    FiShoppingCart,
    FiTrendingUp,
    FiSmartphone,
} from "react-icons/fi";
import MapSection from "@/app/components/reusable/map/MapSeaction";
import Link from "next/link";
import EmployeeCard from "./EmployeeCard";
import { emp_list } from "./data";
import { FaLinkedinIn } from "react-icons/fa";
import FounderSection from "./FounderSection";



const fadeUp = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

const cardAnim = {
    hidden: { y: 20, opacity: 0 },
    show: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.15, duration: 0.6 },
    }),
};

export default function AboutPage() {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            className="about-page max-w-7xl mx-auto px-6 py-16"
        >
            {/* =============================== HEADER =============================== */}
            <motion.div variants={fadeUp} className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl text-white font-semibold ">
                    About InfoZenX IT
                </h1>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 90 }}
                    transition={{ duration: 0.6 }}
                    className="gradient-underline mx-auto mt-3"
                />
            </motion.div>

            {/* =============================== HERO TEXT =============================== */}
            <motion.div
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-1 gap-5 items-center mb-12 text-center"
            >
                <p className="mt-2 text-gray-200  leading-relaxed">
                    InfoZenX IT is a leading technology solutions provider specializing in web
                    development, mobile app development, digital marketing, and IT consulting.
                </p>

                <p className="text-gray-200 dark:text-gray-300 leading-relaxed">
                    We deliver innovative, scalable, and efficient solutions that empower businesses
                    to grow in the digital world.
                </p>
            </motion.div>

            {/* =============================== MISSION & VISION =============================== */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                    {
                        title: "Our Mission",
                        text: "To empower businesses with cutting-edge technology solutions that elevate efficiency and growth.",
                    },
                    {
                        title: "Our Vision",
                        text: "To be the most trusted digital transformation partner globally.",
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={cardAnim}
                        whileHover={{ scale: 1.03 }}
                        className="p-6  rounded-lg shadow-sm hover:shadow-md transition mission-card"
                    >
                        <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
                    </motion.div>
                ))}
            </div>

            {/* =============================== WHY CHOOSE US =============================== */}
            <motion.h3 variants={fadeUp} className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Why Choose Us?
            </motion.h3>

            <div className="mb-12">


                <div className="grid md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="p-5 bg-slate-900/80 p-6 shadow-lg shadow-black/40  rounded-lg shadow-sm hover:shadow-md transition border border-[#94a3b82e]">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <li className="flex items-start gap-3">
                                <span className="inline-flex items-center justify-center w-20 h-10 rounded bg-indigo-50 text-indigo-600"><FiUsers size={21} /></span>
                                <div>
                                    <div className="font-semibold text-gray-200">Expert Team</div>
                                    <p className="text-sm text-gray-500">Highly skilled professionals with industry experience.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="inline-flex items-center justify-center w-13 h-10 rounded bg-emerald-50 text-emerald-600"><FiStar size={21} /></span>
                                <div>
                                    <div className="font-semibold text-gray-200">Quality Assurance</div>
                                    <p className="text-sm text-gray-500">Strict testing &amp; reviews.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="inline-flex items-center justify-center w-13 h-10 rounded bg-indigo-50 text-indigo-600"><FiClock size={21} /></span>
                                <div>
                                    <div className="font-semibold text-gray-200">Timely Delivery</div>
                                    <p className="text-sm text-gray-500">Always on schedule.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="inline-flex items-center justify-center w-13 h-10 rounded bg-emerald-50 text-emerald-600"><FiCheck size={21} /></span>
                                <div>
                                    <div className="font-semibold text-gray-200">24/7 Support</div>
                                    <p className="text-sm text-gray-500">We’re available anytime for your needs.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="p-5 bg-slate-900/80 p-6 shadow-lg shadow-black/40  rounded-lg shadow-sm hover:shadow-md transition border border-[#94a3b82e]">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <li className="flex items-start gap-3">
                                <span className="inline-flex items-center justify-center w-13 h-10 rounded bg-indigo-50 text-indigo-600"><FiDollarSign size={21} /></span>
                                <div>
                                    <div className="font-semibold text-gray-200">Affordable Pricing</div>
                                    <p className="text-sm text-gray-500">Best value guaranteed.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="inline-flex items-center justify-center w-13 h-10 rounded bg-emerald-50 text-emerald-600"><FiLayers size={21} /></span>
                                <div>
                                    <div className="font-semibold text-gray-200">Innovation</div>
                                    <p className="text-sm text-gray-500">Always updated with modern tech.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="inline-flex items-center justify-center w-13 h-10 rounded bg-indigo-50 text-indigo-600"><FiUsers size={21} /></span>
                                <div>
                                    <div className="font-semibold text-gray-200">Dedicated Team</div>
                                    <p className="text-sm text-gray-500">Personal attention for each client.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="inline-flex items-center justify-center w-13 h-10 rounded bg-emerald-50 text-emerald-600"><FiCheck size={21} /></span>
                                <div>
                                    <div className="font-semibold text-gray-200">Proven Results</div>
                                    <p className="text-sm text-gray-500">Trusted by clients across industries.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* =================================================== */}
           {/* 
            */}
      <FounderSection/>


       <div className=" max-w-7xl px-4">
        <h3 className="text-center text-3xl md:text-4xl text-white font-semibold mb-8">Our's Team</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
    
    {emp_list.map((value, idx) => (
   <div key={idx}>
    <EmployeeCard
      name={value.name}
      role={value.role}
      img_url={value.img_url}
      linkedin_url={value.linkedin_url}
    />
  </div>
    ))}
  </div>
</div>

            {/* =============================== SERVICES =============================== */}
            <motion.div
                variants={fadeUp}
                transition={{ duration: 0.9 }}
                className="bg-slate-900/80 my-5 p-6 shadow-lg shadow-black/40 border border-[#94a3b82e] text-white p-6 rounded-2xl shadow-sm  "
            >
                <div className="mb-6">
                    <h4 className="font-semibold text-gray-200 text-lg">Our Services</h4>

                    {/* Beautiful Underline */}
                    <div className="w-20 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mt-2"></div>
                </div>

                <motion.div
                    initial="hidden"
                    animate="show"
                    className="grid md:grid-cols-3 gap-6 "
                >
                    {[
                        { name: "Web Development", icon: <FiLayers />,route:"/services/web-design-development" },
                        { name: "Mobile App Development", icon: <FiSmartphone />,route:"/services/mobile-app-development" },
                        { name: "UI/UX & Graphic Design", icon: <FiStar />,route:"/services/logo-design-graphic-design" },
                        { name: "Support & Maintenance", icon: <FiClock />,route:"/services/support-maintenance" },
                        { name: "E-commerce Solutions", icon: <FiShoppingCart />,route:"/services/ecommerce-development" },
                        { name: "SEO & Digital Marketing", icon: <FiTrendingUp />,route:"/services/seo-digital-marketing" },
                    ].map((item, i) => (
                        <Link href={item.route} key={i} >
                        <motion.div
                           
                            custom={i}
                            variants={cardAnim}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
                            }}
                            className="p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white transition cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                {/* Icon */}
                                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 text-indigo-600 text-lg">
                                    {item.icon}
                                </span>

                                {/* Title */}
                                <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                            </div>
                        </motion.div></Link>
                    ))}
                </motion.div>
            </motion.div>
 <div className="h-12" />

<div className="py-10">
 
  <h2 className="text-gray-200 text-center text-2xl font-semibold mb-2">
    Our Location
  </h2>

  <p className="text-gray-400 text-center mb-6">
    Visit our office to learn more about our services and meet our team in person.
  </p>

  <MapSection />
</div>


            <div className="h-12" />
        </motion.div>
    );
}
