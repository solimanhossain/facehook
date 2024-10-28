import { Link, useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <>
            <Header />
            <main className="h-[calc(100vh-3rem)] flex items-center justify-center">
                <div className="flex-center flex-col">
                    <img
                        src="/404.svg"
                        alt="404"
                        className="mx-auto h-40 w-40 lg:h-60 lg:w-60"
                    />
                    <p className="text-center text-2xl text-red-500">
                        {error.status == "404" ? "Page Not Found!" : ""}
                    </p>
                    <Link to="/" className="btn-primary mt-4">
                        Back to Home
                    </Link>
                </div>
            </main>

            <Footer />
        </>
    );
}
