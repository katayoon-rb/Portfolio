import reactFtBPrj from './prjList/reactFtB.js'
import joyOfReactPrj from './prjList/joyOfReact.js'
import twScratchPrj from './prjList/twScratch.js'
import vueCompletePrj from './prjList/vueComplete.js'
import bsScratchPrj from './prjList/bsScratch.js'
import reactTsPrj from './prjList/reactTs.js'
import advSassPrj from './prjList/advSass.js'
import frontendMentorPrj from './prjList/frontendMentor.js'
import scrimbaPrj from './prjList/scrimba.js'
import c50prjIn50daysPrj from './prjList/50prjin50days.js'
import nextjsDevGuidePrj from './prjList/nextjsDevGuide.js'
import nextjsCGPrj from './prjList/nextjsCG.js'
import nuxtBPrj from './prjList/nuxtB.js'

let imported = [
    c50prjIn50daysPrj,
    scrimbaPrj,
    frontendMentorPrj,
    advSassPrj,
    reactTsPrj,
    bsScratchPrj,
    vueCompletePrj,
    twScratchPrj,
    joyOfReactPrj,
    reactFtBPrj,
    nextjsDevGuidePrj,
    nextjsCGPrj,
    nuxtBPrj
]

let ProjectsArr = []
ProjectsArr.push(
    {
        'name': 'Django Bootcamp',
        'link': `https://github.com/katayoon-rb/Django-Bootcamp/tree/main`,
        'lan': ['HTML', 'CSS', 'Django', 'Python']
    },
    {
        'name': 'Django Blog',
        'link': `https://katydjangoblog.vercel.app/`,
        'lan': ['HTML', 'CSS', 'Django', 'Python']
    },
    {
        'name': 'Today I Learned',
        'link': `https://katyfullstack.vercel.app/`,
        'lan': ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
        'name': 'Angular Material Demo',
        'link': `https://katyangularmaterial.vercel.app/`,
        'lan': ['Angular']
    },
    {
        'name': 'Angular University Courses Page',
        'link': `https://katyangularunicourses.vercel.app/`,
        'lan': ['Angular']
    },
    {
        'name': 'Recipe Book',
        'link': `https://katyangularrecipebook.vercel.app/`,
        'lan': ['Angular', 'Bootstrap']
    },
    {
        'name': 'OpenTable',
        'link': `https://katyopentablenextjs.vercel.app/ `,
        'lan': ['TypeScript', 'Next.js']
    },
    {
        'name': 'DevFlow',
        'link': `https://katydevflow.vercel.app/`,
        'lan': ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'Next.js']
    },
    {
        'name': 'Ultimate Java Mastery',
        'link': `https://github.com/katayoon-rb/Ultimate-Java-Mastery`,
        'lan': ['Java']
    },
    {
        'name': 'Java Bootcamp ZeroToMastery',
        'link': `https://github.com/katayoon-rb/Java-Bootcamp-ZeroToMastery`,
        'lan': ['Java']
    },
    {
        'name': 'Java Bootcamp',
        'link': `https://github.com/katayoon-rb/Java-Bootcamp`,
        'lan': ['Java']
    },
    {
        'name': 'Design Patterns in Js',
        'link': `https://github.com/katayoon-rb/Design-Patterns-in-Js`,
        'lan': ['JavaScript']
    },

    {
        'name': 'MeetUs',
        'link': `https://katysveltejs.netlify.app/course%20project/public/`,
        'lan': ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Svelte.js']
    },

    {
        'name': 'Small Svelte Projects',
        'link': `https://katysveltejs.netlify.app/`,
        'lan': ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Svelte.js']
    },
    {
        'name': 'Ultimate Design Pattern',
        'link': `https://github.com/katayoon-rb/70-JavaScript-Challenges`,
        'lan': ['Java']
    },
    {
        'name': '70 JavaScript Challenges',
        'link': `https://github.com/katayoon-rb/70-JavaScript-Challenges`,
        'lan': ['JavaScript']
    },
    {
        'name': 'Tailwind CSS - Zero to Hero',
        'link': 'https://katytailwindzerotohero.netlify.app/',
        'lan': ['HTML', 'CSS', 'JavaScript', 'Tailwind']
    },
    {
        'name': 'The Python Bible',
        'link': 'https://github.com/katayoon-rb/The-Python-Bible',
        'lan': ['Python']
    },

    {
        'name': 'Dashboard',
        'link': 'https://katytailwindcss.netlify.app/dashboard/public/',
        'lan': ['HTML', 'CSS', 'JavaScript', 'Tailwind']
    },
    {
        'name': 'Real Estate',
        'link': 'https://katytailwindcss.netlify.app/real%20estate/public/',
        'lan': ['HTML', 'CSS', 'JavaScript', 'Tailwind']
    },

    {
        'name': 'Python and Django Full Stack Bootcamp',
        'link': 'https://github.com/katayoon-rb/Python-and-Django-Full-Stack-Bootcamp/',
        'lan': ['HTML', 'CSS', 'Python', 'JavaScript', 'Bootstrap']
    },
    {
        'name': 'CS50p Harvard',
        'link': 'https://github.com/katayoon-rb/CS50p-Course/',
        'lan': ['Python']
    },
    {
        'name': 'Understanding TypeScript',
        'link': 'https://github.com/katayoon-rb/Understanding-TypeScript',
        'lan': ['HTML', 'CSS', 'TypeScript']
    },
    {
        'name': '30 Days of JavaScript Leetcode',
        'link': `https://github.com/katayoon-rb/30-Days-of-JavaScript-leetcode`,
        'lan': ['JavaScript']
    },
    {
        'name': 'CS50x Harvard',
        'link': 'https://github.com/katayoon-rb/CS50x-Course/',
        'lan': ['HTML', 'C', 'CSS', 'Python', 'JavaScript']
    },
    {
        'name': 'CSS Battle',
        'link': 'https://katycssbattle.netlify.app/',
        'lan': ['HTML', 'CSS']
    },
    {
        'name': '100 Days CSS Challenge',
        'link': 'https://katy100dayscss.netlify.app/',
        'lan': ['HTML', 'CSS']
    },
    {
        'name': 'Practice Python with 100 Exercises',
        'link': 'https://github.com/katayoon-rb/Practice-Python-with-100-Exercises',
        'lan': ['Python']
    },
    {
        'name': 'Programming Skills leetcode',
        'link': `https://github.com/katayoon-rb/Programming-Skills-leetcode/`,
        'lan': ['JavaScript']
    }
)

for (let i = 0; i < imported.length; i++) {
    for (let j = 0; j < imported[i].length; j++) {
        ProjectsArr.push(imported[i][j])
    }
}

export default ProjectsArr
