import { links } from "../data";
import Switcher from "./Switcher";
const Navbar = () => {
  return (
    <nav className='bg-emerald-300 sticky top-0 z-10  dark:bg-slate-950 dark:text-white dark:border-x-8 dark:border-emerald-100'>
      <div className='mx-auto max-w-7xl  px-8 py-4 flex justify-between flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold '>
          FullStack
          <span className='text-emerald-600'>Dev</span>
        </h2>
        <div className='flex gap-x-3 '>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-xl tracking-wide hover:text-emerald-600 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
        <h2>
          <Switcher />
        </h2>
      </div>
    </nav>
  );
};
export default Navbar;
