import { FaGithubSquare,  FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <article className='bg-white rounded-lg shadow-md block hover:shadow-xl duration-300 hover:translate-x-1 hover:translate-y-1 dark:bg-slate-800'>
      <img
        src={img}
        alt={title}
        className='w-full object-cover rounded-t-lg h-64 '
      />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium text-center '>
          {title}
        </h2>
        <p className='mt-4 text-slate-500 dark:text-slate-300 leading-loose text-center'>
          {text}
        </p>
      </div>
    </article>
  );
};
export default ProjectCard;
