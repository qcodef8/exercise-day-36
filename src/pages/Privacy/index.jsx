import React from "react";
import styles from "./Privacy.module.css";

function Privacy() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Chính sách bảo mật</h1>
            <div className={styles.meta}>Cập nhật lần cuối: 2025-01-01</div>
            <div className={styles.content}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
                {Array.from({ length: 30 }).map((_, i) => (
                    <p key={i}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Privacy;
