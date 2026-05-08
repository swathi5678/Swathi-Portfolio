import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiCode } from 'react-icons/fi';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FiGithub, href: personalInfo.github },
  { icon: FiLinkedin, href: personalInfo.linkedin },
  { icon: FiCode, href: personalInfo.leetcode },
  { icon: FiMail, href: `mailto:${personalInfo.email}` },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-white"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
              SG
            </div>
            <span className="font-bold text-white">Swathi G</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a key={link.label} href={link.href}
                className="text-slate-500 hover:text-white text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-9 h-9 rounded-lg glass border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/15 transition-all">
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Swathi G. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <FiHeart className="w-3 h-3 text-red-500" /> using React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
