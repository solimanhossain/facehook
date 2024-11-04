import { useState } from "react";
import { useAuth } from "../hooks";
import EditActions from "./post/EditActions";
import PostActions from "./post/PostActions";
import timeLogo from "../assets/icons/time.svg";
import CommentsSection from "./post/CommentsSection";
import { formatToUTC } from "../utils/dateFormat";

export default function Post({ post }) {
    const {
        auth: { user },
    } = useAuth();
    const [showCommentForm, setShowCommentForm] = useState("hidden");

    const { id, author, createAt, content, image, likes, comments } = post;
    const { avatar, name } = author;

    function handleCommentForm() {
        setShowCommentForm(showCommentForm === "hidden" ? "block" : "hidden");
    }

    return (
        <article className="card mt-6 lg:mt-8">
            <header className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <img
                        className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                        src={import.meta.env.VITE_API_URL + "/" + avatar}
                        alt="avatar"
                    />
                    <div>
                        <h6 className="text-lg lg:text-xl">{name}</h6>
                        <div className="flex items-center gap-1.5">
                            <img src={timeLogo} alt="time" />
                            <span className="text-sm text-gray-400 lg:text-base">
                                {formatToUTC(createAt)}
                            </span>
                        </div>
                    </div>
                </div>
                {author?.id === user?.id && <EditActions postId={id} />}
            </header>

            <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
                <p className="p-4">{content}</p>
                {image && (
                    <div className="flex items-center justify-center overflow-hidden">
                        <img
                            className="max-w-full h-[400px] object-cover"
                            src={import.meta.env.VITE_API_URL + "/" + image}
                            alt="poster"
                        />
                    </div>
                )}
            </div>

            <PostActions
                postId={id}
                likes={likes}
                userId={user?.id}
                comments={comments.length}
                showHideCommentForm={handleCommentForm}
            />

            <CommentsSection
                user={user}
                postId={id}
                showCommentForm={showCommentForm}
                comments={comments}
            />
        </article>
    );
}
