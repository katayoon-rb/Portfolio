function CerItem({name, image}) {
    return (
        <div className="bg-white px-10 py-8 rounded-lg text-center w-[300px]">
            <div className="font-Truculenta font-bold text-green text-2xl">
                {name}
            </div>

            <div className="font-medium text-gray-dark text-base md:text-md">
                <img src={image} alt={name} className="w-full rounded-lg mt-3" />
            </div>
        </div>
    )
}

export default CerItem
