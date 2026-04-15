import styles from "./Affiliations.module.css";

const affiliations = [
  "Mashal Technical System",
  "HEC Pakistan",
  "Trade Testing Board",
  "NEBOSH Certified",
];

export default function Affiliations() {
  return (
    <section id="affiliations" className={styles.section}>
      <span className={styles.kicker}>Accredited Excellence</span>
      <h2>Global & National Affiliations</h2>
      <div className={styles.grid}>
        {affiliations.map((name) => (
          <article key={name} className={styles.logoCard}>
            <div className={styles.logoMark}>{name.slice(0, 1)}</div>
            <p>{name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

