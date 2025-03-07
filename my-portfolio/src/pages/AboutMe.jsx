import React from "react";
import TechStack from "../components/techStack";
import Text from "../components/text";
import Button from "../components/button";
import { FaReact } from "react-icons/fa";
import { TECHSTACKS, TEXT } from "../config/constants";

// About Me Section



const AboutMe = () => {

    const handleDownload = () => {
        const resumeUrl = "/Jean_Donchi_Resume.pdf";
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Jean_Herve's_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section id="about" className="about-container">
          <div className="about-content">
            {/* Left Section (Text & Tech Stack) */}
            <div className="about-text">
              <Text variant="h1">{TEXT.aboutTitle}</Text>
              <div className="about-description">
                <Text>{TEXT.aboutParagraph}</Text>
                <Text>{TEXT.aboutStack}</Text>
              </div>
    
              {/* Tech Stack Grid */}
              <div className="tech-stack">
                <TechStack stacks={TECHSTACKS} />
              </div>
            </div>
    
            {/* Right Section (Button) */}
            <div className="about-button">
              <Button text="Download Resume" onClick={handleDownload} />
            </div>
          </div>
        </section>
      );
    };

export default AboutMe;
