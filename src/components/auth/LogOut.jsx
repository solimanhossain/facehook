import { useNavigate } from "react-router-dom";
import logoutLogo from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks";

export default function LogOut() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        setAuth({});
        // document.cookie = "facehookData=; path=/; max-age=0";
        navigate("/login");
    }

    return (
        <button className="icon-btn  w-[40px] h-[40px]" onClick={handleLogout}>
            <img src={logoutLogo} alt="Logout" />
        </button>
    );
}
