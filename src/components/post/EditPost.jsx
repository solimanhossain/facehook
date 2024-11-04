import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAxios } from "../../hooks";
import { useEffect, useState } from "react";
import { formatToUTC } from "../../utils/dateFormat";
import closeLogo from "../../assets/icons/close.svg";

export default function EditPost() {
    const {
        register,
        handleSubmit,
        formState: { error },
        setError,
    } = useForm();
    let { postId } = useParams();
    const { axiosAPI } = useAxios();
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axiosAPI
            .get("/posts/" + postId)
            .then((res) => setPost(res?.data))
            .catch((err) => console.error(err));
    }, []);

    async function handleEditPost(formData) {
        axiosAPI
            .patch("/posts/" + postId, formData)
            .then(() => navigate("/"))
            .catch((err) => setError(err));
    }

    return (
        <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
                <div className="card relative">
                    <h6 className="mb-3 text-center uppercase text-lg font-bold lg:text-xl">
                        Edit Post
                    </h6>
                    <button
                        onClick={() => navigate("/")}
                        className="absolute right-3 top-3 transition-all  hover:scale-110 shadow-xl"
                    >
                        <img src={closeLogo} alt="close" />
                    </button>

                    <form onSubmit={handleSubmit(handleEditPost)}>
                        <div className="mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4">
                            <div className="flex items-center gap-3">
                                <img
                                    className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                                    src={
                                        import.meta.env.VITE_API_URL +
                                        "/" +
                                        post?.author?.avatar
                                    }
                                    alt="avatar"
                                />
                                <div>
                                    <h6 className="text-lg lg:text-xl">
                                        {post?.author?.name}
                                    </h6>
                                    <span className="text-sm text-gray-400 lg:text-base">
                                        ◴ {formatToUTC(post?.createAt)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <textarea
                            {...register("content", {
                                required: "Empty not allowed!",
                            })}
                            name="content"
                            id="content"
                            onChange={(e) =>
                                setPost({ ...post, content: e.target.value })
                            }
                            value={post?.content}
                            className="mb-4 h-[120px] w-full text-xl bg-transparent focus:outline-none lg:mb-6 lg:h-[160px]"
                        ></textarea>

                        {post?.image && (
                            <div className="mx-auto mb-4 flex max-w-[90%] items-center justify-center lg:mb-6">
                                <div className="relative">
                                    <img
                                        className="max-w-full"
                                        src={
                                            import.meta.env.VITE_API_URL +
                                            "/" +
                                            post?.image
                                        }
                                        alt="image"
                                    />
                                    <button className="absolute right-2 top-2 transition-all hover:scale-125">
                                        <b className="px-2 py-1 bg-red-400/50 rounded-full text-lg text-red-500">
                                            X
                                        </b>
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className="border-t border-[#3F3F3F] pt-4 lg:pt-6">
                            <button
                                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                                type="submit"
                            >
                                Edit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
