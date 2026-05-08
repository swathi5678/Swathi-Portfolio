import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' } }),
};

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ scale: 1.02, y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all relative overflow-hidden group cursor-default"
      style={{ boxShadow: hovered ? `0 0 40px ${skill.glow}` : 'none' }}
    >
      {/* Gradient top bar */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${skill.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Background glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.04] transition-opacity rounded-2xl`} />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl">{skill.icon}</span>
          <h3 className={`font-bold text-base bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
            {skill.category}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skill.items.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + i * 0.03 }}
              className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/5 hover:border-white/15 hover:text-white transition-all"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Technical Arsenal</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Skills &<br />
            <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />
          <p className="text-slate-400 mt-6 max-w-xl">
            A comprehensive toolkit spanning AI/ML, cybersecurity, data engineering, and full-stack development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
