import CourseItem from './CourseItem.jsx'
import coursesArr from '../data/courses.js'

let latestCourses = []
for (let i = 0; i < 6; i++) {
    latestCourses.push(coursesArr[i])
}

function Courses() {
    return (
        <div id="courses" className='py-16 pb-20 text-center'>
            <h3 className="font-Truculenta text-dark mb-10
                    text-5xl md:text-6xl">
                Courses
            </h3>
            <div className='grid gap-10 px-10 md:px-28
                    md:grid-cols-2 lg:grid-cols-3'>
                {latestCourses.map(course => (
                    <CourseItem
                        key={course.Title}
                        title={course.Title}
                        info={course.Info}
                        links={course.Links}
                        end={course.End}
                    />
                ))}
            </div>
            <a href='/courses'>
                <button className='btn my-10 px-6 py-3 font-bold'>
                    View More Courses
                </button>
            </a>
        </div>
    )
}

export default Courses
