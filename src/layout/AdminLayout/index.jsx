import { Outlet } from "react-router";

import styles from "./AdminLayout.module.css";

import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";

function AdminLayout() {
    return (
        <div className={styles.layout}>
            <AdminHeader />

            <main className={styles.main}>
                <AdminSidebar />

                <div className={styles.content}>
                    <Outlet />
                </div>
            </main>

            <AdminFooter />
        </div>
    );
}

export default AdminLayout;
