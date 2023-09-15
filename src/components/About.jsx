import aboutSvg from '../assets/about_dev.svg';
const About = () => {
  return (
    <section
      className='bg-white pt-20 dark:bg-slate-800 dark:text-white dark:border-l-8 dark:border-emerald-100'
      id='about'
    >
      <div className='mx-auto max-w-7xl  px-8 grid  md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <h2 className='text-4xl font-medium tracking-wider capitalize underline decoration-emerald-300 dark:decoration-dotted'>
            about me
          </h2>

          <p className='text-slate-500 dark:text-slate-300 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            omnis exercitationem tempora, aliquid deleniti tenetur vero esse
            praesentium eaque dicta fugiat? Molestiae expedita, nulla neque
            error porro sint distinctio possimus!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
