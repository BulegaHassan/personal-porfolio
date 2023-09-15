import SkillsCard from "./SkillsCard";
import { skills } from "../data";
const Skills = () => {
  return (
    <section
      className='py-20 dark:bg-slate-800 dark:text-white dark:border-x-8 dark:border-emerald-400'
      id='skills'
    >
      <h2 className='text-center text-4xl font-medium tracking-wider capitalize underline decoration-emerald-300 dark:decoration-dotted'>
        skills
      </h2>

      <div className='mx-auto max-w-7xl  px-8 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
