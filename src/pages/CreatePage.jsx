import { useState } from "react";
import FlashcardForm from "../components/FlashcardForm";
import { Link } from "react-router-dom";

const CreatePage = () => {
  const [message, setMessage] = useState("");

  const handleSave = (newCard) => {
    const existing = JSON.parse(localStorage.getItem("flashcards")) || [];
    localStorage.setItem("flashcards", JSON.stringify([...existing, newCard]));
    setMessage("✅ Đã lưu thẻ thành công!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="h-screen w-screen bg-gray-100 dark:bg-gray-900 p-6 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 ">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          ✏️ Tạo thẻ Flashcard mới
        </h1>

        {message && (
          <div className="mb-6 flex items-center justify-center text-green-700 bg-green-100 border border-green-300 p-4 rounded-lg dark:bg-green-800 dark:text-green-100">
            {message}
          </div>
        )}

        <FlashcardForm onSave={handleSave} />

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            ⬅️ Quay về Trang Chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
