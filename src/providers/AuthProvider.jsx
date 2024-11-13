import { useState, useMemo } from "react";
import { AuthContext } from "../context";
import { useCookie } from "../hooks";

export default function AuthProvider({ children }) {
    const { getAuthCookie } = useCookie("facehookUserData");
    const [auth, setAuth] = useState(getAuthCookie() ?? {});

    const authValue = useMemo(() => ({ auth, setAuth }), [auth]);

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
}
