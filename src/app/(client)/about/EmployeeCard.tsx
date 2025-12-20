import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

export interface EmployeeCardProps {
  name: string;
  role: string;
  img_url: any;
  linkedin_url: string;
}

export default function EmployeeCard({
  name,
  role,
  img_url,
  linkedin_url,
}: EmployeeCardProps) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
   className="employee-card group relative rounded-2xl overflow-hidden bg-white shadow-lg"
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={img_url}
          alt={name}
          width={240}
          className="  object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[rgba(74,49,133,0.85)] to-[rgba(6,182,212,0.85)]"
        >
          <motion.a
            href={linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              rest: { scale: 0.6, opacity: 0 },
              hover: { scale: 1, opacity: 1 },
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="linkedin-btn"
            aria-label={`View ${name} on LinkedIn`}
          >
            <FaLinkedinIn size={22} />
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-2 text-center">
        <h3 className="text-lg font-semibold text-[#4a3185]">
          {name}
        </h3>
        <p className="mt-1 text-sm text-gray-600">{role}</p>
      </div>
    </motion.div>
  );
}

/* ==============================
   EmployeeCard.scss
   ==============================

*/
