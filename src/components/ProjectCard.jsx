import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectCard = ({ img, title, text,url,github }) => {
  return (
    <article
      className='bg-white rounded-lg shadow-md block hover:shadow-xl duration-300 hover:translate-x-1 hover:translate-y-1 dark:bg-slate-800'
      id='project-card'
      data-testid='project-card'
    >
      <img
        src={img}
        alt={title}
        className='w-full object-cover rounded-t-lg h-64 '
      />
      <div className=' p-8'>
        <h2 className='capitalize text-xl tracking-wide font-medium  '>
          {title}
        </h2>
        <p className='mt-4 text-slate-500 dark:text-slate-300 leading-loose '>
          {text}
        </p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url} target='_blank' rel="noreferrer">
            <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a href={github} target='_blank' rel="noreferrer">
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
