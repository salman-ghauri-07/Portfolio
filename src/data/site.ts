import type { ImageMetadata } from "astro";
import dp from "../assets/dp.jpg";
import hackathonPic from "../assets/hackathon-pic.jpg";
import glaidoThumb from "../assets/projects/thumbnail/glaido.png";
import researchZoneThumb from "../assets/projects/thumbnail/research-zone.png";
import lucyThumb from "../assets/projects/thumbnail/lucy.png";

export const GENERAL_INFO = {
  name: "Muhammad Salman",
  preloaderName: "SALMAN", // uppercase, 4–10 letters, shown letter by letter in the preloader
  email: "hello.salmanghauri@gmail.com",
  ctaUrl: "https://wa.me/923247432629?text=Hi%20Salman%2C%20I%20saw%20your%20portfolio", // "Let's Talk" target (Upwork, Calendly, mailto…)
  repoUrl: "", // optional: public GitHub repo of THIS site, links the "Built by" credit
  siteUrl: "https://salmanghauri.me",
};

export const SOCIAL_LINKS = [
  // shown in drawer, order preserved
  { name: "github", url: "https://github.com/salmanghauri7" },
  { name: "linkedin", url: "https://linkedin.com/in/msalmanghauri" },
];

export const MENU_LINKS = [
  // dot colours --dot-1..6 map by index
  { name: "Home", url: "/" },
  { name: "About Me", url: "/#about-me" },
  { name: "Experience", url: "/#my-experience" },
  { name: "Education", url: "/#education" },
  { name: "Projects", url: "/#selected-projects" },
  { name: "Hackathons", url: "/#hackathons" },
];

export const HERO = {
  titleLine1: "FULL STACK", // rendered in --primary (amber)
  titleLine2: "DEVELOPER", // rendered in foreground, indented 16px
  intro:
    "Hi! I'm {name}. A creative Full Stack Developer with 1+ years of experience in building high-performance, scalable, highly optimized applications.", // TODO — {name} is bold foreground
  ctaLabel: "Let's Talk",
  photo: dp, // portrait shown in the hero
  stats: [
    // exactly three
    { value: "1+", label: "Years of Experience" },
    { value: "4+", label: "Completed Projects" },
    { value: "10K+", label: "Hours Worked" },
  ],
};

export const ABOUT = {
  statement:
    "I start with the business problem, then build software that solves it and keeps working as the number of users grows.",
  label: "This is me.",
  greeting: "Hi, I'm {name}.",
  paragraphs: [
    "I build web apps with the MERN stack and desktop apps with Electron.js. Lately I've been adding AI to them, using LangChain and RAG so an app can answer questions from your own data. For deployment I use Docker, AWS EC2 and Supabase. Underneath all of it is a solid grip on CS fundamentals and algorithms, so the code I write runs fast and stays easy to change.",
    "I've shipped products used by real customers, so I care about the boring parts too: clear code, error handling, and apps that don't break at 2am.",
  ],
};

// object key = category label, rendered uppercase
export const MY_STACK: Record<string, { name: string; icon: string }[]> = {
  languages: [
    { name: "JavaScript", icon: "/logo/javascript.svg" },
    { name: "Typescript", icon: "/logo/typescript.svg" },
    { name: "C++", icon: "/logo/cpp.svg" },
  ],
  frontend: [
    { name: "Electron.JS", icon: "/logo/electron.svg" },
    { name: "React.JS", icon: "/logo/react.svg" },
    { name: "Next.JS", icon: "/logo/nextjs.png" },
    { name: "Astro", icon: "/logo/astro.svg" },
    { name: "Redux", icon: "/logo/redux.svg" },
    {name: "Tailwind", icon: "/logo/tailwind.svg"},
  ],
  backend: [
    { name: "Node.JS", icon: "/logo/nodejs.svg" },
    { name: "Express.JS", icon: "/logo/express.png" },
    { name: "Fast Api", icon: "/logo/fastapi.svg" },
    { name: "BullMQ", icon: "/logo/bullmq.svg" },
    { name: "Socket.IO", icon: "/logo/socketio.svg" },
    { name: "Zod", icon: "/logo/zod.svg" },
  ],
  database: [
    { name: "MongoDb", icon: "/logo/mongodb.svg" },
    { name: "PostgreSQL", icon: "/logo/postgresql.svg" },
    { name: "Supabase", icon: "/logo/supabase.svg" },
  ],
  tools: [{name: "Git", icon: "/logo/git.svg"},
    {name: "AWS", icon: "/logo/aws.svg"},
    {name: "Vercel", icon: "/logo/vercel.svg"},
    {name: "Docker", icon: "/logo/docker.svg"},
    {name: "VS Code", icon: "/logo/vscode.svg"},
  ],
  "ai/ml": [
    { name: "Machine Learning", icon: "/logo/ml.svg" },
    { name: "Data Cleaning", icon: "/logo/data-cleaning.svg" },
    { name: "Feature Engineering", icon: "/logo/feature-engineering.svg" },
    { name: "RAG", icon: "/logo/rag.svg" },
    { name: "NumPy", icon: "/logo/numpy.svg" },
    { name: "Pandas", icon: "/logo/pandas.svg" },
    { name: "Matplotlib", icon: "/logo/matplotlib.svg" },
    { name: "Scikit-Learn", icon: "/logo/scikitlearn.svg" },
  ],
};

