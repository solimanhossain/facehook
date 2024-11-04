import { Link } from "react-router-dom";
import LogOut from "./auth/LogOut";
import { useAuth, useProfile } from "../hooks";
import notifyLogo from "../assets/icons/notification.svg";
import Avatar from "./profile/Avatar";

export default function Header() {
    const { auth } = useAuth();
    const { state } = useProfile();
    let { firstName, lastName, avatar } = state?.user ?? auth?.user ?? {};

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
                        {avatar ? (
                            <img
                                className="max-h-[30px] max-w-[30px] lg:max-h-[40px] lg:max-w-[40px] rounded-full border border-gray-600"
                                src={`${
                                    import.meta.env.VITE_API_URL
                                }/${avatar}`}
                                alt="Avatar"
                            />
                        ) : (
                            <Avatar word={firstName} />
                        )}

                        <span className="text-lg font-medium lg:text-xl">
                            {firstName} {lastName}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
