import React from "react";
import museumImg from "../assets/project3.png";
import BackButton from "../components/BackButton";

const ScienceMuseum = () => {
  return (
    <section
      className="w-full py-12 px-6 md:px-12 pt-[80px] lg:pl-[180px]"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <BackButton />

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--text-color)] mb-3">
          ✦ Community Science Museum Website
        </h1>
        <p className="text-lg text-[var(--text-color)]/80 max-w-3xl">
          A vibrant and educational website built to engage middle school students and their families.
          It promotes the Community Science Museum and provides accessible, responsive design for
          curious minds using HTML and CSS.
        </p>
      </div>

      <div className="mb-10">
        <img
          src={museumImg}
          alt="Science Museum Screenshot"
          className="rounded-lg shadow-md max-w-4xl w-full"
        />
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Preview of the Community Science Museum site
        </p>
      </div>

      <div className="flex flex-wrap gap-6 mb-12">
        <a
          href="https://science-museum-tau.vercel.app/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--prim-color)] underline font-medium hover:text-[var(--text-color)]"
        >
          🔗 Live Website
        </a>
        <a
          href="https://github.com/AbdullaAlHarun/science-museum"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--prim-color)] underline font-medium hover:text-[var(--text-color)]"
        >
          📂 GitHub Repository
        </a>
      </div>

      <div className="space-y-6 text-base sm:text-lg leading-relaxed">
        <h3 className="text-2xl font-semibold text-[var(--prim-color)] mt-8">
          Project Scope & Purpose
        </h3>
        <p>
          This project was built for the <strong>Community Science Museum</strong>, targeting curious
          children aged 7–15 and their families. The goal was to design an informative and engaging
          website that appeals to both kids and adults — without being condescending. The site had
          to be clear, fun, and educational, while responsive and accessible on all devices.
        </p>

        <h3 className="text-2xl font-semibold text-[var(--prim-color)] mt-8">
          Core Features
        </h3>
        <ul className="list-disc pl-5">
          <li>Fully static HTML/CSS layout with semantic structure</li>
          <li>Clean, responsive design using Flexbox and media queries</li>
          <li>Clear hierarchy and content flow for young learners</li>
          <li>Designed with WCAG accessibility guidelines in mind</li>
          <li>Optimized image usage and content layout</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[var(--prim-color)] mt-8">
          Technologies Used
        </h3>
        <ul className="list-disc pl-5">
          <li><strong>HTML5</strong> for structure</li>
          <li><strong>CSS3</strong> for styling and layout</li>
          <li><strong>Flexbox</strong> and media queries for responsiveness</li>
          <li><strong>Figma</strong> for layout and prototyping</li>
          <li><strong>Vercel</strong> for live deployment</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[var(--prim-color)] mt-8">
          Learning Outcomes
        </h3>
        <ul className="list-disc pl-5">
          <li>Planned a project using a real brief</li>
          <li>Practiced user-centered design and layout principles</li>
          <li>Built a multi-page responsive site from scratch</li>
          <li>Tested for cross-browser compatibility and accessibility</li>
          <li>Learned hosting, GitHub repo management, and static deployment</li>
        </ul>
      </div>
    </section>
  );
};

export default ScienceMuseum;
