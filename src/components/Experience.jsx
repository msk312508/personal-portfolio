import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="shell">
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">
          The workflow so far <span>— node by node</span>
        </h2>

        <div className="pipeline">
          <motion.div
            className="pipeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />

          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.company}
              className={`pipeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="pipeline-node">
                <span className="node-pulse" />
              </div>

              <div className="pipeline-card glass">
                <span className="period">{job.period}</span>
                <h3>{job.role}</h3>
                <p className="company">
                  {job.company} · {job.location}
                </p>
                <ul>
                  {job.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .pipeline {
          position: relative;
          padding: 20px 0;
        }
        .pipeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          transform-origin: top;
          background: linear-gradient(180deg, var(--accent-teal), var(--accent-violet), var(--accent-coral));
          opacity: 0.5;
        }

        .pipeline-item {
          position: relative;
          width: 50%;
          padding: 0 48px 64px;
        }
        .pipeline-item.left { left: 0; text-align: right; }
        .pipeline-item.right { left: 50%; text-align: left; }

        .pipeline-node {
          position: absolute;
          top: 6px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--bg-void);
          border: 2px solid var(--accent-teal);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pipeline-item.left .pipeline-node { right: -9px; }
        .pipeline-item.right .pipeline-node { left: -9px; }

        .node-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-teal);
          animation: pulse 2.2s ease-out infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(87, 232, 207, 0.5); }
          70% { box-shadow: 0 0 0 10px rgba(87, 232, 207, 0); }
          100% { box-shadow: 0 0 0 0 rgba(87, 232, 207, 0); }
        }

        .pipeline-card {
          display: inline-block;
          text-align: left;
          padding: 26px 28px;
          width: 100%;
          max-width: 460px;
        }
        .period {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-coral);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .pipeline-card h3 {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 600;
          margin: 8px 0 4px;
        }
        .company {
          color: var(--text-muted);
          font-size: 0.88rem;
          margin-bottom: 14px;
        }
        .pipeline-card ul { display: flex; flex-direction: column; gap: 8px; }
        .pipeline-card li {
          position: relative;
          padding-left: 16px;
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-muted);
        }
        .pipeline-card li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-violet);
        }

        @media (max-width: 800px) {
          .pipeline-line { left: 18px; }
          .pipeline-item, .pipeline-item.left, .pipeline-item.right {
            width: 100%;
            left: 0;
            text-align: left;
            padding: 0 0 48px 48px;
          }
          .pipeline-item.left .pipeline-node,
          .pipeline-item.right .pipeline-node {
            left: 10px;
            right: auto;
          }
          .pipeline-card { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
