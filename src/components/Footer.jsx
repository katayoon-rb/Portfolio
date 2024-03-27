import contactArr from '../data/contact.js'

function Footer() {
  return (
    <footer className='w-full flex py-20 bg-green'>
      <div className='flex justify-center items-center gap-5 mx-auto'>
        {contactArr.map(way => (
          <a href={way.link} key={way.key}
              className='flex flex-col justify-center items-center w-[80px]'
          >
            <svg name={way.key}
                xmlns='http://www.w3.org/2000/svg'
                viewBox={way.viewBox}
                className='w-[50px] h-[50px] fill-light'>
              <path d={way.d}/>
            </svg>
            <p className='font-medium text-light'>{way.key}</p>
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
