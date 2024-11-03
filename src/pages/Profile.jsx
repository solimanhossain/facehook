import { useAuth } from "../hooks";
import editLogo from "../assets/icons/edit.svg";
import { useEffect } from "react";

export default function ProfilePage() {
    const {
        auth: { user },
    } = useAuth();

    useEffect(() => {}, [user]);

    return (
        <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
                <div className="flex flex-col items-center py-8 text-center">
                    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
                        <img
                            className="max-w-full rounded-full border-4 border-gray-400 lg:rounded-3xl"
                            src={`${import.meta.env.VITE_API_URL}/${
                                user?.avatar
                            }`}
                            alt="avatar"
                        />

                        <button className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-white/20 hover:bg-black/80">
                            <img src={editLogo} alt="Edit" />
                        </button>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-white lg:text-[28px] uppercase">
                            {user?.firstName} {user?.lastName}
                        </h3>
                        <p className="leading-[231%] lg:text-lg mt-2">
                            {user?.email}
                        </p>
                    </div>
                    <div className="mt-4 w-1/6 border-b border-[#3F3F3F]">
                        Bio
                    </div>
                    <div className="flex items-start gap-2 lg:mt-6">
                        <div className="flex-1">
                            <p className="leading-[188%] text-gray-400 lg:text-lg">
                                {user?.bio}
                            </p>
                        </div>
                        <button className="flex-center h-7 w-7 rounded-lg bg-black/20 hover:bg-black/80">
                            <img src={editLogo} alt="Edit" />
                        </button>
                    </div>
                    <div className="w-3/4 border-b-2 border-[#3F3F3F] py-6 lg:py-8"></div>
                </div>
            </div>
        </main>
    );
}
