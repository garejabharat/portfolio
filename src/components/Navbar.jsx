import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
const links = ["Home", "About", "Skills", "Contact"];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 24px",
        background: scrolled ? "rgba(5,8,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        <motion.span
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: "Syne",
            fontWeight: 800,
            fontSize: 20,
            background: "linear-gradient(135deg, #4f8ef7, #7c5cfc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
          }}
        >
          BG.dev
        </motion.span>

        <div
          style={{ display: "flex", gap: 32, alignItems: "center" }}
          className="desktop-nav"
        >
          {links.map((l) => (
            <Link
              key={l}
              to={l.toLowerCase()}
              smooth
              duration={600}
              offset={-70}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#8892b0",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              activeClass="nav-active"
              onMouseEnter={(e) => (e.target.style.color = "#f0f2ff")}
              onMouseLeave={(e) => (e.target.style.color = "#8892b0")}
            >
              {l}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            color: "#f0f2ff",
            cursor: "pointer",
            display: "none",
            fontSize: 24,
          }}
          className="mobile-menu-btn"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              background: "rgba(5,8,16,0.98)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            {links.map((l) => (
              <Link
                key={l}
                to={l.toLowerCase()}
                smooth
                duration={600}
                offset={-70}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 24px",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#8892b0",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                {l}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
