import { useEffect } from "react";
import { actions } from "../actions";
import Post from "../components/Post";
import { useAxios, usePosts } from "../hooks";
import CreatePost from "../components/post/CreatePost";
import { toast } from "sonner";

export default function HomePage() {
    const { state, dispatch } = usePosts();
    const { axiosAPI } = useAxios();

    useEffect(() => {
        dispatch({ type: actions.post.DATA_FETCHING });
        async function fetchPost() {
            try {
                const { data } = await axiosAPI.get("/posts");
                dispatch({ type: actions.post.DATA_FETCHED, data });
            } catch (err) {
                dispatch({
                    type: actions.post.DATA_FETCH_ERROR,
                    error: `${err.code}: ${err.message}`,
                });
                toast.error(`${err.code}: ${err.message}`);
            }
        }
        fetchPost();
    }, []);

    if (state?.loading) {
        return (
            <main className="mx-auto max-w-[1020px] py-8">
                <div className="container h-[calc(100vh-15rem)] flex items-center justify-center">
                    <img src="/loading.gif" alt="loading" />
                </div>
            </main>
        );
    }

    return (
        <main className="mx-auto max-w-[1020px] py-8">
            <div className="container mx-8">
                <CreatePost />
                {state?.posts &&
                    state?.posts.map((post) => (
                        <Post key={post.id + post.createAt} post={post} />
                    ))}
            </div>
        </main>
    );
}
