import ProjectItem from './Projects/ProjectItem.jsx'
import projectsArr from '../data/projects.js'

let latestProjects = []
for (let i = 0; i < 6; i++) {
    latestProjects.push(projectsArr[i])
}

function Projects() {
    return (
        <div id="projects" className='pt-20 text-center'>
            <h3 className="font-Truculenta text-dark mb-10 text-5xl md:text-6xl">
                Projects
            </h3>
            <div className='grid gap-10 px-10 md:px-28 md:grid-cols-2 lg:grid-cols-3'>
                {latestProjects.map(project => (
                    <ProjectItem
                        key={project.name}
                        name={project.name}
                        link={project.link}
                        lan={project.lan}
                    />
                ))}
            </div>
            <a href='/projects'>
                <button className='btn my-10 px-6 py-3 font-bold'>
                    View More Projects
                </button>
            </a>
        </div>
    )
}

export default Projects
