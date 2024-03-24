function SkillItem({name, state}) {
    return (
        <div className="bg-white py-8 rounded-lg text-center
                px-2 md:px-10 w-[40%] md:w-fit md:min-w-[150px]">
            <div className="font-Truculenta font-bold text-green text-lg md:text-2xl">
                {name}
            </div>
            <div className="font-medium text-gray-dark text-base md:text-md">
                {state}
            </div>
        </div>
    )
}

export default SkillItem
