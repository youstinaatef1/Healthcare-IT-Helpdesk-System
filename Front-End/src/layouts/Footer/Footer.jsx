import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>

      {/* LEFT */}
      <div className={styles.left}>
        <p>
          © 2026 Ministry of Health — IT Helpdesk System
        </p>
      </div>

      {/* CENTER */}
      <div className={styles.center}>
        <span className={styles.status}></span>

        <p>System Operational</p>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <p>Version 4.0.12</p>
      </div>

    </footer>
  );
}

export default Footer;