export default function Avatar({ word = "?" }) {
    return (
        <div className="bg-green-900 w-10 h-10 rounded-full flex justify-center items-center">
            <b className="p-1">{word[0]}</b>
        </div>
    );
}
