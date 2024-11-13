import likeLogo from "../../assets/icons/like.svg";
import likeFillLogo from "../../assets/icons/likefill.svg";
import commentLogo from "../../assets/icons/comment.svg";
import shareLogo from "../../assets/icons/share.svg";
import { useState } from "react";
import { useAxios } from "../../hooks";
import { toast } from "sonner";

export default function PostActions({
    postId,
    likes,
    userId,
    comments,
    showHideCommentForm,
}) {
    const [btnClr, setBtnClr] = useState("");
    const [like, setLike] = useState({
        isLiked: likes.includes(userId),
        likeCount: likes.length,
    });
    const { axiosAPI } = useAxios();

    function handleCommentForm() {
        setBtnClr(btnClr === "" ? "bg-lighterDark rounded-sm" : "");
        showHideCommentForm();
    }
    async function handleLikePost() {
        try {
            const { data } = await axiosAPI.patch(`/posts/${postId}/like`);
            setLike({
                isLiked: data?.message === "Post Liked",
                likeCount: data?.likeCount,
            });
        } catch (err) {
            toast.error(`${err.code}: ${err.message}`);
        }
    }

    return (
        <div className="flex items-center justify-between py-1 lg:px-10 lg:py-2">
            <button
                onClick={handleLikePost}
                className="flex-center gap-2 text-xs font-bold hover:scale-125 transition-all lg:text-sm"
            >
                <img src={like.isLiked ? likeFillLogo : likeLogo} alt="Like" />
                <span>{like.isLiked ? "Liked" : "Like"}</span>
                <span className="text-gray-400  text-xs">
                    {like?.likeCount > 0 && like?.likeCount}
                </span>
            </button>

            <button
                className={`flex items-center space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm hover:scale-110 transition-all ${btnClr}`}
                onClick={handleCommentForm}
            >
                <img src={commentLogo} alt="Comment" />
                <span>Comment</span>
                <span className="text-gray-400 text-xs">({comments})</span>
            </button>

            <button
                onClick={() => console.log("Will be Implement Socialshare!")}
                className="flex-center gap-2 text-xs font-bold hover:scale-125 transition-all lg:text-sm"
            >
                <img src={shareLogo} alt="Share" />
                <span>Share</span>
            </button>
        </div>
    );
}
