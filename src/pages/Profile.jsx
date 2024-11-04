import { useEffect } from "react";
import { useAxios } from "../hooks";
import { actions } from "../actions";
import Post from "../components/Post";
import { useAuth, useProfile } from "../hooks";
import Bio from "../components/profile/Bio";
import Image from "../components/profile/Image";

export default function ProfilePage() {
    const {
        auth: { user },
    } = useAuth();
    const { axiosAPI } = useAxios();
    const { state, dispatch } = useProfile();

    useEffect(() => {
        dispatch({ type: actions.profile.DATA_FETCH_ERROR, error: null });
        dispatch({ type: actions.profile.DATA_FETCHING });
        async function fetchProfile() {
            try {
                const { data } = await axiosAPI.get(`/profile/${user?.id}`);
                dispatch({ type: actions.profile.DATA_FETCHED, data });
            } catch (err) {
                dispatch({
                    type: actions.profile.DATA_FETCH_ERROR,
                    error: `${err.code}: ${err.message}`,
                });
            }
        }
        fetchProfile();
    }, []);

    return (
        <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
                {state?.user && (
                    <div className="flex flex-col items-center py-8 text-center">
                        <Image avatar={state?.user?.avatar} />
                        <div className="w-3/4 mb-2">
                            <h3 className="text-2xl font-semibold text-white lg:text-[28px] uppercase">
                                {state?.user?.firstName} {state?.user?.lastName}
                            </h3>
                            <p className="leading-[231%] lg:text-lg mt-2">
                                {state?.user?.email}
                            </p>
                        </div>
                        <Bio />
                    </div>
                )}

                {state?.posts.length > 0 && (
                    <>
                        <h4 className="bg-lighterDark text-center p-8  border border-[#3F3F3F] rounded-lg mt-6 lg:mt-8 text-2xl font-bold lg:text-4xl">
                            Your Posts
                        </h4>
                        {state?.posts?.map((post) => (
                            <Post key={post.id} post={post} />
                        ))}
                    </>
                )}
            </div>
        </main>
    );
}
