import { Link } from "react-router";

import styles from "./Home.module.css";

function Home() {
    const links = [
        { to: "/posts", label: "Posts" },
        { to: "/coming-soon", label: "About" },
        { to: "/contact", label: "Contact" },
        { to: "/privacy", label: "Privacy" },
        { to: "/auth/login", label: "Login" },
        { to: "/auth/register", label: "Register" },
        { to: "/admin", label: "Dashboard" },
    ];

    return (
        <section className={styles.hero}>
            <h1 className={styles.heading}>Welcome to My App</h1>
            <p className={styles.subheading}>
                Explore our collection of interactive applications and
                components
            </p>
            <div className={styles.grid}>
                {links.map((l) => (
                    <Link key={l.to} to={l.to} className={styles.card}>
                        <span className={styles.cardTitle}>{l.label}</span>
                        <span className={styles.cardDesc}>
                            Go to {l.label} page
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Home;
