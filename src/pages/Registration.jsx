import { Link, useNavigate } from "react-router-dom";
import facehookIllustration from "../assets/images/illustration.png";
import RegisterForm from "../components/auth/RegisterForm";
import { useAuth } from "../hooks";

export default function RegistrationPage() {
    const { auth } = useAuth();
    const navigate = useNavigate();
    if (auth?.user) {
        navigate("/");
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-deepDark py-8 md:mx-16 lg:mx-24">
            <div className="container grid items-center gap-8 lg:grid-cols-2">
                <div>
                    <img
                        className="mb-12 max-w-full max-lg:hidden"
                        src={facehookIllustration}
                        alt="Facehook Illustration"
                    />
                    <div>
                        <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">
                            Facehook
                        </h1>
                        <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
                            Create a social media app with features like,
                            showing the post, post details, reactions, comments
                            and profile.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <RegisterForm />
                    <div className="py-4 lg:py-6">
                        <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                            {"Already have an account? "}
                            <Link
                                className="text-white transition-all hover:text-lwsGreen hover:underline"
                                to="/login"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
