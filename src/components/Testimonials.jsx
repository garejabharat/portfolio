import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

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

const testimonials = [
  { name: 'Rahul Mehta', role: 'Startup Founder, Mumbai', text: 'Bharat delivered an exceptional e-commerce frontend. His React expertise and attention to detail were outstanding. The app runs flawlessly and looks amazing.', rating: 5, initials: 'RM', color: '#4f8ef7' },
  { name: 'Priya Sharma', role: 'Product Manager, Bangalore', text: 'Working with Bharat was a pleasure. He understood requirements quickly, asked the right questions, and delivered clean, well-structured React components on time.', rating: 5, initials: 'PS', color: '#7c5cfc' },
  { name: 'Arjun Patel', role: 'Tech Lead, Ahmedabad', text: 'Highly skilled React developer. Bharat optimized our web app performance significantly. His Redux implementation and API integration work was excellent.', rating: 5, initials: 'AP', color: '#00e5c3' },
];

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section id="testimonials" ref={ref} style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="section-label">Client Reviews</div>
          <h2 className="section-title">Testimonials</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name} className="glass"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4, borderColor: `${t.color}33` }}
              style={{ padding: '28px', transition: 'all 0.3s ease', position: 'relative' }}
            >
              <div style={{ fontSize: 48, color: t.color, opacity: 0.2, position: 'absolute', top: 16, right: 24, fontFamily: 'serif', lineHeight: 1 }}>"</div>
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {[...Array(t.rating)].map((_, j) => <FiStar key={j} size={14} style={{ fill: '#f7c94f', color: '#f7c94f' }} />)}
              </div>
              <p style={{ fontSize: 14, color: '#8892b0', lineHeight: 1.8, marginBottom: 24, fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: `${t.color}22`, border: `1px solid ${t.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, color: t.color, fontFamily: 'Syne'
                }}>{t.initials}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#f0f2ff' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#5a6380' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
