import styles from "./footer.module.css";
export default function Footer({ completedTopics, totalTopics }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Topics:{completedTopics}</span>
      <span className={styles.item}>Total Topics:{totalTopics}</span>
    </div>
  );
}
