import { FaGithubSquare, FaLinkedin, FaTwitterSquare,FaStackOverflow } from "react-icons/fa";
import { BiLogoUpwork } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className='bg-emerald-300 dark:bg-slate-950 dark:text-white dark:border-x-8 dark:border-emerald-400'>
      <div className='w-full mx-auto max-w-screen-xl  p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{" "}
          <a href='#' className='hover:underline'>
            FullStack<span className='text-emerald-600'>Dev™</span>
          </a>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a href='tel:+256789447622' className='mr-4 hover:underline md:mr-6 '>
              0789447622
            </a>
          </li>
          <li>
            <a
              href='mailto:hassanbulega@gmail.com'
              className='mr-4 hover:underline md:mr-6'
            >
              hassanbulega@gmail.com
            </a>
          </li>
          <li className='pr-2'>
            <a href='https://github.com/BulegaHassan' target='_blank' rel="noreferrer">
              <FaGithubSquare
                className='h-4 w-4 text-slate-500 hover:text-black duration-300 '
                data-testid='github-icon'
              />
            </a>
          </li>
          <li className='pr-2'>
            <a href='https://www.linkedin.com/in/hassan-bulega' target='_blank' rel="noreferrer">
              <FaLinkedin
                className='h-4 w-4 text-slate-500 hover:text-black duration-300 '
                data-testid='linkedin-icon'
              />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/hassanbulega' target='_blank' rel="noreferrer">
              <FaTwitterSquare
                className='h-4 w-4 text-slate-500 hover:text-black duration-300 '
                data-testid='twitter-icon'
              />
            </a>
          </li>
          <li>
            <a
              href='https://stackoverflow.com/users/16943019/hassan-bulega'
              target='_blank' rel="noreferrer"
            >
              <FaStackOverflow
                className='h-4 w-4 text-slate-500 hover:text-black duration-300 '
                data-testid='twitter-icon'
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.upwork.com/freelancers/~011c8726b82c6191a9'
              target='_blank' rel="noreferrer"
            >
              <BiLogoUpwork
                className='h-4 w-4 text-slate-500 hover:text-black duration-300 '
                data-testid='twitter-icon'
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
