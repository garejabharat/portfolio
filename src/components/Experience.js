import React, { useState } from 'react';

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'Freelancer',
    period: 'Jan 2024 – Present',
    type: 'Freelance',
    color: '#5b8dee',
    bullets: [
      'Developed responsive and scalable web applications using React.js and modern JavaScript (ES6+)',
      'Built reusable React components to improve development efficiency and maintainability',
      'Implemented Redux for state management and optimized application performance',
      'Integrated RESTful APIs and handled dynamic data rendering',
      'Improved UI responsiveness and cross-browser compatibility',
      'Delivered user-friendly and maintainable web solutions for clients',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Inexture Solutions',
    period: 'May 2023 – Jan 2024',
    type: 'Full-time',
    color: '#7c3aed',
    bullets: [
      'Developed dynamic and responsive web applications using React.js and JavaScript',
      'Built modular and reusable UI components following best coding practices',
      'Implemented responsive layouts using Tailwind CSS and Material UI',
      'Integrated REST APIs and optimized frontend performance',
      'Debugged UI issues and improved user experience',
      'Worked in Agile development environment with team collaboration',
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section id="experience" style={{ padding: '6rem 2rem', maxWidth: 1000, margin: '0 auto' }}>
      <p style={{
        fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600,
        letterSpacing: '0.12em', color: 'var(--accent)', textTransform: 'uppercase',
        marginBottom: '0.75rem',
      }}>Experience</p>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        fontWeight: 700, marginBottom: '3rem', letterSpacing: '-0.02em',
      }}>
        Where I've worked
      </h2>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Tab list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: 180 }}>
          {jobs.map((j, i) => (
            <button key={j.company} onClick={() => setActive(i)} style={{
              textAlign: 'left', background: 'none', border: 'none',
              padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)',
              borderLeft: `2px solid ${active === i ? j.color : 'var(--border)'}`,
              background: active === i ? `${j.color}10` : 'transparent',
              color: active === i ? 'var(--text)' : 'var(--text2)',
              fontFamily: 'var(--font-body)', fontSize: '0.9rem',
              cursor: 'pointer', transition: 'all 0.2s',
            }}>
              {j.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div key={active} style={{ flex: 1, minWidth: 260, animation: 'fadeUp 0.4s ease both' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>
                {job.title}{' '}
                <span style={{ color: job.color }}>@ {job.company}</span>
              </h3>
              <p style={{ color: 'var(--text3)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{job.period}</p>
            </div>
            <span style={{
              padding: '0.25rem 0.75rem', borderRadius: 100, fontSize: '0.75rem',
              background: `${job.color}18`, color: job.color,
              border: `1px solid ${job.color}30`,
            }}>{job.type}</span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {job.bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.75rem', color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ color: job.color, marginTop: '0.25rem', flexShrink: 0 }}>▹</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
