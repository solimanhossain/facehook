import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <LoginPage />,
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
