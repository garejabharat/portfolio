import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.4 + 0.1,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(91,141,238,${d.o})`;
        ctx.fill();
      });
      // draw connections
      dots.forEach((a, i) =>
        dots.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(91,141,238,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }),
      );
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <Element
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "6rem 2rem 4rem",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.6,
        }}
      />

      {/* Glow blobs */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(91,141,238,0.12) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
          bottom: "15%",
          right: "10%",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 720 }}>
        {/* Badge */}
        <div
          className="fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.35rem 1rem",
            borderRadius: 100,
            border: "1px solid rgba(91,141,238,0.3)",
            background: "rgba(91,141,238,0.08)",
            color: "#7aadff",
            fontSize: "0.8rem",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#5b8dee",
              animation: "pulse 2s infinite",
              display: "inline-block",
            }}
          />
          Open to work
        </div>

        <h1
          className="fade-up delay-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 8vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
          }}
        >
          Bharat{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #5b8dee 20%, #7c3aed 60%, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Gareja
          </span>
        </h1>

        <p
          className="fade-up delay-2"
          style={{
            fontSize: "1.2rem",
            color: "var(--text2)",
            maxWidth: 540,
            margin: "0 auto 0.75rem",
            lineHeight: 1.65,
          }}
        >
          React JS Developer crafting fast, responsive, and elegant web
          experiences.
        </p>
        <p
          className="fade-up delay-3"
          style={{
            fontSize: "0.95rem",
            color: "var(--text3)",
            maxWidth: 480,
            margin: "0 auto 2.5rem",
          }}
        >
          1.5+ years of experience · Redux · TypeScript · Tailwind CSS · REST
          APIs
        </p>

        <div
          className="fade-up delay-4"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:garejabharatk@gmail.com"
            style={{
              padding: "0.85rem 2rem",
              borderRadius: 100,
              background: "linear-gradient(135deg, #5b8dee, #7c3aed)",
              color: "#fff",
              fontWeight: 500,
              fontSize: "0.95rem",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 24px rgba(91,141,238,0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(91,141,238,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow =
                "0 4px 24px rgba(91,141,238,0.35)";
            }}
          >
            Get in touch
          </a>
          <a
            href="https://github.com/garejabharat"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "0.85rem 2rem",
              borderRadius: 100,
              border: "1px solid var(--border2)",
              color: "var(--text)",
              fontWeight: 500,
              fontSize: "0.95rem",
              background: "rgba(255,255,255,0.04)",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border2)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            GitHub ↗
          </a>
        </div>

        {/* Social links */}
        <div
          className="fade-up delay-5"
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            marginTop: "2.5rem",
          }}
        >
          {[
            { label: "GitHub", url: "https://github.com/garejabharat" },
            { label: "LinkedIn", url: "https://linkedin.com/in/bharat-gareja" },
            { label: "Email", url: "mailto:garejabharatk@gmail.com" },
            { label: "Medium", url: "https://medium.com/@garejabharatk" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "var(--text3)",
                fontSize: "0.85rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text3)")
              }
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </Element>
  );
}
