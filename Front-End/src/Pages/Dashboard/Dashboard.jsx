import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.dashboard}>

      <div className={styles.header}>
        <h1>Dashboard</h1>
        <p>Welcome back, Admin 👋</p>
      </div>

   
      <div className={styles.cards}>

        <div className={styles.card}>
          <h3>Total Tickets</h3>
          <p>11</p>
        </div>

        <div className={styles.card}>
          <h3>Open Tickets</h3>
          <p>4</p>
        </div>

        <div className={styles.card}>
          <h3>Closed Tickets</h3>
          <p>2</p>
        </div>

        <div className={styles.card}>
          <h3>Active Users</h3>
          <p>12</p>
        </div>

      </div>

      <div className={styles.section}>
        <h2>Recent Tickets</h2>

        <div className={styles.table}>
          <div className={styles.row}>
            <span>#T-1001</span>
            <span>Login issue</span>
            <span>Open</span>
          </div>

          <div className={styles.row}>
            <span>#T-1002</span>
            <span>Network problem</span>
            <span>Closed</span>
          </div>

          <div className={styles.row}>
            <span>#T-1003</span>
            <span>System crash</span>
            <span>Open</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;