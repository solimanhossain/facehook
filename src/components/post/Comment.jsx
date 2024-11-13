import { useState } from "react";
import { useAxios } from "../../hooks";
import { formatToUTC } from "../../utils/dateFormat";
import deleteLogo from "../../assets/icons/delete.svg";
import { toast } from "sonner";

export default function Comment({ comment, userId, postId }) {
    const [cross, setCross] = useState("");
    const { axiosAPI } = useAxios();
    async function handleCommentDelete() {
        axiosAPI
            .delete(`/posts/${postId}/comment/${comment?.id}`)
            .then((_) => {
                toast.success("Comment deleted successfully");
            })
            .catch((err) => toast.error(`${err.code}: ${err.message}`));
    }

    return (
        <>
            <div className="flex gap-2 space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3 ">
                <div className="flex items-center gap-3 pt-4">
                    <img
                        className="max-w-6 max-h-6 rounded-full"
                        src={
                            import.meta.env.VITE_API_URL +
                            "/" +
                            comment?.author?.avatar
                        }
                        alt="avatar"
                    />
                    <div className={cross}>
                        <div className="flex items-center gap-1 text-xs lg:text-sm">
                            <span className="font-bold">
                                {comment?.author?.name}:
                            </span>
                            <span className="text-gray-400 text-xs">
                                ({formatToUTC(comment?.createdAt)})
                            </span>

                            <span>{comment?.comment}</span>
                        </div>
                    </div>
                </div>
                {comment?.author?.id === userId && (
                    <img
                        onClick={handleCommentDelete}
                        onMouseLeave={() => setCross("")}
                        onMouseOver={() => setCross("line-through")}
                        className="rounded-full w-5 h-5 p-0.5 hover:cursor-pointer shadow-lg hover:scale-125"
                        src={deleteLogo}
                    />
                )}
            </div>
        </>
    );
}