export const MY_EXPERIENCE = [
  // newest first; rendered as the timeline
  {
    title: "Full Stack Developer",
    company: "Nasmak Labs",
    duration: "April 2026 - Present",
    summary:
      "Building an offline-first Electron.js desktop app for a clinic management system in Luxembourg, and the CNS (national health fund) integration that sends patient and billing data securely and within local healthcare rules.",
  },
   {
    title: "Full Stack Developer",
    company: "InvexTech",
    duration: "June 2025 - April 2026",
    summary:
      "Built and shipped web apps with Next.js, Node.js and Express, plus an Electron.js desktop app with real-time features over WebSockets. Handled deployment on Vercel, AWS and Docker, and wired in Supabase, Polar and Dub.",
  },
];

export const MY_EDUCATION = [

  {
    degree: "BS Computer Science",
    school: "University Of Okara",
    duration: "2022 - 2026",
    marks: "3.8",
    totalMarks: "4"
  },
  {
    degree: "FSc",
    school: "Aspire College Okara",
    duration: "2019 - 2021",
    marks: "976",
    totalMarks: "1100"
  },
  {
    degree: "Matric",
    school: "Govt. MC High School Okara",
    duration: "2017 - 2019",
    marks: "1050",
    totalMarks: "1100"
  },
];

export const HACKATHONS = [
  // newest first
  {
    event: "SOFTEC'26",
    track: "Web Development · 24 hours",
    project: "FairGig",
    summary:
      "A platform for gig workers to track earnings across apps and prove their income. I built the FastAPI service that flags unusual deductions and sudden pay drops, the screenshot verification and income certificate flow, and a Node.js service that groups worker complaints while keeping them anonymous.",
    techStack: ["Next.Js", "Node.js", "FastAPI"],
    photo: hackathonPic, // TODO: swap for the hackathon photo in src/assets/hackathons/
    sourceCode: "https://github.com/MZeeCoder/fairgig",
  },
];

export interface Project {
  title: string;
  slug: string;
  year: number;
  description: string; // HTML string, may contain <ul><li>, <br/>
  role: string; // HTML string
  techStack: string[]; // first 3 shown in list
  thumbnail: ImageMetadata; // import from src/assets
  images: ImageMetadata[];
  liveUrl?: string;
  sourceCode?: string;
}

// TODO: swap `dp` for real thumbnails/screens once they land in src/assets/projects/{thumbnail,images}
export const PROJECTS: Project[] = [
  // 4–8 entries, list order = display order
  {
    title: "Lucy",
    slug: "lucy",
    year: 2026,
    description:
      "Desktop clinic management system for medical practices in Luxembourg. Doctors and secretaries run their whole day in it: appointments, patient records, prescriptions, billing and forms.<br/><br/><ul><li>CNS (national health fund) integration that builds and sends invoices to the official spec, handles act codes and suffix pricing, and shows the fund's accept or reject response.</li><li>Offline-first: edits are queued locally and retried until the server accepts them, so a dropped connection never loses a patient note.</li><li>Patient history with drag-to-arrange boxes, rich-text notes that autosave, and templates you insert with a slash command.</li><li>Prescriptions with drug lookup, auto-filled PDF forms, and print layouts measured in millimetres so they line up on real paper.</li><li>Role-based access for doctors and secretaries, real-time chat, and French and English UI.</li></ul>",
    role:
      "Worked on the Electron.js / React app: the CNS billing integration, offline sync, the patient history screen and the print pipeline.",
    techStack: ["Electron.js", "React", "TypeScript", "Redux Toolkit", "React Query", "Ant Design", "Lexical", "pdf-lib"],
    thumbnail: lucyThumb,
    images: [],
  },
  {
    title: "Glaido",
    slug: "glaido",
    year: 2025,
    description:
      "AI-powered voice transcription desktop app for macOS. Speak, and it types for you, with agentic productivity workflows triggered by voice commands.<br/><br/><ul><li>Real-time audio streaming over WebSockets with SpeexDSP resampling, VAD and denoising, so transcription stays accurate in noisy rooms.</li><li>OpenAI Whisper (deployed on Baseten) for fast, accurate speech-to-text.</li><li>Persistent recording, custom dictionary and text snippets.</li><li>Companion web app for account and extended functionality.</li></ul>",
    role:
      "Built the Electron.js desktop app end to end, engineered the audio pipeline, and designed the Node.js / Express.js backend with Supabase for auth and data.",
    techStack: ["Electron.js", "Node.js", "Supabase", "Express.js", "WebSockets", "OpenAI Whisper", "SpeexDSP"],
    thumbnail: glaidoThumb,
    images: [],
    liveUrl: "https://glaido.com/",
  },
  {
    title: "ResearchZone",
    slug: "researchzone",
    year: 2026,
    description:
      "Collaborative research platform (final year project). Workspaces with real-time chat, shared paper bookmarking and in-app paper discovery via the arXiv API.<br/><br/><ul><li>RAG microservice in FastAPI handling embeddings, vector search and LLM calls, with summarisation and indexing offloaded to ARQ workers to cut retrieval latency.</li><li>AI-powered 'chat with paper' for contextual querying over research documents.</li><li>Backend on AWS EC2 via Docker with Parameter Store for config, private S3 assets served through CloudFront, AI service on Hugging Face Spaces.</li></ul>",
    role:
      "Full-stack: Next.js frontend, Node.js API with Socket.IO and MongoDB, FastAPI RAG service, and the AWS deployment.",
    techStack: ["Next.js", "Node.js", "FastAPI", "Socket.IO", "MongoDB", "ARQ", "AWS", "Docker", "Hugging Face Spaces"],
    thumbnail: researchZoneThumb,
    images: [],
    liveUrl: "https://research-zone-frontend.vercel.app",
  },
];
