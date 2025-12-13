
"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiX, FiSearch, FiMail, FiPhone, FiBriefcase } from "react-icons/fi";
import img from '@/assets/image/career/banner.jpg'
import PopupForm from "./PopupForm";
import { Job, JOBS } from "./data";


export default function CareersPage(): JSX.Element {
    const [openJob, setOpenJob] = useState<Job | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [teamFilter, setTeamFilter] = useState<string | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const firstInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setIsOpen(false);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        function onClick(e: MouseEvent) {
            if (!isOpen) return;
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        window.addEventListener("mousedown", onClick);
        return () => window.removeEventListener("mousedown", onClick);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            // focus first input for accessibility
            setTimeout(() => firstInputRef.current?.focus(), 80);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    function openModal(job: Job) {
        setOpenJob(job);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    const teams = Array.from(new Set(JOBS.map((j) => j.team)));

    const filtered = JOBS.filter((j) => {
        if (teamFilter && j.team !== teamFilter) return false;
        if (!query) return true;
        const q = query.toLowerCase();
        return (
            j.title.toLowerCase().includes(q) ||
            j.summary.toLowerCase().includes(q) ||
            j.location.toLowerCase().includes(q) ||
            j.team.toLowerCase().includes(q)
        );
    });

    return (
        <main className="careers-page px-6 py-12 max-w-7xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                    <motion.h1 initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-cyan-400">
                        Build delight — join the team
                    </motion.h1>
                    <p className="mt-3 text-gray-300 max-w-xl">We ship fast while keeping craftsmanship high. Below are our current openings — apply with a short note or portfolio link.</p>


                </div>

                <img src={img.src} alt="" className="border rounded-xl" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "translate3d(var(--tx,0px), var(--ty,0px), 0) rotate(var(--rot,0deg))" }} />

            </div>

            <section className="mt-10">
                <div><h2 className="text-2xl font-bold text-white">Opportunities</h2>
                    <p className="mt-1 text-gray-300">Explore open roles and apply — we value clarity and brevity.</p></div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 bg-white/60 backdrop-blur-md border rounded-xl p-4 shadow-sm">
                    {/* Search Input */}
                    <div className="flex items-center border rounded-lg px-3 py-2 gap-2 shadow-sm bg-white w-full sm:w-auto flex-1">
                        <FiSearch className="text-gray-500" />
                        <input
                            aria-label="Search jobs"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search by title, team or location"
                            className="outline-none text-sm w-full"
                        />
                    </div>


                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap py-4">
                    <button
                        onClick={() => setTeamFilter(null)}
                        className={`px-4 cursor-pointer py-2 rounded-lg text-sm transition-all ${!teamFilter
                            ? "bg-gradient-to-r from-violet-600 to-cyan-400 text-white shadow"
                            : "border bg-white"
                            }`}
                    >
                        All 
                    </button>

                    {teams.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTeamFilter((prev) => (prev === t ? null : t))}
                            className={`px-4 cursor-pointer py-2 rounded-lg text-sm transition-all ${teamFilter === t
                                ? "bg-gradient-to-r from-violet-600 to-cyan-400 text-white shadow"
                                : "border bg-white"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>


                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filtered.map((job) => (
                        <motion.article key={job.id} whileHover={{ y: -6 }} className="job-card bg-white p-5 rounded-2xl border shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold flex items-center gap-3"><FiBriefcase /> {job.title}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{job.team} • {job.location}</p>
                                    </div>
                                    <div className="hidden sm:block">
                                        <span className="text-sm text-gray-400">Fast apply</span>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 mt-3">{job.summary}</p>

                                <ul className="mt-3 text-gray-600 list-disc ml-5">
                                    {job.responsibilities.slice(0, 3).map((r, i) => (<li key={i}>{r}</li>))}
                                </ul>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <button onClick={() => openModal(job)} aria-label={`Apply to ${job.title}`} className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-400 text-white">
                                    Apply <FiChevronRight />
                                </button>
                                {/* <a href={`#${job.id}`} className="text-sm text-gray-500 hover:underline">View details</a> */}
                            </div>
                        </motion.article>
                    ))}

                    {filtered.length === 0 && (
                        <div className="col-span-full text-center py-12 border rounded-lg text-gray-500">No roles match — try clearing filters.</div>
                    )}
                </div>
            </section>

            <PopupForm
                isOpen={isOpen}
                openJob={openJob}
                modalRef={modalRef}
                firstInputRef={firstInputRef}
                closeModal={closeModal}

            />

        </main>
    );
}
