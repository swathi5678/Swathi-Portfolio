import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
};

const focuses = [
  { icon: '🤖', title: 'AI Engineering', desc: 'Building ML pipelines, risk classification models, and intelligent automation systems using Python, XGBoost, and Scikit-Learn.' },
  { icon: '🛡️', title: 'Cybersecurity', desc: 'CTF competitions, network security tools, fraud detection systems, and cybersecurity intelligence platforms.' },
  { icon: '📊', title: 'Data Analytics', desc: 'End-to-end data pipelines, sales forecasting, customer segmentation, and business intelligence dashboards.' },
  { icon: '⚡', title: 'Full Stack Dev', desc: 'React-based web applications, Streamlit data apps, and REST APIs. From prototype to production deployment.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Engineer. Researcher.<br />
            <span className="gradient-text">Builder.</span>
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-6">
            {[
              "I'm a Computer Science engineer specialising in Cybersecurity from SRM Easwari College of Engineering, Chennai. I build intelligent systems that solve real problems, from ML-powered fraud detection to cybersecurity intelligence platforms.",
              "My experience spans AI engineering at Infosys Springboard (building telemedicine ML systems) and data analytics at Roca Bathroom Products (automating sales pipelines that cut manual effort by 80%). I bring both technical depth and measurable business impact.",
              "Outside of work, I compete in CTF challenges on pwn.college, organize cybersecurity events as part of Null Chennai Student Chapter, and grind LeetCode. I believe the best engineers ship things that matter and never stop learning.",
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="text-slate-400 text-base leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            {/* Tech stack pills */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex flex-wrap gap-2 pt-4"
            >
              {['Python', 'React', 'XGBoost', 'Scikit-Learn', 'Pandas', 'NetworkX', 'Streamlit', 'JavaScript'].map((tech) => (
                <span key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-blue-300 glass border border-blue-500/20">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Focus cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focuses.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/20 transition-all group cursor-default"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
