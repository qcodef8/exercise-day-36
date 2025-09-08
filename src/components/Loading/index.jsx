import React, { useEffect, useState } from "react";

import styles from "./Loading.module.css";

export default function Loading({ label = "Đang tải...", delayMs = 250 }) {
    const [visible, setVisible] = useState(delayMs === 0);

    useEffect(() => {
        if (delayMs === 0) return;
        const id = setTimeout(() => setVisible(true), delayMs);
        return () => clearTimeout(id);
    }, [delayMs]);

    if (!visible) return null;

    return (
        <div className={styles.wrapper} role="status" aria-live="polite">
            <div className={styles.spinner} />
            <span className={styles.text}>{label}</span>
        </div>
    );
}
