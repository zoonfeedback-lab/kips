import styles from "./BranchNetwork.module.css";

const branches = [
  { city: "Abbottabad", detail: "Main Campus, Supply Road" },
  { city: "Haripur", detail: "GT Road Academic Center" },
  { city: "Shinkiari", detail: "Near Girls Degree College" },
  { city: "Mansehra", detail: "Karakoram Highway Campus" },
];

export default function BranchNetwork() {
  return (
    <section id="branches" className={styles.section}>
      <div className={styles.content}>
        <div>
          <h2>Branch Network</h2>
          <div className={styles.branchGrid}>
            {branches.map((branch) => (
              <article key={branch.city} className={styles.branchCard}>
                <h3>{branch.city}</h3>
                <p>{branch.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.mapCard} aria-hidden="true">
          <div className={styles.mapGlow} />
          {[
            { top: "18%", left: "64%" },
            { top: "30%", left: "48%" },
            { top: "37%", left: "74%" },
            { top: "43%", left: "34%" },
            { top: "56%", left: "57%" },
            { top: "66%", left: "45%" },
          ].map((pin) => (
            <span
              key={`${pin.top}-${pin.left}`}
              className={styles.pin}
              style={{ top: pin.top, left: pin.left }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

