import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks";
import FiledSet from "./FiledSet";

export default function LoginForm() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function handleSubmitForm(formData) {
        setAuth({ user: formData });
        navigate("/");
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
