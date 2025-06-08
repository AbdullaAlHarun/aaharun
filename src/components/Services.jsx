import React from "react";
import SectionHeader from "../components/SectionHeader";

import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

const services = [
  {
    img: service1,
    title: "Web Development",
    description:
      "Creating fast, responsive, and accessible websites using modern frameworks and best practices tailored to business needs.",
  },
  {
    img: service2,
    title: "Web App Design & Develop",
    description:
      "Crafting intuitive UI/UX and building dynamic single-page applications with React, ensuring seamless user experiences.",
  },
  {
    img: service3,
    title: "Graphics & Video Content",
    description:
      "Producing professional design assets and video content for branding, marketing, and social media using Adobe Suite & tools.",
  },
];

const Service = () => {
  return (
    <section
      id="service"
      className="w-full py-12 px-6 md:px-12 lg:pl-[180px]"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Section Title */}
      <SectionHeader
        title="My Service"
        subtitle="Here’s what I offer as a digital creative: from development to visual storytelling."
      />

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[var(--card-bg)] text-center rounded-xl p-8 flex flex-col items-center transition hover:shadow-lg shadow-[var(--box-shadow)]"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-[180px] h-auto mb-6"
            />
            <h3 className="text-xl font-bold text-[var(--prim-color)] mb-3">
              {service.title}
            </h3>
            <p className="text-[var(--text-color)] text-base leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
