import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdDeveloperBoard } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

export const NavLinks = [
  {
    name: "HOME",
    link: "home",
  },
  {
    name: "SERVICES",
    link: "service",
  },

  {
    name: "RESUME",
    link: "resume",
  },
  {
    name: "PROJECTS",
    link: "projects",
  },
  {
    name: "CONTACT",
    link: "contact",
  },
];

export const SocialLinksFooter = [
  {
    name: "LinkedIn",
    path: "www.linkedin.com/in/shamsudeen-omotoso",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    path: "https://github.com/Programmer-Shams",
    icon: IoLogoGithub,
  },
  {
    name: "Instagram",
    path: "https://instagram.com/programmer_shams/",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    path: "https://twitter.com/programmerShams",
    icon: RiTwitterXFill,
  },
];

export const SocialLinks = [
  {
    name: "Instagram",
    path: "https://instagram.com/programmer_shams/",
    icon: FaInstagram,
  },
  {
    name: "Github",
    path: "https://github.com/Programmer-Shams",
    icon: IoLogoGithub,
  },
  {
    name: "LinkedIn",
    path: "www.linkedin.com/in/shamsudeen-omotoso",
    icon: FaLinkedin,
  },
];

export const SkillsInfo = [
  {
    name: "HTML",
    imgUrl: "/assets/images/html.png",
    percentage: 90,
    motion: { y: [-350, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 0.5 },
  },
  {
    name: "CSS",
    imgUrl: "/assets/images/css.png",
    percentage: 80,
    motion: { y: [-350, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 0.7 },
  },
  {
    name: "JavaScript",
    imgUrl: "/assets/images/js.png",
    percentage: 70,
    motion: { y: [-350, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 0.9 },
  },
  {
    name: "React",
    imgUrl: "/assets/images/react.png",
    percentage: 95,
    motion: { y: [-350, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.1 },  
  },
  {
    name: "TypeScript",
    imgUrl: "/assets/images/typescript.png",
    percentage: 80,
    motion: { y: [-300, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.3 },
  },
  {
    name: "NextJS",
    imgUrl: "/assets/images/nextjs.png",
    percentage: 80,
    motion: { y: [-300, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.5 },
  },
  {
    name: "tailwind",
    imgUrl: "/assets/images/tailwind.png",
    percentage: 80,
    motion: { y: [-300, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.7 },
  },
  {
    name: "NodeJS",
    imgUrl: "/assets/images/nodejs.svg.png",
    percentage: 80,
    motion: { y: [-300, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.9 },
  },
  {
    name: "MongoDB",
    imgUrl: "/assets/images/mongodb.png",
    percentage: 80,
    motion: { y: [-300, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 2.1 },
  },
  {
    name: "Git",
    imgUrl: "/assets/images/git.png",
    percentage: 90,
    motion: { y: [-350, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 2.3 },
  },
  {
    name: "RestAPI",
    imgUrl: "/assets/images/resr.webp",
    percentage: 80,
    motion: { y: [-350, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 2.5 },
  },
  {
    name: "Material UI",
    imgUrl: "/assets/images/mui.png",
    percentage: 80,
    motion: { y: [-350, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 2.7 },
  },
  {
    name: "Firebase",
    imgUrl: "/assets/images/firebase.png",
    percentage: 80,
    motion: { y: [-350, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 2.9 },
  },

  {
    name: "Supabase",
    imgUrl: "/assets/images/supabase.png",
    percentage: 80,
    motion: { y: [-350, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 3.1 },
  },
  {
    name: "GraphQL",
    imgUrl: "/assets/images/graphql.png",
    percentage: 80,
    motion: { y: [-350, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 3.3 },
  },
];

export const ServicesInfo = [
  {
    name: "Web Application",
    icon: HiOutlineComputerDesktop,
    content:
      "I specialize in creating robust and scalable web applications tailored to meet the unique needs of clients. From intuitive user interfaces to powerful backend functionalities. I craft seamless and responsive experiences. My commitment is to deliver web applications that not only meet but exceed expectations, ensuring optimal performance and user satisfaction.",
    motion: { y: [-350, -50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1 },
  },
  {
    name: "Mobile Application",
    icon: TbDeviceMobileCode,
    content:
      "I specialize in creating robust and scalable web applications tailored to meet the unique needs of clients. From intuitive user interfaces to powerful backend functionalities. I craft seamless and responsive experiences. My commitment is to deliver web applications that not only meet but exceed expectations, ensuring optimal performance and user satisfaction.",
    motion: { y: [250, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.5 },
  },
  {
    name: "Dynamic CMS Back-End",
    icon: MdDeveloperBoard,
    content:
      "I specialize in creating robust and scalable web applications tailored to meet the unique needs of clients. From intuitive user interfaces to powerful backend functionalities. I craft seamless and responsive experiences. My commitment is to deliver web applications that not only meet but exceed expectations, ensuring optimal performance and user satisfaction.",
    motion: { y: [-350, -50, 0], opacity: [0, 0, 1] },
    duration: { duration: 2 },
  },
];
export const ProjectInfo = [
  {
    name: "Event Organizer",
    imgUrl: "/assets/images/eventApp.png",
    githubUrl:
      "https://github.com/Programmer-Shams/project_event_organiser-App",
    projectUrl: "https://project-event-organiser-app.vercel.app/",
    projectStackIcons: [
      "/assets/images/react.png",
      "/assets/images/nextjs.png",
      "/assets/images/tailwind.png",
    ],

    projectSlider: [
      { url: "/assets/images/eventApp2.png" },
      { url: "/assets/images/eventApp1.png" },
      { url: "/assets/images/eventApp3.png" },
      { url: "/assets/images/eventApp4.png" },
      { url: "/assets/images/eventApp5.png" },
    ],
    description:
      "A web application for event organizers to manage their events and attendees. It has a dashboard where the organizer can see the list of events and attendees. The organizer can create, update, and delete events. The organizer can also see the list of attendees for each event and can also download the list of attendees in CSV format.",
    tag: ["All", "Web App"],
    motion: { y: [-350, -50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1 },
  },

  {
    name: "Event Organizer",
    imgUrl: "/assets/images/eventapp.png",
    description:
      "A web application for event organizers to manage their events and attendees. It has a dashboard where the organizer can see the list of events and attendees. The organizer can create, update, and delete events. The organizer can also see the list of attendees for each event and can also download the list of attendees in CSV format.",
    github: "https://github.com/Programmer-Shams/project_event_organiser-App",
    projectUrl: "https://project-event-organiser-app.vercel.app/",
    projectStackIcons: [
      "/assets/images/react.png",
      "/assets/images/nextjs.png",
      "/assets/images/tailwind.png",
    ],
    projectSlider: [
      { url: "/assets/images/eventApp2.png" },
      { url: "/assets/images/eventApp1.png" },
      { url: "/assets/images/eventApp3.png" },
      { url: "/assets/images/eventApp4.png" },
      { url: "/assets/images/eventApp5.png" },
    ],
    tag: ["All", "Mobile App"],
    motion: { y: [250, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.5 },
  },

  {
    name: "Event Organizer",
    imgUrl: "/assets/images/eventapp.png",
    description:
      "A web application for event organizers to manage their events and attendees. It has a dashboard where the organizer can see the list of events and attendees. The organizer can create, update, and delete events. The organizer can also see the list of attendees for each event and can also download the list of attendees in CSV format.",
    githubUrl:
      "https://github.com/Programmer-Shams/project_event_organiser-App",
    projectUrl: "https://project-event-organiser-app.vercel.app/",
    projectStackIcons: [
      "/assets/images/react.png",
      "/assets/images/nextjs.png",
      "/assets/images/tailwind.png",
    ],
    projectSlider: [
      { url: "/assets/images/eventApp2.png" },
      { url: "/assets/images/eventApp1.png" },
      { url: "/assets/images/eventApp3.png" },
      { url: "/assets/images/eventApp4.png" },
      { url: "/assets/images/eventApp5.png" },
    ],
    tag: ["All", "Web App"],
    motion: { y: [-350, -50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1 },
  },
  {
    name: "Event Organizer",
    imgUrl: "/assets/images/eventapp.png",
    description:
      "A web application for event organizers to manage their events and attendees. It has a dashboard where the organizer can see the list of events and attendees. The organizer can create, update, and delete events. The organizer can also see the list of attendees for each event and can also download the list of attendees in CSV format.",
    github: "https://github.com/Programmer-Shams/project_event_organiser-App",
    projectUrl: "https://project-event-organiser-app.vercel.app/",
    projectStackIcons: [
      "/assets/images/react.png",
      "/assets/images/nextjs.png",
      "/assets/images/tailwind.png",
    ],
    tag: ["All", "Web App"],
    motion: { y: [250, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.5 },
  },
  {
    name: "Event Organizer",
    imgUrl: "/assets/images/eventapp.png",
    description:
      "A web application for event organizers to manage their events and attendees. It has a dashboard where the organizer can see the list of events and attendees. The organizer can create, update, and delete events. The organizer can also see the list of attendees for each event and can also download the list of attendees in CSV format.",
    github: "https://github.com/Programmer-Shams/project_event_organiser-App",
    projectUrl: "https://project-event-organiser-app.vercel.app/",
    projectStackIcons: [
      "/assets/images/react.png",
      "/assets/images/nextjs.png",
      "/assets/images/tailwind.png",
    ],
    tag: ["All", "UI/UX"],
    motion: { y: [-350, -50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1 },
  },
  {
    name: "Event Organizer",
    imgUrl: "/assets/images/eventapp.png",
    description:
      "A web application for event organizers to manage their events and attendees. It has a dashboard where the organizer can see the list of events and attendees. The organizer can create, update, and delete events. The organizer can also see the list of attendees for each event and can also download the list of attendees in CSV format.",
    github: "https://github.com/Programmer-Shams/project_event_organiser-App",
    projectUrl: "https://project-event-organiser-app.vercel.app/",
    projectStackIcons: [
      "/assets/images/react.png",
      "/assets/images/nextjs.png",
      "/assets/images/tailwind.png",
    ],
    tag: ["All", "Next JS"],
    motion: { y: [250, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.5 },
  },
  {
    name: "Event Organizer",
    imgUrl: "/assets/images/eventapp.png",
    description:
      "A web application for event organizers to manage their events and attendees. It has a dashboard where the organizer can see the list of events and attendees. The organizer can create, update, and delete events. The organizer can also see the list of attendees for each event and can also download the list of attendees in CSV format.",
    github: "https://github.com/Programmer-Shams/project_event_organiser-App",
    projectUrl: "https://project-event-organiser-app.vercel.app/",
    projectStackIcons: [
      "/assets/images/react.png",
      "/assets/images/nextjs.png",
      "/assets/images/tailwind.png",
    ],
    tag: ["All", "Mobile App"],
    motion: { y: [-350, -50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1 },
  },
  {
    name: "Event Organizer",
    imgUrl: "/assets/images/eventapp.png",
    description:
      "A web application for event organizers to manage their events and attendees. It has a dashboard where the organizer can see the list of events and attendees. The organizer can create, update, and delete events. The organizer can also see the list of attendees for each event and can also download the list of attendees in CSV format.",
    github: "https://github.com/Programmer-Shams/project_event_organiser-App",
    projectUrl: "https://project-event-organiser-app.vercel.app/",
    projectStackIcons: [
      "/assets/images/react.png",
      "/assets/images/nextjs.png",
      "/assets/images/tailwind.png",
    ],
    tag: ["All", "React JS"],
    motion: { y: [250, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.5 },
  },
];
