import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

import bookscapeImg from "../assets/project2.png";
import scienceMuseumImg from "../assets/project3.png";
import antiochiaImg from "../assets/project1.png";

const projectData = [
  {
    image: bookscapeImg,
    title: "BookScape – Holidaze App",
    subtitle: "Accommodation booking platform built with React and Tailwind CSS",
    link: "/project/bookscape",
  },
  {
    image: scienceMuseumImg,
    title: "Community Science Museum",
    subtitle: "Educational site for children & families using HTML and CSS",
    link: "/project/sciencemuseum",
  },
  {
    image: antiochiaImg,
    title: "Antiochia Grill – Restaurant Website",
    subtitle: "Responsive Turkish food site with delivery links and full menu",
    link: "/project/antiochiagrill",
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
      <SectionHeader
        title="My Projects"
        subtitle="A selection of design and development work showcasing modern UI, performance, and user experience."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <Link to={project.link} key={index}>
            <div className="bg-[var(--card-bg)] rounded-xl p-4 shadow-sm hover:shadow-md transition h-full flex flex-col">
              
              {/* Thumbnail */}
              <div className="w-full h-[260px] overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Text Content with CTA */}
              <div className="flex-1 flex flex-col justify-between px-2">
                <div>
                  <h4 className="text-xl font-bold hover:text-[var(--prim-color)] transition">
                    {project.title}
                  </h4>
                  <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {project.subtitle}
                  </span>
                </div>
                <div className="text-[var(--text-color)] text-xl border border-[var(--card-border)] p-3 rounded-full hover:bg-[var(--prim-color)] hover:text-white transition self-start mt-4">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
