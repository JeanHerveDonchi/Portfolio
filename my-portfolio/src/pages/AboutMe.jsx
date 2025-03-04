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
        <section
        style={{
            minHeight: "calc(100vh - 120px)",
        }}>
            <div className="d-flex flex-row mb-3 justify-content-around align-items-center">
                <div className="p-2" style={{ width: "40vw" }}>
                    <Text variant="h1">{TEXT.aboutTitle}</Text>
                    <div style={{
                        marginTop: 50,
                        marginBottom: 50
                    }}>
                        <Text>{TEXT.aboutParagraph}</Text>
                        <Text>{TEXT.aboutStack}</Text>
                    </div>
                    {/* Tech Stack Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
                        <TechStack stacks={TECHSTACKS} />
                    </div>
                </div>

                {/* Right Section (Button) */}
                <div className="p-2">
                    <Button text="Download Resume" onClick={handleDownload} />
                </div>
            </div>
        </section>

    );
};

export default AboutMe;
