// src/components/SubjectList.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("flashcards")) || [];
    // Lấy danh sách chủ đề duy nhất
    const uniqueSubjects = [...new Set(storedCards.map((card) => card.subject))];
    setSubjects(uniqueSubjects);
  }, []);

  if (subjects.length === 0) {
    return <p className="text-center mt-10 text-gray-600">Chưa có chủ đề nào. Vui lòng tạo thẻ mới.</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center dark:text-gray-100">Danh sách chủ đề</h2>
      <div className="grid grid-cols-2 gap-4">
        {subjects.map((subj) => (
          <button
            key={subj}
            onClick={() => navigate(`/study/${subj}`)}
            className="bg-green-500 hover:bg-green-600 text-white py-3 rounded font-semibold capitalize"
          >
            {subj}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
