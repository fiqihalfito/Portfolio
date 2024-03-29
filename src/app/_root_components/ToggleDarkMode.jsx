"use client";

import MoonIcon from "@/assets/icons/moon";
import SunIcon from "@/assets/icons/sun";
import { useContext } from "react";
import { ThemeContext } from "../_root_provider/theme-provider";

const ToggleDarkMode = () => {
    const [theme, handleTheme] = useContext(ThemeContext);

    return (
        <button
            className={`p-2  border-sky-400 bg-sky-900 hover:border-4 dark:border-cyan-400 dark:bg-sky-600 hover:bg-sky-800 hover:border-sky-300 rounded-lg`}
            onClick={handleTheme}
        >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
    );
};

export default ToggleDarkMode;
