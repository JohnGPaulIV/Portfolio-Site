// import VMemSim from "@/public/VMemSim.jpg"
// import HungryDukes from "@/public/HungryDukes.jpg"
// import CShell from "@/public/CShell.jpg"
// import CDNS from "@/public/CDNS.jpg"
// import CompNumCalc from "@/public/CompNumCalc.jpg"
// import Daubert from "@/public/Daubert.jpg";
import VMemSim from "@/public/Y86.jpg"
import HungryDukes from "@/public/HungryDukes.jpg"
import CShell from "@/public/CShell.jpg"
import CDNS from "@/public/CDNS.jpg"
import CompNumCalc from "@/public/headshot.jpeg"
import Daubert from "@/public/Daubert.jpg";

// import CompNumCalc from "@/public/CompNumCalc.jpg";

export const PROFILE = {
    name: "John Gilbert Paul IV",
    shortName: "John Paul",

    roles: [
        "Computer Science Student",
        "Co-Founder & Full-Stack Engineer",
        "Backend-Focused Software Engineer",
        "Systems & Network Programmer",
    ],

    bio:
        "Computer Science student and co-founder/full-stack engineer building full-stack applications, backend systems, database-driven workflows, and low-level systems projects.",

    github: "https://github.com/JohnGPaulIV",
    linkedin: "https://www.linkedin.com/in/johngpaul/",
    email: "john@jgpiv.com",

    // Keep this only if you actually use it professionally.
    x: "https://x.com/jgp.dev",

    resume: "/resume.pdf",
    location: "Harrisonburg, VA",
};

export const NAV_SECTIONS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
] as const;

export const SKILL_GROUPS = [
    {
        category: "Languages",
        items: [
            "TypeScript",
            "JavaScript",
            "Python",
            "C",
            "Java",
            "SQL",
            "HTML/CSS",
        ],
    },
    {
        category: "Frameworks & Libraries",
        items: [
            "React",
            "Next.js",
            "Express.js",
            "Node.js",
            "Tailwind CSS",
            "Zod",
        ],
    },
    {
        category: "Data & Authentication",
        items: [
            "PostgreSQL",
            "Supabase Auth",
            "SQLite",
        ],
    },
    {
        category: "Infrastructure & Tools",
        items: [
            "Docker",
            "Portainer",
            "Cloudflare",
            "Git",
            "GitHub",
            "Linux",
        ],
    },
    {
        category: "Systems",
        items: [
            "Linux/POSIX",
            "Processes",
            "Signals",
            "Networking & Sockets",
            "Virtual Memory",
            "x86/x86-64 Assembly",
        ],
    },
];

