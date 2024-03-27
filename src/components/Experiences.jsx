import ExpItem from './ExpItem.jsx'
import experiencesArr from '../data/experience.js'

function Experiences() {
    return (
        <div id="experiences" className="bg-white py-28 shadow-md shadow-dark/20">
            <h3 className="font-Truculenta text-dark mb-10
                    text-5xl md:text-6xl text-center">
                Experiences
            </h3>
            <div className='flex justify-center gap-5
                    items-center md:items-stretch
                    flex-col md:flex-row px-2 md:px-20'>
                {experiencesArr.map(exp => (
                    <ExpItem
                        key={exp.name}
                        name={exp.name}
                        info={exp.info}
                        position={exp.position}
                        website={exp.website}
                        duration={exp.duration}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experiences
