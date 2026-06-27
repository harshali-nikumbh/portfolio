import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiExpress,
} from "react-icons/si";

function App() {
  const [showHarwi, setShowHarwi] = useState(false);
  const [showPlacePrep, setShowPlacePrep] = useState(false);
  const [showEWaste, setShowEWaste] = useState(false);
  const [showFlappy, setShowFlappy] = useState(false);
  const [showInterviewIQ, setShowInterviewIQ] = useState(false);
  const [showAmazon, setShowAmazon] = useState(false);
  
  return (
    <div className="bg-slate-950 text-white">

      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
  <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
</div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/70 border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
          <h1 className="text-xl font-bold text-cyan-400">
            Harshali
          </h1>

          <div className="flex gap-8">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <p className="text-cyan-400 text-xl mb-3">
            Hello, I'm
          </p>

          <img
  src="/profile.jpg"
  alt="Harshali"
  className="w-44 h-44 rounded-full mx-auto mb-8 border-4 border-cyan-400 shadow-lg shadow-cyan-500/30"
/>

          <h1 className="text-8xl font-bold">
            Harshali Nikumbh
          </h1>
          <TypeAnimation
  sequence={[
    'Software Developer',
    2000,
    'Python Developer',
    2000,
    'Frontend Developer',
    2000,
    'Problem Solver',
    2000,
    'AI Enthusiast',
    2000,
    'C/C++ Programmer',
    2000,
    'Full Stack Learner',
    2000,
    'AI Developer',
2000,
'Generative AI Engineer',
2000,
'Full Stack Developer',
2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-cyan-400 text-2xl font-semibold"
/>

          <h2 className="text-2xl mt-4 text-gray-300">
  Aspiring Software Engineer
</h2>
<p className="text-cyan-400 mt-2">
  B.Tech Electronics & Telecommunication • PCCOE
</p>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-gray-400">
            Aspiring Software Engineer with expertise in Java,
Python, React, AI, and Embedded Systems.
Passionate about building scalable applications
and solving real-world problems through technology.
          </p>

          <div className="mt-10 flex justify-center gap-4">
  <a
  href="#projects"
  className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
>
  View Projects
</a>

  <a
    href="/resume.pdf"
    download
    className="bg-slate-800 px-8 py-4 rounded-xl border border-cyan-400 hover:bg-slate-700"
  >
    Download Resume
  </a>
</div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <h2 className="text-5xl font-bold mb-10 text-cyan-400">
          About Me
        </h2>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
          <p className="text-lg text-gray-300 leading-8">
           I am a B.Tech Electronics & Telecommunication student at PCCOE with strong foundations in Java, Python, Web Development, Databases, AI and Embedded Systems. I enjoy building full-stack applications, AI-powered solutions and real-world software products. My interests include Generative AI, React Development, Backend Engineering and Problem Solving.
          </p>
        </div>
      </section>

<section className="max-w-5xl mx-auto px-6 py-10">
  <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
    <h3 className="text-3xl font-bold text-cyan-400 mb-4">
      Highlights
    </h3>

    <ul className="space-y-3 text-gray-300 list-disc pl-5">
      <li>Completed a Java Programming Virtual Internship with hands-on project experience.</li>

      <li>Built and deployed InterviewIQ, an AI-powered mock interview platform using React, Tailwind CSS, Vite, and Gemini AI.</li>

      <li>Developed an AI-driven Mental Health Companion leveraging CrewAI, Gemini AI, FastAPI, Redis, and Next.js.</li>

      <li>Designed and implemented multiple web development, AI, and embedded systems projects.</li>

      <li>Strong understanding of Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Full-Stack Development.</li>

      <li>Demonstrated problem-solving, analytical thinking, teamwork, communication, adaptability, and leadership skills through academic and technical projects.</li>
    </ul>
  </div>
</section>


      {/* Skills */}
<section
  id="skills"
  className="max-w-6xl mx-auto px-6 py-24"
>
  <h2 className="text-5xl font-bold mb-12 text-cyan-400">
    Skills
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 hover:border-cyan-400 hover:scale-105 transition">
      <h3 className="text-2xl font-semibold mb-4">
        Programming
      </h3>

      <div className="flex flex-wrap gap-3">

  <div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
    <FaPython />
    Python
  </div>

  <div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
    <FaJava />
    Java
  </div>

  <div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
    💻 C
  </div>

  <div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
    ⚙️ C++
  </div>
  <div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
  SQL
</div>

</div>
    </div>

    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 hover:border-cyan-400 hover:scale-105 transition">
      <h3 className="text-2xl font-semibold mb-4">
        Web Development
      </h3>

      <div className="flex flex-wrap gap-3">

  <div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
    <FaHtml5 />
    HTML
  </div>

  <div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
    <FaCss3Alt />
    CSS
  </div>

  <div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
    <FaJs />
    JavaScript
  </div>

  <div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
    <FaReact />
    React
  </div>

  <div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
  <FaNodeJs />
  Node.js
</div>

<div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
  <SiExpress />
  Express.js
</div>

<div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
  <SiNextdotjs />
  Next.js
</div>

<div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
  <SiTailwindcss />
  Tailwind CSS
</div>

</div>
    </div>

    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 hover:border-cyan-400 hover:scale-105 transition">
      <h3 className="text-2xl font-semibold mb-4">
        Databases, AI & Tools
      </h3>

      <div className="flex flex-wrap gap-3">

  <span className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
    Git & GitHub
  </span>

  <span className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
    MySQL
  </span>

  <span className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
    DBMS
  </span>

  <span className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
    DSA
  </span>

  <span className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
    ESP32
  </span>

  <span className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
    RTOS
  </span>

<div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
  <SiMongodb />
  MongoDB
</div>

<div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
  <SiRedis />
  Redis
</div>

<div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center gap-2">
  <SiMysql />
  MySQL
</div>

<span className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
  Gemini AI
</span>

<span className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
  Generative AI
</span>

<span className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
  CrewAI
</span>

<span className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
  Prompt Engineering
</span>

<span className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
  REST APIs
</span>

<span className="px-3 py-2 bg-cyan-500/10 border border-cyan-500 rounded-lg">
  OOP
</span>
</div>
    </div>

  </div>
</section>

{/* Projects */}
<section
  id="projects"
  className="max-w-6xl mx-auto px-6 py-24"
>
  <h2 className="text-5xl font-bold mb-12 text-cyan-400">
    Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-8 items-start">
    {/* HARWI */}
    {/* HARWI */}
<div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-3xl border border-slate-700 min-h-[500px] hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-3xl font-bold mb-4">
Mental Health Companion
</h3>

<p className="text-gray-300 mb-5 leading-7">
  AI-powered mental health companion built using
  Next.js, FastAPI, CrewAI, Redis, and Gemini API.
  Designed to provide personalized support through
  intelligent multi-agent interactions.
</p>

<div className="flex flex-wrap gap-2 mb-5">
  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
    React
  </span>

  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
    FastAPI
  </span>

  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
    Python
  </span>

  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
    CrewAI
  </span>
</div>

<button
  onClick={() => setShowHarwi(!showHarwi)}
  className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold"
>
  {showHarwi ? "Hide Details" : "Project Details"}
</button>

{showHarwi && (
  <div className="mt-5 border-t border-slate-700 pt-4 text-gray-300 max-h-40 overflow-y-auto">
    <p className="mb-2">
      • Multi-agent AI system for mental health support.
    </p>

    <p className="mb-2">
      • Integrated Gemini API for intelligent responses.
    </p>

    <p className="mb-2">
      • Used CrewAI to coordinate multiple AI agents.
    </p>

    <p className="mb-2">
      • Built frontend with Next.js and backend using FastAPI.
    </p>

    <p>
      • Redis used for session and memory management.
    </p>
  </div>
)}
    </div>



<div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-3xl border border-slate-700 min-h-[500px] hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">

  <h3 className="text-3xl font-bold mb-4">
    PlacePrep
  </h3>

  <p className="text-gray-300 mb-5 leading-7">
    Full-stack placement tracking platform built using
    Next.js, TypeScript and Supabase. Manage job
    applications, interview progress, analytics and
    recruitment timelines through a modern dashboard.
  </p>

  <div className="flex flex-wrap gap-2 mb-5">

    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
      Next.js
    </span>

    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
      TypeScript
    </span>

    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
      Supabase
    </span>

    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
      PostgreSQL
    </span>

  </div>

  <div className="flex gap-3 flex-wrap">

    <button
      onClick={() => setShowPlacePrep(!showPlacePrep)}
      className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold"
    >
      {showPlacePrep ? "Hide Details" : "Project Details"}
    </button>

    <a
      href="https://place-prep-khaki.vercel.app"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 bg-slate-700 rounded-lg font-semibold"
    >
      Live Demo
    </a>

    <a
      href="https://github.com/harshali-nikumbh/PlacePrep"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 bg-slate-700 rounded-lg font-semibold"
    >
      GitHub
    </a>

  </div>

  {showPlacePrep && (
    <div className="mt-5 border-t border-slate-700 pt-4 text-gray-300 max-h-40 overflow-y-auto">

      <p className="mb-2">
        • Secure authentication with Email/Password and Google OAuth.
      </p>

      <p className="mb-2">
        • CRUD operations for managing placement applications.
      </p>

      <p className="mb-2">
        • Interactive dashboard with analytics, search and filters.
      </p>

      <p className="mb-2">
        • Responsive UI with calendar integration and mobile navigation.
      </p>

      <p>
        • Deployed on Vercel with GitHub CI/CD integration.
      </p>

    </div>
  )}

</div>


<div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-3xl border border-slate-700 min-h-[500px] hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">

  <h3 className="text-3xl font-bold mb-4">
    InterviewIQ
  </h3>

  <p className="text-gray-300 mb-5 leading-7">
    AI-powered mock interview platform built using React,
    Tailwind CSS and Google Gemini AI. Designed to help
    candidates practice technical interviews, answer
    role-based questions and receive intelligent feedback.
  </p>

  <div className="flex flex-wrap gap-2 mb-5">

    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
      React
    </span>

    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
      Tailwind CSS
    </span>

    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
      Gemini AI
    </span>

    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
      Vercel
    </span>

  </div>

  <div className="flex gap-3 flex-wrap">

  <button
  onClick={() => setShowInterviewIQ(!showInterviewIQ)}
  className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold"
>
  {showInterviewIQ ? "Hide Details" : "Project Details"}
</button>

  <a
    href="https://interview-iq-nine-xi.vercel.app"
    target="_blank"
    rel="noreferrer"
    className="px-4 py-2 bg-slate-700 rounded-lg font-semibold"
  >
    Live Demo
  </a>

  <a
    href="https://github.com/harshali-nikumbh/interviewIQ"
    target="_blank"
    rel="noreferrer"
    className="px-4 py-2 bg-slate-700 rounded-lg font-semibold"
  >
    GitHub
  </a>

</div>
{showInterviewIQ && (
  <div className="mt-5 border-t border-slate-700 pt-4 text-gray-300 max-h-40 overflow-y-auto">

    <p className="mb-2">
      • AI-powered mock interview platform.
    </p>

    <p className="mb-2">
      • Generates role-based interview questions.
    </p>

    <p className="mb-2">
      • Supports Frontend, Java, Python and Full Stack roles.
    </p>

    <p className="mb-2">
      • Built using React, Tailwind CSS and Gemini AI.
    </p>

    <p>
      • Deployed live on Vercel with GitHub integration.
    </p>

  </div>
)}

</div>


<div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-3xl border border-slate-700 min-h-[500px] hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">

  <h3 className="text-3xl font-bold mb-4">
   Amazon Clone
  </h3>

  <p className="text-gray-300 mb-5 leading-7">
    Responsive Amazon-inspired e-commerce website built using HTML, CSS and JavaScript.
    Features product listings, shopping interface, modern UI design and responsive layouts.
  </p>

  <div className="flex flex-wrap gap-2 mb-5">

    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
      HTML
    </span>

    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
      CSS
    </span>

    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
      JavaScript
    </span>

  </div>

  <div className="flex gap-3 flex-wrap">

  <button
    onClick={() => setShowAmazon(!showAmazon)}
    className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold"
  >
    {showAmazon ? "Hide Details" : "Project Details"}
  </button>

  <a
    href="https://harshali-nikumbh.github.io/amazon-clone/"
    target="_blank"
    rel="noreferrer"
    className="px-4 py-2 bg-slate-700 rounded-lg font-semibold"
  >
    Live Demo
  </a>

  <a
    href="https://github.com/harshali-nikumbh/amazon-clone"
    target="_blank"
    rel="noreferrer"
    className="px-4 py-2 bg-slate-700 rounded-lg font-semibold"
  >
    GitHub
  </a>

</div>

{showAmazon && (
  <div className="mt-5 border-t border-slate-700 pt-4 text-gray-300 max-h-40 overflow-y-auto">

    <p className="mb-2">
      • Amazon-inspired e-commerce UI clone.
    </p>

    <p className="mb-2">
      • Built using HTML, CSS and JavaScript.
    </p>

    <p className="mb-2">
      • Responsive design for desktop and mobile screens.
    </p>

    <p className="mb-2">
      • Product cards, navigation bar and shopping layout.
    </p>

    <p>
      • Improved frontend development and UI design skills.
    </p>

  </div>
)}
</div>

    {/* E-Waste */}
   <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-3xl border border-slate-700 min-h-[500px] hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">
     <h3 className="text-3xl font-bold mb-4">
  E-Waste Toxicity Prediction
</h3>

<p className="text-gray-300 mb-5 leading-7">
  Smart environmental monitoring system using ESP32
  and RTOS to detect and analyze toxicity levels from
  electronic waste in real-time.
</p>

<div className="flex flex-wrap gap-2 mb-5">
  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
    ESP32
  </span>

  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
    RTOS
  </span>

  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
    Sensors
  </span>

  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
    IoT
  </span>
</div>

<button
  onClick={() => setShowEWaste(!showEWaste)}
  className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold"
>
  {showEWaste ? "Hide Details" : "Project Details"}
</button>

{showEWaste && (
  <div className="mt-5 border-t border-slate-700 pt-4 text-gray-300 max-h-40 overflow-y-auto">
    <p className="mb-2">
      • Developed using ESP32 microcontroller.
    </p>

    <p className="mb-2">
      • Implemented RTOS for task scheduling.
    </p>

    <p className="mb-2">
      • Real-time sensor monitoring and data collection.
    </p>

    <p className="mb-2">
      • Toxicity prediction and environmental analysis.
    </p>

    <p>
      • Focused on sustainable e-waste management.
    </p>
  </div>
)}
    </div>

    {/* Flappy Bird */}
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-3xl border border-slate-700 min-h-[500px] hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-3xl font-bold mb-4">
  Flappy Bird Clone
</h3>

<p className="text-gray-300 mb-5 leading-7">
  Interactive 2D arcade game developed using Python
  and Pygame with collision detection, scoring system,
  animations, and smooth gameplay mechanics.
</p>

<div className="flex flex-wrap gap-2 mb-5">
  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
    Python
  </span>

  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
    Pygame
  </span>

  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 rounded-full text-sm">
    Game Development
  </span>
</div>

<div className="flex gap-3 flex-wrap">

  <button
    onClick={() => setShowFlappy(!showFlappy)}
    className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold"
  >
    {showFlappy ? "Hide Details" : "Project Details"}
  </button>

  <a
    href="https://github.com/harshali-nikumbh/flappy-bird-game"
    target="_blank"
    rel="noreferrer"
    className="px-4 py-2 bg-slate-700 rounded-lg font-semibold"
  >
    GitHub
  </a>

</div>

{showFlappy && (
  <div className="mt-5 border-t border-slate-700 pt-4 text-gray-300 max-h-40 overflow-y-auto">
    <p className="mb-2">
      • Built using Python and Pygame.
    </p>

    <p className="mb-2">
      • Implemented collision detection mechanics.
    </p>

    <p className="mb-2">
      • Added score tracking and game logic.
    </p>

    <p className="mb-2">
      • Designed interactive gameplay experience.
    </p>

    <p>
      • Applied object-oriented programming concepts.
    </p>
  </div>
)}
    </div>

  </div>
</section>

{/* Contact */}
<section
  id="contact"
  className="max-w-5xl mx-auto px-6 py-24 text-center"
>
  <h2 className="text-5xl font-bold mb-8 text-cyan-400">
    Contact
  </h2>

  <p className="text-gray-300 text-lg">
    📧 harshalinikumbh30@gmail.com
  </p>

  <p className="text-gray-300 text-lg mt-3">
    📍 Pune, Maharashtra
  </p>

  <div className="flex justify-center gap-6 mt-8">
    <a
      href="https://www.linkedin.com/in/harshali-nikumbh-964465326/"
      className="bg-cyan-500 text-black px-5 py-3 rounded-xl font-semibold"
      target="_blank"
  rel="noreferrer"
    >
      <FaLinkedin size={22} />
    </a>

    <a
      href="https://github.com/harshali-nikumbh"
      className="bg-cyan-500 text-black px-5 py-3 rounded-xl font-semibold"
      target="_blank"
  rel="noreferrer"
    >
      <FaGithub size={22} />
    </a>
  </div>
</section>

<footer className="border-t border-slate-800 py-8 text-center text-gray-400">
  © 2026 Harshali Nikumbh • Built with React & Tailwind CSS
</footer>
    </div>
  );
}

export default App;