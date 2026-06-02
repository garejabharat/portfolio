import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-scroll";
import { Element } from "react-scroll";

const Orb = ({ style }) => (
  <div
    style={{
      position: "absolute",
      borderRadius: "50%",
      filter: "blur(80px)",
      opacity: 0.15,
      pointerEvents: "none",
      ...style,
    }}
  />
);

export default function Hero() {
  return (
    <Element
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Orb
        style={{
          width: 500,
          height: 500,
          background: "#4f8ef7",
          top: "-100px",
          right: "-100px",
        }}
      />
      <Orb
        style={{
          width: 400,
          height: 400,
          background: "#7c5cfc",
          bottom: "0px",
          left: "-150px",
        }}
      />
      <Orb
        style={{
          width: 250,
          height: 250,
          background: "#00e5c3",
          top: "40%",
          left: "40%",
        }}
      />

      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        className="section"
        style={{ paddingTop: 120, paddingBottom: 80, width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 80,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 280 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  background: "rgba(79,142,247,0.1)",
                  border: "1px solid rgba(79,142,247,0.25)",
                  borderRadius: 20,
                  fontSize: 13,
                  color: "#4f8ef7",
                  marginBottom: 24,
                  fontWeight: 500,
                }}
              >
                👋 Available for work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: "clamp(42px, 7vw, 72px)",
                fontWeight: 800,
                lineHeight: 1.05,
                marginBottom: 16,
              }}
            >
              <span style={{ display: "block", color: "#f0f2ff" }}>Bharat</span>
              <span
                style={{
                  display: "block",
                  background:
                    "linear-gradient(135deg, #4f8ef7 0%, #7c5cfc 50%, #00e5c3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Gareja
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                color: "#8892b0",
                marginBottom: 24,
                fontWeight: 300,
              }}
            >
              <TypeAnimation
                sequence={[
                  "React JS Developer",
                  2000,
                  "Frontend Engineer",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                  "Next.js Developer",
                  2000,
                ]}
                repeat={Infinity}
                speed={50}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: 16,
                color: "#8892b0",
                maxWidth: 480,
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              Building fast, responsive, and scalable web applications with 1.5+
              years of experience in React, Redux, and modern JavaScript.
              Passionate about clean code and exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: 48,
              }}
            >
              <a href="mailto:garejabharatk@gmail.com" className="btn-primary">
                <FiMail /> Contact Me
              </a>
              <a
                href="https://github.com/garejabharat"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <FiDownload /> Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: "flex", gap: 20 }}
            >
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
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, color: "#4f8ef7" }}
                  style={{
                    fontSize: 20,
                    color: "#5a6380",
                    transition: "color 0.2s",
                  }}
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(79,142,247,0.15), rgba(124,92,252,0.15))",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  width: 240,
                  height: 240,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0d1533, #1a0d33)",
                  border: "2px solid rgba(79,142,247,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 80,
                  userSelect: "none",
                }}
              >
                👨‍💻
              </div>

              {/* Orbiting dots */}
              {[
                { top: -10, left: "50%", bg: "#4f8ef7" },
                { bottom: -10, left: "50%", bg: "#7c5cfc" },
                { left: -10, top: "50%", bg: "#00e5c3" },
                { right: -10, top: "50%", bg: "#4f8ef7" },
              ].map((d, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  style={{
                    position: "absolute",
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: d.bg,
                    ...d,
                  }}
                />
              ))}
            </div>

            {/* Floating badges */}
            {[
              { text: "⚛️ React", top: 20, right: -20 },
              { text: "🟦 TypeScript", bottom: 40, left: -40 },
              { text: "🚀 Next.js", bottom: -10, right: 20 },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.2 }}
                style={{
                  position: "absolute",
                  ...b,
                  padding: "6px 14px",
                  borderRadius: 20,
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: 12,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  color: "#f0f2ff",
                }}
              >
                {b.text}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            display: "flex",
            gap: 60,
            marginTop: 80,
            paddingTop: 40,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexWrap: "wrap",
          }}
        >
          {[
            ["1.5+", "Years Experience"],
            ["10+", "Projects Built"],
            ["5+", "Technologies"],
            ["100%", "Client Satisfaction"],
          ].map(([n, l]) => (
            <div key={l}>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  fontFamily: "Syne",
                  background: "linear-gradient(135deg, #4f8ef7, #7c5cfc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {n}
              </div>
              <div style={{ fontSize: 13, color: "#5a6380", marginTop: 2 }}>
                {l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
      >
        <span
          style={{ fontSize: 11, color: "#5a6380", letterSpacing: "0.15em" }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(180deg, #5a6380, transparent)",
          }}
        />
      </motion.div>
    </Element>
  );
}
