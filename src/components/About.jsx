import aboutSvg from "../assets/about_dev.svg";
const About = () => {
  return (
    <section
      className='bg-white pt-20 dark:bg-slate-800 dark:text-white dark:border-l-8 dark:border-emerald-100'
      id='about'
      role='region'
    >
      <div className='mx-auto max-w-7xl  px-8 grid  md:grid-cols-1 items-center gap-16'>
        <article>
          <h2 role="heading" className='text-4xl font-medium tracking-wider text-center capitalize underline decoration-emerald-300 dark:decoration-dotted'>
            about me
          </h2>

          <p className='text-slate-500 md:text-center dark:text-slate-300 mt-8 leading-loose'>
            I am an adept Full Stack Developer with over two years of experience
            specializing in the MERN stack, well-versed in JavaScript and
            TypeScript. My expertise encompasses front-end and back-end
            development, proficiently utilizing technologies like React.js,
            Redux, Node.js, and Express.js,tailwindcss, nextjs to create responsive web applications
            and RESTful APIs. I excel in ensuring code quality through rigorous
            testing practices with technologies like jest,vitest,supertest,and cypress.
             Automated CI/CD pipelines with github actions, and efficient
            deployment strategies using firebase,flyctl,render and c-panel hosting. 
            My passion for continuous learning and
            problem-solving fuels my commitment to delivering high-quality
            solutions and collaborating effectively within cross-functional
            teams. I am eager to contribute my skills and experience to new
            opportunities and challenges in the ever-evolving field of web
            development.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
