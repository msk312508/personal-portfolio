import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/portfolioData.js';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="contact-panel glass"
        >
          <p className="eyebrow">Contact</p>
          <h2 className="contact-title">
            Let's build something <span>reliable</span> together.
          </h2>
          <p className="contact-sub">
            Open to full-time roles and freelance projects involving MERN stack development,
            ERP customization, or workflow automation.
          </p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <HiOutlineMail size={18} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="contact-link">
              <HiOutlinePhone size={18} /> {profile.phone}
            </a>
          </div>

          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noreferrer" className="social-btn glass" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-btn glass" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-panel {
          padding: 64px 48px;
          text-align: center;
        }
        .contact-panel .eyebrow { justify-content: center; }
        .contact-panel .eyebrow::before { display: none; }
        .contact-title {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(1.7rem, 3.4vw, 2.5rem);
          max-width: 640px;
          margin: 0 auto 18px;
        }
        .contact-title span { color: var(--accent-teal); }
        .contact-sub {
          color: var(--text-muted);
          max-width: 480px;
          margin: 0 auto 36px;
          line-height: 1.7;
        }
        .contact-links {
          display: flex;
          justify-content: center;
          gap: 28px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-primary);
          font-size: 0.92rem;
          padding: 10px 4px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .contact-link:hover { border-color: var(--accent-teal); color: var(--accent-teal); }

        .social-row { display: flex; justify-content: center; gap: 14px; }
        .social-btn {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: transform 0.25s ease, color 0.25s ease;
        }
        .social-btn:hover { transform: translateY(-3px); color: var(--accent-violet); }

        @media (max-width: 600px) {
          .contact-panel { padding: 48px 24px; }
        }
      `}</style>
    </section>
  );
}
