import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiSmartphone, FiLink, FiMonitor } from 'react-icons/fi';

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

const services = [
  { icon: <FiCode />, title: 'Frontend Development', desc: 'Building modern, fast, and accessible web apps using React, Next.js, and TypeScript with best practices.', color: '#4f8ef7' },
  { icon: <FiMonitor />, title: 'React Application Dev', desc: 'End-to-end React application development including state management, routing, and component architecture.', color: '#7c5cfc' },
  { icon: <FiZap />, title: 'Performance Optimization', desc: 'Profiling and optimizing React apps for faster load times, smoother interactions, and better Core Web Vitals.', color: '#00e5c3' },
  { icon: <FiSmartphone />, title: 'Responsive Web Design', desc: 'Mobile-first UI design that looks stunning on every device using Tailwind CSS and modern layout systems.', color: '#f7c94f' },
  { icon: <FiLink />, title: 'API Integration', desc: 'Seamless integration of RESTful APIs and third-party services into your React frontend applications.', color: '#ff6b8a' },
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" ref={ref}>
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="section-label">What I Offer</div>
          <h2 className="section-title">Services</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {services.map((s, i) => (
            <motion.div key={s.title} className="glass"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, borderColor: `${s.color}44`, background: `rgba(255,255,255,0.06)` }}
              style={{ padding: '32px 24px', cursor: 'default', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80, borderRadius: '0 16px 0 80px', background: `${s.color}08` }} />
              <div style={{
                fontSize: 24, color: s.color, marginBottom: 20,
                background: `${s.color}14`, padding: 14, borderRadius: 12,
                display: 'inline-flex', border: `1px solid ${s.color}22`
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 17, color: '#f0f2ff', marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#8892b0', lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
