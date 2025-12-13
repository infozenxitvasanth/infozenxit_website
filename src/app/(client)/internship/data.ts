import { FeaturesFormDetails } from "@/app/type/FeaturesFormDetails";



export interface InternshipItem {
    slug: InternshipSlug;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
}



export type InternshipSlug =
    | "python-django"
    | "machine-learning-data-science"
    | "php-web-development"
    | "java"|"react-js"
    | "android"
    | "software-testing" | "flutter" | "aws-solution-architect" | "data-analytics";

export function getInternshipBySlug(slug: string) :FeaturesFormDetails<InternshipSlug>{
    return internship[slug];
}


export const internship: Record<string, FeaturesFormDetails<InternshipSlug>> = {
    "python-django": {
        slug: "python-django",
        title: "Python Django",
        subtitle: "Backend Web Development",
        description:
            "Learn backend web development with Python and Django framework. Build powerful web applications with industry-standard practices.",
        keyFeatures: [
            "Python fundamentals & OOP",
            "Django models, views & templates",
            "REST API development",
            "Database integration (MySQL/PostgreSQL)",
            "Authentication & admin customization",
        ],
        benefitsFeatures: [
            "Hands-on project building",
            "Industry-oriented learning",
            "Improves backend development skills",
            "High-demand technology in companies",
        ],
    },

    "machine-learning-data-science": {
        slug: "machine-learning-data-science",
        title: "Machine Learning & Data Science",
        subtitle: "AI & Predictive Modeling",
        description:
            "Master AI and machine learning algorithms, data analysis, and predictive modeling with hands-on projects.",
        keyFeatures: [
            "Python for ML",
            "Data preprocessing",
            "Supervised & unsupervised ML models",
            "Model training & evaluation",
            "Real-world ML projects",
        ],
        benefitsFeatures: [
            "Strong foundation in AI",
            "Job-ready ML skills",
            "Portfolio-ready ML projects",
            "High-value career opportunities",
        ],
    },

    "php-web-development": {
        slug: "php-web-development",
        title: "PHP Web Development",
        subtitle: "Dynamic Web Development",
        description:
            "Develop dynamic websites and web applications using PHP, MySQL, and modern frameworks.",
        keyFeatures: [
            "PHP fundamentals",
            "Form handling & validation",
            "MySQL database operations",
            "CRUD operations",
            "Deploying PHP applications",
        ],
        benefitsFeatures: [
            "Strong backend understanding",
            "Works well with WordPress & CMS",
            "Ideal for entry-level web developers",
            "Enhances full-stack development path",
        ],
    },

    "java": {
        slug: "java",
        title: "Java",
        subtitle: "Object-Oriented Programming",
        description:
            "Learn object-oriented programming with Java and build enterprise-level applications.",
        keyFeatures: [
            "Core Java concepts",
            "OOP principles",
            "File handling & collections",
            "Exception handling",
            "Intro to Java frameworks",
        ],
        benefitsFeatures: [
            "Strengthens programming logic",
            "Widely used in enterprise applications",
            "Builds foundation for Android & Spring Boot",
            "High-value corporate job skill",
        ],
    },
"react-js": {
    slug: "react-js",
    title: "React JS",
    subtitle: "Modern Frontend Development",
    description:
        "Learn React JS to build fast, scalable, and interactive user interfaces for modern web applications.",
    keyFeatures: [
        "JSX & component-based architecture",
        "Props, state & lifecycle",
        "Hooks (useState, useEffect, etc.)",
        "Routing with React Router",
        "API integration & state management basics",
    ],
    benefitsFeatures: [
        "Build dynamic and responsive UIs",
        "High demand frontend skill",
        "Used by top tech companies",
        "Strong foundation for full-stack development",
    ],
},


    "android": {
        slug: "android",
        title: "Android",
        subtitle: "Native Android Development",
        description:
            "Build native Android applications using Java/Kotlin and Android Studio.",
        keyFeatures: [
            "Android Studio setup",
            "Activity & fragment lifecycle",
            "UI layouts & components",
            "API integration & JSON parsing",
            "Publishing basics",
        ],
        benefitsFeatures: [
            "Real Android app creation",
            "Strong mobile development skillset",
            "Industry-level workflows",
            "Build portfolio-ready apps",
        ],
    },

    "software-testing": {
        slug: "software-testing",
        title: "Software Testing",
        subtitle: "Manual & Automation Testing",
        description:
            "Learn manual and automated testing methodologies to ensure software quality.",
        keyFeatures: [
            "SDLC & STLC",
            "Test case creation",
            "Bug reporting",
            "Automation using Selenium",
            "Testing tools & frameworks",
        ],
        benefitsFeatures: [
            "Improves analytical thinking",
            "High-demand role in IT companies",
            "Foundation for QA automation",
            "Work on real testing scenarios",
        ],
    },

    "flutter": {
        slug: "flutter",
        title: "Flutter",
        subtitle: "Cross-Platform Mobile App Development",
        description:
            "Create beautiful cross-platform mobile applications with Flutter and Dart.",
        keyFeatures: [
            "Dart fundamentals",
            "Flutter widgets",
            "State management",
            "API integration",
            "Build Android & iOS apps",
        ],
        benefitsFeatures: [
            "One codebase for two platforms",
            "Industry demand is rapidly growing",
            "Perfect for mobile dev career",
            "Build real apps for portfolio",
        ],
    },

    "aws-solution-architect": {
        slug: "aws-solution-architect",
        title: "AWS Solution Architect",
        subtitle: "Cloud Computing",
        description:
            "Master cloud computing with Amazon Web Services and design scalable cloud solutions.",
        keyFeatures: [
            "AWS fundamentals",
            "EC2, S3, IAM, Lambda",
            "Networking & VPC",
            "Deploy scalable applications",
            "AWS architecture best practices",
        ],
        benefitsFeatures: [
            "High-paying cloud career path",
            "Industry-standard cloud knowledge",
            "Strong foundation for AWS certification",
            "Learn real cloud implementation",
        ],
    },

    "data-analytics": {
        slug: "data-analytics",
        title: "Data Analytics",
        subtitle: "Data Visualization & Insights",
        description:
            "Analyze data, create visualizations, and derive insights using modern analytics tools.",
        keyFeatures: [
            "Excel & spreadsheets",
            "SQL for data analysis",
            "Data cleaning",
            "Visualization with Power BI/Tableau",
            "Analytics project building",
        ],
        benefitsFeatures: [
            "Strong analytical thinking",
            "Job-ready dashboard skills",
            "Useful across all industries",
            "Portfolio-ready analytics projects",
        ],
    },
};
