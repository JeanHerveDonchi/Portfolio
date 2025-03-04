import React from "react";

export const Tag = ({ name }) => {
    return (
        <span className="border border-dark rounded px-2 py-1 text-muted small">
            {name}
        </span>
    );
};