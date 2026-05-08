import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); setTimeout(() => setVisible(false), 400); return 100; }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
          style={{ background: '#020408' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Logo mark */}
            <div className="relative">
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                SG
              </motion.div>
              <div className="absolute inset-0 rounded-2xl glow-blue animate-pulse-glow" />
            </div>

            <div className="text-center">
              <p className="text-slate-400 text-sm tracking-[0.3em] uppercase">Initializing</p>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <p className="text-slate-600 text-xs font-mono">{Math.min(Math.round(progress), 100)}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
