import React, { useState, useEffect } from "react";

const links = ["About", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: "0 2rem",
    background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "68px",
  };

  const logoStyle = {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "1.3rem",
    background: "linear-gradient(135deg, #5b8dee, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const linkStyle = {
    color: "var(--text2)",
    fontSize: "0.9rem",
    fontWeight: 400,
    transition: "color 0.2s",
    padding: "0.25rem 0",
    position: "relative",
  };

  const handleNav = (id) => {
    setOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={navStyle}>
      <span style={logoStyle}>BG.</span>

      {/* Desktop */}
      <div
        style={{ display: "flex", gap: "2rem", alignItems: "center" }}
        className="desktop-nav"
      >
        {links.map((l) => (
          <button
            key={l}
            onClick={() => handleNav(l)}
            style={{ ...linkStyle, background: "none", border: "none" }}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "var(--text2)")}
          >
            {l}
          </button>
        ))}
        <a
          href="mailto:garejabharatk@gmail.com"
          style={{
            padding: "0.5rem 1.2rem",
            borderRadius: "100px",
            background: "linear-gradient(135deg, #5b8dee, #7c3aed)",
            color: "#fff",
            fontWeight: 500,
            fontSize: "0.875rem",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Hire me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          color: "var(--text)",
          fontSize: "1.5rem",
          display: "none",
        }}
        className="hamburger"
      >
        ☰
      </button>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>

      {open && (
        <div
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            background: "rgba(10,10,15,0.97)",
            padding: "1.5rem 2rem",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              style={{
                background: "none",
                border: "none",
                color: "var(--text2)",
                fontSize: "1.1rem",
                textAlign: "left",
                fontFamily: "var(--font-body)",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
