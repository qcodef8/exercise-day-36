import { NavLink } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGauge,
    faUsers,
    faGear,
    faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./AdminSidebar.module.css";

function AdminSidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav className={styles.nav}>
                <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.link} ${styles.active}`
                            : styles.link
                    }>
                    <FontAwesomeIcon icon={faGauge} />
                    Dashboard
                </NavLink>
                <NavLink
                    to="/coming-soon"
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.link} ${styles.active}`
                            : styles.link
                    }>
                    <FontAwesomeIcon icon={faUsers} />
                    Users
                </NavLink>
                <NavLink
                    to="/coming-soon"
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.link} ${styles.active}`
                            : styles.link
                    }>
                    <FontAwesomeIcon icon={faGear} />
                    Settings
                </NavLink>
                <NavLink to="/auth/login" className={styles.link}>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    Login
                </NavLink>
            </nav>
        </aside>
    );
}

export default AdminSidebar;
