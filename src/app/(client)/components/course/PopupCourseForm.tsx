"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { _whatsappConsts } from "@/app/const/whatsapp_consts";

type PopupCourseFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PopupCourseForm({ isOpen, onClose }: PopupCourseFormProps) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const whatsAppNumber = _whatsappConsts.number.manager;
  const formRef = useRef<HTMLDivElement>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!number.trim() || !/^\d{10,15}$/.test(number)) newErrors.number = "Enter a valid number";
    if (!email.trim() || !/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) newErrors.email = "Enter a valid email";
    if (!note.trim()) newErrors.note = "Please enter a short note";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const message = `*New Course Inquiry*\nName: ${name}\nNumber: ${number}\nEmail: ${email}\nNote: ${note}`;
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setName("");
    setNumber("");
    setEmail("");
    setNote("");
    onClose();
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        
    setName("");
    setNumber("");
    setEmail("");
    setNote("");
    setErrors({})
        onClose();
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <motion.div
        ref={formRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4" style={{ color: "#8b5cf6" }}>
          Submit Your Details
        </h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

          <input
            type="text"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          {errors.number && <span className="text-red-500 text-sm">{errors.number}</span>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

          <textarea
            placeholder="Short Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          />
          {errors.note && <span className="text-red-500 text-sm">{errors.note}</span>}
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={onClose}
            className="px-4 cursor-pointer py-2 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 cursor-pointer rounded-md bg-[#8b5cf6] text-white hover:bg-[#4a3185]"
          >
            Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
}
