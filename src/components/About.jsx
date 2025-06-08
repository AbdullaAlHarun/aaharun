import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabClass = (tab) =>
    `cursor-pointer px-4 py-2 font-semibold capitalize transition ${
      activeTab === tab
        ? "border-b-2 text-[var(--prim-color)] border-[var(--prim-color)]"
        : "hover:text-[var(--prim-color)]"
    }`;

  return (
    <section
      id="about"
      className="w-full py-12 px-6 md:px-12 lg:pl-[180px]"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Section Title */}
      <SectionHeader
        title="About Me"
        subtitle="I enjoy building things that live on the internet. Here's my background and journey."
      />

      {/* About Content */}
      <div
        className="max-w-4xl space-y-5 text-base sm:text-lg leading-relaxed mb-12"
        style={{ color: "var(--text-color)" }}
      >
        <p>
          My interest in web development began in 2012 when I experimented with
          editing Tumblr themes — hacking together a custom reblog button taught
          me more about HTML & CSS than I ever expected.
        </p>
        <p>
          Today, I'm a frontend developer who combines technology and science to
          design and build intuitive user interfaces. With a foundation in
          biology and a transition to digital product design, I bring a unique,
          structured perspective to creative work.
        </p>
      </div>

      {/* Tabs */}
      <div
        className="flex flex-wrap gap-4 mb-8 border-b text-base sm:text-lg"
        style={{ borderColor: "var(--card-border)" }}
      >
        {["technologies", "skills", "experience", "education"].map((tab) => (
          <span
            key={tab}
            className={tabClass(tab)}
            style={
              activeTab !== tab ? { color: "var(--text-color)" } : undefined
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 max-w-4xl" style={{ color: "var(--text-color)" }}>
        {activeTab === "technologies" && (
          <ul className="space-y-2 text-base sm:text-lg list-disc pl-5">
            <li>React,Redux,Express.js Next.js, MongoDB</li>
            <li>Tailwind CSS, SCSS</li>
            <li>JavaScript, TypeScript</li>
            <li>Figma, Adobe Photoshop, Premiere pro</li>
            <li>Git, GitHub</li>
          </ul>
        )}

        {activeTab === "skills" && (
          <ul className="space-y-2 text-base sm:text-lg list-disc pl-5">
            <li>Responsive Web Design</li>
            <li>UI/UX Wireframing & Prototyping</li>
            <li>REST API Integration</li>
            <li>Version Control with Git</li>
          </ul>
        )}

        {activeTab === "experience" && (
          <div className="space-y-6">
            <div>
              <p className="text-[var(--prim-color)] font-semibold">
                2023 - Current
              </p>
              <p className="font-medium">
                Freelance Frontend Developer
              </p>
            </div>
            <div>
              <p className="text-[var(--prim-color)] font-semibold">
                2019 - Current
              </p>
              <p className="font-medium">
                Video Content Creator - ExploreAround
              </p>
            </div>
            <div>
              <p className="text-[var(--prim-color)] font-semibold">
                2014 - 2018
              </p>
              <p className="font-medium">Project Manager - MH Technology Ltd.</p>
            </div>
            <div>
              <p className="text-[var(--prim-color)] font-semibold">
                2010 - 2014
              </p>
              <p className="font-medium">Content Manager - Kalerkontha ltd.</p>
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div className="space-y-6">
                <div>
              <p className="text-[var(--prim-color)] font-semibold">
                2025 - Current
              </p>
              <p className="font-medium">
                Backend Development - Gokstad Academy, Oslo
              </p>
            </div>
            <div>
              <p className="text-[var(--prim-color)] font-semibold">
                2023- 2025
              </p>
              <p className="font-medium">
                Frontend Development - Noroff School of Technology and Digital
                Media
              </p>
            </div>
            <div>
              <p className="text-[var(--prim-color)] font-semibold">2018</p>
              <p className="font-medium">
                MSc in Biology - Jagannath University
              </p>
            </div>
            <div>
              <p className="text-[var(--prim-color)] font-semibold">2016</p>
              <p className="font-medium">
                BSc in Biology - Jagannath University
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
