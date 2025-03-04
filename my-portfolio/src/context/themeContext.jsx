import React, { createContext, useState, useEffect, useContext } from "react";

// Create Theme Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    // Apply theme when it changes
    useEffect(() => {
        if (theme === "dark") {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 🔹 Custom Hook to Use Theme Context
export const useTheme = () => {
    return useContext(ThemeContext);
};
