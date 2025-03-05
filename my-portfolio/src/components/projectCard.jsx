import React from "react";
import Text from "../components/text";
import { Tag } from "./tag";
import { FaGithub, FaVideo } from "react-icons/fa";
import { useTheme } from "../context/themeContext";



const ProjectCard = ({ project}) => {
    const { theme, toggleTheme } = useTheme();
    var darkMode = theme === "dark" ? true: false 
    return (
        <div 
            className={`card shadow-sm p-3 project-card ${darkMode ? "dark-theme" : ""}`}
        >
            <div className="overflow-hidden" style={{ borderRadius: "8px" }}>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-100 project-image"
                />
            </div>
            <div className="mt-3">
                <Text variant="h5">{project.title}</Text>
                <p className= {darkMode ? "text-muted-dark" : "text-muted"}>{project.description}</p>
                
                {/* Links */}
                <div className="d-flex gap-3 mb-2">
                    {project.videoLink && (
                        <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
                            <FaVideo size={20} />
                        </a>
                    )}
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} />
                        </a>
                    )}
                </div>
                
                {/* Tags */}
                <div className="d-flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, index) => (
                        <Tag key={index} name={tag} />
                    ))}
                </div>
            </div>
        </div>
    );
};



export default ProjectCard;