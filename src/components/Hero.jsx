import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowDown, HiOutlineMail } from 'react-icons/hi';
import { profile } from '../data/portfolioData.js';

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="top" className="hero section">
      <div className="shell hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="hero-copy"
        >
          <p className="eyebrow">Available for opportunities</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.roles[0]}</p>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <HiOutlineMail size={18} /> Contact Me
            </a>
            <a href="#experience" className="btn btn-ghost glass">
              View Work <HiOutlineArrowDown size={16} />
            </a>
          </div>

          <div className="hero-stats">
            {profile.stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="terminal glass"
        >
          <div className="terminal-bar">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
            <span className="terminal-title">whoami.js</span>
          </div>
          <div className="terminal-body">
            <p><span className="tok-key">const</span> <span className="tok-var">developer</span> = {'{'}</p>
            <p className="indent"><span className="tok-prop">role</span>: <span className="tok-str">"{typed}</span><span className="cursor">|</span><span className="tok-str">"</span>,</p>
            <p className="indent"><span className="tok-prop">stack</span>: [<span className="tok-str">"React"</span>, <span className="tok-str">"Node"</span>, <span className="tok-str">"Python"</span>, <span className="tok-str">"ERPNext"</span>],</p>
            <p className="indent"><span className="tok-prop">location</span>: <span className="tok-str">"{profile.location}"</span>,</p>
            <p className="indent"><span className="tok-prop">status</span>: <span className="tok-str">"shipping"</span></p>
            <p>{'}'}</p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 120px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 64px;
          align-items: center;
        }
        .hero-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(2.4rem, 5.4vw, 4.2rem);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }
        .hero-role {
          font-family: var(--font-mono);
          color: var(--accent-violet);
          font-size: 1.05rem;
          margin-bottom: 22px;
        }
        .hero-summary {
          color: var(--text-muted);
          font-size: 1.02rem;
          line-height: 1.7;
          max-width: 540px;
          margin-bottom: 36px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 26px;
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 500;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn-primary {
          background: linear-gradient(135deg, var(--accent-teal), var(--accent-violet));
          color: #080b14;
          font-weight: 600;
          box-shadow: 0 8px 30px rgba(87, 232, 207, 0.18);
        }
        .btn-ghost { color: var(--text-primary); }

        .hero-stats {
          display: flex;
          gap: 40px;
        }
        .stat { display: flex; flex-direction: column; }
        .stat-value {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .terminal {
          padding: 0;
          overflow: hidden;
        }
        .terminal-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 18px;
          border-bottom: 1px solid var(--glass-border);
        }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot-red { background: #ff6159; }
        .dot-amber { background: #ffbd2e; }
        .dot-green { background: #28c840; }
        .terminal-title {
          margin-left: 8px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-dim);
        }
        .terminal-body {
          padding: 26px 22px 30px;
          font-family: var(--font-mono);
          font-size: 0.88rem;
          line-height: 2;
        }
        .indent { padding-left: 22px; }
        .tok-key { color: var(--accent-violet); }
        .tok-var { color: var(--text-primary); }
        .tok-prop { color: var(--accent-teal); }
        .tok-str { color: var(--accent-coral); }
        .cursor {
          color: var(--accent-coral);
          animation: blink 1s step-start infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero { padding-top: 140px; }
        }
      `}</style>
    </section>
  );
}
