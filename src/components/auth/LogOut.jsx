import { useNavigate } from "react-router-dom";
import logoutLogo from "../../assets/icons/logout.svg";
import { useAuth, useCookie } from "../../hooks";
import { toast } from "sonner";

export default function LogOut() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const { clearAuthCookie } = useCookie("facehookUserData");

    function handleLogout() {
        setAuth({});
        clearAuthCookie();
        toast.success("Logged out successfully");
        navigate("/login");
    }

    return (
        <button className="icon-btn  w-[40px] h-[40px]" onClick={handleLogout}>
            <img src={logoutLogo} alt="Logout" />
        </button>
    );
}
