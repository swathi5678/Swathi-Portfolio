import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../data/portfolio';

const typeColors = {
  'AI Engineering': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  'Data Analytics': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  Development: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  Security: 'text-red-400 bg-red-500/10 border-red-500/20',
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[300px] opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #3b82f6, transparent)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Background</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Experience &<br />
            <span className="gradient-text">Research</span>
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} hidden md:flex items-center justify-center -translate-x-1/2`}>
                  <div className="w-2 h-2 rounded-full bg-white/80" />
                </div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${typeColors[exp.type]}`}>
                          {exp.type}
                        </span>
                        <span className="text-slate-500 text-xs font-mono">{exp.period}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
