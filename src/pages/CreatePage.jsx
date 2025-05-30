import { useState } from "react";
import FlashcardForm from "../components/FlashcardForm";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const CreatePage = () => {
  const [message, setMessage] = useState("");

  const handleSave = (newCard) => {
    const existing = JSON.parse(localStorage.getItem("flashcards")) || [];
    localStorage.setItem("flashcards", JSON.stringify([...existing, newCard]));
    setMessage(" Đã lưu thẻ thành công!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-colors flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative overflow-hidden">
      

        <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-600 dark:text-indigo-300 flex items-center justify-center gap-2">
          ✏️ Tạo thẻ Flashcard mới
        </h1>

        {/* Thông báo lưu thành công */}
        {message && (
          <div className="mb-6 flex items-center justify-center gap-2 text-green-800 bg-green-100 border border-green-300 p-4 rounded-lg dark:bg-green-700 dark:text-white transition-all">
            <FaCheckCircle className="text-xl" />
            <span>{message}</span>
          </div>
        )}

        {/* Form nhập thẻ */}
        <FlashcardForm onSave={handleSave} />

        {/* Nút quay về */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            ⬅️ Quay về Trang Chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
