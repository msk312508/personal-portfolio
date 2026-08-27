import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData.js';

const facts = [
  { label: 'Focus', value: 'ERP & Workflow Automation' },
  { label: 'Core Stack', value: 'MERN + Python' },
  { label: 'Based in', value: 'Chennai, India' },
  { label: 'Currently', value: 'ERP Analyst @ Dynatherm Alloys' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="shell">
        <p className="eyebrow">About</p>
        <h2 className="section-title">
          Turning business logic into <span>working software</span>
        </h2>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="about-text glass"
          >
            <p>{profile.summary}</p>
            <p className="about-sub">
              My work sits at the intersection of front-end craft and backend systems —
              designing dashboards, automating order workflows, and building the ERP tooling
              that keeps manufacturing operations running.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-facts glass"
          >
            {facts.map((f) => (
              <div key={f.label} className="fact-row">
                <span className="fact-label">{f.label}</span>
                <span className="fact-value">{f.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 28px;
        }
        .about-text, .about-facts { padding: 36px; }
        .about-text p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 1rem;
        }
        .about-sub { margin-top: 18px; }

        .about-facts {
          display: flex;
          flex-direction: column;
          gap: 18px;
          justify-content: center;
        }
        .fact-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--glass-border);
        }
        .fact-row:last-child { border-bottom: none; padding-bottom: 0; }
        .fact-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-dim);
        }
        .fact-value {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        @media (max-width: 800px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
