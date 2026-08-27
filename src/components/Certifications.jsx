import { motion } from 'framer-motion';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { certifications } from '../data/portfolioData.js';

export default function Certifications() {
  return (
    <section id="certifications" className="section-tight certifications">
      <div className="shell">
        <p className="eyebrow">Certifications</p>
        <h2 className="section-title">
          Credentials <span>earned</span>
        </h2>

        <div className="cert-grid">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="cert-card glass"
            >
              <HiOutlineBadgeCheck size={26} className="cert-icon" />
              <h3>{c.title}</h3>
              <p>{c.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .cert-card {
          padding: 30px 26px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .cert-card:hover {
          transform: translateY(-4px);
          border-color: rgba(87, 232, 207, 0.4);
        }
        .cert-icon { color: var(--accent-teal); margin-bottom: 14px; }
        .cert-card h3 {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 6px;
          line-height: 1.4;
        }
        .cert-card p {
          color: var(--text-muted);
          font-size: 0.86rem;
        }

        @media (max-width: 900px) {
          .cert-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
