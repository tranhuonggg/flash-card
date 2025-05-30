// src/components/SubjectList.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("flashcards")) || [];
    const uniqueSubjects = [...new Set(storedCards.map((card) => card.subject))];
    setSubjects(uniqueSubjects);
  }, []);

  if (subjects.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-600 dark:text-gray-400">
        Chưa có chủ đề nào. Vui lòng tạo thẻ mới.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-10">
      {subjects.map((subj) => (
        <motion.div
          key={subj}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer rounded-xl shadow-md bg-gradient-to-r from-green-400 to-emerald-500 text-white p-6 relative overflow-hidden transition-all duration-300 dark:from-green-600 dark:to-green-700"
          onClick={() => navigate(`/study/${subj}`)}
        >
          <div className="absolute top-3 right-3 opacity-30 text-white text-4xl">
            <FaBookOpen />
          </div>
          <h3 className="text-xl font-bold capitalize z-10 relative">{subj}</h3>
          <p className="text-sm mt-1 opacity-90 z-10 relative">Bấm để bắt đầu học</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SubjectList;
