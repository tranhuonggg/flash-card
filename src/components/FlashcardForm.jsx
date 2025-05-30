import { useState } from "react";
import { FaBook, FaQuestionCircle, FaLightbulb } from "react-icons/fa";

const FlashcardForm = ({ onSave }) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!question.trim() || !answer.trim() || !subject.trim()) {
            alert("⚠️ Vui lòng điền đầy đủ các trường!");
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
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 space-y-5 transition-all"
        >
            {/* Chủ đề */}
            <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 flex items-center gap-2">
                    <FaBook className="text-indigo-500" /> Chủ đề
                </label>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Ví dụ: Toán, Sinh học, Lịch sử..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                    required
                />
            </div>

            {/* Câu hỏi */}
            <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 flex items-center gap-2">
                    <FaQuestionCircle className="text-blue-500" /> Câu hỏi
                </label>
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Nhập câu hỏi bạn muốn học..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                />
            </div>

            {/* Đáp án */}
            <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 flex items-center gap-2">
                    <FaLightbulb className="text-yellow-500" /> Đáp án
                </label>
                <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Nhập đáp án cho câu hỏi..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white"
                    required
                />
            </div>

            {/* Nút lưu */}
            <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition duration-300 text-lg"
            >
                💾 Lưu thẻ
            </button>
        </form>
    );
};

export default FlashcardForm;
