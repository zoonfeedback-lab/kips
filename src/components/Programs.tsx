import styles from "./Programs.module.css";

const programs = [
  {
    title: "NEBOSH & IOSH",
    category: "Safety & Health",
    description:
      "International certifications for health, safety, and environmental management careers.",
    featured: true,
  },
  {
    title: "Graphic Designing",
    category: "Creative Arts",
    description: "Adobe Creative Suite, UI/UX, and visual communication.",
  },
  {
    title: "CIT (1 Year)",
    category: "Technology",
    description: "Information technology fundamentals and office productivity.",
  },
  {
    title: "Montessori",
    category: "Education",
    description: "Early teaching methodologies for aspiring educators.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2>Evening Programs</h2>
          <p>
            Master professional skills with our industry-aligned evening courses designed
            for working professionals and students.
          </p>
        </div>
        <a href="#contact" className={styles.explore}>
          Explore All Courses
        </a>
      </div>

      <div className={styles.grid}>
        {programs.map((program) => (
          <article
            key={program.title}
            className={`${styles.card} ${program.featured ? styles.featured : ""}`}
          >
            <span className={styles.category}>{program.category}</span>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <span className={styles.cardLink}>Learn Details</span>
          </article>
        ))}
      </div>
    </section>
  );
}

