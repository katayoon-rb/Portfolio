import { useState } from 'react'
import AllCourseItem from './AllCourseItem.jsx'
import coursesArr from '../../data/courses.js'
import FilterTags from '../Repeat/FilterTags.jsx'

let topicAll = []
let selectedTopics = []

function AllCourses() {
    const [courses, setCourses] = useState(coursesArr)

    for (let c in coursesArr) {
        for (let l = 0; l < coursesArr[c].Tags.length; l++) {
            let prjTopic = coursesArr[c].Tags[l]

            if (!topicAll.includes(prjTopic)) {
                topicAll.push(prjTopic)
            }
        } 
    }

    function courseFilter(e) {
        let value = e.target.id
        let elem = document.getElementById(value + '-label')

        if (!selectedTopics.includes(value)) {
            selectedTopics.push(value)
            elem.style.backgroundColor = '#35605A'
            elem.style.color = '#EFEFEF'
        }
        else {
            selectedTopics.splice(selectedTopics.indexOf(value), 1)
            elem.style.backgroundColor = '#35605a29'
            elem.style.color = '#00120B'
        }

        if (!selectedTopics.length) { setCourses(coursesArr) }
        else {
            for (let i = 0; i < selectedTopics.length; i++) {
                setCourses(courses.filter(prj => prj.Tags.includes(selectedTopics[i])))
            }
        }
    }

    return (
        <div className='py-28'>
            <h3 className="font-Truculenta text-dark mb-10 text-5xl md:text-6xl text-center">
                Courses
            </h3>

            <FilterTags array={topicAll} onClick={courseFilter} />

            <div className='grid gap-10 px-10 md:px-28 md:grid-cols-1 lg:grid-cols-2'>
                {courses.map(course => (
                    <AllCourseItem
                        key={course.Title}
                        title={course.Title}
                        info={course.Info}
                        links={course.Links}
                        end={course.End}
                        tags={course.Tags}
                    />
                ))}
            </div>
            {!courses.length && (
                <div className="font-Truculenta text-dark m-8 text-2xl md:text-4xl text-center">
                    There's none!
                </div>
            )}
        </div>
    )
}

export default AllCourses