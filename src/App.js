import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import AboutMe from './components/AboutMe.jsx'
import Skills from './components/Skills.jsx'
import Experiences from './components/Experiences.jsx'
import Courses from './components/Courses.jsx'
import Certificates from './components/Certificates.jsx'
import Footer from './components/Footer.jsx'

import profile from './images/profile.jpg'


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutMe profileLink={profile} />
      <Skills />
      <Experiences />
      <Courses />
      <Certificates />
      <Footer />
    </div>
  )
}

export default App
