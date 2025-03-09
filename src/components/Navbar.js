import { useState, useEffect } from "react";

function Navbar() {
  let [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "project", "contact"];
      let currentSection = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container-fluid">
        <a
          className="navbar-brand fs-1 fw-bold ms-3"
          href="#home"
          style={{ fontFamily: "Nova Flat" }}
        >
          Selva Bharath R
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#Navbarnavbar"
          aria-expanded="false"
        >
          <i className="navbar-toggler-icon" style={{ color: "white" }}></i>
        </button>

        {/* Navbar items */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="Navbarnavbar"
        >
          <ul className="navbar-nav text-center">
            <li className="nav-item px-3">
              <a
                className={`nav-link font-monospace ${
                  activeSection === "home" ? "active" : ""
                }`}
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className={`nav-link font-monospace ${
                  activeSection === "about" ? "active" : ""
                }`}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className={`nav-link font-monospace ${
                  activeSection === "project" ? "active" : ""
                }`}
                href="#project"
              >
                Projects
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className={`nav-link font-monospace ${
                  activeSection === "contact" ? "active" : ""
                }`}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
