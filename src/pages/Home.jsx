import CreatePost from "../components/post/CreatePost";
import Post from "../components/Post";
import { useAxios } from "../hooks";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const { axiosAPI } = useAxios();

    useEffect(() => {
        axiosAPI
            .get("/posts")
            .then((res) => setPosts(res.data))
            .catch((err) => setError(err));
    }, []);

    return (
        <main className="mx-auto max-w-[1020px] py-8">
            <div className="container mx-8">
                <CreatePost />
                {posts &&
                    posts.map((post) => (
                        <Post key={post.id + post.createAt} post={post} />
                    ))}

                {error && <p>{error}</p>}
            </div>
        </main>
    );
}
