// ? Assets
import logo from "../../assets/images/logo.png";

// ? Styles
import styles from "./Register.module.css";

// ? Components
import Button from "../../components/Button";

function Register() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.brand}>
                    <img src={logo} alt="Fullstack" />
                    <span>FULLSTACK</span>
                </div>
                <h2 className={styles.title}>Đăng Ký</h2>
                <p className={styles.subtitle}>Tạo tài khoản mới</p>

                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                        type="email"
                        aria-label="Email Input"
                        placeholder="Email của bạn"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        aria-label="Password Input"
                        placeholder="Mật khẩu của bạn"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Nhập lại mật khẩu</label>
                    <input
                        type="password"
                        aria-label="Confirm Password Input"
                        placeholder="Nhập lại mật khẩu"
                    />
                </div>
                <Button className={styles.submit} variant="help">
                    Đăng ký
                </Button>
            </div>
        </div>
    );
}

export default Register;
