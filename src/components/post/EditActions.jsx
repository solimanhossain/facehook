import deleteLogo from "../../assets/icons/delete.svg";
import editLogo from "../../assets/icons/edit.svg";
import dotLogo from "../../assets/icons/3dots.svg";
import { useAxios, usePosts } from "../../hooks";
import { useState } from "react";
import { actions } from "../../actions";
import { Link, useNavigate } from "react-router-dom";

export default function EditActions({ postId }) {
    const [showModal, setShowModal] = useState("hidden");
    const { dispatch } = usePosts();
    const { axiosAPI } = useAxios();
    const navigate = useNavigate();

    function handleShowModal() {
        setShowModal(
            showModal === "hidden" ? "action-modal-container" : "hidden"
        );
    }

    async function handleDeletePost() {
        axiosAPI
            .delete("posts/" + postId)
            .then(
                (_res) => dispatch({ type: actions.post.DATA_DELETED, postId }),
                navigate("/")
            )
            .catch((error) =>
                dispatch({ type: actions.post.DATA_FETCH_ERROR, error })
            );
    }

    return (
        <div className="relative">
            <button onClick={handleShowModal}>
                <img src={dotLogo} alt="'...'" />
            </button>

            <div className={showModal}>
                <Link
                    to={"/edit/" + postId}
                    className="action-menu-item text-lwsGreen"
                >
                    Edit
                    <img src={editLogo} alt="Edit" />
                </Link>
                <button
                    onClick={handleDeletePost}
                    className="action-menu-item text-red-500"
                >
                    Delete
                    <img src={deleteLogo} alt="Delete" />
                </button>
            </div>
        </div>
    );
}
