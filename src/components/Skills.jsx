import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiTool } from 'react-icons/fi';

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

const skillGroups = [
  {
    icon: <FiCode />, label: 'Frontend', color: '#4f8ef7',
    skills: [
      { name: 'React JS', level: 90 }, { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'TypeScript', level: 75 }, { name: 'Next.js', level: 70 },
      { name: 'Redux Toolkit', level: 82 }, { name: 'React Hooks', level: 88 },
      { name: 'HTML5 / CSS3', level: 92 }, { name: 'React Router', level: 85 },
    ]
  },
  {
    icon: <FiLayout />, label: 'Styling', color: '#7c5cfc',
    skills: [
      { name: 'Tailwind CSS', level: 88 }, { name: 'Material UI', level: 80 },
      { name: 'Bootstrap', level: 82 }, { name: 'SCSS', level: 75 },
    ]
  },
  {
    icon: <FiServer />, label: 'Backend & DB', color: '#00e5c3',
    skills: [
      { name: 'Node.js', level: 65 }, { name: 'Express.js', level: 62 },
      { name: 'REST APIs', level: 85 }, { name: 'MongoDB', level: 58 },
    ]
  },
  {
    icon: <FiTool />, label: 'Tools', color: '#f7c94f',
    skills: [
      { name: 'Git / GitHub', level: 85 }, { name: 'VS Code', level: 92 },
      { name: 'Postman', level: 78 }, { name: 'Vercel', level: 80 },
    ]
  },
];

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: '#c8cfe0' }}>{name}</span>
        <span style={{ fontSize: 12, color: '#5a6380' }}>{level}%</span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: 'easeOut' }}
          style={{ height: '100%', borderRadius: 4, background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" ref={ref} style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">My Expertise</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {skillGroups.map((group, gi) => (
            <motion.div key={group.label} className="glass"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              whileHover={{ borderColor: `${group.color}44` }}
              style={{ padding: '28px 24px', transition: 'all 0.3s ease' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ fontSize: 20, color: group.color, background: `${group.color}18`, padding: 10, borderRadius: 10 }}>
                  {group.icon}
                </div>
                <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 16, color: '#f0f2ff' }}>{group.label}</span>
              </div>
              {group.skills.map((s, i) => (
                <SkillBar key={s.name} {...s} color={group.color} inView={inView} delay={gi * 0.1 + i * 0.08} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
