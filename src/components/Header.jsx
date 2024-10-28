import { Link } from "react-router-dom";
import logoutLogo from "../assets/icons/logout.svg";
import notifyLogo from "../assets/icons/notification.svg";
import userAvatar from "../assets/images/avatars/SentiSOL.png";

export default function Header() {
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
                    <button className="icon-btn  w-[40px] h-[40px]">
                        <img src={logoutLogo} alt="Logout" />
                    </button>
                    <button className="flex-center !ml-5 gap-3 w-[120px]">
                        <img
                            className="max-h-[30px] max-w-[30px] lg:max-h-[40px] lg:max-w-[40px] rounded-full"
                            src={userAvatar}
                            alt="Avatar"
                        />
                        <span className="text-lg font-medium lg:text-xl">
                            SentiSOL
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
