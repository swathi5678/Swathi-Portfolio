import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { projects } from '../data/portfolio';
import { FiExternalLink, FiGithub, FiX, FiArrowRight } from 'react-icons/fi';

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        style={{ background: 'rgba(2,4,8,0.9)', backdropFilter: 'blur(20px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="glass-strong rounded-3xl p-8 max-w-2xl w-full border border-white/10 relative"
          onClick={(e) => e.stopPropagation()}
          style={{ boxShadow: `0 0 60px ${project.glow}` }}
        >
          <button onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
            <FiX />
          </button>

          {/* Header */}
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-white mb-4 bg-gradient-to-r ${project.color}`}>
            {project.category}
          </div>

          <h3 className="text-2xl font-black text-white mb-3">{project.title}</h3>
          <p className="text-slate-400 leading-relaxed mb-6">{project.longDesc}</p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.metrics.map((m) => (
              <div key={m} className="glass rounded-xl p-3 text-center border border-white/5">
                <p className="text-white text-xs font-semibold">{m}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/10">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm flex-1 justify-center"
              style={{ background: `linear-gradient(135deg, ${project.color.includes('blue') ? '#3b82f6' : project.color.includes('emerald') ? '#10b981' : project.color.includes('purple') ? '#8b5cf6' : project.color.includes('red') ? '#ef4444' : project.color.includes('sky') ? '#0ea5e9' : '#f59e0b'}, transparent)`, border: '1px solid rgba(255,255,255,0.1)' }}>
              <FiExternalLink /> Live Demo
            </motion.a>
            <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm glass border border-white/10 hover:border-white/20 transition-all">
              <FiGithub /> GitHub
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass rounded-2xl border border-white/5 hover:border-white/10 transition-all overflow-hidden group relative cursor-pointer"
      style={{ boxShadow: hovered ? `0 20px 60px ${project.glow}` : 'none' }}
      onClick={() => onOpen(project)}
    >
      {/* Top gradient bar */}
      <div className={`h-[3px] bg-gradient-to-r ${project.color}`} />

      {/* Mock preview area */}
      <div className="relative h-44 overflow-hidden"
        style={{ background: `linear-gradient(135deg, rgba(10,15,26,0.8), rgba(10,15,26,0.4))` }}>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-2 opacity-60">
              {project.category.includes('AI') ? '🤖' : project.category.includes('SAP') ? '🏢' : project.category.includes('Security') ? '🛡️' : project.category.includes('Full') ? '⚡' : '💻'}
            </div>
            <div className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}>
              {project.category}
            </div>
          </div>
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        {project.featured && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md text-[10px] font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
            FEATURED
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.shortDesc}</p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.metrics.slice(0, 2).map((m) => (
            <span key={m} className="text-[10px] font-medium text-slate-400 px-2 py-1 rounded-md bg-white/5">
              {m}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-md text-[11px] font-medium text-slate-400 bg-white/5 border border-white/5">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 rounded-md text-[11px] text-slate-500">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
            <FiExternalLink className="w-3.5 h-3.5" /> Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
            <FiGithub className="w-3.5 h-3.5" /> GitHub
          </a>
          <button className="ml-auto flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors cursor-pointer">
            Details <FiArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Cybersecurity', 'Data Analytics', 'AI / ML', 'AI + Security'];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute right-0 bottom-0 w-[600px] h-[400px] opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8b5cf6, transparent)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Featured<br />
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                filter === cat
                  ? 'text-white glow-blue'
                  : 'glass text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
              style={filter === cat ? { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' } : {}}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
