import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Flashcard from "../components/Flashcard";

const StudyPage = () => {
    const { subject } = useParams();
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("flashcards")) || [];
        const filtered = stored.filter((c) => c.subject === subject.toLowerCase());
        setCards(filtered);
        setCurrentIndex(0);
        setCompleted(false);
    }, [subject]);

    const nextCard = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleComplete = () => {
        setCompleted(true);
    };

    const goHome = () => {
        navigate("/");
    };

    if (cards.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-indigo-100 p-6">
                <p className="text-center text-gray-600 text-lg">
                    Không có thẻ nào để học trong chủ đề này.
                </p>
            </div>
        );
    }

    if (completed) {
        return (
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-indigo-100 p-6">
                <h2 className="text-3xl font-bold text-indigo-700 mb-4">
                    🎉 Hoàn thành chủ đề: {subject}
                </h2>
                <p className="mb-6 text-indigo-600 font-medium text-center max-w-md">
                    Bạn đã học hết tất cả các thẻ flashcard trong chủ đề này. Chúc bạn học tốt!
                </p>
                <button
                    onClick={goHome}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold shadow-lg transition"
                >
                    Quay về Trang Chủ
                </button>
            </div>
        );
    }

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-indigo-50 to-indigo-100 p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-indigo-700 capitalize mb-6">
                Học chủ đề: {subject}
            </h2>

            <Flashcard card={cards[currentIndex]} />

            <div className="flex justify-between items-center w-full max-w-xl mt-6 space-x-4">
                <button
                    onClick={prevCard}
                    disabled={currentIndex === 0}
                    className={`px-5 py-2 rounded-md font-semibold shadow-md transition
            ${currentIndex === 0
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-indigo-500 hover:bg-indigo-600 text-white"
                        }`}
                >
                    Quay lại
                </button>

                <span className="text-indigo-700 font-medium">
                    Thẻ {currentIndex + 1} / {cards.length}
                </span>

                {currentIndex < cards.length - 1 ? (
                    <button
                        onClick={nextCard}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md font-semibold shadow-md transition"
                    >
                        Tiếp theo
                    </button>
                ) : (
                    <button
                        onClick={handleComplete}
                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-semibold shadow-md transition"
                    >
                        Hoàn thành chủ đề
                    </button>
                )}
            </div>
        </div>
    );
};

export default StudyPage;
