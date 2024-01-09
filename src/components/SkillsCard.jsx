const SkillsCard = ({ icon1, icon2, icon3, title, text, category }) => {
  return (
    <article className='rounded-lg shadow-md hover:shadow-xl'>
      <div className='flex justify-center'>
        <span className='h-16 w-16 '>{icon1}</span>
        <span className='h-16 w-16'>{icon2}</span>
        <span className='h-16 w-16'>{icon3}</span>
      </div>
      <h4 className='mt-6 font-bold text-center'>{title}</h4>
      <p className='mt-2 text-center text-slate-500 dark:text-slate-300'>
        {text}
      </p>
      <div className='flex justify-center'>
        <p className='mt-2 p-0.5 inline mb-2  w-auto rounded  bg-emerald-300 text-slate-500 dark:text-slate-700'>
          {category}
        </p>
      </div>
    </article>
  );
};
export default SkillsCard;
