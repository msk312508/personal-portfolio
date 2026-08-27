import { profile } from '../data/portfolioData.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer-tag">Built with React + Vite</span>
      </div>

      <style>{`
        .footer {
          position: relative;
          z-index: 2;
          padding: 32px 0 40px;
          border-top: 1px solid var(--glass-border);
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--text-dim);
        }
      `}</style>
    </footer>
  );
}
