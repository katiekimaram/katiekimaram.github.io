import styles from '../styles/Logo.module.sass';

export default function Logo() {
  return (
    <svg className={styles.logo} viewBox="0 0 44 44" aria-label="Katie Kim logo">
      <circle cx="22" cy="22" r="20" />
      <text x="22" y="29" textAnchor="middle">
        KK
      </text>
    </svg>
  );
}
