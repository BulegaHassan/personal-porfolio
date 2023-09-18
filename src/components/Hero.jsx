import heroImg from "../assets/hero_dev.svg";
import { FaGithub, FaLinkedin, FaTwitter,FaStackOverflow, } from "react-icons/fa";
import {BiLogoUpwork} from 'react-icons/bi'
const Hero = () => {
  return (
    <section
      role='region'
      className='bg-emerald-100 py-24 dark:bg-slate-800 dark:text-white dark:border-x-8 dark:border-emerald-100'
    >
      <div className=' mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 role='heading' className='text-7xl font-bold tracking-wider'>
            I'm Hassan Bulega
          </h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide dark:text-white'>
            Full Stack Engineer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide dark:text-white'>
            turning ideas into exciting and interactive reality to represent
            your presence worldwide. be it business or portfolio.
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='#'>
              <FaGithub
                className='h-8 w-8 text-emerald-600 hover:text-emerald-800 duration-300'
                data-testid='github-icon'
              />
            </a>
            <a href='#'>
              <FaLinkedin
                className='h-8 w-8 text-emerald-600 hover:text-emerald-800 duration-300'
                data-testid='linkedin-icon'
              />
            </a>
            <a href='#'>
              <FaTwitter
                className='h-8 w-8 text-emerald-600 hover:text-emerald-800 duration-300'
                data-testid='twitter-icon'
              />
            </a>
            <a href='#'>
              <FaStackOverflow
                className='h-8 w-8 text-emerald-600 hover:text-emerald-800 duration-300'
                data-testid='stackoverflow-icon'
              />
            </a>
            <a href='#'>
              <BiLogoUpwork
                className='h-8 w-8 text-emerald-600 hover:text-emerald-800 duration-300'
                data-testid='upwork-icon'
              />
            </a>
          </div>
        </article>

        <article className='hidden md:block '>
          <img
            src={heroImg}
            alt='man coding on a laptop with an extended screen'
            className='h-80 lg:h-96'
          />
        </article>
      </div>
    </section>
  );
};
export default Hero;
