import { FeaturesFormDetails } from "@/app/type/FeaturesFormDetails";






export type ServiceSlug =
    | "web-design-development"
    | "mobile-app-development"
    | "logo-design-graphic-design"
    | "support-maintenance"
    | "ecommerce-development"
    | "seo-digital-marketing";



export const services: Record<string, FeaturesFormDetails<ServiceSlug>> = {

    "web-design-development": {
        slug: "web-design-development",
        title: "Web Design & Development",
        subtitle: "",
        description:
            "We create stunning, responsive websites that help your business stand out online. Our web development services combine creativity with technical expertise to deliver websites that not only look great but also perform exceptionally well.",
        keyFeatures: [
            "Custom Website Design",
            "Responsive & Mobile-Friendly",
            "CMS Integration (WordPress, etc.)",
            "E-commerce Integration",
            "SEO - Friendly Architecture",
            "Fast Loading Speed",
            "Cross-Browser Compatibility",
            "Modern Web Technologies",
        ],
        benefitsFeatures:[],
    },

    "mobile-app-development": {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        subtitle: "",
        description:
            "Transform your business with powerful mobile applications. We develop native and cross-platform mobile apps for iOS and Android that provide seamless user experiences and drive customer engagement.",
        keyFeatures: [
            "iOS App Development",
            "Responsive & Mobile-Friendly",
            "Cross-Platform Development (Flutter, React Native)",
            "UI/UX Design",
            "API Integration",
            "Push Notifications",
            "App Store Optimization",
            "Maintenance & Updates",
        ],
         benefitsFeatures:[],
    },

    "logo-design-graphic-design": {
        slug: "logo-design-graphic-design",
        title: "Logo Design & Graphic Design",
        subtitle: "",
        description:
            "Build a strong visual identity for your brand with our creative design services. We create memorable logos and engaging graphics that communicate your brand message effectively.",
        keyFeatures: [
            "Logo Design & Branding",
            "Business Card Design",
            "Brochure & Flyer Design",
            "Social Media Graphics",
            "Banner & Poster Design",
            "Packaging Design",
            "Brand Identity Guidelines",
            "Print-Ready Designs",
        ],
         benefitsFeatures:[],
    },

    "support-maintenance": {
        slug: "support-maintenance",
        title: "Support & Maintenance",
        subtitle: "",
        description:
            "Ongoing technical support and maintenance services to keep your digital assets running smoothly and securely.",
        keyFeatures: [
            "Regular Website Updates",
            "Bug Fixes & Troubleshooting",
            "Performance Optimization",
            "Security Monitoring",
            "Backup & Recovery",
            "Server Management",
            "App Maintenance",
            "24/7 Technical Support",
        ],
         benefitsFeatures:[],
    },

    "ecommerce-development": {
        slug: "ecommerce-development",
        title: "E-commerce Development",
        subtitle: "",
        description:
            "Complete e-commerce solutions to help you sell products online with secure payment integration and inventory management.",
        keyFeatures: [
            "Custom E-commerce Store",
            "Payment Gateway Integration",
            "Shopping Cart System",
            "Product & Order Management",
            "Secure Checkout Process",
            "Responsive Store Design",
            "Admin Dashboard",
            "Inventory Management",
        ],
         benefitsFeatures:[],
    },

    "seo-digital-marketing": {
        slug: "seo-digital-marketing",
        title: "SEO & Digital Marketing Services",
        subtitle: "",
        description:
            "Comprehensive digital marketing and SEO services to increase your online visibility and drive more traffic to your business.",
        keyFeatures: [
            "Search Engine Optimization (SEO)",
            "Google Ads Management",
            "Social Media Marketing",
            "Keyword Research",
            "Content Strategy",
            "On-Page & Off-Page SEO",
            "Analytics & Reporting",
            "Brand Awareness Campaigns",
        ],
         benefitsFeatures:[],
    },
};


export function getServiceBySlug(slug: string): FeaturesFormDetails<ServiceSlug> {
    return services[slug];
}