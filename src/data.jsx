import { nanoid } from "nanoid";
import { FaHtml5, FaReact, FaCss3 } from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandNextjs, TbBrandRedux, TbSql } from "react-icons/tb";
import {
  SiTailwindcss,
  SiAzurepipelines,
  SiAzuredevops,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiGithubactions,
  SiCypress,
  SiMarkdown,
  SiBootstrap,
  SiNpm,
  SiJest,
  SiVitest,
} from "react-icons/si";
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#testimonials", text: "testimonials" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML,XML,Markdown",
    icon1: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    icon2: <BsFiletypeXml className='h-16 w-16 text-emerald-500' />,
    icon3: <SiMarkdown className='h-16 w-16 text-emerald-500' />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
    category: "markup",
  },
  {
    id: nanoid(),
    title: "CSS,Tailwind,Bootstrap",
    icon1: <FaCss3 className='h-16 w-16 text-emerald-500' />,
    icon2: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
    icon3: <SiBootstrap className='h-16 w-16 text-emerald-500' />,

    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
    category: "styles",
  },
  {
    id: nanoid(),
    title: "JS, TS",
    icon1: <SiJavascript className='h-16 w-16 mr-3 text-emerald-500' />,
    icon2: <SiTypescript className='h-16 w-16 ml-5 text-emerald-500' />,
    // icon3: <SiCsharp className='h-16 w-16 ml-3 text-emerald-500' />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
    category: "Languages",
  },
  {
    id: nanoid(),
    title: "React,Redux,Nextjs13",
    icon1: <FaReact className='h-16 w-16 text-emerald-500' />,
    icon2: <TbBrandRedux className='h-16 w-16 text-emerald-500' />,
    icon3: <TbBrandNextjs className='h-16 w-16 text-emerald-500' />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
    category: "js/react libraries",
  },
  {
    id: nanoid(),
    title: "Node,Express,npm",
    icon1: <SiNodedotjs className='h-16 w-16 text-emerald-500' />,
    icon2: <SiExpress className='h-16 w-16 ml-2 text-emerald-500' />,
    icon3: <SiNpm className='h-16 w-16 ml-5 text-emerald-500' />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
    category: "js runtime/ package manager",
  },
  {
    id: nanoid(),
    title: "SQL,MongoDB,Mongoose",
    icon1: <TbSql className='h-16 w-16 text-emerald-500' />,
    icon2: <SiMongodb className='h-16 w-16 ml-2 text-emerald-500' />,
    icon3: <SiMongoose className='h-16 w-16 ml-5 text-emerald-500' />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
    category: "database",
  },
  {
    id: nanoid(),
    title: "Git,Github,Azure Repos",
    icon1: <SiGit className='h-16 w-16 text-emerald-500' />,
    icon2: <SiGithub className='h-16 w-16 ml-2 text-emerald-500' />,
    icon3: <SiAzuredevops className='h-16 w-16 ml-5 text-emerald-500' />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
    category: "Version Control",
  },
  {
    id: nanoid(),
    title: "Github Actions, Azure Pipelines",
    icon1: <SiGithubactions className='h-16 w-16 text-emerald-500' />,
    icon2: <SiAzurepipelines className='h-16 w-16 ml-6 text-emerald-500' />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
    category: "CI/CD",
  },
  {
    id: nanoid(),
    title: "Jest,Vitest,Cypress",
    icon1: <SiJest className='h-16 w-16 text-emerald-500' />,
    icon2: <SiVitest className='h-16 w-16 ml-2 text-emerald-500' />,
    icon3: <SiCypress className='h-16 w-16 ml-5 text-emerald-500' />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
    category: "testing",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",

    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",

    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Forth project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",

    title: "Fifth project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",

    title: "sixth project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
export const testimonials = [
  {
    id: nanoid(),
    url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
    name: "Maria Sammy",
    role: "Hotel Manager",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos rend kdcnci ijvos jvodjd kncno hdkc jlc",
  },
  {
    id: nanoid(),
    url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
    name: "Racheal Sanders",
    role: "Chief Cook",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos rend kdcnci ijvos jvodjd kncno hdkc jlc",
  },
  {
    id: nanoid(),
    url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
    name: "John Doe",
    role: "Cafe chains Manager",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos rend kdcnci ijvos jvodjd kncno hdkc jlc",
  },
];

export const experience = {
  works: [
    {
      title: "FULL-STACK DEVELOPER",
      period: "Sept. 2022 - Present",
      company: "Smarter Labs",
      description: [
        "Collaborated with other developers to build a react based UI for the online smartlabs. The UI used context API and later changed to use Redux.",
        "Collaborated with other developers to build the smart-labs API with node, express and mongo DB",
        "Deploying using firebase(frontend) and fly.io(backend) plus CI/CD.",
        "Maintaining the codebase, debugging and adding new features",
      ],
    },
    {
      title: "CEO AND FULL-STACK DEVELOPER",
      period: "July. 2021 - Present",
      company: "Hasgotech",
      description: [
        "A self company where I make web apps per client request.",
        "Use of MERN stack with nextjs-13,bootstrap,tailwindcss and other technologies to build both frontend and full stack apps",
        "Hosting of client projects using c-panel-hosting, firebase, vercel, fly.io and render",
      ],
    },
  ],
  academic: [
    {
      course: "BSc Physics & Mathematics with Education",
      date: "2015-2019",
      institution: "Makerere University",
    },

    {
      course: "Uganda Advanced Certificate of Education",
      date: "2012-2013",
      institution: "Gayaza Cambridge College",
    },
    {
      course: "Uganda  Certificate of Education",
      date: "2008-2011",
      institution: "Gayaza Cambridge College",
    },
    {
      course: "CCNA, Huaawei Cloud and Security",
      date: "2019-2020",
      institution: "Self Taught and Online Resources",
    },
  ],
};
