import React from "react";
import "./NexusAvatar.scss";
import nexusIcon from "../../assets/header-img.png";

const sectionMessages = {
  skills: "🛠️ This is the Tech Bay — explore Nitish's tools of choice.",
  projects: "🚀 Here are Nitish’s deployed missions. Click to explore.",
  contact: "📡 Ready to connect? Let's open a comm channel.",
};

const NexusAvatar = ({ currentSection }) => {
  return (
    <div
      className={`nexus-avatar left-center ${
        currentSection !== "home" ? "visible" : ""
      }`}
    >
      <img src={nexusIcon} alt="Nexus Assistant" />
      <div className="nexus-hint-bubble">{sectionMessages[currentSection]}</div>
    </div>
  );
};

export default NexusAvatar;
