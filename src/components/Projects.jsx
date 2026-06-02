import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const useInView = () => {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const projects = [
  {
    title: 'E-Shopping Website',
    desc: 'Modern responsive e-commerce application built with React JS. Features product browsing, shopping cart, category filtering, and a clean responsive UI with seamless user experience.',
    tech: ['React JS', 'Redux', 'Material UI', 'REST API'],
    live: 'https://e-shopping-swart.vercel.app/',
    github: 'https://github.com/garejabharat',
    emoji: '🛒',
    color: '#4f8ef7',
    featured: true,
  },
  {
    title: 'Movies Details App',
    desc: 'React application integrating a third-party movie API to fetch real-time data. Includes search functionality, movie details pages, and a clean responsive interface.',
    tech: ['React JS', 'API Integration', 'CSS3', 'React Router'],
    live: '#',
    github: 'https://github.com/garejabharat',
    emoji: '🎬',
    color: '#7c5cfc',
  },
  {
    title: 'Expense Manager',
    desc: 'Full-featured expense tracking web app for managing daily finances. Categorized expense dashboard with charts, clean UI, and intuitive data management.',
    tech: ['React JS', 'Redux', 'Tailwind CSS', 'Charts'],
    live: '#',
    github: 'https://github.com/garejabharat',
    emoji: '💰',
    color: '#00e5c3',
  },
  {
    title: 'Coming Soon',
    desc: 'Next exciting project under development. Stay tuned for something amazing built with the latest React ecosystem tools and modern web technologies.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    live: '#',
    github: '#',
    emoji: '🚀',
    color: '#f7c94f',
    placeholder: true,
  },
];

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" ref={ref}>
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'var(--surface)', border: `1px solid ${p.featured ? `${p.color}44` : 'var(--border)'}`,
                borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s ease',
                opacity: p.placeholder ? 0.6 : 1,
                display: 'flex', flexDirection: 'column'
              }}
            >
              {/* Card header */}
              <div style={{
                padding: 32, paddingBottom: 24,
                background: `radial-gradient(ellipse at top right, ${p.color}15 0%, transparent 70%)`,
                borderBottom: '1px solid var(--border)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ fontSize: 40 }}>{p.emoji}</div>
                  {p.featured && (
                    <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 12, background: `${p.color}22`, color: p.color, fontWeight: 600 }}>Featured</span>
                  )}
                </div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 20, color: '#f0f2ff', marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#8892b0', lineHeight: 1.7 }}>{p.desc}</p>
              </div>

              {/* Tech stack */}
              <div style={{ padding: '16px 24px', display: 'flex', flexWrap: 'wrap', gap: 8, borderBottom: '1px solid var(--border)' }}>
                {p.tech.map(t => (
                  <span key={t} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: '#8892b0', fontWeight: 500 }}>{t}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ padding: '16px 24px', display: 'flex', gap: 16, marginTop: 'auto' }}>
                <a href={p.github} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#8892b0', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f0f2ff'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8892b0'}
                >
                  <FiGithub size={15} /> Code
                </a>
                <a href={p.live} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: p.color, textDecoration: 'none', fontWeight: 500 }}
                >
                  <FiExternalLink size={15} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
