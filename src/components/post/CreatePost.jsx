import sentisol from "../../assets/images/avatars/SentiSOL.png";
import { useAuth } from "../../hooks";

export default function CreatePost() {
    const {
        auth: { user },
    } = useAuth();

    return (
        <div className="card">
            <div className="flex-center mb-3 gap-2 lg:gap-4">
                <img
                    className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                    src={import.meta.env.VITE_API_URL + "/" + user.avatar}
                    alt="avatar"
                />

                <div className="flex-1">
                    <textarea
                        className="h-16 w-full rounded-md bg-lighterDark p-3 focus:outline-none sm:h-20 sm:p-6"
                        name="post"
                        id="post"
                        placeholder="What's on your mind?"
                    ></textarea>
                </div>

                <div className="">
                    <button className="icon-btn p-4">Create</button>
                </div>
            </div>
        </div>
    );
}
