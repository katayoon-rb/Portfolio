function CerItem({name, image, link}) {
    return (
        <a href={link}>
            <div className="bg-white px-10 py-8 rounded-lg text-center w-[300px] h-[100%] flex flex-col justify-between">
                <div className="font-Truculenta font-bold text-green text-2xl">
                    {name}
                </div>
                <div className="font-medium text-gray-dark text-base md:text-md">
                    <img src={image} alt={name} className="w-full mt-3" />
                </div>
            </div>
        </a>
    )
}

export default CerItem
