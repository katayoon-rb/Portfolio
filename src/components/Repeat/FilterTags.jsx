function FilterTags({array, onClick}) {
    return (
        <div className='flex flex-wrap justify-center items-center gap-x-3 gap-y-4 sm:mx-16 md:mx-24 lg:mx-32 my-10'>
            {array.map(x => (
                <div id='select-skill' key={x}>
                    <label id={x + '-label'} htmlFor={x}>{x}</label>
                    <input id={x} type="checkbox" className='hidden' onClick={onClick} />
                </div>
            ))}
        </div>
    )
}

export default FilterTags