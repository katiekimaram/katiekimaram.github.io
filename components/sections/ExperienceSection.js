import { useState } from 'react';
import experience from '../../data/experience';
import education from '../../data/education';
import styles from '../../styles/Experience.module.sass';

export default function ExperienceSection() {
  const [tab, setTab] = useState('experience');

  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-title">Experience</div>

        <div className={styles.tabSwitch}>
          <button
            type="button"
            className={`${styles.tabBtn} ${tab === 'experience' ? styles.active : ''}`}
            onClick={() => setTab('experience')}
          >
            Experience
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${tab === 'education' ? styles.active : ''}`}
            onClick={() => setTab('education')}
          >
            Education
          </button>
        </div>

        {tab === 'experience' && (
          <div className={styles.timeline}>
            {experience.map((job) => (
              <div className={styles.job} key={`${job.company}-${job.role}`}>
                <div className={styles.dates}>
                  {job.startDate.startsWith('[') ? (
                    <span className="placeholder">{job.startDate}</span>
                  ) : (
                    job.startDate
                  )}
                  <br />
                  to{' '}
                  {job.current ? (
                    <span className={styles.current}>Present</span>
                  ) : job.endDate?.startsWith('[') ? (
                    <span className="placeholder">{job.endDate}</span>
                  ) : (
                    job.endDate
                  )}
                </div>
                <div>
                  <div className={styles.roleRow}>
                    <div className={styles.role}>
                      {job.role.startsWith('[') ? <span className="placeholder">{job.role}</span> : job.role}
                    </div>
                    {job.current && <span className={styles.tag}>Current</span>}
                  </div>
                  <div className={styles.company}>{job.company}</div>
                  <ul>
                    {job.bullets.map((b) => (
                      <li key={b} className={b.startsWith('[') ? 'placeholder' : ''}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'education' && (
          <div className={styles.timeline}>
            {education.map((edu) => (
              <div className={styles.job} key={`${edu.institution}-${edu.degree}`}>
                <div className={styles.dates}>
                  {edu.current ? <span className={styles.current}>{edu.status}</span> : edu.status}
                </div>
                <div>
                  <div className={styles.roleRow}>
                    <div className={styles.role}>{edu.degree}</div>
                  </div>
                  <div className={styles.company}>{edu.institution}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
