import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { achievements } from '../data/portfolio';

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="section-padding relative" ref={ref}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Recognition</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Achievements &<br />
            <span className="gradient-text">Milestones</span>
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden cursor-default"
              style={{ '--glow': item.glow }}
            >
              {/* Gradient top */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

              {/* Year badge */}
              <div className="absolute top-4 right-4 text-xs font-mono text-slate-600">{item.year}</div>

              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.04] transition-opacity rounded-2xl`} />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className={`font-bold text-base text-white mb-1 group-hover:bg-gradient-to-r group-hover:${item.color} group-hover:bg-clip-text group-hover:text-transparent transition-all`}>
                  {item.title}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}>
                  {item.subtitle}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
