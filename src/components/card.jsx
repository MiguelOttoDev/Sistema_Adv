export default function Card({ bgColor, textColor }) {
    return (
        <div
            className={`border-2 rounded-md px-8 py-4 w-80 h-40 ${bgColor} ${textColor}`}
        >
            <h2 className="text-xl">Card</h2>
            <p className="mt-2">This is a card component</p>
        </div>
    );
}
