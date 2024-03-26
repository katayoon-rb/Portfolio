import { useState } from 'react'
import ProjectItem from './ProjectItem.jsx'
import projectsArr from '../../data/projects.js'
import FilterTags from '../Repeat/FilterTags.jsx'


let lanAll = []
let selectedLan = []

function AllProjects() {
    const [projects, setProjects] = useState(projectsArr)

    for (let prj in projectsArr) {
        for (let l = 0; l < projectsArr[prj].lan.length; l++) {
            let prjLan = projectsArr[prj].lan[l]
            
            if (!lanAll.includes(prjLan)) {
                lanAll.push(prjLan)
            }
        } 
    }
    
    function projectFilter(e) {
        let value = e.target.id
        let elem = document.getElementById(value + '-label')

        if (!selectedLan.includes(value)) {
            selectedLan.push(value)
            elem.style.backgroundColor = '#35605A'
            elem.style.color = '#EFEFEF'
        }
        else {
            selectedLan.splice(selectedLan.indexOf(value), 1)
            elem.style.backgroundColor = '#35605a29'
            elem.style.color = '#00120B'
        }

        if (!selectedLan.length) { setProjects(projectsArr) }
        else {
            for (let i = 0; i < selectedLan.length; i++) {
                setProjects(projects.filter(prj => prj.lan.includes(selectedLan[i])))
            }
        }
    }
    
    return (
        <div className='py-12 md:py-28'>
            <h3 className="font-Truculenta text-dark mb-10
                    text-5xl md:text-6xl text-center">
                Projects
            </h3>

            <FilterTags array={lanAll} onClick={projectFilter} />

            <div className='grid gap-8 px-10 md:px-28 md:grid-cols-1 lg:grid-cols-3'>
                {projects.map(project => (
                    <ProjectItem
                        key={project.name}
                        name={project.name}
                        link={project.link}
                        lan={project.lan}
                    />
                ))}
            </div>
            {!projects.length && (
                <div className="font-Truculenta text-dark m-8 text-2xl md:text-4xl text-center">
                    There's none!
                </div>
            )}
        </div>
    )
}

export default AllProjects