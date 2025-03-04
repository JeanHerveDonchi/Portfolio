import React from "react";
import Text from "../components/text";
import ProjectCard from "../components/projectCard";

const Projects = ({ projects }) => {
    return (
        <div className="container py-5">
            <Text variant="h1">My Projects</Text>
            <div className="row mt-4">
                {projects.map((project, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;