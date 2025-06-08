import { ReactTyped } from "react-typed";
import desktopBg from "../assets/header_new.png";
import mobileBg from "../assets/mobile_bg.png";
import resumePdf from "../assets/Abdulla_Al_Harun_Resume.pdf";

const Header = () => {
  return (
    <section
      id="home"
      role="region"
      aria-label="Hero section with introduction"
      className="relative min-h-screen w-full bg-no-repeat bg-cover flex items-center"
      style={{
        backgroundImage: `url(${mobileBg})`,
      }}
    >
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-right-top hidden md:block"
        style={{ backgroundImage: `url(${desktopBg})` }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:pl-[180px] py-12">
        <small className="text-white text-lg tracking-[0.3em] uppercase font-mono block mb-4">
          Hello , <span role="img" aria-label="waving hand">👋</span> There
        </small>

        <h1 className="text-white text-4xl sm:text-3xl font-bold flex flex-wrap items-center gap-2 mb-6">
          I, M{" "}
          <span className="text-[var(--prim-color)]">
            <ReactTyped
              strings={["Abdulla Al Harun", "Frontend Developer", "UI / UX Designer"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </span>
        </h1>

        <p className="text-white text-opacity-90 max-w-md text-lg mb-8 leading-relaxed">
          Passionate and creative Frontend Developer, dedicated to crafting exceptional web experiences.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          {[
            { href: "https://www.facebook.com/44mehedi", label: "Facebook", icon: "ri-facebook-line" },
            { href: "https://www.instagram.com/explorearounds/", label: "Instagram", icon: "ri-instagram-line" },
            { href: "https://www.youtube.com/@ExploreArounds", label: "YouTube", icon: "ri-youtube-line" },
            { href: "https://github.com/AbdullaAlHarun", label: "GitHub", icon: "ri-github-line" },
            { href: "https://www.linkedin.com/in/abdullaalharun/", label: "LinkedIn", icon: "ri-linkedin-line" },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-[55px] h-[55px] flex items-center justify-center bg-white text-[var(--prim-color)] text-xl rounded-full cursor-pointer transition hover:-translate-y-1 hover:shadow-md"
            >
              <i className={icon}></i>
            </a>
          ))}
        </div>

        <a
          href={resumePdf}
          download
          className="h-[45px] w-[165px] inline-flex items-center justify-center gap-2 bg-white text-[var(--prim-color)] font-medium text-sm rounded-full hover:bg-[#1e1e1e] hover:text-white hover:shadow-md transition-all"
        >
          Download CV <i className="ri-download-line"></i>
        </a>
      </div>
    </section>
  );
};

export default Header;
