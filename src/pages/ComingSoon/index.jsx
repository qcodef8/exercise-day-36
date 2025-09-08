import React from "react";
import styles from "./ComingSoon.module.css";
import Button from "../../components/Button";
import { Link } from "react-router";

function ComingSoon() {
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.big}>COMING SOON</h1>
            <h2 className={styles.title}>Trang đang được hoàn thiện ✨</h2>
            <p className={styles.subtitle}>
                Chúng tôi đang làm việc chăm chỉ để mang đến cho bạn một trải
                nghiệm tốt nhất. Trang này sẽ sớm được cập nhật trong thời gian
                tới.
            </p>
            <Button as={Link} to="/" variant="help">
                Về trang chủ
            </Button>
        </section>
    );
}

export default ComingSoon;
