import { useAuth } from "../../hooks";
import Comments from "./Comments";

export default function CommentsSection({ showCommentForm, comments }) {
    const {
        auth: { user },
    } = useAuth();

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
                        type="text"
                        className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                        name="post"
                        id="post"
                        placeholder="What's on your mind?"
                    />
                </div>
                <button className="icon-btn px-2">Comment</button>
            </div>
            {comments.length > 0 && (
                <div className="mt-4">
                    <button className="text-gray-300 max-md:text-sm">
                        All Comment ▾
                    </button>
                </div>
            )}
            {comments &&
                comments.map((comment) => (
                    <Comments
                        key={comment.id + comment.comment}
                        commentData={comment}
                    />
                ))}
        </div>
    );
}
