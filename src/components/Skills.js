import React from 'react';

const skillGroups = [
  {
    title: 'Frontend',
    icon: '⚡',
    color: '#5b8dee',
    skills: ['React.js', 'Redux', 'React Hooks', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    title: 'UI & Styling',
    icon: '🎨',
    color: '#7c3aed',
    skills: ['Tailwind CSS', 'Material UI', 'HTML5', 'CSS3 / SCSS', 'Bootstrap'],
  },
  {
    title: 'Backend & DB',
    icon: '🛠',
    color: '#06b6d4',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST API Integration'],
  },
  {
    title: 'Tools & Concepts',
    icon: '🔧',
    color: '#10b981',
    skills: ['Git / GitHub / GitLab', 'NPM', 'Agile Development', 'Performance Optimization', 'Responsive Design'],
  },
];

const SectionLabel = ({ children }) => (
  <p style={{
    fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600,
    letterSpacing: '0.12em', color: 'var(--accent)', textTransform: 'uppercase',
    marginBottom: '0.75rem',
  }}>{children}</p>
);

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 2rem', maxWidth: 1000, margin: '0 auto' }}>
      <SectionLabel>Technical skills</SectionLabel>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        fontWeight: 700, marginBottom: '3rem', letterSpacing: '-0.02em',
      }}>
        What I work with
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
      }}>
        {skillGroups.map((group) => (
          <div key={group.title} style={{
            background: 'var(--bg2)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', padding: '1.5rem',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${group.color}40`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = ''; }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{group.icon}</div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
              color: group.color, marginBottom: '1rem',
            }}>{group.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.skills.map(skill => (
                <span key={skill} style={{
                  fontSize: '0.8rem', padding: '0.3rem 0.7rem',
                  borderRadius: 100,
                  background: `${group.color}14`,
                  color: 'var(--text2)',
                  border: `1px solid ${group.color}22`,
                }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
