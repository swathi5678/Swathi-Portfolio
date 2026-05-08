import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return progress;
}

export function useActiveSection(sections) {
  const [active, setActive] = useState('hero');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);
  return active;
}
