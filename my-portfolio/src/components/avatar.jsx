import React from "react";

const Avatar = ({ src, size = 100 }) => {
    return (
        <div>
            <img
                src={src}
                alt="Profile"
                style={{
                    backgroundColor: "#fff",
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #ccc",
                }}
            />
        </div>

    );
};

export default Avatar