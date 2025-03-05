import React from "react";
import Hero from "../components/hero";
import SocialLinks from "../components/SocialLinks";
import Avatar from "../components/avatar";

const Home = () => {
  return (
    <section
      className="home-container"
    >
      {/* Left Section (Text + Social Links) */}
      <div className="home-text">
        <Hero />
        <SocialLinks />
      </div>

      {/* Right Section (Profile Image) */}
      <div className="home-avatar">
        <Avatar src="images/profile_image2.png" size={200} />
      </div>
    </section>
  );
};

export default Home;
