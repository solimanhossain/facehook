import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div>Home</div>
            <Link to="/login">login</Link>
        </>
    );
}
