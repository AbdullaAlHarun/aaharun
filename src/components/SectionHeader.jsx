const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="relative mb-12 max-w-4xl">
      {/* Tag marker */}
      <div className="absolute top-1 left-0">
        <div className="bg-[var(--prim-color)] text-white text-xs font-semibold uppercase px-3 py-1 rounded-full shadow-sm">
          ✦
        </div>
      </div>

      {/* Heading and subtitle */}
      <div className="pl-16">
        <h2
          className="text-3xl sm:text-4xl font-bold leading-tight"
          style={{ color: "var(--text-color)" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="mt-2 text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-color)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
