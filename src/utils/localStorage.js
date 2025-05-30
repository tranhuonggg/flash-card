// src/utils/localStorage.js

export const initFlashcards = () => {
  const existing = JSON.parse(localStorage.getItem("flashcards"));
  if (!existing || existing.length === 0) {
    const sampleData = [
      {
        subject: "toán",
        question: "1 + 1 = ?",
        answer: "2",
      },
      {
        subject: "lịch sử",
        question: "Năm 1945 có sự kiện gì?",
        answer: "Cách mạng tháng Tám",
      },
      {
        subject: "địa lý",
        question: "Thủ đô của Việt Nam là gì?",
        answer: "Hà Nội",
      },
    ];
    localStorage.setItem("flashcards", JSON.stringify(sampleData));
    console.log("📚 Dữ liệu mẫu đã được khởi tạo vào localStorage.");
  }
};
