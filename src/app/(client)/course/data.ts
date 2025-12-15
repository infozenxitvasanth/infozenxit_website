
export type Course = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "Web" | "UIUX" | "Cloud"|"Digital Marketing";
  duration: string;
 
  bullets: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  text: string;
  rating?: number;
};

/* ================= DATA ================= */

export const sampleCourses: Course[] = [
  // Beginner Java
  {
    id: "c6",
    title: "Java Basics",
    level: "Beginner",
    category: "Web",
    duration: "4 weeks",
    bullets: ["Java syntax & variables", "Data types & operators", "Conditional statements", "Loops basics"],
  },
  {
    id: "c7",
    title: "Python Basics",
    level: "Beginner",
    category: "Web",
    duration: "4 weeks",
    bullets: ["Python syntax", "Variables & data types", "Functions", "Basic input/output"],
  },

  // Intermediate Java
  {
    id: "c8",
    title: "Object-Oriented Java",
    level: "Intermediate",
    category: "Web",
    duration: "6 weeks",
    bullets: ["Classes & objects", "Inheritance & polymorphism", "Encapsulation", "Interfaces & abstract classes"],
  },
  {
    id: "c9",
    title: "Python Intermediate",
    level: "Intermediate",
    category: "Web",
    duration: "6 weeks",
    bullets: ["Modules & packages", "File handling", "Error handling", "Collections (lists, dicts, sets)"],
  },

  // Advanced Java
  {
    id: "c10",
    title: "Java Advanced Concepts",
    level: "Advanced",
    category: "Web",
    duration: "8 weeks",
    bullets: ["Multithreading & concurrency", "JDBC & databases", "Streams & Lambdas", "Design patterns"],
  },
  {
    id: "c11",
    title: "Spring Boot Development",
    level: "Advanced",
    category: "Web",
    duration: "8 weeks",
    bullets: ["Spring Boot setup", "REST API development", "Dependency Injection", "Security & Testing"],
  },

  // Advanced Python
  {
    id: "c12",
    title: "Python Advanced Concepts",
    level: "Advanced",
    category: "Web",
    duration: "8 weeks",
    bullets: ["Decorators & generators", "OOP in Python", "File & database handling", "Multithreading & async"],
  },
  {
    id: "c13",
    title: "Django Web Development",
    level: "Advanced",
    category: "Web",
    duration: "8 weeks",
    bullets: ["Django models & views", "REST API with Django REST Framework", "Authentication & permissions", "Deployment"],
  },

  // Beginner UI/UX
  {
    id: "c14",
    title: "UI/UX Design Basics",
    level: "Beginner",
    category: "UIUX",
    duration: "3 weeks",
    bullets: ["Introduction to UI/UX", "Design principles", "Wireframes", "Simple prototyping in Figma"],
  },
  {
    id: "c15",
    title: "Figma Essentials",
    level: "Beginner",
    category: "UIUX",
    duration: "3 weeks",
    bullets: ["Figma interface", "Creating frames & components", "Basic prototyping", "Exporting designs"],
  },

  // Intermediate UI/UX
  {
    id: "c16",
    title: "UI/UX Research & Wireframing",
    level: "Intermediate",
    category: "UIUX",
    duration: "4 weeks",
    bullets: ["User research methods", "Personas & user flows", "Wireframe creation", "Usability testing basics"],
  },
  {
    id: "c17",
    title: "Advanced Figma & Prototyping",
    level: "Intermediate",
    category: "UIUX",
    duration: "4 weeks",
    bullets: ["Components & variants", "Auto layout & constraints", "Interactive prototypes", "Design handoff to developers"],
  },

  // Advanced UI/UX
  {
    id: "c18",
    title: "Design Systems Mastery",
    level: "Advanced",
    category: "UIUX",
    duration: "6 weeks",
    bullets: ["Creating scalable design systems", "Style guides & tokens", "Accessibility best practices", "Component libraries"],
  },
  {
    id: "c19",
    title: "UX Strategy & Advanced Prototyping",
    level: "Advanced",
    category: "UIUX",
    duration: "6 weeks",
    bullets: ["High-fidelity prototypes", "User testing & iteration", "UX strategy planning", "Cross-platform design consistency"],
  },
  // Beginner Digital Marketing
  {
    id: "c20",
    title: "Digital Marketing Basics",
    level: "Beginner",
    category: "Digital Marketing",
    duration: "3 weeks",
    bullets: ["Introduction to digital marketing", "SEO basics", "Social media fundamentals", "Email marketing overview"],
  },
  {
    id: "c21",
    title: "Social Media Marketing Fundamentals",
    level: "Beginner",
    category: "Digital Marketing",
    duration: "3 weeks",
    bullets: ["Platforms overview (Facebook, Instagram, LinkedIn)", "Creating posts & campaigns", "Scheduling tools", "Basic analytics"],
  },

  // Intermediate Digital Marketing
  {
    id: "c22",
    title: "SEO & Content Marketing",
    level: "Intermediate",
    category: "Digital Marketing",
    duration: "4 weeks",
    bullets: ["Keyword research", "On-page SEO", "Content strategy", "Blog & website optimization"],
  },
  {
    id: "c23",
    title: "PPC & Google Ads",
    level: "Intermediate",
    category: "Digital Marketing",
    duration: "4 weeks",
    bullets: ["Google Ads setup", "Creating ad campaigns", "Keyword targeting & bidding", "Performance tracking"],
  },

  // Advanced Digital Marketing
  {
    id: "c24",
    title: "Advanced Digital Marketing Strategy",
    level: "Advanced",
    category: "Digital Marketing",
    duration: "6 weeks",
    bullets: ["Integrated marketing strategy", "Advanced SEO & SEM", "Conversion rate optimization", "Marketing automation"],
  },
  {
    id: "c25",
    title: "Analytics & Data-Driven Marketing",
    level: "Advanced",
    category: "Digital Marketing",
    duration: "6 weeks",
    bullets: ["Google Analytics mastery", "Tracking KPIs", "Data analysis for marketing", "Optimizing campaigns based on data"],
  },


];




export  const sampleTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Vasu M",
    role: "Frontend Dev",
    text: "This course fast-tracked my React skills. Loved the hands-on projects!",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rahul S.",
    role: "Software Engineer",
    text: "Clear teaching and practical examples — helped me get interview-ready.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Priya M.",
    role: "Mobile Developer",
    text: "Loved the structured content and mentoring support.",
    rating: 4,
  },
  {
    id: "t4",
    name: "Vasanth M.",
    role: "Fullstack Freelancer",
    text: "Real-world projects made learning practical and effective.",
    rating: 5,
  },
];
