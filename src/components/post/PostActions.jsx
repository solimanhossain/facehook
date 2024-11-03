import likeLogo from "../../assets/icons/like.svg";
import commentLogo from "../../assets/icons/comment.svg";
import shareLogo from "../../assets/icons/share.svg";
import { useState } from "react";

export default function PostActions({ likes, comments, showHideCommentForm }) {
    const [btnClr, setBtnClr] = useState("bg-transparent");
    function handleCommentForm() {
        setBtnClr(btnClr === "bg-transparent" ? "" : "bg-transparent");
        showHideCommentForm();
    }

    return (
        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
            <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
                <img src={likeLogo} alt="Like" />
                <span>Like</span>
                <span className="text-gray-400">({likes})</span>
            </button>

            <button
                className={`icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm ${btnClr}`}
                onClick={handleCommentForm}
            >
                <img src={commentLogo} alt="Comment" />
                <span>Comment</span>
                <span className="text-gray-400">({comments})</span>
            </button>

            <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
                <img src={shareLogo} alt="Share" />
                <span>Share</span>
            </button>
        </div>
    );
}
