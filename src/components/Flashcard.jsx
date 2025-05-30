import { useState } from "react";

const Flashcard = ({ card, onFlip }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
        if (onFlip) onFlip(card);
    };

    return (
        <div
            className={`relative w-full max-w-xl h-64 perspective cursor-pointer mx-auto mb-6`}
            onClick={handleClick}
        >
            <div
                className={`w-full h-full transition-transform duration-500 transform-style preserve-3d rounded-2xl shadow-lg ${flipped ? "rotate-y-180" : ""
                    }`}
            >
                {/* Front Side */}
                <div className="absolute w-full h-full bg-white border border-gray-300 backface-hidden rounded-2xl flex flex-col justify-center items-center p-6">
                    <p className="text-gray-500 font-semibold mb-2 text-sm">❓ Câu hỏi</p>
                    <p className="text-lg text-gray-800 font-medium text-center">{card.question}</p>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full bg-gradient-to-tr from-blue-200 to-blue-400 border border-blue-400 text-blue-900 backface-hidden rounded-2xl flex flex-col justify-center items-center p-6 rotate-y-180">
                    <p className="text-blue-900 font-semibold mb-2 text-sm">🔁 Đáp án</p>
                    <p className="text-lg font-medium text-center">{card.answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
