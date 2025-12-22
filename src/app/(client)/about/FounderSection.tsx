import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import md_imng from '@/assets/image/about/md.jpg'
import Image from "next/image";
export default function FounderSection() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-slate-900/80 p-6 shadow-lg shadow-black/40 border border-[#94a3b82e] rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Image */}
          <div className="relative">
            <Image
              src={md_imng}
              alt="Founder"
              className="w-full h-full object-cover  mx-5"
            />
            <div className="absolute inset-0 bg-gradient-to-tr " />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            <span className="inline-block mb-3 px-4 py-1 text-sm rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] font-medium">
              Founder & Owner
            </span>

            <h2 className="text-3xl font-bold text-[#6b48be]">
              Greeshma Sen
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
            Greeshma Sen, Managing Director of InfoZenX IT, leads the organization with a clear vision of delivering smarter solutions and  <span className="z-text-style ms-2">z</span>en experiences. Rooted in strong ethics, integrity, and purpose-driven innovation, she guides the company toward meaningful and sustainable digital transformation.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
          Her thoughtful, ethical leadership and forward-looking mindset inspire the team to grow with confidence, adapt to change, and strive for excellence. Under her guidance, InfoZenX IT continues to evolve as a trusted and responsible technology partner, creating intelligent, balanced, and value-driven solutions for modern businesses.
            </p>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-[#6b48be]">Owner</h4>
                <p className="text-sm text-gray-500">Founder,InfozenX IT</p>
              </div>

              <a
                href="https://linkedin.com/in/greeshma-sen-54042a3a1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-[#8b5cf6] to-[#06b6d4] text-white shadow-lg hover:scale-110 transition"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
