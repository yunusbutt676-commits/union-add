"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        w-11 h-11
        rounded-full
        bg-gray-100
        dark:bg-[#1E1633]
        flex items-center justify-center
        transition
      "
    >
      {dark ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-[#071A2E]" />
      )}
    </button>
  );
}