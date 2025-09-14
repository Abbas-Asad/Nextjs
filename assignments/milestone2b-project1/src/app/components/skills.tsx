import { FaPalette } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import Image from 'next/image'

const skillsData = [
  {
    name: 'TYPESCRIPT',
    icon: <SiTypescript className="skills__icon border-rad-4" />,
    percentage: '95%',
    barClass: 'skills__html',
  },
  {
    name: 'NEXT.JS',
    icon: <SiNextdotjs className="skills__icon" />,
    percentage: '85%',
    barClass: 'skills__css',
  },
  {
    name: 'TAILWIND CSS',
    icon: <SiTailwindcss className="skills__icon" />,
    percentage: '65%',
    barClass: 'skills__js',
  },
  {
    name: 'UI/UX DESIGN',
    icon: <FaPalette className="skills__icon" />,
    percentage: '85%',
    barClass: 'skills__ux',
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" style={{marginBottom:"1.8rem"}}>Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle" style={{fontWeight:"600"}}>Professional Skills</h2>
          <p className="skills__text">A passionate front-end developer focused on crafting clean, intuitive user experiences through efficient and appealing code.</p>

          {skillsData.map((skill, index) => (
            <div key={index} className="skills__data">
              <div className="skills__names">
                {skill.icon}
                <span className="skills__name">{skill.name}</span>
              </div>
              <div className={`skills__bar ${skill.barClass}`}></div>
              <div>
                <span className="skills__percentage">{skill.percentage}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Image width={550} height={550} src="/assets/skillsimg.jpg" alt="" className="skills__img" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
