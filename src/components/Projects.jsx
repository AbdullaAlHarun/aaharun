import React from "react";
import SectionHeader from "../components/SectionHeader";

import project1 from "../assets/project1.png";
import project2 from "../assets/project1.png";
import project3 from "../assets/project1.png";
import project4 from "../assets/project1.png";
import project5 from "../assets/project1.png";
import project6 from "../assets/project1.png";

const projectData = [
  {
    image: project1,
    title: "Landing Page",
    subtitle: "Landing Design , Reactjs , javaScript",
  },
  {
    image: project2,
    title: "App Design",
    subtitle: "Application Design , Reactjs , javaScript",
  },
  {
    image: project3,
    title: "Cosmetic Landing Page",
    subtitle: "Cosmetic Page, Landing Design , Reactjs , javaScript",
  },
  {
    image: project4,
    title: "Architecture App",
    subtitle: "Architecture Page, Landing Design , Reactjs , javaScript",
  },
  {
    image: project5,
    title: "App Landing Page",
    subtitle: "App Page, Landing Design , Reactjs , javaScript",
  },
  {
    image: project6,
    title: "Modern App",
    subtitle: "Modern App Design, Landing Design , Reactjs , javaScript",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 px-6 md:px-12 lg:pl-[180px]"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Title */}
      <SectionHeader
        title="My Projects"
        subtitle="A selection of design and development work showcasing modern UI, performance, and user experience."
      />

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-[var(--card-bg)] rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="w-full h-[260px] overflow-hidden rounded-xl mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex items-start justify-between gap-3 px-2">
              <div>
                <h4 className="text-xl font-bold hover:text-[var(--prim-color)] transition">
                  {project.title}
                </h4>
                <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {project.subtitle}
                </span>
              </div>
              <button className="text-[var(--text-color)] text-xl border border-[var(--card-border)] p-3 rounded-full hover:bg-[var(--prim-color)] hover:text-white transition">
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
