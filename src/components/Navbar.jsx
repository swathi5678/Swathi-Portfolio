import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'glass-strong py-3 shadow-2xl' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={() => handleNav('#hero')}
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-white"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
              SG
            </div>
            <span className="font-bold text-white hidden sm:block">
              Swathi<span className="gradient-text-blue"> G</span>
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  active === link.href
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href={personalInfo.resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="w-6 h-0.5 bg-white block transition-all" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-white block transition-all" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="w-6 h-0.5 bg-white block transition-all" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-4 right-4 z-[99] glass-strong rounded-2xl p-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a href={personalInfo.resume} download
              className="block mt-2 px-4 py-3 rounded-xl text-center text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
