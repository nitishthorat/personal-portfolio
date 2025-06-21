import omimedsImg from "../assets/projects/omnimeds.jpg";
import connectifyImg from "../assets/projects/connectify.jpg";
import diceImg from "../assets/projects/dice-game.jpg";
import minesweeperImg from "../assets/projects/minesweeper.jpg";
import notesImg from "../assets/projects/notes-app.jpg";
import snakeImg from "../assets/projects/snake-game.jpg";
import colorPalleteImg from "../assets/projects/color-palette-generator.jpg";

import angularIcon from "../assets/skills/angular.png";
import reactIcon from "../assets/skills/react.png";
import pythonIcon from "../assets/skills/python.png";
import mysqlIcon from "../assets/skills/mysql.png";
import mongodbIcon from "../assets/skills/mongodb.png";
import nodejsIcon from "../assets/skills/nodejs.png";
import reactNativeIcon from "../assets/skills/react-native.png";

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
    "You're about to explore the digital galaxy of Nitish Thorat, a developer who turns ideas into beautifully coded realities. From mobile apps to web systems, he crafts experiences that are out of this world.",
  skillsDescription:
    "I've scanned the systems — these are Nitish’s primary technologies. From building intuitive UIs to deploying scalable backends, each of these tools plays a part in his dev missions.",
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
    {
      name: "React Native",
      percentage: "75",
      icon: reactNativeIcon,
      style: {
        width: "85%",
      },
    },
  ],
  selectTechOptions: [
    { label: "AI", value: "AI" },
    { label: "AWS", value: "AWS" },
    { label: "AWS EC2", value: "AWS EC2" },
    { label: "AWS RDS", value: "AWS RDS" },
    { label: "AWS S3", value: "AWS S3" },
    { label: "Chakra UI", value: "Chakra UI" },
    { label: "CSS", value: "CSS" },
    { label: "CSS3", value: "CSS3" },
    { label: "HTML", value: "HTML" },
    { label: "HTML5", value: "HTML5" },
    { label: "JavaScript", value: "JavaScript" },
    { label: "Laravel", value: "Laravel" },
    { label: "LLM", value: "LLM" },
    { label: "MySQL", value: "MySQL" },
    { label: "Node.js", value: "Node.js" },
    { label: "NodeJs", value: "NodeJs" },
    { label: "PHP", value: "PHP" },
    { label: "Python", value: "Python" },
    { label: "Python3", value: "Python3" },
    { label: "React", value: "React" },
    { label: "React Native", value: "React Native" },
    { label: "React.js", value: "React.js" },
    { label: "ReactJS", value: "ReactJS" },
    { label: "Socket.io", value: "Socket.io" },
    { label: "TypeScript", value: "TypeScript" },
  ],

  projects: [
    {
      title: "Omnimeds",
      description:
        "An e-commerce website for medicines which connects doctors and patients with prescription verification",
      imgUrl: omimedsImg,
      technologies: [
        "PHP",
        "HTML",
        "HTML5",
        "CSS",
        "CSS3",
        "JavaScript",
        "MySQL",
        "Python",
        "Python3",
        "AWS",
        "AWS EC2",
        "AWS RDS",
        "AWS S3",
      ],
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
      technologies: [
        "React",
        "React.js",
        "ReactJS",
        "HTML",
        "HTML5",
        "CSS",
        "CSS3",
        "Chakra UI",
        "JavaScript",
        "TypeScript",
        "MySQL",
        "Node.js",
        "NodeJs",
        "Socket.io",
      ],
      links: {
        github: "https://github.com/nitishthorat/connectify",
        active: null,
      },
    },
    {
      title: "Dice Game",
      description: "A two player dice game, the first one to score 100 wins",
      imgUrl: diceImg,
      technologies: ["HTML", "HTML5", "CSS", "CSS3", "JavaScript"],
      links: {
        github: "https://github.com/nitishthorat/piggame.github.io",
        active: "https://nitishthorat.github.io/piggame.github.io/",
      },
    },
    {
      title: "Minesweeper Game",
      description: "Developed the classic Minesweeper game",
      imgUrl: minesweeperImg,
      technologies: [
        "React Native",
        "TypeScript",
        "HTML",
        "HTML5",
        "CSS",
        "CSS3",
        "JavaScript",
        "AI",
      ],
      links: {
        github: "https://github.com/nitishthorat/minesweeper-game",
        active: "https://expo.dev/accounts/nitishthorat/projects/minesweeper",
      },
    },
    {
      title: "Snake Game",
      description:
        "A grid-based mobile Snake game with swipe controls, growing speed and random obstacles.",
      imgUrl: snakeImg,
      technologies: [
        "HTML",
        "HTML5",
        "CSS",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React Native",
        "Python",
        "Python3",
      ],
      links: {
        github: "https://github.com/nitishthorat/snake-game",
        active: "https://expo.dev/accounts/nitishthorat/projects/snake-game",
      },
    },
    {
      title: "Color Palette Generator",
      description:
        "A minimalist tool to generate harmonious color palettes instantly. Built with modern UI and copy-to-clipboard functionality for seamless design inspiration.",
      imgUrl: colorPalleteImg,
      technologies: [
        "HTML",
        "HTML5",
        "CSS",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "React.js",
        "ReactJS",
        "Python",
        "Python3",
        "LLM",
      ],
      links: {
        github: "https://github.com/nitishthorat/color-palette-generator",
        active: null,
      },
    },
    {
      title: "Notes App",
      description:
        "A minimalist note-taking app built with Laravel Breeze featuring authentication, CSRF protection, and clean UI.",
      imgUrl: notesImg,
      technologies: [
        "HTML",
        "HTML5",
        "CSS",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "Python",
        "Python3",
        "Laravel",
        "PHP",
      ],
      links: {
        github: "https://github.com/nitishthorat/laravel-notes-app",
        active: null,
      },
    },
  ],
};

export default details;
