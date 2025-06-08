import React from "react";
import SectionHeader from "../components/SectionHeader";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 px-6 md:px-12 lg:pl-[180px]"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      {/* Header */}
      <SectionHeader
        title="Contact Me"
        subtitle="I’m open to collaboration, freelance projects or just friendly tech talk. Let’s connect!"
      />

      {/* Contact Content */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* Form */}
        <div className="bg-[var(--card-bg)] w-full lg:w-1/2 p-6 md:p-8 rounded-xl shadow-sm">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="flex-1 border border-[var(--card-border)] rounded-md px-4 py-2 outline-none bg-transparent text-[var(--text-color)] focus:border-[var(--prim-color)]"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 border border-[var(--card-border)] rounded-md px-4 py-2 outline-none bg-transparent text-[var(--text-color)] focus:border-[var(--prim-color)]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border border-[var(--card-border)] rounded-md px-4 py-2 outline-none bg-transparent text-[var(--text-color)] focus:border-[var(--prim-color)]"
            />
            <textarea
              placeholder="Message"
              className="border border-[var(--card-border)] rounded-md px-4 py-2 h-32 outline-none bg-transparent text-[var(--text-color)] focus:border-[var(--prim-color)] resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-fit border border-[var(--prim-color)] text-[var(--prim-color)] font-semibold px-8 py-2 rounded-full hover:bg-[var(--prim-color)] hover:text-white transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-[var(--card-bg)] w-full lg:w-1/2 p-6 md:p-8 rounded-xl flex flex-col gap-4 shadow-sm">
          <h4 className="text-2xl font-semibold text-[var(--text-color)]">
            Let’s Talk About Anything
          </h4>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-color)" }}>
            Reach out via the form or directly using the contact info below.
          </p>
          <div className="space-y-3 mt-4 text-[var(--text-color)]">
            <div className="flex items-center gap-3">
              <MdPhone className="text-[var(--prim-color)] text-xl" />
              <span>+47 45922207</span>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-[var(--prim-color)] text-xl" />
              <span>harunabdullaal@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MdLocationOn className="text-[var(--prim-color)] text-xl" />
              <span>Grorud, Oslo, Norway</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
