import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
 
 
 
  threejs,
  ecommerce,
  usablity,
  music
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Code Clause",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Apr-2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",

      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Amit proved me wrong.",
    name: "Ankit singh",
    designation: "engineer",
    company: "accenture",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Amit does.",
    name: "Gaurav Pandey",
    designation: "engineer",
    company: "wipro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
 
];

const projects = [
  {
    name: "Shopify",
    description:
      "Ecommerce website that allows users to shop and get their products at their doorsteps",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Amit89480/Full-Stack-Ecommerce",
  },
  {
    name: "Usablity-Clone",
    description:
      "It is a clone website of usablity where user can search different guidance of job and career.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: usablity,
    source_code_link: "https://github.com/Amit89480/Usablility-Clone",
  },
  {
    name: "Lyrics Music Streaming Platform",
    description:
      "A music streaming platform where you can listen thousands of music.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/Amit89480/lyriks",
  },
];

export { services, technologies, experiences, testimonials, projects };
