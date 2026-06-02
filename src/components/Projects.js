import React from 'react';

const projects = [
  {
    title: 'E-Commerce Application',
    desc: 'Full-featured e-commerce web app with product listing, cart functionality, and Redux global state management.',
    tags: ['React.js', 'Redux', 'Material UI', 'REST API'],
    icon: '🛒',
    color: '#5b8dee',
    github: 'https://github.com/garejabharat',
  },
  {
    title: 'Movies Details App',
    desc: 'Integrated third-party movie API to fetch real-time movie data with responsive UI, movie details, and search functionality.',
    tags: ['React.js', 'API Integration', 'Responsive UI'],
    icon: '🎬',
    color: '#7c3aed',
    github: 'https://github.com/garejabharat',
  },
  {
    title: 'Expense Manager',
    desc: 'Expense tracking web application for managing daily expenses with a categorized dashboard and clean, intuitive UI.',
    tags: ['React.js', 'JavaScript', 'CSS3'],
    icon: '💰',
    color: '#06b6d4',
    github: 'https://github.com/garejabharat',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 2rem', maxWidth: 1000, margin: '0 auto' }}>
      <p style={{
        fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600,
        letterSpacing: '0.12em', color: 'var(--accent)', textTransform: 'uppercase',
        marginBottom: '0.75rem',
      }}>Projects</p>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        fontWeight: 700, marginBottom: '3rem', letterSpacing: '-0.02em',
      }}>
        Things I've built
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.25rem',
      }}>
        {projects.map((p) => (
          <div key={p.title} style={{
            background: 'var(--bg2)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', padding: '1.75rem',
            display: 'flex', flexDirection: 'column', gap: '1rem',
            transition: 'border-color 0.2s, transform 0.2s',
            position: 'relative', overflow: 'hidden',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.color}50`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = ''; }}>

            {/* Glow top-left */}
            <div style={{
              position: 'absolute', top: -40, left: -40, width: 120, height: 120,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${p.color}18 0%, transparent 70%)`,
              pointerEvents: 'none',
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2rem' }}>{p.icon}</span>
              <a href={p.github} target="_blank" rel="noreferrer" style={{
                color: 'var(--text3)', fontSize: '1.1rem',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}>
                ↗
              </a>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem',
                marginBottom: '0.5rem',
              }}>{p.title}</h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: 100,
                  background: `${p.color}12`,
                  color: p.color,
                  border: `1px solid ${p.color}25`,
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
