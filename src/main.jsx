import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./providers/AuthProvider.jsx";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <App />
            <Toaster position="top-right" richColors />
        </AuthProvider>
    </StrictMode>
);
