import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <h2>Ready to start your journey at KIPS?</h2>
          <p>
            Our admissions counselors are ready to help you find the perfect program
            for your career goals.
          </p>
          <ul className={styles.contactList}>
            <li>0334-9267992 | 0301-9884455</li>
            <li>admissions@kipsacademy.edu</li>
          </ul>
        </div>

        <form className={styles.form}>
          <label>
            Full Name
            <input type="text" placeholder="John Doe" />
          </label>
          <label>
            Select Program
            <select defaultValue="NEBOSH/Safety">
              <option>NEBOSH/Safety</option>
              <option>Graphic Designing</option>
              <option>CIT (1 Year)</option>
              <option>Montessori Training</option>
            </select>
          </label>
          <button type="submit">Request Prospectus</button>
        </form>
      </div>
    </section>
  );
}

