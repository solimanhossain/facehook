import { axiosAPI } from "../api";
import { useEffect } from "react";
import useAuth from "./useAuth";

export default function useAxios() {
    const { auth, setAuth } = useAuth();

    useEffect(() => {
        const requestInterceptor = axiosAPI.interceptors.request.use(
            (config) => {
                if (auth?.user) {
                    config.headers[
                        "Authorization"
                    ] = `Bearer ${auth?.authToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        const responseInterceptor = axiosAPI.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error?.response?.status === 401 && !error?.config?._retry) {
                    error.config._retry = true;
                    try {
                        const { data } = await axiosAPI.post(
                            "/auth/refresh-token",
                            { refreshToken: auth?.refreshToken }
                        );
                        error.config.headers[
                            "Authorization"
                        ] = `Bearer ${data?.token}`;
                        setAuth({
                            ...auth,
                            refreshToken: data?.refreshToken,
                            authToken: data?.token,
                        });
                        return axiosAPI.request(error.config);
                    } catch (error) {
                        return Promise.reject(error);
                    }
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosAPI.interceptors.request.eject(requestInterceptor);
            axiosAPI.interceptors.response.eject(responseInterceptor);
        };
    }, [auth?.authToken]);

    return { axiosAPI };
}
