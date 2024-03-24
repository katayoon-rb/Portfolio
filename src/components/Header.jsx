function Header() {
  return (
    <header className='w-full px-9 py-5 fixed z-20 bg-green
        shadow-lg shadow-dark/50 hidden md:block'>
        <div className="menu">
          <ul className="flex justify-end items-center gap-7 text-lg">
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experiences">Experiences</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#certificates">Certificates</a>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Header