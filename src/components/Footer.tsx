import styles from "./Footer.module.css";

const linkGroups = [
  {
    title: "Quick Links",
    items: ["About Our Academy", "Admission Policy", "Evening Shift Details", "Campus News"],
  },
  {
    title: "Popular Programs",
    items: ["NEBOSH", "Graphic Designing", "CIT (1-Year)", "Montessori Training"],
  },
  {
    title: "Contact Info",
    items: [
      "Main Campus Supply Road, Abbottabad, Pakistan",
      "0334-9267992",
      "info@kipsacademy.com",
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandBlock}>
          <h3>KIPS Academy</h3>
          <p>
            Dedicated to empowering students through vocational training and academic
            excellence since its inception.
          </p>
          <div className={styles.socials}>
            <span>f</span>
            <span>in</span>
            <span>x</span>
          </div>
        </div>

        {linkGroups.map((group) => (
          <div key={group.title} className={styles.linkGroup}>
            <h4>{group.title}</h4>
            {group.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p>© 2026 KIPS Academy. All rights reserved.</p>
        <div className={styles.legal}>
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

