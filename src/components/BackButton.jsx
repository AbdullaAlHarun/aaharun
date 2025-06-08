import { useNavigate } from "react-router-dom";
import React from "react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--prim-color)] hover:underline transition"
    >
      <i className="ri-arrow-left-line"></i> Back to Home
    </button>
  );
};

export default BackButton;