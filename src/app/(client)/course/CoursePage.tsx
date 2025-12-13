"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { FaHandPointRight, FaRegHandPointRight } from "react-icons/fa";
import PopupCourseForm from "../components/course/PopupCourseForm";

/* ================= TYPES ================= */

type Course = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "Web" | "UIUX" | "Cloud"|"Digital Marketing";
  duration: string;
 
  bullets: string[];
};

type Testimonial = {
  id: string;
  name: string;
  role?: string;
  text: string;
  rating?: number;
};

/* ================= DATA ================= */

const sampleCourses: Course[] = [
  // Beginner Java
  {
    id: "c6",
    title: "Java Basics",
    level: "Beginner",
    category: "Web",
    duration: "4 weeks",
    bullets: ["Java syntax & variables", "Data types & operators", "Conditional statements", "Loops basics"],
  },
  {
    id: "c7",
    title: "Python Basics",
    level: "Beginner",
    category: "Web",
    duration: "4 weeks",
    bullets: ["Python syntax", "Variables & data types", "Functions", "Basic input/output"],
  },

  // Intermediate Java
  {
    id: "c8",
    title: "Object-Oriented Java",
    level: "Intermediate",
    category: "Web",
    duration: "6 weeks",
    bullets: ["Classes & objects", "Inheritance & polymorphism", "Encapsulation", "Interfaces & abstract classes"],
  },
  {
    id: "c9",
    title: "Python Intermediate",
    level: "Intermediate",
    category: "Web",
    duration: "6 weeks",
    bullets: ["Modules & packages", "File handling", "Error handling", "Collections (lists, dicts, sets)"],
  },

  // Advanced Java
  {
    id: "c10",
    title: "Java Advanced Concepts",
    level: "Advanced",
    category: "Web",
    duration: "8 weeks",
    bullets: ["Multithreading & concurrency", "JDBC & databases", "Streams & Lambdas", "Design patterns"],
  },
  {
    id: "c11",
    title: "Spring Boot Development",
    level: "Advanced",
    category: "Web",
    duration: "8 weeks",
    bullets: ["Spring Boot setup", "REST API development", "Dependency Injection", "Security & Testing"],
  },

  // Advanced Python
  {
    id: "c12",
    title: "Python Advanced Concepts",
    level: "Advanced",
    category: "Web",
    duration: "8 weeks",
    bullets: ["Decorators & generators", "OOP in Python", "File & database handling", "Multithreading & async"],
  },
  {
    id: "c13",
    title: "Django Web Development",
    level: "Advanced",
    category: "Web",
    duration: "8 weeks",
    bullets: ["Django models & views", "REST API with Django REST Framework", "Authentication & permissions", "Deployment"],
  },

  // Beginner UI/UX
  {
    id: "c14",
    title: "UI/UX Design Basics",
    level: "Beginner",
    category: "UIUX",
    duration: "3 weeks",
    bullets: ["Introduction to UI/UX", "Design principles", "Wireframes", "Simple prototyping in Figma"],
  },
  {
    id: "c15",
    title: "Figma Essentials",
    level: "Beginner",
    category: "UIUX",
    duration: "3 weeks",
    bullets: ["Figma interface", "Creating frames & components", "Basic prototyping", "Exporting designs"],
  },

  // Intermediate UI/UX
  {
    id: "c16",
    title: "UI/UX Research & Wireframing",
    level: "Intermediate",
    category: "UIUX",
    duration: "4 weeks",
    bullets: ["User research methods", "Personas & user flows", "Wireframe creation", "Usability testing basics"],
  },
  {
    id: "c17",
    title: "Advanced Figma & Prototyping",
    level: "Intermediate",
    category: "UIUX",
    duration: "4 weeks",
    bullets: ["Components & variants", "Auto layout & constraints", "Interactive prototypes", "Design handoff to developers"],
  },

  // Advanced UI/UX
  {
    id: "c18",
    title: "Design Systems Mastery",
    level: "Advanced",
    category: "UIUX",
    duration: "6 weeks",
    bullets: ["Creating scalable design systems", "Style guides & tokens", "Accessibility best practices", "Component libraries"],
  },
  {
    id: "c19",
    title: "UX Strategy & Advanced Prototyping",
    level: "Advanced",
    category: "UIUX",
    duration: "6 weeks",
    bullets: ["High-fidelity prototypes", "User testing & iteration", "UX strategy planning", "Cross-platform design consistency"],
  },
  // Beginner Digital Marketing
  {
    id: "c20",
    title: "Digital Marketing Basics",
    level: "Beginner",
    category: "Digital Marketing",
    duration: "3 weeks",
    bullets: ["Introduction to digital marketing", "SEO basics", "Social media fundamentals", "Email marketing overview"],
  },
  {
    id: "c21",
    title: "Social Media Marketing Fundamentals",
    level: "Beginner",
    category: "Digital Marketing",
    duration: "3 weeks",
    bullets: ["Platforms overview (Facebook, Instagram, LinkedIn)", "Creating posts & campaigns", "Scheduling tools", "Basic analytics"],
  },

  // Intermediate Digital Marketing
  {
    id: "c22",
    title: "SEO & Content Marketing",
    level: "Intermediate",
    category: "Digital Marketing",
    duration: "4 weeks",
    bullets: ["Keyword research", "On-page SEO", "Content strategy", "Blog & website optimization"],
  },
  {
    id: "c23",
    title: "PPC & Google Ads",
    level: "Intermediate",
    category: "Digital Marketing",
    duration: "4 weeks",
    bullets: ["Google Ads setup", "Creating ad campaigns", "Keyword targeting & bidding", "Performance tracking"],
  },

  // Advanced Digital Marketing
  {
    id: "c24",
    title: "Advanced Digital Marketing Strategy",
    level: "Advanced",
    category: "Digital Marketing",
    duration: "6 weeks",
    bullets: ["Integrated marketing strategy", "Advanced SEO & SEM", "Conversion rate optimization", "Marketing automation"],
  },
  {
    id: "c25",
    title: "Analytics & Data-Driven Marketing",
    level: "Advanced",
    category: "Digital Marketing",
    duration: "6 weeks",
    bullets: ["Google Analytics mastery", "Tracking KPIs", "Data analysis for marketing", "Optimizing campaigns based on data"],
  },


];


const sampleTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Vasu M",
    role: "Frontend Dev",
    text: "This course fast-tracked my React skills. Loved the hands-on projects!",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rahul S.",
    role: "Software Engineer",
    text: "Clear teaching and practical examples — helped me get interview-ready.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Priya M.",
    role: "Mobile Developer",
    text: "Loved the structured content and mentoring support.",
    rating: 4,
  },
  {
    id: "t4",
    name: "Vasanth M.",
    role: "Fullstack Freelancer",
    text: "Real-world projects made learning practical and effective.",
    rating: 5,
  },
];

/* ================= COMPONENT ================= */

export default function CoursesPage() {
  const [levelFilter, setLevelFilter] = useState<
    "All" | "Beginner" | "Intermediate" | "Advanced"
  >("All");

  const [categoryFilter, setCategoryFilter] = useState<
    "All" | "Web" | "UIUX" | "Cloud"|"Digital Marketing"
  >("All");

  const [testIdx, setTestIdx] = useState(0);
   const [popupOpen, setPopupOpen] = useState(false); 
  const pageSize = 2;

  const filteredCourses = sampleCourses.filter((c) => {
    const levelMatch = levelFilter === "All" || c.level === levelFilter;
    const categoryMatch =
      categoryFilter === "All" || c.category === categoryFilter;
    return levelMatch && categoryMatch;
  });

  const next = () =>
    setTestIdx((i) => (i + pageSize) % sampleTestimonials.length);

  const prev = () =>
    setTestIdx(
      (i) =>
        (i - pageSize + sampleTestimonials.length) %
        sampleTestimonials.length
    );

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
