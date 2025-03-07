import React from "react";
import Text from "../components/text";
import ProjectCard from "../components/projectCard";

const Projects = ({ projects }) => {
    return (
        <div id="projects" className="container py-5">
            <Text variant="h1">My Projects</Text>
            <Text>I believe in proof of work, Here are my popular works. With their respective Tech Stack.</Text>
            <div className="row mt-4">
                {projects.map((project, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;