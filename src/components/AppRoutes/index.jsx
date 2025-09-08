import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router";

// ? Layout
import DefaultLayout from "../../layout/DefaultLayout/index";
import AuthLayout from "../../layout/AuthLayout/index";
import AdminLayout from "../../layout/AdminLayout/index";

// ? Pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostDetail";
import Contact from "../../pages/Contact";
import Privacy from "../../pages/Privacy";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Dashboard from "../../pages/Dashboard";
import Users from "../../pages/Users";
import Settings from "../../pages/Settings";
import NotFound from "../../pages/NotFound";
import ComingSoon from "../../pages/ComingSoon";

// ? ScrollToTop
import ScrollToTop from "../ScrollToTop";

function AppRoutes() {
    return (
        <Router basename="/exercise-day-36">
            <ScrollToTop />

            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts/:postId" element={<PostDetail />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="privacy" element={<Privacy />} />
                </Route>

                <Route path="/auth" element={<AuthLayout />}>
                    <Route
                        index
                        element={<Navigate to="/auth/login" replace />}
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
