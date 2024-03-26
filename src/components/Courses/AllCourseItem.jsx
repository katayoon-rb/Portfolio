function AllCourseItem({title, info, links, end, tags}) {
    return (
        <div className="bg-white px-10 py-8 rounded-lg w-full text-gray-dark text-sm
                flex flex-col md:flex-row gap-5 justify-between items-center">
            <div className="md:w-[60%]">
                <div className="font-Truculenta font-bold text-green text-3xl">
                    {title}
                </div>

                <div className="mt-1">{info}</div>

                <div className="flex flex-wrap items-center gap-1 mt-4">
                    Topics: 
                    {tags.map(tag => (
                        <div
                            key={title.split(' ').join('') + '-' + tag}
                            className="w-fit font-medium text-white bg-cream px-2.5 py-1 rounded-2xl"
                        >{tag}</div>
                    ))}
                </div>
                
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

export default AllCourseItem
