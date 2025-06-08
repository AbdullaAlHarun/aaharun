import React from "react";
import bookscapeImg from "../assets/project2.png";
import BackButton from "../components/BackButton";

const BookScape = () => {
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
          ✦ BookScape - Accommodation Booking Platform
        </h1>
        <p className="text-lg text-[var(--text-color)]/80 max-w-3xl">
          BookScape is a modern accommodation booking platform built as part of my final exam project.
          It features a responsive and user-focused design for both customers and venue managers using
          React and Tailwind CSS.
        </p>
      </div>

      <div className="mb-10">
        <img
          src={bookscapeImg}
          alt="BookScape Screenshot"
          className="rounded-lg shadow-md max-w-4xl w-full"
        />
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Preview of the BookScape UI</p>
      </div>

      <div className="flex flex-wrap gap-6 mb-12">
        <a
          href="https://book-scape-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--prim-color)] underline font-medium hover:text-[var(--text-color)]"
        >
          🔗 Live Website
        </a>
        <a
          href="https://github.com/AbdullaAlHarun/Bookscape"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--prim-color)] underline font-medium hover:text-[var(--text-color)]"
        >
          📂 GitHub Repository
        </a>
      </div>

      <div className="space-y-6 text-base sm:text-lg leading-relaxed">
        <h3 className="text-2xl font-semibold text-[var(--prim-color)] mt-8">Project Scope & Purpose</h3>
        <p>
          BookScape was developed for <strong>Holidaze</strong>, a fictional booking company. The
          platform includes both a customer-facing side for holiday bookings and an admin-facing side
          for venue management. It emphasizes UX design, mobile responsiveness, API interaction, and
          component-based architecture.
        </p>

        <h3 className="text-2xl font-semibold text-[var(--prim-color)] mt-8">Core Features</h3>
        <ul className="list-disc pl-5">
          <li>Browse and search venues with real-time data</li>
          <li>View detailed venue pages with calendar availability</li>
          <li>User registration and login for customers and venue managers</li>
          <li>Booking functionality and upcoming booking management</li>
          <li>Venue creation, editing, and deletion (for managers)</li>
          <li>Profile image updates for all users</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[var(--prim-color)] mt-8">Technologies Used</h3>
        <ul className="list-disc pl-5">
          <li><strong>React</strong> for SPA structure and routing</li>
          <li><strong>Tailwind CSS</strong> for utility-first styling</li>
          <li><strong>TypeScript & JavaScript</strong> for robust logic</li>
          <li><strong>Figma</strong> for UI design & prototyping</li>
          <li><strong>Netlify</strong> for live deployment</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[var(--prim-color)] mt-8">Learning Outcomes</h3>
        <ul className="list-disc pl-5">
          <li>Planned and scoped a full-stack-ready web application</li>
          <li>Designed responsive UI using Figma</li>
          <li>Used React to build scalable component-based architecture</li>
          <li>Integrated external API via Swagger docs</li>
          <li>Styled interface using Tailwind for consistency and accessibility</li>
          <li>Tested and deployed the app using modern tools</li>
        </ul>
      </div>
    </section>
  );
};

export default BookScape;
