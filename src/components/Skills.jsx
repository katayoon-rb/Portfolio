import skillsArr from '../data/skills.js'

let stateAll = ["Expert", "Advanced", "Intermediate", "Basic"]

function Skills() {
    return (
        <div id="skills" className='pb-20 pt-24'>
            <h3 className="font-Truculenta text-dark mb-10
                    text-5xl md:text-6xl text-center">
                Skills
            </h3>
            <div className='grid px-20 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-10'>
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
