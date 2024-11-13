function userDataFormat(data) {
    const { user, token } = data;
    const authToken = token?.token;
    const refreshToken = token?.refreshToken;
    return {
        user,
        authToken,
        refreshToken,
    };
}

export { userDataFormat };
