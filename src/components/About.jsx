import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiZap, FiLayers, FiTarget } from "react-icons/fi";

const useInView = (threshold = 0.1) => {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const cards = [
  {
    icon: <FiCode />,
    title: "Clean Code",
    desc: "Writing maintainable, scalable, and well-documented code following best practices.",
  },
  {
    icon: <FiZap />,
    title: "Performance",
    desc: "Optimizing applications for speed, accessibility, and the best user experience.",
  },
  {
    icon: <FiLayers />,
    title: "Components",
    desc: "Building reusable, modular UI components that scale across large applications.",
  },
  {
    icon: <FiTarget />,
    title: "Problem Solving",
    desc: "Finding elegant solutions to complex frontend challenges with creative thinking.",
  },
];

export default function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" ref={ref}>
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">About Me</div>
          <h2 className="section-title">Crafting Digital Experiences</h2>
          <div className="section-divider" />
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              style={{
                fontSize: 16,
                color: "#8892b0",
                lineHeight: 1.9,
                marginBottom: 20,
              }}
            >
              I'm a{" "}
              <span style={{ color: "#4f8ef7", fontWeight: 500 }}>
                React JS Developer
              </span>{" "}
              based in Gandhinagar, Gujarat with 1.5+ years of hands-on
              experience building responsive, performant, and visually engaging
              web applications.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#8892b0",
                lineHeight: 1.9,
                marginBottom: 20,
              }}
            >
              My expertise lies in React.js, Redux, TypeScript, and modern
              styling tools like Tailwind CSS and Material UI. I focus on
              writing clean, reusable component architectures and seamless API
              integrations.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#8892b0",
                lineHeight: 1.9,
                marginBottom: 36,
              }}
            >
              Beyond coding, I enjoy{" "}
              <span style={{ color: "#00e5c3", fontWeight: 500 }}>
                teaching coding on YouTube
              </span>
              , traveling, and photography. I believe in continuous learning and
              staying at the forefront of frontend technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                className="glass"
                whileHover={{ y: -4, borderColor: "rgba(79,142,247,0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{
                  padding: "24px 20px",
                  cursor: "default",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{ fontSize: 24, color: "#4f8ef7", marginBottom: 12 }}
                >
                  {c.icon}
                </div>
                <div
                  style={{
                    fontFamily: "Syne",
                    fontWeight: 700,
                    fontSize: 15,
                    marginBottom: 8,
                    color: "#f0f2ff",
                  }}
                >
                  {c.title}
                </div>
                <div
                  style={{ fontSize: 13, color: "#5a6380", lineHeight: 1.7 }}
                >
                  {c.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { #about .section > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
