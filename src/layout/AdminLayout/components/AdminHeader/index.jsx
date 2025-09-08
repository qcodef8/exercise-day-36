import { Link } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faArrowPointer,
    faComment,
    faBell,
} from "@fortawesome/free-solid-svg-icons";

// ? Assets
import logoImage from "../../../../assets/images/logo.png";
import avtImage from "../../../../assets/images/avatar.jpg";

// ? Styles
import styles from "./AdminHeader.module.css";

// ? Components
import Button from "../../../../components/Button";

function AdminHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo and Brand */}
                <Link to="/" className={styles.brand}>
                    <div className={styles.logo}>
                        <img
                            src={logoImage}
                            alt="Logo"
                            className={styles.logoImg}
                        />
                    </div>
                    <span className={styles.brandName}>Day 36</span>
                </Link>

                {/* Actions */}
                <div className={styles.actions}>
                    <Button variant="help" rounded className={styles.createBtn}>
                        <FontAwesomeIcon icon={faPlus} />
                        Create
                    </Button>

                    <Button
                        variant="secondary"
                        rounded
                        className={styles.iconBtn}
                        aria-label="Pointer">
                        <FontAwesomeIcon icon={faArrowPointer} />
                    </Button>

                    <Button
                        variant="secondary"
                        rounded
                        className={styles.iconBtn}
                        aria-label="Comments">
                        <FontAwesomeIcon icon={faComment} />
                    </Button>

                    <Button
                        variant="secondary"
                        rounded
                        className={styles.iconBtn}
                        aria-label="Notifications">
                        <FontAwesomeIcon icon={faBell} />
                    </Button>

                    <div className={styles.profile}>
                        <img
                            src={avtImage}
                            alt="Profile"
                            className={styles.profileImg}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AdminHeader;
