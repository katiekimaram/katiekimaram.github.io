import styles from '../../styles/About.module.sass';

const skillGroups = [
  {
    label: 'Support & platform operations',
    skills: ['Zendesk Admin', 'Zendesk Explore', 'Incident.io', 'OpsGenie', 'Jira', 'Confluence'],
  },
  {
    label: 'Automation & engineering',
    skills: ['Google Apps Script', 'JavaScript', 'Python', 'Node.js', 'React', 'REST APIs'],
  },
  {
    label: 'Data & reporting',
    skills: ['Google Sheets', 'SQL', 'MongoDB', 'Dashboarding'],
  },
  {
    label: 'Foundations',
    skills: ['Linux', 'Git', 'Cybersecurity', 'Salesforce'],
  },
];

export default function AboutSection() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-title">About me</div>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p>
              I got into building things for the internet young, and it&apos;s turned into a
              career that sits at the intersection of support, systems, and software. These
              days that means designing the operational backbone enterprise teams rely on:
              ticketing architecture, incident workflows, reporting pipelines, and the scripts
              that quietly remove a manual step someone used to dread.
            </p>
            <p>
              I&apos;m currently pursuing an MBA at Western Governors University, alongside a
              background in IT and security and a software engineering certificate from Hack
              Reactor.
            </p>
          </div>
          <div className={styles.skillGroups}>
            {skillGroups.map((group) => (
              <div key={group.label} className={styles.skillBlock}>
                <h3>{group.label}</h3>
                <div className={styles.chips}>
                  {group.skills.map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
