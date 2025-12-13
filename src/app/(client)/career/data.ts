export type Job = {
    id: string;
    title: string;
    team: string;
    location: string;
    summary: string;
    responsibilities: string[];
    about: string;
};

export const JOBS: Job[] = [
    {
        id: "frontend",
        title: "Software Engineer — Frontend",
        team: "Software",
        location: "Hybrid - Nagercoil",
        summary: "Build highly interactive UIs using React, Tailwind and modern patterns.",
        responsibilities: [
            "Ship user-facing features with excellent UX",
            "Collaborate with designers and backend engineers",
            "Write tests and maintainable code",
        ],
        about: "You’ll join a small fast-moving product team building delightful apps for users worldwide.",
    },
    {
        id: "uiux",
        title: "UI/UX Designer",
        team: "Design",
        location: "Remote",
        summary: "Design elegant, accessible interfaces and product flows.",
        responsibilities: [
            "Create high-fidelity screens and flows",
            "Run usability tests",
            "Partner with engineering to ship polished UIs",
        ],
        about: "You’ll translate product goals into delightful experiences.",
    },
    {
        id: "cloud",
        title: "Cloud Engineer",
        team: "Cloud",
        location: "Remote",
        summary: "Design and operate our cloud infrastructure and deployments.",
        responsibilities: [
            "Improve infrastructure reliability",
            "Automate pipelines and monitoring",
            "Cost and security optimizations",
        ],
        about: "You’ll help scale our platform with robust infra patterns.",
    },

    // Added jobs
    {
        id: "digitalMarketing",
        title: "Digital Marketing Specialist",
        team: "Marketing",
        location: "Remote",
        summary: "Drive brand awareness, content strategy, and online campaign performance.",
        responsibilities: [
            "Plan and run digital marketing campaigns",
            "Analyze performance metrics",
            "Improve engagement across all digital channels",
        ],
        about: "You’ll help grow our digital presence with data-driven marketing.",
    },
    {
        id: "seo",
        title: "SEO Specialist",
        team: "Marketing",
        location: "Remote",
        summary: "Optimize website visibility and organic search performance.",
        responsibilities: [
            "Perform keyword research",
            "Improve on-page and technical SEO",
            "Monitor rankings and analytics",
        ],
        about: "You’ll own our search strategy and help users discover our products.",
    },
    {
        id: "backend",
        title: "Backend Developer",
        team: "Software",
        location: "Remote",
        summary: "Build scalable backend systems and APIs.",
        responsibilities: [
            "Design and maintain server-side logic",
            "Integrate databases and external services",
            "Ensure performance, security, and reliability",
        ],
        about: "You’ll architect core backend services powering our applications.",
    },
    {
        id: "mobile",
        title: "Mobile App Developer",
        team: "Software",
        location: "Remote",
        summary: "Develop and maintain mobile applications for iOS and Android.",
        responsibilities: [
            "Build intuitive mobile interfaces",
            "Optimize app performance",
            "Collaborate with design and backend teams",
        ],
        about: "You’ll craft smooth mobile experiences used by thousands of users.",
    },
];
