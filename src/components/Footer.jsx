import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiYoutube,
} from "react-icons/fi";
import { Link } from "react-scroll";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "60px 24px 40px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 32,
              paddingBottom: 5,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "Syne",
                  fontWeight: 800,
                  fontSize: 22,
                  background: "linear-gradient(135deg, #4f8ef7, #7c5cfc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 8,
                }}
              >
                BG.dev
              </div>
              <p style={{ fontSize: 14, color: "#5a6380", maxWidth: 300 }}>
                Building beautiful, performant React applications. Open to
                freelance projects and full-time opportunities.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {[
                {
                  icon: <FiGithub />,
                  href: "https://github.com/garejabharat",
                  label: "GitHub",
                },
                {
                  icon: <FiLinkedin />,
                  href: "https://linkedin.com/in/bharat-gareja",
                  label: "LinkedIn",
                },
                {
                  icon: <FiMail />,
                  href: "mailto:garejabharatk@gmail.com",
                  label: "Email",
                },
                { icon: <FiYoutube />, href: "#", label: "YouTube" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, color: "#4f8ef7" }}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    color: "#5a6380",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.05)",
              paddingTop: 10,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <p style={{ fontSize: 13, color: "#5a6380" }}>
              © {year} Bharat Gareja. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{ position: "fixed", bottom: 32, right: 32, zIndex: 999 }}
          >
            <Link to="home" smooth={true} duration={600}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4f8ef7, #7c5cfc)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(79,142,247,0.4)",
                }}
              >
                <FiArrowUp />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
