import CourseItem from './CourseItem.jsx'
import coursesArr from '../data/courses.js'

function Courses() {
    return (
        <div id="courses" className='py-10 pb-20'>
            <h3 className="font-Truculenta text-dark mb-10
                    text-5xl md:text-6xl text-center">
                Courses
            </h3>
            <div className='grid gap-7 px-10 md:px-20
                    md:grid-cols-2 lg:grid-cols-3'>
                {coursesArr.map(course => (
                    <CourseItem
                        key={course.Title}
                        title={course.Title}
                        info={course.Info}
                        links={course.Links}
                        end={course.End}
                    />
                ))}
            </div>
        </div>
    )
}

export default Courses
