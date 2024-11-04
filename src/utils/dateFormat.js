function formatToUTC(value) {
    const date = new Date(value).toLocaleString();
    return date;
}

export { formatToUTC };
