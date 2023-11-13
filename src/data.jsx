import { nanoid } from "nanoid";
import { FaHtml5, FaReact, FaCss3 } from "react-icons/fa";
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
  SiCsharp,
  SiGithubactions,
  SiCypress,
  SiMarkdown,
  SiBootstrap,
  SiNpm,
  SiJest,
  SiVitest,
} from "react-icons/si";
// import SmarterSite from "./assets/smarter-site.PNG";
export const links = [
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#testimonials", text: "testimonials" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML,Markdown",
    icon1: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    // icon2: <BsFiletypeXml className='h-16 w-16 text-emerald-500' />,
    icon3: <SiMarkdown className='h-16 w-16 text-emerald-500' />,
    text: "Proficient in HTML & Markdown, robust knowledge about use of semantics in HTML5.",
    category: "markup",
  },
  {
    id: nanoid(),
    title: "CSS,Tailwind,Bootstrap",
    icon1: <FaCss3 className='h-16 w-16 text-emerald-500' />,
    icon2: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
    icon3: <SiBootstrap className='h-16 w-16 text-emerald-500' />,

    text: "Highly skilled  CSS and its frameworks, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
    category: "styles",
  },
  {
    id: nanoid(),
    title: "JS, TS, C#",
    icon1: <SiJavascript className='h-16 w-16 mr-3 text-emerald-500' />,
    icon2: <SiTypescript className='h-16 w-16 ml-5 text-emerald-500' />,
    icon3: <SiCsharp className='h-16 w-16 ml-6 text-emerald-500' />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality. I am transitioning to TS to harness its goodies and also started learning C# and .NET",
    category: "Languages",
  },
  {
    id: nanoid(),
    title: "React,Redux,Nextjs13",
    icon1: <FaReact className='h-16 w-16 text-emerald-500' />,
    icon2: <TbBrandRedux className='h-16 w-16 text-emerald-500' />,
    icon3: <TbBrandNextjs className='h-16 w-16 text-emerald-500' />,
    text: "Proficiency in React with its associated technologies, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
    category: "js/react libraries",
  },
  {
    id: nanoid(),
    title: "Node,Express,npm",
    icon1: <SiNodedotjs className='h-16 w-16 text-emerald-500' />,
    icon2: <SiExpress className='h-16 w-16 ml-2 text-emerald-500' />,
    icon3: <SiNpm className='h-16 w-16 ml-5 text-emerald-500' />,
    text: "Well versed with nodejs and express to build restful APIs and their documentation",
    category: "js runtime/ package manager",
  },
  {
    id: nanoid(),
    title: "SQL,MongoDB,Mongoose",
    icon1: <TbSql className='h-16 w-16 text-emerald-500' />,
    icon2: <SiMongodb className='h-16 w-16 ml-2 text-emerald-500' />,
    icon3: <SiMongoose className='h-16 w-16 ml-5 text-emerald-500' />,
    text: "Adept at using SQL and NoSQL databases. Using MongoDB,Mongoose, MySQL/MariaDB and learning others as project requirements like Postgres, ...others.",
    category: "database",
  },
  {
    id: nanoid(),
    title: "Git,Github,Azure Repos",
    icon1: <SiGit className='h-16 w-16 text-emerald-500' />,
    icon2: <SiGithub className='h-16 w-16 ml-2 text-emerald-500' />,
    icon3: <SiAzuredevops className='h-16 w-16 ml-5 text-emerald-500' />,
    text: "Github and Azure repos are my choices for repositories.",
    category: "Version Control",
  },
  {
    id: nanoid(),
    title: "Github Actions, Azure Pipelines",
    icon1: <SiGithubactions className='h-16 w-16 text-emerald-500' />,
    icon2: <SiAzurepipelines className='h-16 w-16 ml-6 text-emerald-500' />,
    text: "Automated CI/CD pipelines using GitHub Actions and Azure Pipelines. ",
    category: "CI/CD",
  },
  {
    id: nanoid(),
    title: "Jest,Vitest,Cypress",
    icon1: <SiJest className='h-16 w-16 text-emerald-500' />,
    icon2: <SiVitest className='h-16 w-16 ml-2 text-emerald-500' />,
    icon3: <SiCypress className='h-16 w-16 ml-5 text-emerald-500' />,
    text: "Strong testing practices using Jest, Vitest, Supertest, and Cypress ensure code qualit",
    category: "testing",
  },
];