export const PROJECTS = [
    {
        title: "Daubert Legal-Tech Platform",
        image: Daubert,

        blurb:
            "A pilot-stage legal-tech platform for managing expert-witness engagements, compensation workflows, authorization, and financial records.",

        detail:
            "Co-founded and helped architect a full-stack legal-tech platform using TypeScript, Next.js, React, Express, PostgreSQL, Supabase, and Docker. My work includes engagement-scoped authorization, expert and attorney workflows, compensation-ledger design, frozen engagement rate schedules, integer-cent financial calculations, CSV ingestion and review, authentication, database modeling, and backend authorization testing.",

        tags: [
            "TypeScript",
            "Next.js",
            "React",
            "Express",
            "PostgreSQL",
            "Supabase",
            "Docker",
            "Full-Stack",
            "Authorization",
        ],

        // Point this to your PUBLIC showcase repository,
        // not the private production repository.
        github: "https://github.com/JohnGPaulIV/daubert-platform-showcase",

        // Add this only if you want recruiters visiting the live platform.
        demo: "",
    },

    {
        title: "Virtual Memory & CPU Simulation",
        image: VMemSim,

        blurb:
            "A Mini-ELF loader and CPU/virtual-memory simulator that maps program segments into memory, decodes Y86 instructions, and simulates program execution.",

        detail:
            "Implemented a Mini-ELF loader and CPU/virtual-memory simulator in C. The project parses binary executable headers, loads program segments into simulated memory, decodes Y86 instructions, and executes them through a simulated CPU. It provided hands-on experience with binary file formats, virtual memory, instruction decoding, low-level debugging, and computer architecture.",

        tags: [
            "C",
            "Virtual Memory",
            "Computer Architecture",
            "Y86",
            "Systems Programming",
        ],

        github: "https://github.com/JohnGPaulIV/virtual-memory-simulator/commit/e9703303792c34aa6e09c397dbf85f14b2a5f80a",
        demo: "",
    },

    {
        title: "DNS Client & Server",
        image: CDNS,

        blurb:
            "A DNS client and server written in C that constructs, transmits, parses, and responds to DNS wire-format messages over UDP.",

        detail:
            "Built a DNS client/server implementation in C using UDP sockets and DNS wire-format messages. Implemented binary packet handling for headers, questions, resource records, network-byte-order fields, domain-name encoding and decoding, and compressed-name pointers. The server loads DNS resource records into an in-memory lookup structure and generates responses for multiple record types.",

        tags: [
            "C",
            "Networking",
            "DNS",
            "UDP",
            "Sockets",
            "Binary Protocols",
        ],

        github: "https://github.com/JohnGPaulIV/dukeDNS",
        demo: null,
    },

    {
        title: "JMU Dining Web Application",
        image: HungryDukes,

        blurb:
            "A database-backed campus dining application for exploring dining locations, menu information, hours, and dietary options.",

        detail:
            "Collaborated on a database-backed dining application modeled around JMU dining services. I worked with Python, PostgreSQL, and server-rendered views to connect relational data with application functionality, including dining locations, menu information, operating hours, and dietary-related data. The project strengthened my skills in relational modeling, SQL, data integrity, and backend-driven web development.",

        tags: [
            "Python",
            "PostgreSQL",
            "SQL",
            "Jinja",
            "Database Design",
            "Relational Modeling",
        ],

        github: "https://github.com/JohnGPaulIV/jmu-dining-navigator",
        demo: "",
    },

    {
        title: "C Shell",
        image: CShell,

        blurb:
            "A Unix-style command-line shell written in C using process creation, command execution, and standard I/O primitives.",

        detail:
            "Built a custom command-line shell in C implementing core Unix shell behavior, including command parsing, built-in commands, process creation, external program execution, return-code handling, and standard I/O behavior. The project strengthened my understanding of processes, operating-system interfaces, and low-level program execution.",

        tags: [
            "C",
            "Unix",
            "Linux/POSIX",
            "Processes",
            "Systems Programming",
        ],

        github: "https://github.com/JohnGPaulIV/dukesh",
        demo: "",
    },

    /*
     * I would keep this only if you want a sixth project.
     *
     * Daubert + Mini-ELF + DNS + Dining + Shell
     * already tell a stronger and more focused engineering story.
     *
    {
        title: "Complex Number Calculator",
        image: CompNumCalc,

        blurb:
            "A team-developed complex-number calculator built through an iterative Scrum workflow with testing, validation, and mathematical operations.",

        detail:
            "Developed a complex-number calculator as part of a Scrum-based software engineering team, translating requirements into user stories and delivering functionality across multiple sprints. Contributed to complex-number arithmetic, magnitude and phase calculations, input validation, testing, documentation, and collaborative sprint activities.",

        tags: [
            "Java",
            "Scrum",
            "Agile",
            "Unit Testing",
            "Team Development",
        ],

        github: "",
        demo: "",
    },
    */
];

export const TIMELINE = [
    {
        period: "2026 - Present",
        title: "Co-Founder & Full-Stack Engineer",
        org: "Daubert",
        kind: "Experience",

        points: [
            "Architecting and developing a pilot-stage legal-tech platform using TypeScript, Next.js, React, Express, PostgreSQL, Supabase, and Docker.",
            "Designed engagement-scoped authorization for lead experts, collaborators, and attorneys, separating organization membership from matter-level access.",
            "Built compensation and financial workflows using engagement-specific rate snapshots, integer-cent calculations, and server-authoritative financial logic.",
            "Developed CSV ingestion and review workflows with source detection, mapping, validation, corrective review, and transactional publication.",
        ],
    },

    {
        period: "Expected Dec. 2026",
        title: "B.S. in Computer Science",
        org: "James Madison University",
        kind: "Education",

        points: [
            "Relevant coursework: Software Engineering, Data Structures & Algorithms, Computer Systems, Database Systems, Web Development, Data Analytics.",
            "Honors: President’s List and Dean’s List.",
        ],
    },

    {
        period: "May 2023",
        title: "A.A. in Social Sciences",
        org: "J. Sargeant Reynolds Community College",
        kind: "Education",

        points: [],
    },
];
// export const PROFILE = {
//     name: "John Gilbert Paul IV",
//     shortName: "John Paul",
//     roles: [
//         "Computer Science Student",
//         "Full-Stack Developer",
//         "Problem Solver",
//         "Lifelong Learner",
//     ],
//     bio: "Building thoughtful software at James Madison University - one commit at a time.",
//     github: "https://github.com/JohnGPaulIV",
//     linkedin: "https://www.linkedin.com/in/johngpaul/",
//     email: "john@jgpiv.com",
//     x: "https://x.com/jgp.dev",
//     resume: "/resume.pdf",
//     location: "Harrisonburg, VA",
// };

// export const NAV_SECTIONS = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "projects", label: "Projects" },
//     { id: "experience", label: "Experience" },
//     { id: "resume", label: "Resume" },
//     { id: "contact", label: "Contact" },
// ] as const;

// export const SKILL_GROUPS = [
//     {
//         category: "Languages",
//         items: ["Python", "Java", "JavaScript", "TypeScript", "C", "SQL"],
//     },
//     {
//         category: "Frameworks & Libraries",
//         items: ["React", "Node.js", "Express", "Next.js", "Tailwind CSS", "JUnit"],
//     },
//     {
//         category: "Tools",
//         items: ["Git", "GitHub", "Docker", "Portainer", "Linux", "VS Code", "Figma"],
//     },
//     {
//         category: "Databases",
//         items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"],
//     },
// ];

