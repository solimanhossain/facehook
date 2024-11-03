export default function Comments({ commentData }) {
    const {
        author: { name, avatar },
        comment,
        createdAt,
    } = commentData;
    const date = new Date(createdAt).toLocaleString();

    return (
        <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
            <div className="flex items-center gap-3 pt-4">
                <img
                    className="max-w-6 max-h-6 rounded-full"
                    src={import.meta.env.VITE_API_URL + "/" + avatar}
                    alt="avatar"
                />
                <div>
                    <div className="flex gap-1 text-xs lg:text-sm">
                        <span className="font-bold">{name}:</span>
                        <span className="text-gray-400 text-xs">({date})</span>

                        <span>{comment}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
