import logo from "../../assets/images (1).png";
import styles from "./Navbar.module.css";

import {
  FaBell,
  FaQuestionCircle,
  FaSearch,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className={styles.navbar}>

      {/* Left Section */}
      <div className={styles.left}>
        <img src={logo} alt="logo" className={styles.logo} />

        <h2 className={styles.title}>
          MOH IT Helpdesk
        </h2>
      </div>

      {/* Search Box */}
      <div className={styles.searchBox}>
        <FaSearch className={styles.searchIcon} />

        <input
          type="text"
          placeholder="Search systems, tickets, or users..."
        />
      </div>

      {/* Right Section */}
      <div className={styles.right}>

        <FaBell className={styles.icon} />

        <FaQuestionCircle className={styles.icon} />

        <div className={styles.profile}>
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />

          <span>Dr. Ahmed</span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;