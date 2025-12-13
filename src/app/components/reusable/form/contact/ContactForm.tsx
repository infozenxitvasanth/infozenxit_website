// File: ContactForm.tsx
"use client";

import { _whatsappConsts } from "@/app/const/whatsapp_consts";
import React, { useState } from "react";

type FormState = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const SUPPORT_WHATSAPP = _whatsappConsts.number.manager


export default function ContactForm() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    function validate(f: FormState): FormErrors {
        const err: FormErrors = {};

        if (!f.name.trim()) err.name = "Please enter your name.";
        if (!f.email.trim()) {
            err.email = "Please enter your email.";
        } else {

            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(f.email.trim())) err.email = "Please enter a valid email.";
        }

        if (!f.phone.trim()) {
            err.phone = "Please enter your phone number.";
        } else {

            const digits = f.phone.replace(/\D/g, "");
            if (digits.length < 10) err.phone = "Phone number looks too short.";
            if (!/^\+?[\d\s\-().]*$/.test(f.phone)) err.phone = "Phone contains invalid characters.";
        }

        if (!f.message.trim()) err.message = "Please enter a message.";

        if (!f.subject.trim()) err.subject = "Please enter a subject.";

        return err;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSent(false);
        const v = validate(form);
        if (Object.keys(v).length > 0) {
            setErrors(v);
            // focus first error field (a small UX nicety)
            const firstKey = (Object.keys(v)[0] as keyof FormState) || null;
            if (firstKey) {
                const el = document.querySelector(`[name="${firstKey}"]`) as HTMLElement | null;
                el?.focus();
            }
            return;
        }

        setLoading(true);
        try {
            // build the message text
            const messageLines = [
                `*New message from Contact*`,
                ``,
                `*Name:* ${form.name.trim()}`,
                `*Email:* ${form.email.trim()}`,
                `*Phone:* ${form.phone.trim()}`,
                `*Subject:* ${form.subject.trim()}`,
                `*Message:*`,
                `${form.message.trim()}`,
            ];
            const messageText = messageLines.join("\n");


            const encoded = encodeURIComponent(messageText);
            const url = `https://wa.me/${SUPPORT_WHATSAPP}?text=${encoded}`

            window.open(url, "_blank");


            setSent(true);
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch (err) {
            console.error("submit error", err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="contact-form shadow-md rounded-lg p-6">
            <h3 className="text-xl text-white font-semibold mb-4">Send us a Message</h3>

            {sent && <div className="mb-4 text-sm text-green-600">Message prepared — open WhatsApp to send.</div>}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium mb-1 text-white">Name *</label>
                        <input
                            placeholder="Enter Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full input px-3 py-2"
                            required
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "error-name" : undefined}
                        />
                        {errors.name && (
                            <div id="error-name" className="text-xs text-red-400 mt-1">
                                {errors.name}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1 text-white">Email *</label>
                        <input
                            placeholder="Enter Email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full input px-3 py-2"
                            required
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "error-email" : undefined}
                        />
                        {errors.email && (
                            <div id="error-email" className="text-xs text-red-400 mt-1">
                                {errors.email}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1 text-white">Phone Number *</label>
                        <input
                            placeholder="Enter phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full input px-3 py-2"
                            required
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "error-phone" : undefined}
                        />
                        {errors.phone && (
                            <div id="error-phone" className="text-xs text-red-400 mt-1">
                                {errors.phone}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1 text-white">Subject *</label>
                        <input
                            placeholder="Enter Subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full input px-3 py-2"
                            required
                            aria-invalid={!!errors.subject}
                            aria-describedby={errors.subject ? "error-subject" : undefined}
                        />
                        {errors.subject && (
                            <div id="error-subject" className="text-xs text-red-400 mt-1">
                                {errors.subject}
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-medium mb-1 text-white">Message *</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full input px-3 py-2 text-sm"
                        required
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "error-message" : undefined}
                    />
                    {errors.message && (
                        <div id="error-message" className="text-xs text-red-400 mt-1">
                            {errors.message}
                        </div>
                    )}
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="cursor-pointer w-full py-2 rounded text-white font-semibold"
                        style={{ backgroundColor: "var(--primary-color)" }}
                    >
                        {loading ? "Preparing..." : "Send Message via WhatsApp"}
                    </button>
                </div>
            </form>
        </div>
    );
}
