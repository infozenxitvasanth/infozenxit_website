
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { validateFormData, validateField } from "./PopupFormValidate";
import { _whatsappConsts } from "@/app/const/whatsapp_consts";

export type JobType = {
    id: string;
    title: string;
    team: string;
    location: string;
    summary: string;
    responsibilities: string[];
    about: string;
};

type Props = {
    isOpen: boolean;
    openJob: JobType | null;
    modalRef: React.RefObject<HTMLDivElement | null>;
    firstInputRef: React.RefObject<HTMLInputElement | null>;
    closeModal: () => void;
};

type FormErrors = Partial<Record<"name" | "email" | "phone" | "resume" | "note", string>>;

const HR_NUMBER = _whatsappConsts.number.manager;

const initialFormState = {
    name: "",
    email: "",
    phone: "",
    resume: "",
    note: "",
};

const PopupForm: React.FC<Props> = ({ isOpen, openJob, modalRef, firstInputRef, closeModal }) => {
    const [formState, setFormState] = useState(initialFormState);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);

    // Unified change handler: updates value, clears previous error, and validates immediately
    const handleInputChange = (fieldName: keyof typeof initialFormState, value: string) => {
        setFormState((prev) => ({ ...prev, [fieldName]: value }));

        // clear previous error for this field
        if (errors[fieldName]) {
            setErrors((prev) => {
                const newErr = { ...prev };
                delete newErr[fieldName];
                return newErr;
            });
        }

        // validate this single field on change (so we don't need a separate onBlur)
        const fieldError = validateField(fieldName as any, value);
        if (fieldError) {
            setErrors((prev) => ({ ...prev, [fieldName]: fieldError }));
        }
    };

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrors({});
        setSent(false);

        const payload = {
            name: formState.name.trim(),
            email: formState.email.trim(),
            phone: formState.phone.trim(),
            resume: formState.resume.trim(),
            note: formState.note.trim(),

        };

        const validation = validateFormData(payload);
        if (Object.keys(validation).length > 0) {
            setErrors(validation as FormErrors);

            const keys: Array<keyof typeof validation> = ["name", "email", "phone", "resume", "note"];
            const firstKey = keys.find((k) => !!validation[k]);
            if (firstKey) {
                const el = document.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${String(firstKey)}"]`);
                el?.focus();
            }
            return;
        }

        setSubmitting(true);
        try {

            const message = `*New Job Application*\n\n*Position:* ${openJob?.title ?? "—"}\n*Team:* ${openJob?.team ?? "—"}\n\n*Candidate Details:*\nName: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nResume: ${payload.resume || "N/A"}\nNote: ${payload.note || "—"}`;

            if (HR_NUMBER) {
                const waUrl = `https://wa.me/${HR_NUMBER}?text=${encodeURIComponent(message)}`;
                window.open(waUrl, "_blank");
                setSent(true);
            } else {
                try {
                    await navigator.clipboard.writeText(message);
                    setSent(true);
                    alert("WhatsApp number not configured — message copied to clipboard.");
                } catch {

                    alert("WhatsApp number not configured — check console for the message.");
                }
            }


            setFormState(initialFormState);

            setTimeout(() => {
                setSubmitting(false);
                closeModal();
                setSent(false);
                setErrors({});
            }, 800);
        } catch (err) {
            console.error(err);
            alert("Failed to submit application. Try again later.");
            setSubmitting(false);
            setSent(false);
        }
    }

    return (
        <AnimatePresence>
            {isOpen && openJob && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="careers-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-6"
                >
                    <motion.div
                        ref={modalRef as React.RefObject<HTMLDivElement>}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        className="careers-modal-card bg-white rounded-2xl p-6 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="job-title"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 id="job-title" className="text-2xl font-bold">
                                    {openJob.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {openJob.team} • {openJob.location}
                                </p>
                            </div>

                            <button onClick={closeModal} aria-label="Close dialog" className="p-2 rounded-full hover:bg-gray-100">
                                <FiX />
                            </button>
                        </div>

                        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold">About the role</h4>
                                <p className="mt-2 text-gray-600">{openJob.about}</p>

                                <h4 className="mt-4 font-semibold">Key responsibilities</h4>
                                <ul className="list-disc ml-5 mt-2 text-gray-600">
                                    {openJob.responsibilities.map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold">Apply (fast)</h4>

                                <form className="mt-3 space-y-3" onSubmit={onSubmit} noValidate>
                                    {/* Name Field */}
                                    <div>
                                        <label className="text-sm font-medium" htmlFor="app-name">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="app-name"
                                            name="name"
                                            ref={firstInputRef as React.RefObject<HTMLInputElement>}
                                            required
                                            value={formState.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            aria-invalid={!!errors.name}
                                            aria-describedby={errors.name ? "err-name" : undefined}
                                            className={`w-full mt-1 p-3 border rounded-lg careers-input transition-colors ${errors.name ? "border-red-400 focus:border-red-500" : "focus:border-violet-400"}`}
                                        />
                                        {errors.name && <p id="err-name" className="mt-1 text-xs text-red-600">{errors.name}</p>}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label className="text-sm font-medium" htmlFor="app-email">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="app-email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? "err-email" : undefined}
                                            className={`w-full mt-1 p-3 border rounded-lg careers-input transition-colors ${errors.email ? "border-red-400 focus:border-red-500" : "focus:border-violet-400"}`}
                                        />
                                        {errors.email && <p id="err-email" className="mt-1 text-xs text-red-600">{errors.email}</p>}
                                    </div>

                                    {/* Phone Field - NOW REQUIRED */}
                                    <div>
                                        <label className="text-sm font-medium" htmlFor="app-phone">
                                            Phone <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="app-phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            placeholder="e.g., +91 98765 43210"
                                            value={formState.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            className={`w-full mt-1 p-3 border rounded-lg careers-input transition-colors ${errors.phone ? "border-red-400 focus:border-red-500" : "focus:border-violet-400"}`}
                                            aria-invalid={!!errors.phone}
                                            aria-describedby={errors.phone ? "err-phone" : undefined}
                                        />
                                        {errors.phone && <p id="err-phone" className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                                    </div>

                                    {/* Resume Field */}
                                    <div>
                                        <label className="text-sm font-medium" htmlFor="app-resume">
                                            Resume link / Drive<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="app-resume"
                                            name="resume"
                                            placeholder="https://drive.google.com/..."
                                            value={formState.resume}
                                            onChange={(e) => handleInputChange('resume', e.target.value)}
                                            className={`w-full mt-1 p-3 border rounded-lg careers-input transition-colors ${errors.resume ? "border-red-400 focus:border-red-500" : "focus:border-violet-400"}`}
                                            aria-invalid={!!errors.resume}
                                            aria-describedby={errors.resume ? "err-resume" : undefined}
                                        />
                                        {errors.resume && <p id="err-resume" className="mt-1 text-xs text-red-600">{errors.resume}</p>}
                                    </div>

                                    {/* Note Field */}
                                    <div>
                                        <label className="text-sm font-medium" htmlFor="app-note">
                                            Short note (optional)
                                        </label>
                                        <textarea
                                            id="app-note"
                                            name="note"
                                            rows={3}
                                            value={formState.note}
                                            onChange={(e) => handleInputChange('note', e.target.value)}
                                            className={`w-full mt-1 p-3 border rounded-lg careers-input transition-colors ${errors.note ? "border-red-400 focus:border-red-500" : "focus:border-violet-400"}`}
                                            aria-invalid={!!errors.note}
                                            aria-describedby={errors.note ? "err-note" : undefined}
                                        />
                                        {errors.note && <p id="err-note" className="mt-1 text-xs text-red-600">{errors.note}</p>}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className=" cursor-pointer px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-400 text-white disabled:opacity-60 hover:shadow-lg transition-all"
                                        >
                                            {submitting ? "Submitting…" : "Submit application"}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="cursor-pointer px-4 py-3 rounded-lg border hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>

                                    {sent && (
                                        <div className="mt-2 text-sm text-green-600 font-medium">✓ WhatsApp opened! Closing modal…</div>
                                    )}
                                </form>

                                <div className="mt-4 text-xs text-gray-500">
                                    By applying you consent to us storing your details for recruitment purposes.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PopupForm;
