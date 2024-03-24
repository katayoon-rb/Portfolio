function AboutMe({profileLink}) {
  return (
    <div className='w-full px-2 py-20
            flex flex-col lg:flex-row justify-center items-center'
            id="about-me"
        >
        <img src={profileLink} alt="Katayoon Rabbani"
            className="rounded-full z-10 shadow-lg shadow-dark/50
                w-[300px] lg:w-[400px]"
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis repellendus id autem! Doloremque quaerat odio pariatur. Dicta enim quaerat vitae voluptates, explicabo beatae vel. Quasi alias nulla deleniti expedita nisi.
                Animi quos accusamus, earum quod a nobis ea doloribus molestiae inventore velit quidem architecto et fugiat possimus optio dolorum vel voluptate. Laboriosam corporis accusamus odio harum sunt? Aperiam, suscipit hic!
            </p>
        </div>
    </div>
  )
}

export default AboutMe
