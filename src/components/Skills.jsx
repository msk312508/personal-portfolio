import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="shell">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">
          Tools I reach for <span>daily</span>
        </h2>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="skill-card glass"
            >
              <h3>{group.category}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .skill-card {
          padding: 28px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .skill-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.28);
        }
        .skill-card h3 {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 18px;
          color: var(--accent-teal);
        }
        .chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .chip {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .chip:hover {
          color: var(--text-primary);
          border-color: var(--accent-violet);
        }

        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
