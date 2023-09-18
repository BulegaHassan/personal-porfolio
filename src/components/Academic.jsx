import educImg from "../assets/education.svg";
export const Academic = ({ academic }) => {
  return (
    <section
      className='bg-white py-0 dark:bg-slate-800 dark:text-white dark:border-l-8 dark:border-emerald-100'
      id='education'
      data-testid='academic'
    >
      <div className='mx-auto max-w-7xl  px-8 grid  md:grid-cols-2 items-center gap-16'>
        <img
          src={educImg}
          alt='man reading a math book'
          className='w-full h-64 hover:animate-pulse'
        />
        <article>
          <h2 className='text-2xl font-medium tracking-wider capitalize mb-2 '>
            Education
          </h2>
          <div className='education__container grid gap-3'>
            {academic.map((academy) => (
              <Academy key={academy.institution} {...academy} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

const Academy = ({ course, date, institution }) => {
  return (
    <div className='education__content'>
      <div className='education__time'>
        <span className='education__rounder'></span>
        <span className='education__line'></span>
      </div>
      <div className='education__data grid'>
        <h3 className='education__title'>{course}</h3>
        <span className='education__year text-slate-500 dark:text-slate-300'>
          {date}
        </span>
        <span className='education__studies text-slate-500 dark:text-slate-300 leading-loose'>
          {institution}
        </span>
      </div>
    </div>
  );
};
