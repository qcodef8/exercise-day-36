import React from "react";
import { NavLink } from "react-router";
import styles from "./AuthSidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRightToBracket,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

function AuthSidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav className={styles.nav}>
                <NavLink
                    to="/auth/login"
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.link} ${styles.active}`
                            : styles.link
                    }>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    Đăng nhập
                </NavLink>
                <NavLink
                    to="/auth/register"
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.link} ${styles.active}`
                            : styles.link
                    }>
                    <FontAwesomeIcon icon={faUserPlus} />
                    Đăng ký
                </NavLink>
            </nav>
        </aside>
    );
}

export default AuthSidebar;
