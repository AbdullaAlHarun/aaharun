import React from "react";
import Nav from "../components/Nav";

function MainLayout({ children }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Nav />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}

export default MainLayout;
