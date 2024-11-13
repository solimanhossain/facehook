import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth, useCookie } from "../../hooks";
import { axiosAPI } from "../../api";
import FiledSet from "./FiledSet";
import { toast } from "sonner";
import { useEffect } from "react";
import { userDataFormat } from "../../utils/userDataFormat";

export default function LoginForm() {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const { setAuthCookie } = useCookie("facehookUserData");

    useEffect(() => {
        if (auth?.user) {
            navigate("/profile");
        }
    }, [auth, navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function handleSubmitForm(formData) {
        try {
            const { data } = await axiosAPI.post("/auth/login", formData);
            setAuth(userDataFormat(data));
            setAuthCookie(userDataFormat(data));
            navigate("/");
            toast.success("Logged in successfully");
        } catch (err) {
            toast.error(`${err.code}: ${err.message}`);
        }
    }

    return (
        <form
            className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
            onSubmit={handleSubmit(handleSubmitForm)}
        >
            <FiledSet
                label="Email"
                htmlFor="email"
                error={errors?.email?.message}
            >
                <input
                    {...register("email", { required: "Email is required!" })}
                    className="auth-input"
                    name="email"
                    type="email"
                    id="email"
                />
            </FiledSet>

            <FiledSet
                label="Password"
                htmlFor="password"
                error={errors?.password?.message}
            >
                <input
                    {...register("password", {
                        required: "Password is required!",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters!",
                        },
                    })}
                    className="auth-input"
                    name="password"
                    type="password"
                    id="password"
                />
            </FiledSet>

            <button className="auth-input auth-btn bg-lwsGreen" type="submit">
                Login
            </button>
        </form>
    );
}
