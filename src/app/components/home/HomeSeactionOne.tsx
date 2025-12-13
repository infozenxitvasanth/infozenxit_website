"use client";

import React from "react";
import { motion } from "framer-motion";
import { ButtonTwo } from "../reusable/button/Button";
import Link from "next/link";
import img1 from '@/assets/image/internship/internship-1.jpg'
import img2 from '@/assets/image/internship/internship-1.jpg'
import img3 from '@/assets/image/internship/internship-1.jpg'
import BannerSlider from "./BannerSlider";

const HomeSectionOne: React.FC = () => {
    return (
        <section id="home" className="section home-section-one">
            {/* --- Soft animated background circles --- */}
                 <BannerSlider />
            <div className="home-bg-circles">
                <div className="bg-circle c1" />
                <div className="bg-circle c2" />
                <div className="bg-circle c3" />
            </div>

            {/* <motion.div
                className="hero-orbit-wrapper-back"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
            >
                <motion.div
                    className="hero-orbit outer"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
                />
                <motion.div
                    className="hero-orbit middle"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
                />
                <motion.div
                    className="hero-orbit inner"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                    <span className="hero-orbit-dot" />
                </motion.div>
            </motion.div> */}

            {/* --- Text in front --- */}
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <motion.h1
                    className="sec-one-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                >
                    Maintain your Business Website<br /> App with Us at
                </motion.h1>

                <motion.p
                    className="company-name"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <span> InfoZenX IT</span>
                </motion.p>

                <motion.div
                    className="text-center"
                    style={{ widows: '70%' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                >
                    <div
                        className="company-desc"

                    >
                        A better digital experience for your customers and staff is made possible by always-on
                        <br />
                        managed services and support.
                    </div>

                    <div>
                        <Link href="/contact">   <ButtonTwo fun={() => { }} hoverOutName="Contact" hoverInName="Contact" /></Link>
                    </div>
          
                </motion.div>
            </motion.div>
        </section>
    );
};
          {/* <button
                        className="btn ghost"
                        onClick={() => {
                            const el = document.getElementById("about");
                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                    >
                        Learn More
                    </button> */}
export default HomeSectionOne;



// scss


// Creaet I want Bnner Slider I want 3 imaeg 3s once slide i want
// $primary: #8b5cf6;
//$secondary: #06b6d4;
//$primary-dark: #4a3185;
