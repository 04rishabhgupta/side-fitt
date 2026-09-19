import { platformData } from '../data';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>SIDBI <span>DeepTech</span></div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#how-it-works" className={styles.navLink}>Process</a>
          <a href="#focus" className={styles.navLink}>Focus Areas</a>
          <a href="#acceleration" className={styles.navLink}>Acceleration</a>
          <a href="#mentors" className={styles.navLink}>Mentors</a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroBg}></div>
          <div className={`container ${styles.heroContent}`}>
            <span className="eyebrow">{platformData.hero.eyebrow}</span>
            <h1 className={styles.heroHeadline}>{platformData.hero.headline}</h1>
            <p className={styles.heroSubheadline}>{platformData.hero.subheadline}</p>
            <p className={styles.heroSupport}>{platformData.hero.supportingLine}</p>
            <a href="#apply" className="btn-primary">{platformData.hero.cta}</a>
          </div>
        </section>

        {/* AT A GLANCE (Stats) */}
        <section className="container">
          <div className={`${styles.glanceGrid} glass`}>
            {platformData.glance.map((stat, i) => (
              <div key={i} className={styles.glanceCard}>
                <div className={styles.glanceValue}>{stat.value}</div>
                <div className={styles.glanceMetric}>{stat.metric}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section container">
          <div className={`glass ${styles.aboutBox}`}>
            <h2 className="section-heading" style={{ textAlign: 'left' }}>{platformData.about.heading}</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>{platformData.about.copy}</p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="section container">
          <h2 className="section-heading">{platformData.howItWorks.heading}</h2>
          <p className="section-subheading">{platformData.howItWorks.subheading}</p>

          <div className={styles.worksGrid}>
            {platformData.howItWorks.steps.map((step) => (
              <div key={step.id} className={`glass ${styles.worksCard}`}>
                <span className={styles.worksStep}>{step.id}</span>
                <h3 style={{ color: 'var(--accent-teal)', marginBottom: '1rem' }}>{step.title}</h3>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{step.headline}</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{step.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', fontStyle: 'italic', color: 'var(--accent-cyan)' }}>
            "{platformData.howItWorks.tagline}"
          </div>
        </section>

        {/* FOCUS AREAS */}
        <section id="focus" className="section container" style={{ background: 'rgba(0,0,0,0.2)', padding: '6rem 2rem', borderRadius: '24px' }}>
          <h2 className="section-heading">{platformData.focusAreas.heading}</h2>
          <p className="section-subheading">{platformData.focusAreas.intro}</p>

          <div className={styles.focusGrid}>
            {platformData.focusAreas.areas.map((area) => (
              <div key={area.id} className={`glass ${styles.focusCard}`}>
                <div className={styles.focusNumber}>{area.id}</div>
                <h3 className={styles.focusDomain}>{area.domain}</h3>
                <p className={styles.focusDetails}>{area.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ACCELERATION TIMELINE */}
        <section id="acceleration" className="section container">
          <h2 className="section-heading">{platformData.acceleration.heading}</h2>

          <div className={styles.timeline}>
            {platformData.acceleration.timeline.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineStage}>{item.stage}</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineFocus}>{item.focus}</div>
                  <div className={styles.timelineOutput}>Output: {item.output}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MENTORS */}
        <section id="mentors" className="section container">
          <h2 className="section-heading">{platformData.mentors.heading}</h2>
          <p className="section-subheading">{platformData.mentors.copy}</p>

          <div className={styles.mentorsGrid}>
            {platformData.mentors.list.map((mentor, i) => (
              <div key={i} className={`glass ${styles.mentorCard}`}>
                <div className={styles.mentorName}>{mentor.name}</div>
                <div className={styles.mentorOrg}>{mentor.org}</div>
                <div className={styles.mentorRole}>{mentor.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* OPERATING PARTNERS */}
        <section id="partners" className="section container">
          <h2 className="section-heading">{platformData.operatingPartners.heading}</h2>
          <p className="section-subheading">{platformData.operatingPartners.copy}</p>

          <div className={styles.partnersGrid}>
            {platformData.operatingPartners.roles.map((partner, i) => (
              <div key={i} className={`glass ${styles.partnerCard}`}>
                <div className={styles.partnerRole}>{partner.role}</div>
                <div className={styles.partnerWho}>{partner.who}</div>
                <p style={{ color: 'var(--text-secondary)' }}>{partner.responsibility}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING / APPLY SECTION */}
        <section id="apply" className={`${styles.closingSection} section`}>
          <div className={`container ${styles.closingGrid}`}>

            {/* Startup Block */}
            <div className={`glass ${styles.closingBlock}`}>
              <h2 className="section-heading" style={{ marginBottom: '1rem' }}>{platformData.closing.startup.heading}</h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>{platformData.closing.startup.subhead}</p>
              <a href="https://accubate.fitt-iitd.in/ext/form/23719/1/apply" className="btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem', display: 'inline-block' }}>
                {platformData.closing.startup.cta} &rarr;
              </a>
            </div>

            {/* Incubator Block */}
            <div className={`glass ${styles.closingBlock}`} style={{ background: 'rgba(10, 25, 47, 0.4)' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{platformData.closing.incubator.heading}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>{platformData.closing.incubator.body}</p>
              <button className="btn-secondary">
                {platformData.closing.incubator.cta} &rarr;
              </button>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.footerLine}>{platformData.footer.institutionalLine}</p>
        </div>
      </footer>
    </>
  );
}
