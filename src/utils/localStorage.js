// src/utils/localStorage.js

export const initFlashcards = () => {
  const existing = JSON.parse(localStorage.getItem("flashcards"));
  if (!existing || existing.length === 0) {
    const sampleData = [
      // 📐 Chủ đề: Toán (nâng cao)
      { subject: "toán", question: "Đạo hàm của x^2 là gì?", answer: "2x" },
      { subject: "toán", question: "Tập xác định của hàm số y = 1/x là gì?", answer: "R \\ {0}" },
      { subject: "toán", question: "Giá trị của sin(90°) là?", answer: "1" },
      { subject: "toán", question: "Giải bất phương trình: x^2 - 4 < 0", answer: "-2 < x < 2" },
      { subject: "toán", question: "Mệnh đề 'Nếu A thì B' có phản mệnh đề là gì?", answer: "Nếu không B thì không A" },

      // 🏛 Chủ đề: Lịch sử
      { subject: "lịch sử", question: "Năm 1945 có sự kiện gì?", answer: "Cách mạng tháng Tám" },
      { subject: "lịch sử", question: "Bác Hồ đọc Tuyên ngôn độc lập vào ngày nào?", answer: "2/9/1945" },
      { subject: "lịch sử", question: "Chiến dịch Điện Biên Phủ diễn ra năm nào?", answer: "1954" },
      { subject: "lịch sử", question: "Cuộc kháng chiến chống Mỹ kết thúc năm nào?", answer: "1975" },
      { subject: "lịch sử", question: "Ai là người sáng lập Đảng Cộng sản Việt Nam?", answer: "Nguyễn Ái Quốc (Hồ Chí Minh)" },

      // 🌍 Chủ đề: Địa lý
      { subject: "địa lý", question: "Thủ đô của Việt Nam là gì?", answer: "Hà Nội" },
      { subject: "địa lý", question: "Sông dài nhất Việt Nam là?", answer: "Sông Cửu Long (Mekong)" },
      { subject: "địa lý", question: "Đỉnh núi cao nhất Việt Nam là?", answer: "Fansipan" },
      { subject: "địa lý", question: "Biển lớn nhất giáp Việt Nam là?", answer: "Biển Đông" },
      { subject: "địa lý", question: "Việt Nam có bao nhiêu tỉnh thành?", answer: "63" },

      // 💻 Chủ đề: Tin học
      { subject: "tin học", question: "Biến trong lập trình là gì?", answer: "Vùng nhớ lưu trữ dữ liệu tạm thời trong chương trình" },
      { subject: "tin học", question: "Hàm trong lập trình dùng để làm gì?", answer: "Thực hiện một chức năng cụ thể, có thể tái sử dụng" },
      { subject: "tin học", question: "Câu lệnh if dùng để làm gì?", answer: "Rẽ nhánh theo điều kiện đúng/sai" },
      { subject: "tin học", question: "Vòng lặp for dùng để?", answer: "Lặp lại khối lệnh với số lần xác định" },
      { subject: "tin học", question: "HTML là viết tắt của?", answer: "HyperText Markup Language" },
    ];

    localStorage.setItem("flashcards", JSON.stringify(sampleData));
    console.log("📚 Dữ liệu mẫu đã được khởi tạo vào localStorage.");
  }
};
