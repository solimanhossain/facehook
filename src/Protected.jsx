import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAuth } from "./hooks";
import ProfileProvider from "./providers/ProfileProvider";

export default function Protected() {
    const { auth } = useAuth();
    // console.log(auth);

    if (!auth?.user) {
        return <Navigate to="/login" />;
    }
    return (
        <ProfileProvider>
            <Header />
            <Outlet />
            <Footer />
        </ProfileProvider>
    );
}
