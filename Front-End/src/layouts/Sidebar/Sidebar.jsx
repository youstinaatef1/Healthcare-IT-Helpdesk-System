import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <div className={styles.logo}>
        <h2>HealthDesk</h2>
      </div>

      <nav className={styles.nav}>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/tickets">Tickets</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>

    </aside>
  );
}

export default Sidebar;