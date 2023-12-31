import aboutSvg from "../assets/about_dev.svg";

export const Works = ({ works }) => {
  return (
    <section
      className='bg-white py-10 dark:bg-slate-800 dark:text-white dark:border-x-8 dark:border-emerald-400'
      id='experience'
      data-testid='works'
    >
      <div className='mx-auto max-w-7xl  px-8 grid  md:grid-cols-2 items-center gap-16'>
        <img
          src={aboutSvg}
          alt='man sitted with laptop'
          className='w-full h-64 hover:animate-pulse'
        />
        <article>
          <h2 className='text-2xl font-medium tracking-wider capitalize mb-2 '>
            Experience
          </h2>
          <div className='experience__container grid gap-3'>
            {works.map((work) => (
              <Work key={work.company} {...work} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

const Work = ({ title, period, company, description }) => {
  return (
    <div className='experience__content'>
      <div className='experience__time'>
        <span className='experience__rounder'></span>
        <span className='experience__line'></span>
      </div>
      <div className='experience__data bd-grid'>
        <h3 className='text-sm'>{title}</h3>
        <span className=''>
          {period} | {company}
        </span>
        {description.map((desc, i) => (
          <ul key={i}>
            <li className='text-slate-500 dark:text-slate-300 list-disc'>
              {desc}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
