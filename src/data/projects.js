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
    nextjsCGPrj
]

let ProjectsArr = []
ProjectsArr.push(
    {
        'name': 'Today I Learned',
        'link': `https://katyfullstack.vercel.app/`,
        'lan': ['html', 'css', 'javascript', 'react']
    },
    {
        'name': 'Angular Material Demo',
        'link': `https://katyangularmaterial.vercel.app/`,
        'lan': ['angular']
    },
    {
        'name': 'Angular University Courses Page',
        'link': `https://katyangularunicourses.vercel.app/`,
        'lan': ['angular']
    },
    {
        'name': 'Recipe Book',
        'link': `https://katyangularrecipebook.vercel.app/`,
        'lan': ['angular', 'bootstrap']
    },
    {
        'name': 'OpenTable',
        'link': `https://katyopentablenextjs.vercel.app/ `,
        'lan': ['typescript', 'next.js']
    },
    {
        'name': 'DevFlow',
        'link': `https://katydevflow.vercel.app/`,
        'lan': ['html', 'css', 'tailwind', 'typescript', 'next.js']
    },
    {
        'name': 'Ultimate Java Mastery',
        'link': `https://github.com/katayoon-rb/Ultimate-Java-Mastery`,
        'lan': ['java']
    },
    {
        'name': 'Java Bootcamp ZeroToMastery',
        'link': `https://github.com/katayoon-rb/Java-Bootcamp-ZeroToMastery`,
        'lan': ['java']
    },
    {
        'name': 'Java Bootcamp',
        'link': `https://github.com/katayoon-rb/Java-Bootcamp`,
        'lan': ['java']
    },
    {
        'name': 'Design Patterns in Js',
        'link': `https://github.com/katayoon-rb/Design-Patterns-in-Js`,
        'lan': ['javascript', 'design-pattern']
    },

    {
        'name': 'MeetUs',
        'link': `https://katysveltejs.netlify.app/course%20project/public/`,
        'lan': ['html', 'css', 'javascript', 'tailwind', 'svelte']
    },

    {
        'name': 'Small Svelte Projects',
        'link': `https://katysveltejs.netlify.app/`,
        'lan': ['html', 'css', 'javascript', 'tailwind', 'svelte']
    },
    {
        'name': 'Ultimate Design Pattern',
        'link': `https://github.com/katayoon-rb/70-JavaScript-Challenges`,
        'lan': ['java', 'design-pattern']
    },
    {
        'name': '70 JavaScript Challenges',
        'link': `https://github.com/katayoon-rb/70-JavaScript-Challenges`,
        'lan': ['javascript']
    },
    {
        'name': 'Tailwind CSS - Zero to Hero',
        'link': 'https://katytailwindzerotohero.netlify.app/',
        'lan': ['html', 'css', 'javascript', 'tailwind']
    },
    {
        'name': 'The Python Bible',
        'link': 'https://github.com/katayoon-rb/The-Python-Bible',
        'lan': ['python']
    },

    {
        'name': 'Dashboard',
        'link': 'https://katytailwindcss.netlify.app/dashboard/public/',
        'lan': ['html', 'css', 'javascript', 'tailwind']
    },
    {
        'name': 'Real Estate',
        'link': 'https://katytailwindcss.netlify.app/real%20estate/public/',
        'lan': ['html', 'css', 'javascript', 'tailwind']
    },

    {
        'name': 'Python and Django Full Stack Bootcamp',
        'link': 'https://github.com/katayoon-rb/Python-and-Django-Full-Stack-Bootcamp/',
        'lan': ['html', 'css', 'python', 'javascript', 'bootstrap']
    },
    {
        'name': 'CS50p Harvard',
        'link': 'https://github.com/katayoon-rb/CS50p-Course/',
        'lan': ['python']
    },
    {
        'name': 'Understanding TypeScript',
        'link': 'https://github.com/katayoon-rb/Understanding-TypeScript',
        'lan': ['html', 'css', 'typescript']
    },
    {
        'name': '30 Days of JavaScript Leetcode',
        'link': `https://github.com/katayoon-rb/30-Days-of-JavaScript-leetcode`,
        'lan': ['javascript']
    },
    {
        'name': 'CS50x Harvard',
        'link': 'https://github.com/katayoon-rb/CS50x-Course/',
        'lan': ['html', 'c', 'css', 'python', 'javascript']
    },
    {
        'name': 'CSS Battle',
        'link': 'https://katycssbattle.netlify.app/',
        'lan': ['html', 'css']
    },
    {
        'name': '100 Days CSS Challenge',
        'link': 'https://katy100dayscss.netlify.app/',
        'lan': ['html', 'css']
    },
    {
        'name': 'Practice Python with 100 Exercises',
        'link': 'https://github.com/katayoon-rb/Practice-Python-with-100-Exercises',
        'lan': ['python']
    },
    {
        'name': 'Programming Skills leetcode',
        'link': `https://github.com/katayoon-rb/Programming-Skills-leetcode/`,
        'lan': ['javascript']
    }
)

for (let i = 0; i < imported.length; i++) {
    for (let j = 0; j < imported[i].length; j++) {
        ProjectsArr.push(imported[i][j])
    }
}

export default ProjectsArr
