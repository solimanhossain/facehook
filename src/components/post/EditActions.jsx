import dotLogo from "../../assets/icons/3dots.svg";
import editLogo from "../../assets/icons/edit.svg";
import deleteLogo from "../../assets/icons/delete.svg";
import { useState } from "react";

export default function EditActions() {
    const [showModal, setShowModal] = useState("hidden");
    function handleShowModal() {
        setShowModal(
            showModal === "hidden" ? "action-modal-container" : "hidden"
        );
    }

    function hanndleEditPost() {}

    function handleDeletePost() {}

    return (
        <div className="relative">
            <button onClick={handleShowModal}>
                <img src={dotLogo} alt="'...'" />
            </button>

            <div className={showModal}>
                <button
                    onClick={hanndleEditPost}
                    className="action-menu-item hover:text-lwsGreen"
                >
                    Edit
                    <img src={editLogo} alt="Edit" />
                </button>
                <button
                    onClick={handleDeletePost}
                    className="action-menu-item hover:text-red-500"
                >
                    Delete
                    <img src={deleteLogo} alt="Delete" />
                </button>
            </div>
        </div>
    );
}
