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
    name: "Thread Application",
    imgUrl: "/assets/images/thread8.png",
    description:
      "I built a Threads clone with Next.js 14+. The full-stack app includes features like nested comments, notifications, and real-time search. The tech stack comprises Next.js for the frontend, MongoDB for the database, Shadcn UI and TailwindCSS for styling, Clerk for authentication, Webhooks for integrations, and Serverless APIs for a scalable backend",
    github: "https://github.com/Programmer-Shams/project_nextjs_threads",
    projectUrl: "https://project-nextjs-threads.vercel.app/",
    projectStackIcons: [
      "/assets/images/nextjs.png",
      "/assets/images/typescript.png",
      "/assets/images/mongodb.png",
    ],
    projectSlider: [
      { url: "/assets/images/thread10.png" },
      { url: "/assets/images/thread1.png" },
      { url: "/assets/images/thread2.png" },
      { url: "/assets/images/thread3.png" },
      { url: "/assets/images/thread4.png" },
      { url: "/assets/images/thread5.png" },
      { url: "/assets/images/thread6.png" },
      { url: "/assets/images/thread7.png" },
    ],
    tag: ["All", "Mobile App"],
    motion: { y: [250, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.5 },
  },

  {
    name: "Price Tracker",
    imgUrl: "/assets/images/pricewise1.png",
    description:
      "I build a web scraping website, eCommerce price tracker with nextjs with the features of data scraping, cron jobs, sending emails, deployment, and more.",
    githubUrl:
      "https://github.com/Programmer-Shams/project_nextjs_PriceCraft_App",
    projectUrl: "https://price-craft-app-eight.vercel.app/",
    projectStackIcons: [
      "/assets/images/nextjs.png",
      "/assets/images/tailwind.png",
      "/assets/images/typescript.png",
    ],
    projectSlider: [
      { url: "/assets/images/pricewise1.png" },
      { url: "/assets/images/pricewise2.png" },
      { url: "/assets/images/pricewise3.png" },
      { url: "/assets/images/pricewise4.png" },
      { url: "/assets/images/pricewise5.png" },
      { url: "/assets/images/pricewise6.png" },
      { url: "/assets/images/pricewise7.png" },
      { url: "/assets/images/pricewise8.png" },
    ],
    tag: ["All", "Web App"],
    motion: { y: [-350, -50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1 },
  },
  {
    name: "Travel Web Landing Page",
    imgUrl: "/assets/images/travel1.png",
    description:
      "Built with Next.js, TailwindCSS, and TypeScript, this landing page not only looks great but also serves as a hands-on project to reinforce one's understanding of these technologies.",
    github: "https://github.com/Programmer-Shams/UI-UX-Travel-Web-App",
    projectUrl: "https://ui-ux-travel-web-app.vercel.app",
    projectStackIcons: [
      "/assets/images/react.png",
      "/assets/images/nextjs.png",
      "/assets/images/tailwind.png",
    ],
    projectSlider: [
      { url: "/assets/images/travel1.png" },
      { url: "/assets/images/travel2.png" },
      { url: "/assets/images/travel3.png" },
      { url: "/assets/images/travel4.png" },
      { url: "/assets/images/travel5.png" },
      { url: "/assets/images/travel6.png" },
    ],
    tag: ["All", "Web UI/UX"],
    motion: { y: [250, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.5 },
  },
  {
    name: "AI  Article Summarizer",
    imgUrl: "/assets/images/artilce1.png",
    description:
      "I developed a web app using React.js, Redux Toolkit, and Tailwind CSS, enabling users to summarize articles with one click via the OpenAI model. It boasts a modern interface, intuitive user experience, and features like URL-based summary generation, local storage for history saving, and copy to clipboard functionality. Utilizing Redux Toolkit Query, advanced API requests are made conditionally for optimized data management. The app emphasizes robust code architecture and reusability for scalability and maintenance.",
    github: "https://github.com/Programmer-Shams/project_AI_Article-Summarizer",
    projectUrl: "https://project-ai-article-summarizer.vercel.app",
    projectStackIcons: [
      "/assets/images/react.png",
      "/assets/images/tailwind.png",
      "/assets/images/js.png",
    ],
    projectSlider: [
      { url: "/assets/images/artilce1.png" },
      { url: "/assets/images/artilce2.png" },
    ],
    
    tag: ["All", "React JS"],
    motion: { y: [-350, -50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1 },
  },
  {
    name: "Social Media App",
    imgUrl: "/assets/images/media2.png",
    description:
      "I built a feature-rich web app with React.js, Appwrite, React Query, TypeScript, Shadcn, and Tailwind CSS. It includes authentication, post exploration, liking and saving, detailed post views, user profiles, post creation and editing, and responsive UI. React Query ensures efficient data fetching, while Appwrite offers streamlined backend features like authentication and database management. The project prioritizes code architecture and reusability for scalability.",
    github: "https://github.com/Programmer-Shams/project_social_media_App",
    projectUrl: "https://code-share-web-app.vercel.app/",
    projectStackIcons: [
      "/assets/images/react.png",
      "/assets/images/typescript.png",
      "/assets/images/tailwind.png",
      "/assets/images/supabase.png",
    ],
    projectSlider: [
      { url: "/assets/images/media1.png" },
      { url: "/assets/images/media2.png" },
      { url: "/assets/images/media3.png" },
      { url: "/assets/images/media4.png" },
      { url: "/assets/images/media5.png" },
      { url: "/assets/images/media6.png" },
      { url: "/assets/images/media7.png" },
      { url: "/assets/images/media8.png" },
      { url: "/assets/images/media9.png" },
      { url: "/assets/images/media10.png" },
      { url: "/assets/images/media11.png" },
    ],
    tag: ["All", "React JS"],
    motion: { y: [250, 50, 0], opacity: [0, 0, 1] },
    duration: { duration: 1.5 },
  },
  {
    name: "MetaVerse Landing Page",
    imgUrl: "/assets/images/meta1.png",
    description:
      "I developed a MetaVerse Landing Page Website Talking about what metaverse is and how it works. The website is built with Next.js, TailwindCSS, and TypeScript. It has a modern and responsive design, and it is also SEO optimized.",
    github: "https://github.com/Programmer-Shams/metaversus",
    projectUrl: "https://metaversus-zeta-six.vercel.app/",
    projectStackIcons: [
      "/assets/images/nextjs.png",
      "/assets/images/tailwind.png",
      "/assets/images/typescript.png",
    ],
    projectSlider: [
      { url: "/assets/images/meta1.png" },
      { url: "/assets/images/meta2.png" },
      { url: "/assets/images/meta3.png" },
      { url: "/assets/images/meta4.png" },
      { url: "/assets/images/meta5.png" },
      { url: "/assets/images/meta6.png" },
      { url: "/assets/images/meta7.png" },
    ],
    tag: ["All", "Ui/Ux"],
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
