import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const useInView = () => {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  color: "#f0f2ff",
  fontSize: 14,
  fontFamily: "DM Sans, sans-serif",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:garejabharatk@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" ref={ref}>
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-divider" />
          <p
            style={{
              fontSize: 16,
              color: "#8892b0",
              maxWidth: 500,
              lineHeight: 1.8,
              marginBottom: 60,
              marginTop: -30,
            }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's build something amazing together.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  icon: <FiMail />,
                  label: "Email",
                  value: "garejabharatk@gmail.com",
                  href: "mailto:garejabharatk@gmail.com",
                  color: "#4f8ef7",
                },
                {
                  icon: <FiLinkedin />,
                  label: "LinkedIn",
                  value: "bharat-gareja",
                  href: "https://linkedin.com/in/bharat-gareja",
                  color: "#7c5cfc",
                },
                {
                  icon: <FiGithub />,
                  label: "GitHub",
                  value: "garejabharat",
                  href: "https://github.com/garejabharat",
                  color: "#00e5c3",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="glass"
                  style={{
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      fontSize: 18,
                      color: c.color,
                      background: `${c.color}14`,
                      padding: 10,
                      borderRadius: 10,
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#5a6380",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: 2,
                      }}
                    >
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: 14,
                          color: "#f0f2ff",
                          textDecoration: "none",
                          fontWeight: 500,
                        }}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontSize: 14,
                          color: "#f0f2ff",
                          fontWeight: 500,
                        }}
                      >
                        {c.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <div>
                  <label
                    style={{
                      fontSize: 12,
                      color: "#5a6380",
                      display: "block",
                      marginBottom: 6,
                      letterSpacing: "0.05em",
                    }}
                  >
                    Name
                  </label>
                  <input
                    style={inputStyle}
                    placeholder="Bharat Gareja"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    onFocus={(e) => (e.target.style.borderColor = "#4f8ef7")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                    }
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: 12,
                      color: "#5a6380",
                      display: "block",
                      marginBottom: 6,
                      letterSpacing: "0.05em",
                    }}
                  >
                    Email
                  </label>
                  <input
                    style={inputStyle}
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    onFocus={(e) => (e.target.style.borderColor = "#4f8ef7")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  style={{
                    fontSize: 12,
                    color: "#5a6380",
                    display: "block",
                    marginBottom: 6,
                    letterSpacing: "0.05em",
                  }}
                >
                  Message
                </label>
                <textarea
                  style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  onFocus={(e) => (e.target.style.borderColor = "#4f8ef7")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #4f8ef7, #7c5cfc)",
                  border: "none",
                  borderRadius: 10,
                  color: "#fff",
                  fontFamily: "Syne",
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                {sent ? (
                  "✓ Message Sent!"
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { #contact .section > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
