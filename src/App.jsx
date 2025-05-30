// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePage from "./pages/CreatePage";
import StudyPage from "./pages/StudyPage";
import { useEffect } from "react";
import { initFlashcards } from "./utils/localStorage";

function App() {
    useEffect(() => {
    initFlashcards();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
       <Route path="/study/:subject" element={<StudyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
