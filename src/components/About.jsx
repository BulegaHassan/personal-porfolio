import { useState } from "react";
const info = `
  Experienced Full Stack Developer with 2+ years in MERN stack,
            specializing in JavaScript and transitioning to TypeScript.
            Proficient in front-end and back-end development, excelling in
            crafting responsive web applications and RESTful APIs. Skilled in
            HTML, CSS, React.js, Node.js, and Express.js. Strong testing
            practices using Jest, Vitest, Supertest, and Cypress ensure code
            quality. Expertise extends to SQL and NoSQL databases, with hands-on
            experience in implementing automated CI/CD pipelines using GitHub
            Actions and Azure Pipelines. Efficient deployment strategies using
            Firebase, Flyctl, Render, and cPanel hosting. Committed to
            continuous learning and problem-solving, I am passionate about
            delivering high-quality solutions. A collaborative team player,
            currently expanding skills in C#, Azure DevOps, Python and cutting-edge
            technologies.
`;
const About = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section
      className='bg-white pt-20 dark:bg-slate-800 dark:text-white dark:border-x-8 dark:border-emerald-400'
      id='about'
      role='region'
    >
      <div className='mx-auto max-w-7xl  px-8 grid  md:grid-cols-1 items-center gap-16'>
        <article>
          <h2
            role='heading'
            className='text-4xl font-medium tracking-wider text-center capitalize underline decoration-emerald-300 dark:decoration-dotted'
          >
            about me
          </h2>

          <p className='text-slate-500 md:text-center dark:text-slate-300 mt-8 leading-loose'>
            {readMore ? info : `${info.substring(0, 500)}...  `}
            <button
              className='text-emerald-700 text-lg'
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "show less" : "  read more"}
            </button>
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
