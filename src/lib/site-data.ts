import ecommerceImg from "@/assets/project-ecommerce.jpg";
import dashboardImg from "@/assets/project-dashboard.jpg";
import smsImg from "@/assets/project-sms.jpg";
import uiuxImg from "@/assets/project-uiux.jpg";

export const contact = {
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "https://wa.me/919876543210",
  email: "hello@ilaidigitalsolutions.com",
  location: "Coimbatore, Tamil Nadu, India",
};

export type Course = {
  slug: string;
  name: string;
  short: string;
  overview: string;
  duration: string;
  level: string;
  mode: string;
  tech: string[];
  audience: string[];
  prerequisites: string[];
  outcomes: string[];
  syllabus: { title: string; topics: string[] }[];
  projects: string[];
  careers: string[];
  faqs: { q: string; a: string }[];
};

export const courses: Course[] = [
  {
    slug: "mern-stack-development",
    name: "MERN Stack Development",
    short:
      "Become a full stack JavaScript developer by building and deploying complete web applications end to end.",
    overview:
      "A structured, project-driven program covering the complete MERN stack. You start from web fundamentals and progress to building, testing and deploying production-style full stack applications with authentication, databases and REST APIs.",
    duration: "4-6 months",
    level: "Beginner to Advanced",
    mode: "Online & Classroom",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git & GitHub",
      "Deployment",
    ],
    audience: [
      "College students and final-year learners",
      "Fresh graduates targeting developer roles",
      "Working professionals switching to web development",
      "Complete beginners willing to practise consistently",
    ],
    prerequisites: [
      "Basic computer usage",
      "Logical thinking",
      "No prior programming experience required",
    ],
    outcomes: [
      "Build responsive interfaces with HTML, CSS and modern JavaScript",
      "Develop component-driven applications in React",
      "Design and consume REST APIs with Node.js and Express",
      "Model and query data in MongoDB",
      "Use Git and GitHub for version control and collaboration",
      "Deploy full stack applications to the cloud",
    ],
    syllabus: [
      { title: "Web Fundamentals", topics: ["HTML5 semantics", "CSS layout, Flexbox & Grid", "Responsive design", "Accessibility basics"] },
      { title: "JavaScript Essentials", topics: ["Core syntax & data structures", "DOM manipulation", "ES6+ features", "Async JavaScript & fetch"] },
      { title: "React", topics: ["Components & props", "State & hooks", "Routing", "Forms & validation", "State management patterns"] },
      { title: "Backend with Node & Express", topics: ["Node fundamentals", "Express routing & middleware", "Authentication & JWT", "Error handling"] },
      { title: "Databases & APIs", topics: ["MongoDB & Mongoose", "Schema design", "CRUD & aggregation", "REST API design"] },
      { title: "Tooling & Deployment", topics: ["Git & GitHub workflow", "Environment configuration", "Testing basics", "Cloud deployment"] },
    ],
    projects: ["E-Commerce Application", "Full Stack Web Application", "Student Management System"],
    careers: ["Full Stack Developer", "Front-End Developer (React)", "Backend Developer (Node.js)", "Web Application Developer"],
    faqs: [
      { q: "Do I need prior coding knowledge?", a: "No. The program begins with web fundamentals and gradually moves to advanced full stack topics." },
      { q: "How much practice is expected?", a: "We recommend 1-2 hours of daily practice along with assignments and project work." },
    ],
  },
  {
    slug: "python-full-stack-development",
    name: "Python Full Stack Development",
    short:
      "Learn Python-based web development with Django or Flask, databases and modern front-end fundamentals.",
    overview:
      "A career-focused Python full stack program combining front-end fundamentals with backend development in Django or Flask, relational databases and API design, reinforced with practical applications.",
    duration: "4-6 months",
    level: "Beginner to Advanced",
    mode: "Online & Classroom",
    tech: ["Python", "HTML", "CSS", "JavaScript", "Django", "Flask", "REST APIs", "SQL", "Git & GitHub"],
    audience: [
      "Students who prefer Python as a first language",
      "Graduates aiming for backend or full stack roles",
      "Professionals moving into software development",
    ],
    prerequisites: ["Basic computer usage", "No prior programming experience required"],
    outcomes: [
      "Write clean, structured Python code",
      "Build web interfaces with HTML, CSS and JavaScript",
      "Develop applications with Django and Flask",
      "Design relational database schemas and write SQL queries",
      "Build and secure REST APIs",
      "Manage code with Git and GitHub",
    ],
    syllabus: [
      { title: "Python Programming", topics: ["Syntax & data types", "Functions & modules", "OOP concepts", "File handling & error handling"] },
      { title: "Front-End Basics", topics: ["HTML & CSS", "Responsive layouts", "JavaScript essentials", "DOM & fetch"] },
      { title: "Django", topics: ["MVT architecture", "Models & ORM", "Views & templates", "Authentication", "Admin panel"] },
      { title: "Flask & APIs", topics: ["Flask fundamentals", "Blueprints", "REST API development", "API authentication"] },
      { title: "Databases", topics: ["SQL fundamentals", "Joins & aggregation", "Schema design", "Query optimisation basics"] },
      { title: "Deployment & Tooling", topics: ["Virtual environments", "Git & GitHub", "Environment variables", "Deployment workflow"] },
    ],
    projects: ["Student Management System", "Restaurant Website", "Business Dashboard"],
    careers: ["Python Developer", "Django Developer", "Backend Developer", "Full Stack Developer"],
    faqs: [
      { q: "Django or Flask - which will I learn?", a: "The core track covers Django in depth, with a Flask module for lightweight API development." },
      { q: "Is this suitable for non-IT graduates?", a: "Yes. The course starts from fundamentals and is structured for beginners." },
    ],
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    short:
      "Turn raw data into business insight using Excel, SQL, Python and Power BI with real datasets.",
    overview:
      "A practical analytics program that builds the complete workflow: collecting and cleaning data, analysing it with SQL and Python, and communicating findings through clear dashboards and reports.",
    duration: "3-5 months",
    level: "Beginner to Intermediate",
    mode: "Online & Classroom",
    tech: ["Excel", "SQL", "Python", "Pandas", "Data Visualization", "Power BI"],
    audience: [
      "Students exploring data careers",
      "Graduates from any stream",
      "Working professionals in reporting or operations roles",
    ],
    prerequisites: ["Basic computer usage", "Comfort with numbers; no coding background required"],
    outcomes: [
      "Clean and analyse datasets in Excel",
      "Write SQL queries for real business questions",
      "Use Python and Pandas for data analysis",
      "Create clear visualisations and dashboards in Power BI",
      "Present insights in a structured, business-ready format",
    ],
    syllabus: [
      { title: "Excel for Analytics", topics: ["Formulas & functions", "Lookups", "Pivot tables", "Charts & dashboards"] },
      { title: "SQL", topics: ["SELECT & filtering", "Joins", "Grouping & aggregation", "Subqueries & window functions"] },
      { title: "Python & Pandas", topics: ["Python basics", "DataFrames", "Data cleaning", "Exploratory data analysis"] },
      { title: "Visualization", topics: ["Charting principles", "Matplotlib basics", "Storytelling with data"] },
      { title: "Power BI", topics: ["Data modelling", "DAX basics", "Interactive dashboards", "Publishing reports"] },
      { title: "Capstone", topics: ["End-to-end analytics project", "Insight documentation", "Presentation practice"] },
    ],
    projects: ["Data Analytics Dashboard", "Business Dashboard"],
    careers: ["Data Analyst", "Business Analyst", "MIS / Reporting Analyst", "Power BI Developer"],
    faqs: [
      { q: "Do I need a maths background?", a: "No. Basic comfort with numbers is enough; concepts are taught from the ground up." },
      { q: "Will I work with real datasets?", a: "Yes. Every module uses realistic datasets and business scenarios." },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    short:
      "Design usable, attractive digital products and build a portfolio that shows your process.",
    overview:
      "A design-thinking driven program covering user research, information architecture, wireframing, prototyping and visual design in Figma, with a strong emphasis on portfolio-ready case studies.",
    duration: "3-4 months",
    level: "Beginner to Intermediate",
    mode: "Online & Classroom",
    tech: ["UI Design", "UX Research", "Wireframing", "Prototyping", "Figma", "Design Systems"],
    audience: [
      "Students interested in design careers",
      "Developers who want stronger design skills",
      "Career switchers from creative or non-technical fields",
    ],
    prerequisites: ["Basic computer usage", "Interest in visual and user-centred thinking"],
    outcomes: [
      "Conduct user research and define problems clearly",
      "Create wireframes and user flows",
      "Build high-fidelity interfaces in Figma",
      "Prototype and test interactions",
      "Create and maintain a design system",
      "Publish portfolio-ready case studies",
    ],
    syllabus: [
      { title: "UX Foundations", topics: ["Design thinking", "User research methods", "Personas & journeys", "Problem framing"] },
      { title: "Information Architecture", topics: ["User flows", "Sitemaps", "Wireframing", "Usability heuristics"] },
      { title: "UI Design", topics: ["Layout & grids", "Typography", "Colour & contrast", "Iconography"] },
      { title: "Figma in Depth", topics: ["Components & variants", "Auto layout", "Prototyping", "Handoff to developers"] },
      { title: "Design Systems", topics: ["Tokens & styles", "Component libraries", "Consistency & documentation"] },
      { title: "Portfolio", topics: ["Case study structure", "Presenting decisions", "Portfolio review"] },
    ],
    projects: ["UI/UX Mobile App Design", "Restaurant Website", "E-Commerce Application"],
    careers: ["UI Designer", "UX Designer", "Product Designer", "Design Associate"],
    faqs: [
      { q: "Do I need drawing skills?", a: "No. Digital product design relies on structure, clarity and tooling rather than illustration skills." },
      { q: "Which tool will I use?", a: "Figma is used throughout the program, including prototyping and design systems." },
    ],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);

export const projects = [
  {
    name: "E-Commerce Application",
    image: ecommerceImg,
    tech: ["React", "Node.js", "MongoDB"],
    description: "Product catalogue, cart, authentication and order flow built as a complete shopping experience.",
  },
  {
    name: "Student Management System",
    image: smsImg,
    tech: ["Django", "SQL", "Bootstrap"],
    description: "Admin-driven system to manage students, courses, attendance and records with role-based access.",
  },
  {
    name: "Business Dashboard",
    image: dashboardImg,
    tech: ["Power BI", "SQL", "Excel"],
    description: "Interactive reporting dashboard that tracks key business metrics and highlights trends.",
  },
  {
    name: "Restaurant Website",
    image: uiuxImg,
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Responsive marketing site with menu, gallery and reservation enquiry flow.",
  },
  {
    name: "Full Stack Web Application",
    image: ecommerceImg,
    tech: ["React", "Express.js", "REST APIs"],
    description: "End-to-end application with secure authentication, protected routes and cloud deployment.",
  },
  {
    name: "Data Analytics Dashboard",
    image: dashboardImg,
    tech: ["Python", "Pandas", "Power BI"],
    description: "Data cleaning to insight pipeline, ending in a stakeholder-ready analytics dashboard.",
  },
  {
    name: "UI/UX Mobile App Design",
    image: uiuxImg,
    tech: ["Figma", "Prototyping", "Design Systems"],
    description: "Research-led mobile app design with wireframes, high-fidelity screens and a clickable prototype.",
  },
];

export const testimonials = [
  { name: "Aravind K.", course: "MERN Stack Development", rating: 5, feedback: "The project-first approach made a real difference. I finally understood how the front-end, API and database connect in one application." },
  { name: "Divya R.", course: "Data Analytics", rating: 5, feedback: "Sessions were structured and practical. Working with real datasets gave me the confidence to talk about my analysis in interviews." },
  { name: "Mohan S.", course: "Python Full Stack Development", rating: 4, feedback: "I came from a non-IT background. The trainers were patient and the step-by-step syllabus kept me from feeling lost." },
  { name: "Sneha P.", course: "UI/UX Design", rating: 5, feedback: "The portfolio guidance was the most valuable part. I now have case studies that explain my design decisions clearly." },
  { name: "Karthik V.", course: "MERN Stack Development", rating: 5, feedback: "Mock interviews and project explanation practice helped me communicate my work much better than before." },
  { name: "Nivetha M.", course: "Data Analytics", rating: 4, feedback: "Doubt-clearing support was quick and the dashboards I built became a strong part of my resume." },
];

export const faqs = [
  { q: "Who can join these courses?", a: "College students, fresh graduates, working professionals, career switchers and beginners are all welcome. Programs are structured to start from fundamentals." },
  { q: "Do I need programming experience?", a: "No. Our courses begin with the basics and build up gradually. Consistent practice matters more than prior experience." },
  { q: "Are the courses suitable for beginners?", a: "Yes. Each program has a beginner-friendly foundation phase before moving into advanced topics." },
  { q: "Are practical projects included?", a: "Yes. Every course is project-based, and you build applications you can showcase in your portfolio." },
  { q: "Will I receive a certificate?", a: "A certificate of course completion is provided after successfully meeting the applicable program requirements, including assessments and project submissions." },
  { q: "Is career guidance provided?", a: "Yes. We support resume building, GitHub and portfolio guidance, mock interviews and interview preparation." },
  { q: "What is the course duration?", a: "Duration varies by program, typically between 3 and 6 months depending on the track and batch schedule." },
  { q: "Do you provide online training?", a: "Yes. Courses are available in both online and classroom modes, with recorded support material where applicable." },
  { q: "How can I enquire about a course?", a: "Submit the enquiry form on this website, call us, or message us on WhatsApp. Our team will get back to you with batch details." },
];

export const whyChooseUs = [
  { title: "Practical, Project-Based Learning", description: "Every concept is applied immediately through guided, hands-on build tasks." },
  { title: "Industry-Relevant Curriculum", description: "Syllabus mapped to the tools and workflows used by working development teams." },
  { title: "Experienced Trainers", description: "Sessions led by trainers with hands-on delivery experience in real projects." },
  { title: "Beginner-Friendly Training", description: "Clear pacing, structured modules and doubt-clearing support from day one." },
  { title: "Real-World Projects", description: "Build complete applications rather than isolated, disconnected exercises." },
  { title: "Portfolio Development", description: "Publish your work on GitHub with documentation that recruiters can read." },
  { title: "Interview Preparation", description: "Technical rounds, HR rounds and project explanation practice." },
  { title: "Career Guidance", description: "One-to-one direction on roles, skills to prioritise and next steps." },
];

export const journey = [
  { step: "01", title: "Learn", description: "Structured, concept-first sessions that make fundamentals stick." },
  { step: "02", title: "Practice", description: "Guided exercises and assignments after every module." },
  { step: "03", title: "Build", description: "Apply your skills to complete, real-world project builds." },
  { step: "04", title: "Showcase", description: "Publish projects with clean documentation and a strong portfolio." },
  { step: "05", title: "Get Career Ready", description: "Resume, interview and communication preparation for the job hunt." },
];

export const careerPrep = [
  "Resume Building",
  "GitHub & Portfolio Guidance",
  "Mock Interviews",
  "Technical Interview Preparation",
  "Communication Skills",
  "Project Explanation Training",
  "Career Guidance",
];
