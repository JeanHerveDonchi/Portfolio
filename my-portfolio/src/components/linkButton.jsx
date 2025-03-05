import React from "react";
const LinkButton = ({icon: Icon, url}) => {
    return (
        <a
         href={url}
         target="_blank"
         rel="noopener noreferrer"
         className="link-button"
         aria-label="External Link"
        >
            <Icon size={30}/>
        </a>
    );
};

export default LinkButton;