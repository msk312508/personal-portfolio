import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { education } from '../data/portfolioData.js';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="shell">
        <p className="eyebrow">Education</p>
        <h2 className="section-title">
          Academic <span>background</span>
        </h2>

        <div className="edu-grid">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="edu-card glass"
            >
              <div className="edu-icon">
                <HiOutlineAcademicCap size={22} />
              </div>
              <div>
                <h3>{ed.degree}</h3>
                <p className="edu-school">{ed.school}</p>
                <div className="edu-meta">
                  <span>{ed.period}</span>
                  <span className="dot-sep">•</span>
                  <span>{ed.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .edu-card {
          padding: 28px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: transform 0.3s ease;
        }
        .edu-card:hover { transform: translateY(-4px); }
        .edu-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(166, 133, 250, 0.12);
          color: var(--accent-violet);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .edu-card h3 {
          font-family: var(--font-display);
          font-size: 1.02rem;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .edu-school {
          color: var(--text-muted);
          font-size: 0.86rem;
          margin-bottom: 10px;
        }
        .edu-meta {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-dim);
        }
        .dot-sep { margin: 0 6px; }

        @media (max-width: 900px) {
          .edu-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
