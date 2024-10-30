export default function FiledSet({ label, children, ...props }) {
    const { htmlFor, error } = props;

    return (
        <div className="form-control">
            {label && (
                <label className="auth-label" htmlFor={htmlFor}>
                    {label}
                </label>
            )}
            {children}
            {error && (
                <p role="alert" className="text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}
