import omimedsImg from "../assets/projects/omnimeds.jpg";
import connectifyImg from "../assets/projects/connectify.jpg";
import diceImg from "../assets/projects/dice-game.jpg";
import angularIcon from "../assets/skills/angular.png";
import reactIcon from "../assets/skills/react.png";
import pythonIcon from "../assets/skills/python.png";
import mysqlIcon from "../assets/skills/mysql.png";
import mongodbIcon from "../assets/skills/mongodb.png";
import nodejsIcon from "../assets/skills/nodejs.png";

const details = {
  navLinks: [
    {
      name: "Home",
      ref: "home",
    },
    {
      name: "Skills",
      ref: "skill",
    },
    {
      name: "Projects",
      ref: "projects",
    },
  ],
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/nitish-uttamrao-thorat/",
    github: "https://github.com/nitishthorat",
    instagram: "https://www.instagram.com/nitishthorat",
  },
  description:
    "A passionate web developer with a knack for creating dynamic and responsive websites. With a strong foundation in both front-end and back-end technologies, I strive to deliver seamless user experiences and robust web solutions.",
  skillsDescription:
    "As a web developer, I possess a broad range of skills that enable me to design and build dynamic, responsive, and engaging web applications. With a strong foundation in both front-end and back-end development, I am equipped to create full-stack solutions that adhere to the latest web standards and deliver outstanding user experiences. Here are some of the key technologies and tools I use",
  skills: [
    {
      name: "Angular",
      percentage: "90",
      icon: angularIcon,
      style: {
        width: "60%",
      },
    },
    {
      name: "React",
      percentage: "85",
      icon: reactIcon,
      style: {
        width: "75%",
      },
    },
    {
      name: "Python",
      percentage: "85",
      icon: pythonIcon,
      style: {
        width: "100%",
      },
    },
    {
      name: "Node.js",
      percentage: "75",
      icon: nodejsIcon,
      style: {
        width: "85%",
      },
    },
    {
      name: "MySQL",
      percentage: "80",
      icon: mysqlIcon,
      style: {
        width: "80%",
      },
    },
    {
      name: "MongoDB",
      percentage: "75",
      icon: mongodbIcon,
      style: {
        width: "90%",
      },
    },
  ],
  projects: [
    {
      title: "Omnimeds",
      description:
        "An e-commerce website for medicines which connects doctors and patients with prescription verification",
      imgUrl: omimedsImg,
      links: {
        github: null,
        activeL: null,
      },
    },
    {
      title: "Connectify",
      description:
        "An online chat application inspired by whatsapp with real time messaging and notifications using Socket.io",
      imgUrl: connectifyImg,
      links: {
        github: "https://github.com/nitishthorat/connectify",
        active: null,
      },
    },
    {
      title: "Dice Game",
      description: "A two player dice game, the first one to score 100 wins",
      imgUrl: diceImg,
      links: {
        github: "https://github.com/nitishthorat/piggame.github.io",
        active: "https://nitishthorat.github.io/piggame.github.io/",
      },
    },
  ],
};

export default details;
