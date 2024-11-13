import { useRef } from "react";
import { actions } from "../../actions";
import addImg from "../../assets/icons/addImg.svg";
import { useAxios, useProfile } from "../../hooks";
import { toast } from "sonner";

export default function Image() {
    const { state, dispatch } = useProfile();
    const { axiosAPI } = useAxios();

    const fileOpenRef = useRef(null);

    function handleImageUpload(e) {
        e.preventDefault();
        fileOpenRef.current.addEventListener("change", (e) => {
            const formData = new FormData();
            formData.append("avatar", e.target.files[0]);
            uploadImage(formData);
        });

        async function uploadImage(formData) {
            dispatch({ type: actions.profile.DATA_FETCH_ERROR, error: null });
            dispatch({ type: actions.profile.DATA_FETCHING });
            try {
                const { data } = await axiosAPI.post(
                    `/profile/${state?.user?.id}/avatar`,
                    formData
                );
                dispatch({
                    type: actions.profile.IMAGE_UPDATED,
                    avatar: data?.avatar,
                });
                toast.success("Image updated successfully");
            } catch (err) {
                dispatch({
                    type: actions.profile.DATA_FETCH_ERROR,
                    error: `${err.code}: ${err.message}`,
                });
                toast.error(`${err.code}: ${err.message}`);
            }
        }
        fileOpenRef.current.click();
    }

    return (
        <div className="relative mb-4 max-h-[150px] max-w-[150px] rounded-full lg:mb-8 lg:max-h-[200px] lg:max-w-[200px]">
            {state?.user?.avatar ? (
                <img
                    className="max-w-full rounded-full border-4 border-gray-400 lg:rounded-3xl"
                    src={`${import.meta.env.VITE_API_URL}/${
                        state?.user?.avatar
                    }`}
                    alt="avatar"
                />
            ) : (
                <div className="bg-lwsGreen flex-center h-[150px] w-[150px] text-6xl font-bold rounded-full border-4 border-gray-400 lg:rounded-3xl">
                    {state?.user?.firstName[0] ?? state?.user?.name[0]}
                </div>
            )}
            <form action="">
                <button
                    onClick={handleImageUpload}
                    className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-white/20 hover:bg-white/80"
                >
                    <img src={addImg} alt="Edit" />
                </button>
                <input type="file" accept="image/*" hidden ref={fileOpenRef} />
            </form>
        </div>
    );
}
