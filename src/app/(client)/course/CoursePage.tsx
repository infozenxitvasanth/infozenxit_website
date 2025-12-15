"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { FaHandPointRight, FaRegHandPointRight } from "react-icons/fa";
import PopupCourseForm from "../components/course/PopupCourseForm";
import { sampleCourses } from "./data";

/* ================= TYPES ================= */

export default function CoursesPage() {
  const [levelFilter, setLevelFilter] = useState<
    "All" | "Beginner" | "Intermediate" | "Advanced"
  >("All");

  const [categoryFilter, setCategoryFilter] = useState<
    "All" | "Web" | "UIUX" | "Cloud"|"Digital Marketing">("All");


   const [popupOpen, setPopupOpen] = useState(false); 

  const filteredCourses = sampleCourses.filter((c) => {
    const levelMatch = levelFilter === "All" || c.level === levelFilter;
    const categoryMatch =
      categoryFilter === "All" || c.category === categoryFilter;
    return levelMatch && categoryMatch;
  });


  return (
    <div className="courses-page max-w-6xl mx-auto px-6 py-12">
      {/* ================= BANNER ================= */}
      <section className="banner relative rounded-2xl overflow-hidden mb-14">
        <div className="banner-bg absolute inset-0" />
        <div className="banner-overlay absolute inset-0" />
        <div className="relative z-10 py-24 px-8 text-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Learn Skills That Matter
          </motion.h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90">
            Web Development, UI/UX , Cloud ,SEO courses built for real careers.
          </p>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
    <section className="filter-area mb-10">
  <div className="filter-group">
    <span className="filter-label">Level</span>
    {["All", "Beginner", "Intermediate", "Advanced"].map((lvl) => (
      <button
        key={lvl}
        onClick={() => setLevelFilter(lvl as any)}
        className={`doodle-btn ${
          levelFilter === lvl ? "active" : ""
        }`}
      >
        {lvl}
      </button>
    ))}
  </div>

  <div className="filter-group">
    <span className="filter-label">Category</span>
    {[
      { label: "All", value: "All" },
      { label: "Web", value: "Web" },
      { label: "UI / UX", value: "UIUX" },
      { label: "Cloud", value: "Cloud" },
       { label: "Seo &  Digital Marketing", value: "Digital Marketing" },
    ].map((cat) => (
      <button
        key={cat.value}
        onClick={() => setCategoryFilter(cat.value as any)}
        className={`doodle-btn ${
          categoryFilter === cat.value ? "active" : ""
        }`}
      >
        {cat.label}
      </button>
    ))}
  </div>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {filteredCourses.length > 0 ? (
    filteredCourses.map((c) => (
      <motion.article
        key={c.id}
        whileHover={{ y: -6 }}
        className={`course-card level-${c.level.toLowerCase()} p-5 rounded-xl`}
      >
        <div className="flex justify-between mb-3">
          <h3 className="text-lg font-semibold">{c.title}</h3>
          <span className={`level-badge level-badget-${c.level.toLowerCase()}`}>
            {c.level}
          </span>
        </div>

        <p className="text-sm mb-3">{c.duration}</p>
        <ul className="text-sm mb-4 space-y-1">
          {c.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <FaHandPointRight className="mt-0.5 text-cyan-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center">
          <button     onClick={() => setPopupOpen(true)} className="btn-enroll px-4 py-2 rounded-md">Enroll</button>
        </div>
      </motion.article>
    ))
  ) : (
    <p className="col-span-full text-center text-gray-400 text-lg">
      No courses found.
    </p>
  )}
</div>

      </section>

      {/* ================= TESTIMONIALS ================= */}
      {/* <section>
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">What learners say</h2>
          <div className="flex gap-2 text-white">
            <button onClick={prev} className="p-2 border rounded-full">
              <FiChevronLeft />
            </button>
            <button onClick={next} className="p-2 border rounded-full">
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: pageSize }).map((_, i) => {
            const t =
              sampleTestimonials[(testIdx + i) % sampleTestimonials.length];
            return (
              <motion.blockquote
                key={t.id}
                className="testimonial p-6 rounded-xl"
              >
                <div className="flex gap-4">
                  <div className="avatar">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <p className="text-sm mt-2">{t.text}</p>
                    <div className="flex text-yellow-500 mt-2">
                      {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                        <FiStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.blockquote>
            );
          })}
        </div>
      </section> */}
        <PopupCourseForm isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
}
