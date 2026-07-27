import contact from '../../data/contact';
import styles from '../../styles/Contact.module.sass';

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-title">Contact</div>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <h3>{contact.heading}</h3>
            <p>{contact.blurb}</p>
          </div>
          <div className={styles.details}>
            <div className={styles.row}>
              <span className={styles.label}>Email</span>
              <a className={styles.value} href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>Location</span>
              <span className={styles.value}>{contact.location}</span>
            </div>
            <span className={styles.cta}>
            <div data-tf-live="01KYGWQEH7X7MQWEDDKKJQFZ18"></div><script src="//embed.typeform.com/next/embed.js"></script>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
