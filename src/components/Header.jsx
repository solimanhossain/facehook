import { Link } from "react-router-dom";
import notifyLogo from "../assets/icons/notification.svg";
import LogOut from "./auth/LogOut";
import { useAuth } from "../hooks";

export default function Header() {
    const { auth } = useAuth();
    const { user } = auth;

    return (
        <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
            <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
                <Link to="/">
                    <img
                        className="max-w-[40px] lg:max-w-[44px]"
                        src="/logo.svg"
                        alt="Logo"
                    />
                </Link>

                <div className="flex items-center space-x-8">
                    <button className="icon-btn h-[40px]">
                        <img src={notifyLogo} alt="Notification" />
                        <span className="px-2 font-medium">Notifications</span>
                    </button>

                    <LogOut />

                    <Link
                        to="/profile"
                        className="flex-center !ml-5 gap-3 w-[120px]"
                    >
                        <img
                            className="max-h-[30px] max-w-[30px] lg:max-h-[40px] lg:max-w-[40px] rounded-full border border-gray-600"
                            src={`${import.meta.env.VITE_API_URL}/${
                                user?.avatar
                            }`}
                            alt="Avatar"
                        />
                        <span className="text-lg font-medium lg:text-xl">
                            {user?.firstName} {user?.lastName}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
