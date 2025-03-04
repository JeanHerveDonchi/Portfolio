import { FaEnvelope, FaGithub, FaLinkedin, FaVoicemail } from "react-icons/fa";
import LinkButton from "./linkButton";
import { LINKS } from "../config/constants";

const SocialLinks = () => {
  return (
    <div className="d-flex gap-3">
      <LinkButton icon={FaGithub} url={LINKS.github} />
      <LinkButton icon={FaLinkedin} url={LINKS.linkedIn} />
      <LinkButton icon={FaEnvelope} url={LINKS.email}/>
    </div>
  );
};

export default SocialLinks;
