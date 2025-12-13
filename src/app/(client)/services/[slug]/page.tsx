"use client";


import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { getServiceBySlug, ServiceSlug } from "../data";
import { useParams } from 'next/navigation';
import FeaturesAndForm from "../../components/FeaturesAndForm";


const ServicePage = () => {
    let { slug } = useParams()
    const service = getServiceBySlug(slug + "");


    if (!service) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center text-red-400">
                Service not found
            </div>
        );
    }

    return (
        <section className=" bg-slate-950 py-16 text-white">
         <FeaturesAndForm/>
            <div className="h-40"></div>
        </section>
    );
};

export default ServicePage;
