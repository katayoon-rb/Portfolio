function ExpItem({name, info, position, website, duration}) {
    return (
        <div className="px-10 py-8 rounded-lg text-center
                w-[75%] md:w-[400px] border-2 border-gray-dark">

            <div className="font-Truculenta font-bold text-green text-4xl">
                {name}
            </div>
            <div className="font-medium text-gray-dark text-base md:text-md">
                {info}
            </div>

            <div className="-mt-2 text-gray-dark">________________________</div>

            <div className="text-neon font-bold text-lg mt-3">{position}</div>
            <div className="text-gray-dark text-sm">{duration}</div>

            {website && 
                <button className="btn mt-5">
                    <a href={website}>{name} Website</a>
                </button>
            }
        </div>
    )
}

export default ExpItem
