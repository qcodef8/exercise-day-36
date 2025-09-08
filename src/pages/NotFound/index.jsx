import { Link } from "react-router";

import styles from "./NotFound.module.css";

import Button from "../../components/Button";

function NotFound() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.code}>404</div>
            <h2 className={styles.title}>Không tìm thấy nội dung 😔</h2>
            <p className={styles.subtitle}>
                Đường dẫn của nội dung này đã bị thay đổi hoặc không còn tồn
                tại.
            </p>
            <Button as={Link} to="/" variant="help">
                Về trang chủ
            </Button>
        </section>
    );
}

export default NotFound;
