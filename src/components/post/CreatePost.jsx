import { useState } from "react";
import { useAuth } from "../../hooks";
import PostEntry from "./PostEntry";

export default function CreatePost() {
    const [show, setShow] = useState(false);
    const {
        auth: { user },
    } = useAuth();

    return (
        <div className="card transition-all">
            {show ? (
                <PostEntry user={user} onPost={() => setShow(false)} />
            ) : (
                <div className="flex-center mb-3 gap-2 lg:gap-4">
                    <img
                        className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                        src={import.meta.env.VITE_API_URL + "/" + user.avatar}
                        alt="avatar"
                    />

                    <div className="flex-1">
                        <textarea
                            onClick={() => setShow(true)}
                            className="h-16 w-full rounded-md bg-lighterDark p-3 focus:outline-none sm:h-20 sm:p-6"
                            placeholder="What's on your mind?"
                            name="post"
                            id="post"
                        ></textarea>
                    </div>

                    <div className="">
                        <button className="icon-btn p-4">Post</button>
                    </div>
                </div>
            )}
        </div>
    );
}
