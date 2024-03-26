import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import AboutMe from './components/AboutMe.jsx'
import Skills from './components/Skills.jsx'
import Experiences from './components/Experiences.jsx'
import Courses from './components/Courses.jsx'
import Projects from './components/Projects.jsx'
import Certificates from './components/Certificates.jsx'
import Footer from './components/Footer.jsx'

import RouteHeader from './components/RouteHeader.jsx'
import AllCourses from './components/Courses/AllCourses.jsx'
import AllProjects from './components/Projects/AllProjects.jsx'

import profile from './images/profile.jpg'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <div className="App">
              <Header />
              <Banner />
              <AboutMe profileLink={profile} />
              <Skills />
              <Experiences />
              <Courses />
              <Projects />
              <Certificates />
            </div>
          } />
          <Route path='/courses' element={
            <>
              <RouteHeader />              
              <AllCourses />
            </>
          } />
          <Route path='/projects' element={
            <>
              <RouteHeader />              
              <AllProjects />
            </>
          } />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
