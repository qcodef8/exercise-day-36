import styles from "./AdminFooter.module.css";

function AdminFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>
                    © 2018 - 2025 F8. Nền tảng học lập trình hàng đầu Việt Nam
                </p>
            </div>
            <div className={styles.border}></div>
        </footer>
    );
}

export default AdminFooter;
