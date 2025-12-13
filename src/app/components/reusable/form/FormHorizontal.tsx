"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FiUser,
    FiPhone,
    FiMail,
    FiLayers,
    FiLink,
} from "react-icons/fi";

import {
    FormErrors,
    formValidateField,
    FormValues,
} from "./formValidate";
import { _whatsappConsts } from "@/app/const/whatsapp_consts";

interface FormHorizontalProps {
    name: "internship" | "service";
    Items: Array<{
        slug: string;
        title: string;
    }>;
}

const WHATSAPP_NUMBER = _whatsappConsts.number.manager;

const FormHorizontal: React.FC<FormHorizontalProps> = ({ Items, name }) => {

    // Dynamic values based on form type
    const [values, setValues] = useState<FormValues>({
        name: "",
        mobile: "",
        email: "",
        internship: name === "internship" ? "" : undefined,
        driveLink: name === "internship" ? "" : undefined,
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "submitting" | "success"
    >("idle");


    const validate = (vals: FormValues, field?: keyof FormValues): boolean => {
        let newErrors: FormErrors = {};

        if (!field) {

            newErrors = formValidateField.validateAll(vals);


            // Remove internship-only validations for service form
            if (name === "service") {
                delete newErrors.internship;
                delete newErrors.driveLink;
            }
        } else {
          
            const msg = formValidateField.validateField(field, vals[field] ?? "");
            newErrors = { ...errors, [field]: msg };

            if (name === "service" && (field === "internship" || field === "driveLink")) {
                delete newErrors[field];
            }
        }

        setErrors(newErrors);
        return Object.values(newErrors).every((msg) => !msg);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        const updated = { ...values, [name]: value };

        setValues(updated);
        validate(updated, name as keyof FormValues);
    };

    const openWhatsApp = (vals: FormValues) => {
        const message = `
${name === "internship"
        ? "New Internship Application"
        : "New Service Inquiry"
    }

Name: ${vals.name}
Mobile: ${vals.mobile}
Email: ${vals.email}


${name === "internship" ? `Drive Link: ${vals.driveLink}` : ""}

Message:
${vals.message || "-"}
        `.trim();

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        if (typeof window !== "undefined") {
            window.open(url, "_blank");
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValid = validate(values);
        console.log(isValid,"isValid");
        
        if (!isValid) {
            setSubmitStatus("idle");
            return;
        }

        setSubmitStatus("submitting");

        setTimeout(() => {
            setSubmitStatus("success");
            openWhatsApp(values);
        }, 600);
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="form-horizontal-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="form-grid">

                {/* NAME */}
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        <FiUser className="icon" /> Full Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className={`form-input ${errors.name ? "has-error" : ""}`}
                        placeholder="Enter your name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                {/* MOBILE */}
                <div className="form-group">
                    <label htmlFor="mobile" className="form-label">
                        <FiPhone className="icon" /> Mobile Number
                    </label>
                    <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        required
                        className={`form-input ${errors.mobile ? "has-error" : ""}`}
                        placeholder="9876543210"
                        value={values.mobile}
                        onChange={handleChange}
                    />
                    {errors.mobile && <p className="error-text">{errors.mobile}</p>}
                </div>

                {/* EMAIL */}
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        <FiMail className="icon" /> Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={`form-input ${errors.email ? "has-error" : ""}`}
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                {/* INTERNSHIP SELECT — only for internship mode */}
                {/* {name === "internship" && (
                    <div className="form-group">
                        <label htmlFor="internship" className="form-label">
                            <FiLayers className="icon" /> Choose Internship
                        </label>
                        <select
                            id="internship"
                            name="internship"
                            required
                            className={`form-input select-input ${errors.internship ? "has-error" : ""}`}
                            value={values.internship}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select internship program</option>
                            {Items.map((item) => (
                                <option key={item.slug} value={item.title}>
                                    {item.title}
                                </option>
                            ))}
                        </select>
                        {errors.internship && (
                            <p className="error-text">{errors.internship}</p>
                        )}
                    </div>
                )} */}

                {/* DRIVE LINK — only in internship mode */}
                {name === "internship" && (
                    <div className="form-group col-span-2">
                        <label htmlFor="driveLink" className="form-label">
                            <FiLink className="icon" /> Resume Google Drive Link
                        </label>
                        <input
                            id="driveLink"
                            name="driveLink"
                            type="url"
                            required
                            className={`form-input ${errors.driveLink ? "has-error" : ""}`}
                            placeholder="Paste Google Drive URL"
                            value={values.driveLink}
                            onChange={handleChange}
                        />
                        {errors.driveLink && <p className="error-text">{errors.driveLink}</p>}
                        <p className="hint">Make link public or “Anyone with link can view”.</p>
                    </div>
                )}

                {/* MESSAGE */}
                <div className="form-group col-span-2">
                    <label htmlFor="message" className="form-label">
                        Short Note (optional)
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="form-input textarea"
                        placeholder="Tell us something…"
                        value={values.message}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-footer">
                <button type="submit" className="cursor-pointer  form-submit-btn">
                    {submitStatus === "submitting" ? "Submitting..." : "Submit"}
                </button>

                {submitStatus === "success" && (
                    <p className="success-text">
                        ✅ Thank you! Your message has been sent on WhatsApp.
                    </p>
                )}
            </div>
        </motion.form>
    );
};

export default FormHorizontal;
