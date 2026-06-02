import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const m = (e) => setPos({ x: e.clientX, y: e.clientY });
    const md = (e) => setDot({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', m);
    window.addEventListener('mousemove', md);

    const over = (e) => { if (e.target.closest('a, button, [role=button]')) setHover(true); };
    const out = (e) => { if (!e.target.closest('a, button, [role=button]')) setHover(false); };
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    return () => {
      window.removeEventListener('mousemove', m);
      window.removeEventListener('mousemove', md);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <motion.div
        animate={{ x: pos.x - 16, y: pos.y - 16, scale: hover ? 1.6 : 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 18 }}
        style={{
          position: 'fixed', top: 0, left: 0, width: 32, height: 32, borderRadius: '50%',
          border: '1.5px solid rgba(79,142,247,0.6)', pointerEvents: 'none', zIndex: 9999,
          mixBlendMode: 'difference',
        }}
      />
      <motion.div
        animate={{ x: dot.x - 3, y: dot.y - 3 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{
          position: 'fixed', top: 0, left: 0, width: 6, height: 6, borderRadius: '50%',
          background: '#4f8ef7', pointerEvents: 'none', zIndex: 9999,
        }}
      />
    </>
  );
}
