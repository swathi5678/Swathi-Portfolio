import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };
    window.addEventListener('mousemove', move);

    let raf;
    const animate = () => {
      glowPos.current.x += (pos.current.x - glowPos.current.x) * 0.08;
      glowPos.current.y += (pos.current.y - glowPos.current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowPos.current.x - 200}px, ${glowPos.current.y - 200}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const addHover = () => cursorRef.current?.classList.add('scale-[2.5]');
    const removeHover = () => cursorRef.current?.classList.remove('scale-[2.5]');
    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-blue-400 pointer-events-none z-[9999] transition-transform duration-75 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[9998]"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
