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
  music,
  CompanyLogo,
  DSP,
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
  {
    id: "resume",
    title: "Resume",
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
    title: "Full Stack Developer and Mobile Application Developer",
    company_name: "Geeksynergy Technologies Pvt. Ltd.",
    icon: CompanyLogo,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "1. Engineered sophisticated user interfaces utilizing advanced frontend technologies such as React Native, React.js, and Fluent UI, ensuring a seamless and intuitive user experience across mobile and web platforms.",

      "2. Architected robust backend systems leveraging MongoDB for efficient data storage and retrieval, implementing complex data models and optimizing database queries for scalability and performance.",

      "3. Orchestrated AWS cloud infrastructure, including EC2, S3, Lambda, and API Gateway, to deploy and scale applications securely and efficiently, while implementing best practices for fault tolerance and disaster recovery.",

      "4. Integrated real-time communication capabilities using Socket.IO, enabling seamless and interactive experiences for users through features like live chat, notifications, and collaborative editing.",

      "5. Implemented Cloudflare's edge computing solutions to optimize content delivery and application performance, utilizing features such as Workers and Workers KV to execute code at the edge and cache dynamic content.",

      "6. Designed and developed mobile applications with React Native, leveraging native device capabilities and optimizing performance for both iOS and Android platforms.",

      "7. Employed advanced CSS frameworks such as Tailwind CSS and Bootstrap to streamline frontend development, ensuring consistent and responsive designs across devices and screen sizes.",

      "8. Led cross-functional teams in the agile development process, utilizing CI/CD pipelines and automated testing frameworks to deliver high-quality software at a rapid pace, while adhering to industry best practices and standards.",
    ],
  },
  {
    title: "Developer Intern",
    company_name: "Alloy Steel Plant, Inc.",
    icon: DSP,
    iconBg: "#E6DEDD",
    date: "July 2022 - August-2022",
    points: [
      "1. Developing and maintaining web applications using React.js and other related technologies.",

      "2. Implementing responsive design and ensuring cross-browser compatibility.",
      "3. Participating in code reviews and providing constructive feedback to other developers.",
      "4. Worked in backend language which was c# and sql server.",
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