// export const PROJECTS = [
//     {
//         title: "Virtual Memory Simulation",
//         image: VMemSim,
//         blurb: "A virtual memory and CPU execution simulator that loads Mini-ELF programs, decodes y86 instructions, and simulates program execution.",
//         detail: "Built a multi-stage systems simulator that parses Mini-ELF headers, loads program segments into virtual memory, translates binary instructions into y86 assembly, and executes them through a simulated Fetch–Decode–Execute cycle. This project gave me a deeper understanding of computer architecture, memory management, binary file formats, assembly language, and low-level program execution.",
//         tags: ["C", "Virtual Memory", "Computer Architecture", "Y86", "Systems Programming"],
//         github: "",
//         demo: "",
//     },
//     {
//         title: "Hungry Dukes Database Website",
//         image: HungryDukes,
//         blurb: "A full-stack campus dining application backed by a relational database for exploring dining locations, menus, hours, and dietary options.",
//         detail: "Designed and built a JMU Dining–style web application around a normalized relational database containing dining locations, menu items, ingredients, operating hours, and dietary restrictions. Using SQL, Python, and Flask AppBuilder, our team created an interface for checking which locations are open, browsing available food options, and filtering menu items by dietary needs and availability. The project strengthened my skills in database design, relational modeling, data integrity, and backend-driven web development.",
//         tags: ["Python", "Flask AppBuilder", "SQL", "Relational Databases", "Database Design"],
//         github: "",
//         demo: "",
//     },
//     {
//         title: "C-Shell",
//         image: CShell,
//         blurb: "A Unix-style command-line shell built in C that parses commands, launches processes, and recreates core shell functionality.",
//         detail: "Built a custom command-line shell in C that mirrors core Unix shell behavior, including command parsing, built-in commands, external process execution, and return-code handling. The project gave me hands-on experience with process creation, command execution, standard I/O, and the low-level mechanisms operating systems use to coordinate programs.",
//         tags: ["C", "Unix", "Process Management", "Systems Programming"],
//         github: "/",
//         demo: "/",
//     },
//     {
//         title: "DNS Resolver & Server",
//         image: CDNS,
//         blurb: "A DNS client and server built in C that constructs, sends, parses, and responds to DNS protocol messages over network sockets.",
//         detail: "Implemented a DNS client and server in C using socket-based networking and the DNS protocol defined by RFC 1034 and RFC 1035. The project involved constructing and parsing binary DNS packets, handling compressed domain names and multiple DNS record types, and generating server responses from stored DNS records. It strengthened my understanding of network protocols, binary data representation, sockets, and client-server communication.",
//         tags: ["C", "Networking", "DNS", "Sockets", "Network Protocols"],
//         github: "/",
//         demo: "/",
//     },
//     {
//         title: "Complex Number Calculator",
//         image: CompNumCalc,
//         blurb: "A team-built complex number calculator developed through an iterative Scrum workflow with testing, validation, and mathematical operations.",
//         detail: "Developed a complex number calculator as part of a Scrum-based software engineering team, translating Product Owner requirements into user stories and delivering functionality across multiple sprints. I helped implement complex-number arithmetic, magnitude and phase calculations, input validation, unit tests, and documentation while participating in backlog grooming, stand-ups, sprint planning, and sprint reviews.",
//         tags: ["Scrum", "Agile", "Unit Testing", "Software Engineering", "Team Development"],
//         github: "/",
//         demo: "/",
//     },
// ];

// export const TIMELINE = [
//     {
//         period: "2023 - 2026 (expected)",
//         title: "B.S. Computer Science",
//         org: "James Madison University",
//         kind: "Education",
//         points: [
//             "Relavant coursework: Data Structures & Algorithms, Computer Systems, Software Engineering, Databases, Discrete Math, Machine Learning, Operating Systems.",
//             "GPA: 3.210",
//             "Deans List: Spring 2025, Fall 2025",
//             "Presidents List: Fall 2024",
//         ],
//     },
//     {
//         period: "05/2026 - Present",
//         title: "Startup",
//         org: "Daubert",
//         kind: "Experience",
//         points: [
//             "I (CTO) along with Daubert's Co-Founders, Chris Akenou (CFO) and Agnes Akenou (CEO) began working on a tech startup, Daubert.",
//             "Relavant Experience: Full-Stack Development, Database Schema Design, Backend Architecture",
//         ],
//     },
//     {
//         period: "06/2026 - Present",
//         title: "Full-Time Job",
//         org: "Buc-ees",
//         kind: "Experience",
//         points: [
//             "Relavant Experience: Maintaining focus in a fast-paced environment, Communication within a team-based environment, Respecting the chain-of-command",
//         ],
//     },
// ];