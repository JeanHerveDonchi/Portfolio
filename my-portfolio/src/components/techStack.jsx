import React from "react";

const TechStack = ({ stacks }) => {
    const infiniteStacks = [...stacks, ...stacks];

    return (
        <div style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "100%",
        }}>
            <div className="techstack-container">
                {infiniteStacks.map((stack, index) => (
                    <div key={index} className="techstack-item">
                        <img src={stack.icon} alt={stack.title} />
                        <p>{stack.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
