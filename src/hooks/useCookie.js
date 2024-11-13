export default function useCookie(cookieName) {
    const getAuthCookie = () => {
        const cookie = document.cookie
            .split("; ")
            .find((item) => item.startsWith(`${cookieName}=`));

        if (cookie) {
            try {
                return JSON.parse(cookie.split("=")[1]);
            } catch (error) {
                console.error("Failed to parse auth cookie:", error);
            }
        }
        return {};
    };

    const setAuthCookie = (value) => {
        document.cookie = `${cookieName}=${JSON.stringify(
            value
        )}; path=/; max-age=86400`; // 1 day
    };

    const clearAuthCookie = () => {
        document.cookie = `${cookieName}=; path=/; max-age=0`;
    };

    return { getAuthCookie, setAuthCookie, clearAuthCookie };
}
