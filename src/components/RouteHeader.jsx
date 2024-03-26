function RouteHeader() {
  return (
    <header className='w-full px-9 py-5 fixed z-20 bg-green
          shadow-lg shadow-dark/50 hidden md:block'>
        <div className="menu flex justify-between items-center">
            <a href="/" className="font-Truculenta font-bold text-light text-3xl md:text-4xl">
                Katayoon Rabbani
            </a>
            <a href="/" className="goBack text-lg">Go Back</a>
        </div>
    </header>
  )
}

export default RouteHeader