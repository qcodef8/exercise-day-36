import { Outlet } from "react-router";

import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";

function AuthLayout() {
    return (
        <>
            <Header />

            <main>
                <AuthSidebar />

                <Outlet />
            </main>
        </>
    );
}

export default AuthLayout;
