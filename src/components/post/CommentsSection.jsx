import { useState } from "react";
import Comment from "./Comment";
import { useAxios } from "../../hooks";

export default function CommentsSection({
    user,
    postId,
    showCommentForm,
    comments,
}) {
    const [allComments, setAllComments] = useState(comments);
    const { axiosAPI } = useAxios();
    const [commentText, setCommentText] = useState("");

    async function handleAddComment() {
        axiosAPI
            .patch(`/posts/${postId}/comment`, { comment: commentText })
            .then((res) => setAllComments(res?.data?.comments))
            .catch((err) => console.error(err));
        setCommentText("");
    }

    return (
        <div className={showCommentForm}>
            <div className="flex-center mb-3 gap-2 lg:gap-4">
                <img
                    className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
                    src={import.meta.env.VITE_API_URL + "/" + user.avatar}
                    alt="avatar"
                />

                <div className="flex-1">
                    <input
                        id="post"
                        type="text"
                        name="post"
                        value={commentText}
                        placeholder="What's on your mind?"
                        onChange={(e) => setCommentText(e.target.value)}
                        className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                    />
                </div>
                <button onClick={handleAddComment} className="icon-btn px-2">
                    Comment
                </button>
            </div>
            {allComments.length > 0 && (
                <>
                    <div className="mt-4">
                        <button className="text-gray-300 max-md:text-sm">
                            All Comment ▾
                        </button>
                    </div>
                    {allComments.map((comment) => (
                        <Comment
                            postId={postId}
                            userId={user?.id}
                            comment={comment}
                            key={comment.id + comment?.comment}
                        />
                    ))}
                </>
            )}
        </div>
    );
}
