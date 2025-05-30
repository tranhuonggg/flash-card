// src/pages/Home.jsx
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SubjectList from "../components/SubjectList";

const navItems = [
    { name: "Home", to: "/", icon: "🏠" },
    { name: "Tạo thẻ", to: "/create", icon: "➕" },
];

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const dm = localStorage.getItem("theme") === "dark";
        setDarkMode(dm);
        document.documentElement.classList.toggle("dark", dm);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const next = !prev;
            document.documentElement.classList.toggle("dark", next);
            localStorage.setItem("theme", next ? "dark" : "light");
            return next;
        });
    };

    return (
        <div className="flex h-screen w-screen bg-gray-100 dark:bg-gray-900 transition-colors">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg flex-shrink-0 relative">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">
                        📚 Flashcard
                    </h1>
                </div>
                <nav className="px-4">
                    {navItems.map((item) => (
                        <Link key={item.to} to={item.to}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className={`flex items-center gap-3 p-3 rounded-md mb-2 transition-colors
                  ${pathname === item.to
                                        ? "bg-indigo-100 dark:bg-indigo-700"
                                        : "hover:bg-indigo-50 dark:hover:bg-gray-700"
                                    }`}
                            >
                                <span>{item.icon}</span>
                                <span className="font-medium dark:text-gray-200">{item.name}</span>
                            </motion.div>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 w-full h-full flex flex-col p-8 overflow-auto relative">
                {/* Dark Mode Switch */}
                <div className="absolute top-4 right-4 flex items-center gap-2 text-sm dark:text-white text-gray-800 z-50">
                    <span className="select-none">
                        {darkMode ? "🌙 Chế độ tối" : "☀️ Chế độ sáng"}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-checked:bg-indigo-600 rounded-full peer-focus:ring-2 peer-focus:ring-indigo-500 transition-colors"></div>
                        <div
                            className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform
        ${darkMode ? "translate-x-5" : "translate-x-0"}`}
                        ></div>
                    </label>
                </div>



                <motion.header
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
                        Danh sách chủ đề
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300">
                        Chọn chủ đề để bắt đầu học!
                    </p>
                </motion.header>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1, duration: 0.5 }
                        }
                    }}
                    className="flex-grow w-full h-full"
                >
                    <SubjectList />
                </motion.div>
            </main>
        </div>
    );
};

export default Home;
