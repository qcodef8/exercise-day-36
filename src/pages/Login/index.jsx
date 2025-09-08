import React from "react";
import styles from "./Login.module.css";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";

function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.brand}>
                    <img src={logo} alt="Fullstack" />
                    <span>FULLSTACK</span>
                </div>
                <h2 className={styles.title}>Đăng Nhập</h2>
                <p className={styles.subtitle}>Chào mừng bạn trở lại</p>

                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" placeholder="Email của bạn" />
                </div>
                <div className={styles.formGroup}>
                    <label>Mật khẩu</label>
                    <input type="password" placeholder="Mật khẩu của bạn" />
                </div>
                <Button className={styles.submit} variant="help">
                    Đăng nhập
                </Button>
                <p className={styles.terms}>
                    Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng
                    ý với điều khoản sử dụng của chúng tôi.
                </p>
            </div>
        </div>
    );
}

export default Login;
