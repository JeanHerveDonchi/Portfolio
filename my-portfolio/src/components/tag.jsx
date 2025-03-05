import React from "react";
import { useTheme } from "../context/themeContext";

export const Tag = ({ name }) => {
    const { theme, toggleTheme } = useTheme();
    var darkMode = theme === "dark" ? true: false 
    return (
        <span className={`border ${ darkMode ? "border-light text-muted-dark" : "border-dark text-muted" } rounded px-2 py-1 small`}>
            {name}
        </span>
    );
};