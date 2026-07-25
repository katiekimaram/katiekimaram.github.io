import { useState } from 'react';
import useTheme from '../hooks/useTheme';
import styles from '../styles/Footer.module.sass';

const socials = [
  {
    href: 'https://github.com/katiekimaram',
    label: 'GitHub',
    path: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
  {
    href: 'https://www.linkedin.com/in/katiekimaram/',
    label: 'LinkedIn',
    path: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    href: 'https://www.instagram.com/katievaxen/',
    label: 'Instagram',
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    href: 'https://twitter.com/vaxenvixen',
    label: 'Twitter',
    path: (
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    ),
  },
  {
    href: 'https://codepen.io/katiekimaram',
    label: 'Codepen',
    path: (
      <>
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
        <polyline points="2 15.5 12 8.5 22 15.5" />
        <line x1="12" y1="2" x2="12" y2="8.5" />
      </>
    ),
  },
];

export default function Footer() {
  const { theme, toggleTheme } = useTheme();
  const [motionOn, setMotionOn] = useState(true);

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.fxToggle}>
        <button
          type="button"
          aria-label="Toggle motion"
          title="Toggle motion"
          onClick={() => setMotionOn((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <polygon points="6 3 20 12 6 21 6 3" />
          </svg>
        </button>
        <button type="button" aria-label="Toggle dark mode" title="Toggle dark mode" onClick={toggleTheme}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            {theme === 'dark' ? (
              <>
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </>
            ) : (
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            )}
          </svg>
        </button>
      </div>

      <div className={styles.signature}>
        <div className={`${styles.sigRow} ${styles.loc}`}>
          austin, tx
          <span className={styles.line} />
        </div>
        <div className={`${styles.sigRow} ${styles.mail}`}>
          <a href="mailto:me@katiekim.dev">me@katiekim.dev</a>
          <span className={styles.line} />
        </div>
        <div className={`${styles.sigRow} ${styles.social} ${!motionOn ? styles.noMotion : ''}`}>
          <div className={styles.socialRow}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {s.path}
                </svg>
              </a>
            ))}
          </div>
          <span className={styles.line} />
        </div>
      </div>
    </footer>
  );
}
