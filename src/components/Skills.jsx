import skillsArr from '../data/skills.js'

let stateAll = ["Expert", "Advanced", "Intermediate", "Basic"]

function Skills() {
    return (
        <div id="skills" className='pb-20 pt-24'>
            <h3 className="font-Truculenta text-dark mb-10
                    text-5xl md:text-6xl text-center">
                Skills
            </h3>
            <div className='flex flex-wrap justify-between
                    px-2 md:px-60'>
                {stateAll.map(state => (
                    <div className='bg-white rounded-lg text-center px-4 py-5
                            min-w-[200px]'>
                        <h5 className='font-Truculenta font-bold text-green mb-3
                                border-b-2 border-green text-2xl md:text-3xl'>
                            {state}
                        </h5>
                        {skillsArr.filter(s => s.state === state).map(skill => (
                            <div key={skill.name} className="py-1">
                                {skill.name}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
