import ProjectCard from "./ProjectCard";
import { projects } from "../data";
const Projects = () => {
  return (
    <section
      className='py-10 dark:bg-slate-800 dark:text-white dark:border-x-8 dark:border-emerald-400'
      id='projects'
      data-testid='projects'
    >
      <h2 className='text-center text-4xl font-medium tracking-wider capitalize underline underline-offset-8 decoration-emerald-300 dark:decoration-dotted'>
        Projects
      </h2>
      <div className='mx-auto max-w-7xl  px-8 py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
