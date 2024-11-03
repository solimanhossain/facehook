import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationPage from "./pages/Registration";
import ProfilePage from "./pages/Profile";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";
import Protected from "./Protected";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/registration",
        element: <RegistrationPage />,
    },
    {
        path: "/",
        element: <Protected />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            },
        ],
    },
]);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
