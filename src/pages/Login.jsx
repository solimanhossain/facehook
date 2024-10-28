import { Link } from "react-router-dom";
import facehookIllustration from "../assets/images/illustration.png";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-deepDark py-8">
            <div className="max-w-[1368px] flex-1">
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
                                showing the post, post details, reactions,
                                comments and profile.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
                            <div className="form-control">
                                <label className="auth-label" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="auth-input"
                                    name="email"
                                    type="email"
                                    id="email"
                                />
                            </div>
                            <div className="form-control">
                                <label className="auth-label" htmlFor="email">
                                    Password
                                </label>
                                <input
                                    className="auth-input"
                                    name="password"
                                    type="password"
                                    id="password"
                                />
                            </div>
                            <button
                                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                                type="submit"
                            >
                                Login
                            </button>
                        </form>
                        <div className="py-4 lg:py-6">
                            <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                                {"Don't have account? "}
                                <Link
                                    className="text-white transition-all hover:text-lwsGreen hover:underline"
                                    to="/registration"
                                >
                                    Create New Account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
