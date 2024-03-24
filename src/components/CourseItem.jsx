function CourseItem({title, info, links, end}) {
    return (
        <div className="bg-white px-10 py-8 rounded-lg text-center w-full
        flex flex-col gap-5 justify-between">
            <div>
                <div className="font-Truculenta font-bold text-cream text-3xl">
                    {title}
                </div>

                <div className="text-gray-dark text-sm mt-1">{info}</div>

                {end && 
                    <div className="text-gray-dark font-medium text-md mt-3">Ended in: {end}</div>
                }
            </div>
            
            <div className="flex flex-col gap-2">
                {Object.keys(links).map(key => (
                    <button className="btn" key={key}>
                        <a href={links[key]}>{key}</a>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CourseItem
