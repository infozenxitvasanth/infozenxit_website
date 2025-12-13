"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { useParams, usePathname } from "next/navigation";

import { getServiceBySlug } from "../services/data";
import { getInternshipBySlug } from "../internship/data";
import FormHorizontal from "@/app/components/reusable/form/FormHorizontal";

const FeaturesAndForm = () => {
    const { slug } = useParams();
    const pathname = usePathname();
    const parent = pathname.split("/")[1]; 


    let content = null ;

    if (parent === "services") {
        content = getServiceBySlug(String(slug));
    } else if (parent === "internship") {
        content = getInternshipBySlug(String(slug));
    }

    if (!content) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center text-red-400">
                Content Not Found
            </div>
        );
    }

    return (
        <section className="f-section bg-slate-950 py-16 text-white">
            <div className="container mx-auto max-w-6xl px-4">
                {/* Top heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
                        {parent === "services" ? "Services" : "Internship Program"}
                    </p>

                    <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold">
                        {content.title}
                    </h1>

                      <div className="f-title-underline mx-auto" />

                    <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-sm sm:text-base">
                        {content.description}
                    </p>
                </motion.div>

                {/* Content Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
                >
                    {/* Left Section */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 120, damping: 12 }}
                        className="f-card glass-card"
                    >
                        <h2 className="text-xl md:text-2xl font-semibold mb-4">
                            {parent === "internship" ? "What You Will Learn" : "Key Features"}
                        </h2>

                        <ul className="space-y-4">
                            {content.keyFeatures.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm md:text-base">
                                    <FiCheckCircle className="text-cyan-300 text-lg mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Only Internship has Benefits */}
                        {parent === "internship" && (
                            <div className="mt-8">
                                <h2 className="text-xl md:text-2xl font-semibold mb-4">Benefits</h2>
                                <ul className="space-y-4">
                                    {content.benefitsFeatures&&  content.benefitsFeatures?.map((b, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm md:text-base">
                                            <FiCheckCircle className="text-green-300 text-lg mt-1" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>

                       <SetOption locationName={parent}/>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesAndForm;

const SetOption = ({ locationName }: { locationName: string }) => (
  <FormHorizontal
    name={locationName as any}
    Items={[{ slug: "android", title: "Android" }]}
  />
);

