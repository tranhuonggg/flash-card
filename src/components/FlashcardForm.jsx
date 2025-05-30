import { useState } from "react";

const FlashcardForm = ({ onSave }) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!question.trim() || !answer.trim() || !subject.trim()) {
            alert("Vui lòng điền đầy đủ các trường!");
            return;
        }
        onSave({ question, answer, subject: subject.toLowerCase() });
        setQuestion("");
        setAnswer("");
        setSubject("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
        >
            <div className="mb-5">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Chủ đề
                </label>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Ví dụ: Toán, Lịch sử..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                />
            </div>

            <div className="mb-5">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Câu hỏi
                </label>
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Nhập câu hỏi..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Đáp án
                </label>
                <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Nhập đáp án..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
                💾 Lưu thẻ
            </button>
        </form>
    );
};

export default FlashcardForm;
