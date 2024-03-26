function ProjectItem({name, link, lan}) {
    return (
        <div className="bg-white px-8 py-6 rounded-lg w-full text-center
                flex flex-col gap-5 justify-between items-center">
            <div className="font-Truculenta font-bold text-green text-4xl">
                {name}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 -mt-2 mb-2">
                {lan.map(l => (
                    <div
                        key={name.split(' ').join('') + '-' + l}
                        className="text-sm font-medium text-light bg-gray-dark px-4 py-2 rounded-2xl"
                    >{l}</div>
                ))}
            </div>
            
            <a href={link} className="w-full">
                <button className="btn bg-cream text-dark w-full">View Project</button>
            </a>
        </div>
    )
}

export default ProjectItem
