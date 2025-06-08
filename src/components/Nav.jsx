import React, { useState, useEffect } from "react";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const setDarkTheme = () => document.body.setAttribute("Theme", "Dark");
  const setLightTheme = () => document.body.setAttribute("Theme", "Light");

  useEffect(() => setLightTheme(), []);

  const toggleTheme = () => {
    const current = document.body.getAttribute("Theme");
    current === "Light" ? setDarkTheme() : setLightTheme();
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:fixed lg:flex flex-col justify-between items-center top-0 left-0 h-screen w-[120px] z-50 bg-[var(--bg-color)] border-r border-[var(--prim-color)] py-12">
        {/* Logo */}
        <div className="bg-[var(--prim-color)] text-[var(--logo-color)] font-bold text-xl px-5 py-4">
          <a href="#">A</a>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 text-[var(--text-color)] font-medium">
          {["home", "about", "service", "projects", "contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="hover:text-[var(--prim-color)] transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <div className="mb-4">
          <i
            className="ri-moon-line bg-[var(--prim-color)] text-white p-4 rounded-full cursor-pointer"
            onClick={toggleTheme}
          ></i>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="lg:hidden fixed top-0 left-0 w-full z-50 bg-[var(--bg-color)] border-b border-[var(--prim-color)] flex justify-between items-center px-4 py-3">
        <div className="bg-[var(--prim-color)] text-[var(--logo-color)] font-bold text-xl px-4 py-2">
          <a href="#">A</a>
        </div>

        <div className="flex gap-4 items-center">
          <i
            className="ri-moon-line bg-[var(--prim-color)] text-white p-3 rounded-full cursor-pointer"
            onClick={toggleTheme}
          ></i>
          <i
            className="ri-menu-line bg-[var(--prim-color)] text-white p-3 rounded-full cursor-pointer"
            onClick={toggleMenu}
          ></i>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <ul className="lg:hidden fixed top-[64px] left-0 w-full bg-[var(--bg-color)] text-[var(--text-color)] text-center py-8 flex flex-col gap-6 font-medium z-40 shadow-md">
          {["home", "about", "service", "projects", "contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={() => setShowMenu(false)}
                className="hover:text-[var(--prim-color)] transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Nav;
