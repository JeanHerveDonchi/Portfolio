import React from "react";
import { useTheme } from "../context/themeContext";
import { COLORS, FOOTERLINKS } from "../config/constants";

const Footer = () => {
    const { theme } = useTheme();
    const darkMode = theme === "dark";

    return (
        <footer style={{
            padding: "40px 10vw",
            background: darkMode ? COLORS.darkModeBodyBackground : COLORS.lightModeBodyBackground,
            color: darkMode ? COLORS.darkModeText : COLORS.lightModeText,
            textAlign: "center"
        }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                gap: "20px",
                justifyContent: "center",
                textAlign: "center"
            }}>
                {FOOTERLINKS.map((link, index) => (
                    <a key={index} href={link.url} style={{
                        fontSize: "14px",
                        color: darkMode ? "var(--white)" : "var(--black)",
                        textDecoration: "none",
                        transition: "color 0.3s",
                    }}
                        onMouseOver={(e) => e.target.style.color = "var(--primary_blue)"}
                        onMouseOut={(e) => e.target.style.color = darkMode ? "var(--white)" : "var(--black)"}>
                        {link.name}
                    </a>
                ))}
            </div>
            <hr style={{
                margin: "20px auto",
                width: "50%",
                height: "1px",
                border: "none",
                backgroundColor: darkMode ? "var(--white)" : "var(--black)",
                opacity: 0.5,
            }} />
            <p style={{ fontSize: "14px" }}>Designed and built by <strong>Herve Donchi</strong></p>
        </footer>
    );
};

export default Footer;
