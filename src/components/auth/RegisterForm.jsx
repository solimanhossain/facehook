import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import FiledSet from "./FiledSet";
import { useForm } from "react-hook-form";
import { axiosAPI } from "../../api";

export default function RegisterForm() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function handleSubmitForm(formData) {
        try {
            const { data } = await axiosAPI.post("/auth/register", formData);
            const { user, token } = data;
            setAuth({
                user,
                authToken: token?.token,
                refreshToken: token?.refreshToken,
            });

            document.cookie = `facehookData=${JSON.stringify(
                formData
            )}; path=/; max-age=86400`;
            navigate("/");
        } catch (error) {
            if (error?.code === "ERR_NETWORK") {
                console.log(error);
                return;
            }
            const { data } = error.response;
            console.log(data.error);
        }
    }
    return (
        <form
            className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
            onSubmit={handleSubmit(handleSubmitForm)}
        >
            <div className="grid grid-cols-2 gap-4">
                <FiledSet
                    label="First Name"
                    htmlFor="firstName"
                    error={errors?.firstName?.message}
                >
                    <input
                        {...register("firstName", {
                            required: "Name is required!",
                        })}
                        className="auth-input"
                        name="firstName"
                        type="text"
                        id="firstName"
                    />
                </FiledSet>

                <FiledSet
                    label="Last Name"
                    htmlFor="lastName"
                    error={errors?.lastName?.message}
                >
                    <input
                        {...register("lastName", {
                            required: "Name is required!",
                        })}
                        className="auth-input"
                        name="lastName"
                        type="text"
                        id="lastName"
                    />
                </FiledSet>
            </div>

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

            <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                type="submit"
            >
                Register
            </button>
        </form>
    );
}
