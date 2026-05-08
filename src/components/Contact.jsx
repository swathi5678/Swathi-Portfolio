import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin, FiCode, FiPhone } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:text-white' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: FiCode, href: personalInfo.leetcode, label: 'LeetCode', color: 'hover:text-yellow-400' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-red-400' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => { setStatus('sent'); setForm({ name: '', email: '', subject: '', message: '' }); }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10"
          style={{ background: 'radial-gradient(ellipse, #3b82f6, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Let's Build<br />
            <span className="gradient-text">Something Great</span>
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="text-slate-400 leading-relaxed">
                Whether you have a project in mind, a security challenge to solve, or just want to connect. My inbox is always open. I respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center">
                  <FiMail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-0.5">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm text-white hover:text-blue-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center">
                  <FiMapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-0.5">Location</p>
                  <p className="text-sm text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-slate-600 text-xs uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-500 ${color} hover:border-white/20 transition-all`}
                    title={label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-5 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available for Work</span>
              </div>
              <p className="text-slate-500 text-xs">Open to full-time roles, freelance projects, and research collaborations.</p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/5 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { key: 'name', label: 'Name', placeholder: 'Your name', type: 'text' },
                  { key: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email' },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-slate-400 mb-2">{label}</label>
                    <input
                      type={type}
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      placeholder={placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or idea..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59,130,246,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-sm transition-all disabled:opacity-70 cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              >
                {status === 'sending' ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                ) : status === 'sent' ? (
                  <>✓ Message Sent!</>
                ) : (
                  <><FiSend className="w-4 h-4" /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
