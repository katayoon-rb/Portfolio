import SkillItem from './SkillItem.jsx'
import skillsArr from '../data/skills.js'

function Skills() {
    return (
        <div id="skills" className='pb-20 pt-24'>
            <h3 className="font-Truculenta text-dark mb-10
                    text-5xl md:text-6xl text-center">
                Skills
            </h3>
            <div className='flex flex-wrap justify-center gap-5
                    px-2 md:px-20'>
                {skillsArr.map(skill => (
                    <SkillItem
                        key={skill.name}
                        name={skill.name}
                        state={skill.state}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills
