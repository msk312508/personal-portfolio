import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { profile } from '../data/portfolioData.js';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="shell navbar-inner">
        <a href="#top" className="brand glass">
          <span className="brand-mark">{initials}</span>
        </a>

        <nav className="nav-links glass">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={profile.resumeUrl} className="resume-btn glass">
          Resume
        </a>

        <button
          className="nav-toggle glass"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav glass"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={profile.resumeUrl} onClick={() => setOpen(false)}>
              Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 20px 32px;
          transition: padding 0.3s ease;
        }
        .navbar.is-scrolled { padding: 12px 32px; }

        .navbar-inner {
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .brand {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .brand-mark {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.95rem;
          background: linear-gradient(135deg, var(--accent-teal), var(--accent-violet));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px;
          border-radius: 999px;
          flex: 1;
          justify-content: center;
          max-width: 460px;
        }
        .nav-links a {
          font-size: 0.88rem;
          color: var(--text-muted);
          padding: 8px 16px;
          border-radius: 999px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-links a:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.06);
        }

        .resume-btn {
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-primary);
          flex-shrink: 0;
        }
        .resume-btn:hover { background: var(--glass-bg-strong); }

        .nav-toggle {
          display: none;
          width: 44px;
          height: 44px;
          border-radius: 14px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          color: var(--text-primary);
        }

        .mobile-nav {
          display: none;
        }

        @media (max-width: 800px) {
          .nav-links, .resume-btn { display: none; }
          .nav-toggle { display: flex; }
          .mobile-nav {
            display: flex;
            flex-direction: column;
            margin: 10px 32px 0;
            padding: 12px;
            border-radius: 18px;
            gap: 4px;
          }
          .mobile-nav a {
            padding: 12px 16px;
            border-radius: 12px;
            color: var(--text-muted);
            font-size: 0.95rem;
          }
          .mobile-nav a:hover { background: rgba(255,255,255,0.06); color: var(--text-primary); }
        }

        @media (max-width: 480px) {
          .navbar, .navbar.is-scrolled { padding: 16px; }
          .mobile-nav { margin: 10px 0 0; }
        }
      `}</style>
    </header>
  );
}
