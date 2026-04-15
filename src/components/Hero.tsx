import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.grid}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Admissions 2026-27</span>
          <h1 className={styles.title}>
            KIPS
            <br />
            Academy
          </h1>
          <p className={styles.description}>
            Excellence in education and technical mastery through our{" "}
            <strong>Evening Skill Development Program</strong>.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryCta}>
              Enroll Now
            </a>
            <a href="#programs" className={styles.secondaryCta}>
              View Programs
            </a>
          </div>
        </div>

        <aside className={styles.featureCard}>
          <div className={styles.featureVisual}>
            <div className={styles.screenGlow} />
            <div className={styles.presenter} />
            <div className={styles.audienceLeft} />
            <div className={styles.audienceRight} />
          </div>
          <div className={styles.featureMeta}>
            <span className={styles.badge} />
            <div>
              <strong>HEC Recognized</strong>
              <p>Quality standard in technical education</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

