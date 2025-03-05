import React, { useState } from "react";
import Text from "../components/text";
import { useTheme } from "../context/themeContext";
import { COLORS } from "../config/constants";
import emailjs from "emailjs-com";
import { EMAILJSCREDENTIALS } from "../config/constants";

const ContactForm = () => {
    const [formData, setFormData] = useState({ 
        to_name: EMAILJSCREDENTIALS.emailName, 
        from_name: "", 
        reply_to: "", 
        message: "" 
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const { theme } = useTheme();
    const darkMode = theme === "dark";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(
                EMAILJSCREDENTIALS.emailServiceId,
                EMAILJSCREDENTIALS.templateId,
                formData,
                EMAILJSCREDENTIALS.publicKey
            )
            .then(() => {
                setIsSubmitted(true);
                setFormData({ 
                    to_name: EMAILJSCREDENTIALS.emailName, 
                    from_name: "", 
                    reply_to: "", 
                    message: "" 
                });

                // Hide the popup after 3 seconds
                setTimeout(() => setIsSubmitted(false), 3000);
            })
            .catch((error) => console.error("EmailJS Error:", error));
    };

    return (
        <section className="contact-container">
            {isSubmitted && (
                <div className="popup-message">
                    <p>✅ Your message has been sent successfully! I’ll get back to you as soon as possible.</p>
                </div>
            )}

            <div className={`contact-text ${darkMode ? "dark" : "light"}`}>
                <Text variant="h1">Let's discuss something <span className="color-text">cool</span> together.</Text>
            </div>

            <form 
                className="contact-form" 
                style={{ background: darkMode ? COLORS.cardAndFormDarkThemeBackground : COLORS.formLightThemeBackground }} 
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="to_name" value={formData.to_name} /> 
                <input type="text" name="from_name" placeholder="Your Name" required value={formData.from_name} onChange={handleChange} />
                <input type="email" name="reply_to" placeholder="Your Email" required value={formData.reply_to} onChange={handleChange} />
                <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </section>
    );
};

export default ContactForm;
