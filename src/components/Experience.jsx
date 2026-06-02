import React from 'react';
import { motion } from 'framer-motion';

const useInView = () => {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Freelancer',
    period: 'Jan 2024 – Present',
    type: 'Full-time',
    color: '#4f8ef7',
    current: true,
    points: [
      'Developed responsive and scalable web applications using React.js and ES6+',
      'Built reusable React components to improve development efficiency',
      'Implemented Redux for state management and performance optimization',
      'Integrated RESTful APIs and handled dynamic data rendering',
      'Delivered user-friendly web solutions for multiple clients',
    ],
    tech: ['React.js', 'Redux', 'TypeScript', 'REST APIs', 'Git'],
  },
  {
    role: 'Frontend Engineer',
    company: 'Inexture Solutions',
    period: 'May 2023 – Jan 2024',
    type: 'Full-time',
    color: '#7c5cfc',
    points: [
      'Developed dynamic web applications using React.js and JavaScript',
      'Built modular and reusable UI components following best coding practices',
      'Implemented responsive layouts using Tailwind CSS and Material UI',
      'Integrated REST APIs and optimized frontend performance',
      'Worked in an Agile development environment with team collaboration',
    ],
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Material UI', 'Agile'],
  },
  {
    role: 'Frontend Development Intern',
    company: 'Future Opportunity',
    period: 'Open',
    type: 'Internship',
    color: '#00e5c3',
    placeholder: true,
    points: ['Looking for exciting internship opportunities to collaborate and grow.'],
    tech: ['React', 'Next.js', 'TypeScript'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" ref={ref} style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="section-label">Career</div>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 20, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(180deg, #4f8ef7, #7c5cfc, transparent)',
            opacity: 0.3
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {experiences.map((exp, i) => (
              <motion.div key={exp.company}
                initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ display: 'flex', gap: 32, paddingLeft: 12, opacity: exp.placeholder ? 0.5 : 1 }}
              >
                {/* Dot */}
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <motion.div
                    animate={exp.current ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      width: 16, height: 16, borderRadius: '50%',
                      background: exp.color, marginTop: 6,
                      boxShadow: exp.current ? `0 0 16px ${exp.color}66` : 'none',
                      border: `2px solid ${exp.color}`,
                    }}
                  />
                </div>

                {/* Content */}
                <motion.div className="glass" whileHover={{ borderColor: `${exp.color}33` }}
                  style={{ flex: 1, padding: '28px', transition: 'all 0.3s ease', marginBottom: 4 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                    <div>
                      <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 18, color: '#f0f2ff', marginBottom: 4 }}>{exp.role}</h3>
                      <div style={{ fontSize: 14, color: exp.color, fontWeight: 500 }}>{exp.company}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 12, padding: '3px 10px', borderRadius: 12, background: `${exp.color}18`, color: exp.color, border: `1px solid ${exp.color}33` }}>{exp.type}</span>
                      {exp.current && <span style={{ fontSize: 12, padding: '3px 10px', borderRadius: 12, background: 'rgba(0,229,195,0.1)', color: '#00e5c3', border: '1px solid rgba(0,229,195,0.2)' }}>Current</span>}
                      <span style={{ fontSize: 12, color: '#5a6380' }}>{exp.period}</span>
                    </div>
                  </div>

                  <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: 20 }}>
                    {exp.points.map((p, pi) => (
                      <li key={pi} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 14, color: '#8892b0', lineHeight: 1.6 }}>
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {exp.tech.map(t => (
                      <span key={t} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: '#8892b0' }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
