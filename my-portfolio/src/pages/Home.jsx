import React from "react";
import Hero from "../components/hero";
import SocialLinks from "../components/SocialLinks";
import Avatar from "../components/avatar";

const Home = () => {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 50px)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {/* Left Section (Text + Social Links) */}
      <div style={{ flex: 1, textAlign: "left" }}>
        <Hero />
        <SocialLinks />
      </div>

      {/* Right Section (Profile Image) */}
      <div style={{ flex: 1, display: "flex", justifyContent: "right" }}>
        <Avatar src="images/profile_image2.png" size={200} />
      </div>
    </section>
  );
};

export default Home;
