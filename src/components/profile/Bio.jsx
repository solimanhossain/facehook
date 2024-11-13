import { useState } from "react";
import { actions } from "../../actions";
import editLogo from "../../assets/icons/edit.svg";
import saveLogo from "../../assets/icons/save.svg";
import { useAxios, useProfile } from "../../hooks";
import { toast } from "sonner";

export default function Bio() {
    const [open, setOpen] = useState(false);
    const { state, dispatch } = useProfile();
    const [bio, setBio] = useState(state?.user?.bio);
    const { axiosAPI } = useAxios();

    async function handleBioEdit() {
        setOpen(!open);
        if (bio === state?.user?.bio) return;
        try {
            const { data } = await axiosAPI.patch(
                `/profile/${state?.user?.id}`,
                { bio }
            );
            dispatch({ type: actions.profile.DATA_POSTED, data });
            setBio(data?.bio);
            toast.success("Bio updated successfully");
        } catch (err) {
            dispatch({
                type: actions.profile.DATA_FETCH_ERROR,
                error: `${err.code}: ${err.message}`,
            });
            toast.error(`${err.code}: ${err.message}`);
        }
    }

    return (
        <>
            <div className="my-4 px-4 bg-lighterDark rounded-full">Bio</div>
            <div className="w-3/4 border-b-2 border-[#3F3F3F]"></div>
            <div className="flex items-start mt-2 gap-2 w-3/4">
                <div className="flex-1">
                    {open ? (
                        <textarea
                            className="h-16 w-full rounded-md bg-lighterDark p-3 focus:outline-none sm:h-20 sm:p-6"
                            name="post"
                            id="post"
                            value={bio}
                            placeholder="Set your bio..."
                            onChange={(e) => setBio(e.target.value)}
                        ></textarea>
                    ) : (
                        <p className="leading-[188%] text-gray-400 lg:text-lg">
                            {bio}
                        </p>
                    )}
                </div>
                <button
                    onClick={handleBioEdit}
                    className="flex-center h-7 w-7 rounded-full bg-white/20 hover:bg-white/80"
                >
                    <img src={open ? saveLogo : editLogo} alt="Edit" />
                </button>
            </div>
        </>
    );
}
