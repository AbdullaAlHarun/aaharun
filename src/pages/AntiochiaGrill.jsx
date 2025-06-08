import SectionHeader from "../components/SectionHeader";
import antiochiaImg from "../assets/project1.png";

const AntiochiaGrill = () => (
  <section
    className="w-full py-12 px-6 md:px-12 pt-[80px] lg:pl-[180px]"
    style={{
      backgroundColor: "var(--bg-color)",
      color: "var(--text-color)",
    }}
  >
    <SectionHeader
      title="Antiochia Grill - Turkish Street Food"
      subtitle="Modern restaurant website with responsive UI and menu showcase"
    />

    <img
      src={antiochiaImg}
      alt="Antiochia Grill preview"
      className="rounded-xl shadow-md mb-6 max-w-4xl w-full"
    />

    <p className="text-lg text-[var(--text-color)] mb-4">
      Antiochia Grill is a Turkish street food restaurant based in Drammen, Norway. This responsive web project showcases the full digital experience, including an interactive online menu, contact and location details, and integration with food delivery platforms like Wolt. The site’s design emphasizes bold visuals, user-friendly navigation, and clear access to information for both desktop and mobile users.
    </p>

    <div className="space-y-4 text-base sm:text-lg leading-relaxed">
      <h3 className="text-2xl font-semibold text-[var(--prim-color)] mt-8">Core Features</h3>
      <ul className="list-disc pl-5">
        <li>Fully responsive layout optimized for mobile and desktop</li>
        <li>Category-based food menu with images and pricing</li>
        <li>Quick access to delivery ordering via Wolt integration</li>
        <li>Contact details with embedded Google Maps location</li>
        <li>Call-to-action sections for booking or ordering</li>
        <li>Consistent visual branding using bold colors and high-quality photography</li>
      </ul>

      <h3 className="text-2xl font-semibold text-[var(--prim-color)] mt-8">Technologies Used</h3>
      <ul className="list-disc pl-5">
        <li>HTML5 & CSS3 for semantic structure and styling</li>
        <li>Responsive layout with media queries and flex/grid</li>
        <li>Hosted on Netlify with custom domain integration</li>
      </ul>
    </div>

    <div className="flex gap-4 mt-8">
      <a
        href="https://antiochiagrill.no/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 border border-[var(--prim-color)] text-[var(--prim-color)] rounded-full hover:bg-[var(--prim-color)] hover:text-white transition"
      >
        🔗 Live Website
      </a>
      <a
        href="https://github.com/AbdullaAlHarun/antiochia-grill"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 border border-[var(--prim-color)] text-[var(--prim-color)] rounded-full hover:bg-[var(--prim-color)] hover:text-white transition"
      >
        📂 GitHub Repository
      </a>
    </div>
  </section>
);

export default AntiochiaGrill;
