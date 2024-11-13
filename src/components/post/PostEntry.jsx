import { useForm } from "react-hook-form";
import addImgLogo from "../../assets/icons/addImg.svg";
import { useAxios, usePosts } from "../../hooks";
import { actions } from "../../actions";
import { toast } from "sonner";
import Avatar from "../profile/Avatar";

export default function PostEntry({ user, onPost }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();
    const { dispatch } = usePosts();
    const { axiosAPI } = useAxios();

    async function handlePostSubmit(formData) {
        const dataForm = new FormData();
        dataForm.append("image", formData?.image[0]);
        dataForm.append("content", formData?.content);

        axiosAPI
            .post("/posts", dataForm)
            .then((res) => {
                dispatch({ type: actions.post.DATA_UPDATED, data: res?.data });
                onPost();
                setError(null);
                toast.success("Post created successfully");
            })
            .catch((err) => {
                const error = `${err.code}: ${err.message}`;
                dispatch({ type: actions.post.DATA_FETCH_ERROR, error });
                toast.error(error);
                setError(error);
            });
    }

    return (
        <div className="card relative">
            <h6 className="mb-3 text-center uppercase text-lg lg:text-xl">
                Create Post
            </h6>

            <form onSubmit={handleSubmit(handlePostSubmit)}>
                <div className="mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4">
                    <div className="flex items-center gap-3">
                        {user?.avatar ? (
                            <img
                                className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                                src={
                                    import.meta.env.VITE_API_URL +
                                    "/" +
                                    user?.avatar
                                }
                                alt="avatar"
                            />
                        ) : (
                            <Avatar word={user?.firstName} />
                        )}
                        <div>
                            <h6 className="text-lg lg:text-xl">{`${user?.firstName} ${user.lastName}`}</h6>

                            <span className="text-sm text-gray-400 lg:text-base">
                                ⩥ Friends
                            </span>
                        </div>
                    </div>

                    <label
                        className="btn-primary cursor-pointer !text-gray-100"
                        htmlFor="image"
                    >
                        <img src={addImgLogo} alt="Add Photo" />
                        Add Photo
                    </label>
                    <input
                        {...register("image")}
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="hidden"
                        multiple={false}
                    />
                </div>

                <textarea
                    {...register("content", { required: "Share some text!" })}
                    name="content"
                    id="content"
                    autoFocus
                    placeholder="Share your thoughts..."
                    className="h-[120px] w-full bg-transparent focus:outline-none lg:h-[160px]"
                ></textarea>
                <div className="border-t border-[#3F3F3F] pt-4 lg:pt-6">
                    <button
                        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                        type="submit"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
}
