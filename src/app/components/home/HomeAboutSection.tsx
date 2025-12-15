"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import img from "@/assets/image/home/team_img.jpg";


const HomeAboutSection = () => {
    return (
        <section className="home-about-section pt-17 pb-30 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-image-wrapper"
                    >
                        <Image src={img} alt="Office" className="about-img" priority />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-content"
                    >
                        <h3>Who We Are ?</h3>

                        <p>
                            We are a full-service digital consultant with the skills and ability
                            to serve the requirements of even the biggest and most complicated
                            businesses worldwide. To ensure that we focus on their needs and
                            customers and provide real value to the business, we offer an
                            extensive services portfolio. Endless ideas, end-to-end services.
                        </p>

                        <div className="about-points">
                            <div className="point-box">
                                <div className="icon purple"></div>
                                <h4>Strategy & Consulting</h4>
                                <p>Deep discovery, clear roadmaps, and data-driven decisions.</p>
                            </div>

                            <div className="point-box">
                                <div className="icon blue"></div>
                                <h4>Design & Development</h4>
                                <p>Modern, scalable solutions tailored to your business needs.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HomeAboutSection;
