import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-emerald-100 dark:bg-slate-800 dark:text-white dark:border-x-8 dark:border-emerald-100'>
      <div className='w-full mx-auto max-w-screen-xl  p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{" "}
          <a href='https://flowbite.com/' className='hover:underline'>
            FullStack<span className='text-emerald-600'>Pro™</span>
          </a>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              0789447622
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6'>
              hassanbulega@gmail.com
            </a>
          </li>
          <li className='pr-2'>
            <a href='#'>
              <FaGithubSquare className='h-4 w-4 text-slate-500 hover:text-black duration-300' />
            </a>
          </li>
          <li className='pr-2'>
            <a href='#'>
              <FaLinkedin className='h-4 w-4 text-slate-500 hover:text-black duration-300' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaTwitterSquare className='h-4 w-4 text-slate-500 hover:text-black duration-300' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
