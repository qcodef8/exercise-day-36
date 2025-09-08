import { Outlet } from "react-router";

import styles from "./DefaultLayout.module.css";

import Header from "../components/Header";
import Footer from "./components/Footer";

function DefaultLayout() {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.main}>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default DefaultLayout;