export const projects = [
  {
    id: nanoid(),
    url: "https://smarterlabs.tech/",
    github: "https://github.com/SmarterBrains/company-site",
    img: "https://res-console.cloudinary.com/dshwwisys/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cG9ydGZvbGlvLWltYWdlcy9zOWx6Y3l2NjVybG55cnpxMHpyaQ==/template_primary",
    title: "Smarter Labs Site",
    text: "Company website for an Edutech startup I work for.I only deployed  this site on firebase and currently tasked to rebuild it ",
  },
  {
    id: nanoid(),
    url: "https://students.smarterlabs.tech",
    github: "https://dev.azure.com/SmarterBrains/SmarterLabs",
    img: "https://res-console.cloudinary.com/dshwwisys/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cG9ydGZvbGlvLWltYWdlcy92Y2JieGxkYzV3d2J1N3M3a3p0dA==/template_primary",

    title: "Smarter Labs client Dashboard",
    text: "Collaborated with other developers to build both frontend backend and deployment(with CI/CD). Frontend uses react,redux and styled components.Backend is built with express and mongodb. Project soon moving to TS",
  },
  {
    id: nanoid(),
    url: "https://gifts-and-more.vercel.app/",
    github: "https://github.com/BulegaHassan/gifts-and-more-API",
    img: "https://res-console.cloudinary.com/dshwwisys/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cG9ydGZvbGlvLWltYWdlcy95aWFxaTBmMGExMGN4b2w4YXUwdw==/template_primary",

    title: "Gifts and More Site",
    text: "A client project(E commerce) which is still under development. Uses react,redux,react router,tailwind for frontend.Backend was built with node,express and mongoDB. ",
  },
  {
    id: nanoid(),
    url: "https://quranuganda.com",
    github: "https://github.com/BulegaHassan/Quran_Recitation_Website",
    img: "https://res-console.cloudinary.com/dshwwisys/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cG9ydGZvbGlvLWltYWdlcy92aWZmZDBhY2FmNWJxb3JrdWRhaA==/template_primary",
    title: "Quran Recitation Website",
    text: "A static website built with bootstrap5, its about Quran audios for different reciters in Uganda. Currrently its not running due to expiry of hosting",
  },
  {
    id: nanoid(),
    url: "https://http//stokesenergyafrica.com/",
    github: "https://github.com/BulegaHassan/Engineering_website",
    img: "https://res-console.cloudinary.com/dshwwisys/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cG9ydGZvbGlvLWltYWdlcy9vd3l4ampsdHZ3d215ZG9hOGxtZQ==/template_primary",

    title: "Engineering Site",
    text: "A consulting and Engineering static website built with bootsrap5. Currrently its not running due to expiry of hosting",
  },
  {
    id: nanoid(),
    url: "#",
    github: "#",
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",

    title: "sixth project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
export const testimonials = [
  {
    id: nanoid(),
    url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpgo",
    name: "Ashirafu Miiro",
    role: "CEO - Smarter Labs",
    comment:
      "A skilled developer I have collaborated with. A grat emplyee and zealous about learning and adapts promptly",
  },
  {
    id: nanoid(),
    url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpgp",
    name: "David Tusuubira",
    role: "CTO - Smarter Labs",
    comment:
      "An integral player and skilled developer at smarter labs.",
  },
  {
    id: nanoid(),
    url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpgi",
    name: "Rebecca Nambuya",
    role: "GIfts shop owner",
    comment:
      "Built for me classic apps - a website/e-commerce, backend and an admin for managing. Great Engineer!",
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
