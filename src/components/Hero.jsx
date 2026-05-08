import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiCode } from 'react-icons/fi';

const roles = ['AI Engineer', 'Data Scientist', 'Cybersecurity Enthusiast', 'Full Stack Developer', 'Problem Solver'];

function TypewriterText({ texts }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Radial glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(139,92,246,0.2) 40%, transparent 70%)' }}
      />
      {/* Top glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.3) 0%, transparent 70%)' }}
      />
    </div>
  );
}

const socialLinks = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiCode, href: personalInfo.leetcode, label: 'LeetCode' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const stats = [
  { value: '6+', label: 'Projects Shipped' },
  { value: '300+', label: 'LeetCode Solved' },
  { value: '100+', label: 'pwn.college CTFs' },
  { value: '80%', label: 'Efficiency Gains' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-4 leading-none tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 h-12 flex items-center"
          >
            <TypewriterText texts={roles} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59,130,246,0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
            >
              View My Work <FiArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              href={personalInfo.resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base glass border border-white/10 text-white hover:border-blue-500/40 transition-all"
            >
              <FiDownload className="w-4 h-4" /> Download Resume
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 mb-16"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 transition-all"
                title={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass rounded-2xl p-4 text-center border border-white/5 hover:border-blue-500/20 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-black gradient-text-blue leading-none mb-1.5">{stat.value}</div>
                <div className="text-slate-400 text-xs font-medium leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
