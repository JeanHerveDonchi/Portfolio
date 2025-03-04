import React from "react";
import Text from "../components/text";
import { Tag } from "./tag";
import { FaGithub, FaVideo } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    return (
        <div className="card shadow-sm p-3"
            style={{
                width:"18rem",
                borderColor: "#55E5A4",
                borderWidth: "3px"
            }}
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
                <p className="text-muted">{project.description}</p>
                
                {/* Links */}
                <div className="d-flex gap-3 mb-2 p-3">
                    <a href={project.videoLink}>
                        <FaVideo size={20} />
                    </a>
                    <a href={project.githubLink}>
                        <FaGithub size={20} />
                    </a>
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