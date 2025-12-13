// File: TestimonialsOne.tsx
import React, { JSX, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Testimonial = {
    name: string;
    role: string;
    text: string;
    img: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Akshaya",
        role: "Product Operations Manager",
        text:
            "My journey began as an Operational Executive and became a TL with better support. Our company cares about the work/life of its employees.",
        img: "https://placehold.co/64x64/png?text=A",
    },
    {
        name: "Ravi",
        role: "Frontend Engineer",
        text:
            "Working here helped me grow quickly — the team culture and mentorship are excellent.",
        img: "https://placehold.co/64x64/png?text=R",
    },

];

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.98,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({
        x: direction > 0 ? -300 : 300,
        opacity: 0,
        scale: 0.98,
    }),
};

export default function TestimonialsOne(): JSX.Element {
    const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
    const idxRef = useRef(0);

    const paginate = (newDirection: number) => {
        setPage(([p]) => {
            const next = (p + newDirection + testimonials.length) % testimonials.length;
            idxRef.current = next;
            return [next, newDirection];
        });
    };

    const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
        const offsetX = info.offset.x;
        if (offsetX > 50) paginate(-1);
        else if (offsetX < -50) paginate(1);
    };

    const current = testimonials[page];

    return (
        <section className="testimonials-one py-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">What people say</h2>
                    <div className="controls flex gap-3">
                        <button
                            aria-label="previous"
                            className="btn-icon"
                            onClick={() => paginate(-1)}
                        >
                            <FiChevronLeft size={20} />
                        </button>
                        <button
                            aria-label="next"
                            className="btn-icon"
                            onClick={() => paginate(1)}
                        >
                            <FiChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="relative testimonials-one-content overflow-hidden rounded-2xl shadow-lg bg-panel p-6">
                    <AnimatePresence custom={direction} initial={false} mode="wait">
                        <motion.article
                            key={page}
                            className="slide flex flex-col md:flex-row items-center gap-6"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={handleDragEnd}
                        >
                            <img
                                src={current.img}
                                alt={current.name}
                                className="w-16 h-16 rounded-full flex-shrink-0"
                            />

                            <div className="flex-1">
                                <p className="text-base md:text-lg testimonial-text">{current.text}</p>
                                <div className="mt-4">
                                    <p className="font-medium">{current.name}</p>
                                    <p className="text-sm text-muted">{current.role}</p>
                                </div>
                            </div>

                            <div className="ml-auto hidden md:flex flex-col items-end gap-2">
                                <div className="dots flex gap-2">
                                    {testimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            className={`dot ${i === page ? 'active' : ''}`}
                                            onClick={() => setPage([i, i > page ? 1 : -1])}
                                            aria-label={`go-to-${i}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    </AnimatePresence>

                    {/* Mobile dots */}
                    <div className="md:hidden mt-4 flex justify-center gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                className={`dot ${i === page ? 'active' : ''}`}
                                onClick={() => setPage([i, i > page ? 1 : -1])}
                                aria-label={`go-to-${i}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

