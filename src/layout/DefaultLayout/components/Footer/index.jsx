import { Link } from "react-router";

import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>
                    © 2018 - 2025 F8. Nền tảng học lập trình hàng đầu Việt Nam
                </p>
                <nav className={styles.links}>
                    <Link to="/contact">Liên hệ</Link>
                    <span>·</span>
                    <Link to="/privacy">Chính sách bảo mật</Link>
                </nav>
            </div>
            <div className={styles.border}></div>
        </footer>
    );
}

export default Footer;
