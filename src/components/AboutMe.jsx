import GithubStatus from './GithubStatus.jsx'

function AboutMe({profileLink}) {
  return (
    <div className='pt-28 py-14'>
        <div id="about-me"
            className='w-full px-8 flex flex-col lg:flex-row justify-center items-center'
        >
            <img src={profileLink} alt="Katayoon Rabbani"
                className="rounded-full z-10 w-[300px] lg:w-[400px]"
            />

            <div className="bg-white rounded-xl p-10
                    sm:w-[400px] md:w-[600px] lg:w-[800px]
                    pt-60 lg:p-10 lg:pl-32
                    -mt-52 lg:mt-0 lg:-ml-20">
                <h3 className="font-Truculenta text-dark mb-4
                        text-5xl md:text-6xl text-center md:text-left">
                    About Me
                </h3>
                <p>
                  Frontend developer with almost 2 years of studying and gaining
                  experience building responsive and high-quality web applications.
                  Proficient with React, CSS, and browser APIs with extensive
                  knowledge of Javascript's core concepts and a fan of functional
                  programming principles. Also familiar with so many of Javascript and
                  CSS Frameworks.
                </p>
            </div>
        </div>
        <GithubStatus />
    </div>
  )
}

export default AboutMe
