const courseArr = [
    // {
    //     'Title': '',
    //     'Info': '',
    //     'Links': {
    //         'My Implementation': '',
    //         'Original Course': '',
    //         'The Site': '',
    //         'The Book': ''
    //     },
    //     'End': '',
    // },

    // ONGOING
    // {
    //     'Title': 'Ultimate Next.js 13 Course',
    //     'Info': 'Escape the shallow content & dive deep into the hottest tech of 2024',
    //     'Links': {
    //         'My Implementation': 'https://github.com/katayoon-rb/Ultimate-Next.js-Course',
    //         'Original Course': 'https://www.jsmastery.pro/ultimate-next13-course',
    //     },
    //     'End': ''
    // },
    {
        'Title': 'CSS Battle',
        'Info': 'Daily Targets & Battles - HTML/CSS',
        'Links': {
            'My Implementation': 'https://katycssbattle.netlify.app/',
            'The Site': 'https://cssbattle.dev/'
        },
        'End': ''
    },

    // FINISHED
    {
        'Title': 'The Ultimate Java Mastery Series',
        'Info': 'Master Java - the most popular programming language underpinning most apps and websites.',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Ultimate-Java-Mastery',
            'Original Course': 'https://codewithmosh.com/p/the-ultimate-java-mastery-series',
        },
        'End': '10 Mar, 2024'
    },
    {
        'Title': 'Java Bootcamp: Zero to Mastery',
        'Info': 'Learn Java from scratch with an industry expert.',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Java-Bootcamp-ZeroToMastery',
            'Original Course': 'https://zerotomastery.io/courses/java-bootcamp/',
        },
        'End': '6 Mar, 2024'
    },
    {
        'Title': 'Software Engineering 101',
        'Info': 'Use Software Engineering to Plan and Build Amazing Software + Learn SCRUM Framework!',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/software-engineering-101',
        },
        'End': '28 Feb, 2024'
    },
    {
        'Title': ' Java Bootcamp',
        'Info': 'Java fundamentals and syntax, data structures, & ...',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Java-Bootcamp',
        },
        'End': '25 Feb, 2024'
    },
    {
        'Title': 'React Testing Library and Jest',
        'Info': 'A complete, all-in-one guide to fully testing your React projects using React Testing Library and Jest.',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/react-testing-library-and-jest',
        },
        'End': '24 Feb, 2024'
    },
    {
        'Title': 'React Front To Back',
        'Info': 'Learn modern React by building 4 projects.',
        'Links': {
            'My Implementation': 'https://katyreactfronttoback.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/react-front-to-back-2022/',
        },
        'End': '22 Feb, 2024'
    },
    {
        'Title': 'The Joy of React',
        'Info': 'Build rich, dynamic web apps with React',
        'Links': {
            'My Implementation': 'https://katyjoyofreact.vercel.app/',
            'Original Course': 'https://www.joyofreact.com/',
        },
        'End': '3 Feb, 2024'
    },
    {
        'Title': 'Design Patterns in JavaScript',
        'Info': 'Discover the modern design patterns in Js',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Design-Patterns-in-Js',
            'Original Course': 'https://www.udemy.com/course/design-patterns-javascript/',
        },
        'End': '15 Jan, 2024'
    },
    {
        'Title': 'Svelte.js – The Complete Guide',
        'Info': 'Build high-performance web apps with SvelteJS',
        'Links': {
            'My Implementation': 'https://katysveltejs.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/sveltejs-the-complete-guide/',
        },
        'End': '15 Jan, 2024'
    },
    {
        'Title': 'Tailwind CSS From Scratch',
        'Info': 'Build layouts fast and efficiently using Tailwind',
        'Links': {
            'My Implementation': 'https://katytailwindfromscratch.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/tailwind-from-scratch/',
        },
        'End': '15 Jan, 2024'
    },
    {
        'Title': 'The Ultimate Design Pattern Series',
        'Info': 'A deep dive into Behavioral Design Patterns',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Ultimate-Design-Pattern',
            'Original Course': 'https://codewithmosh.com/p/design-patterns',
        },
        'End': '10 Jan, 2024'
    },
    {
        'Title': '70+ JavaScript Challenges',
        'Info': 'Build better foundational skills as a developer',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/70-JavaScript-Challenges',
            'Original Course': 'https://www.udemy.com/course/javascript-challenges/?persist_locale=&locale=en_US',
        },
        'End': '8 Jan, 2024'
    },
    {
        'Title': 'Vue – The Complete Guide',
        'Info': 'Vue.js is an awesome JS Framework for building Frontend Apps!',
        'Links': {
            'My Implementation': 'https://katyvueguide.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/vuejs-2-the-complete-guide/',
        },
        'End': '8 Jan, 2024'
    },
    {
        'Title': 'Clean Code',
        'Info': 'Learn to write readable, understandable and maintainable code',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/writing-clean-code/',
        },
        'End': '3 Jan, 2024'
    },
    {
        'Title': 'Bootstrap 5 From Scratch',
        'Info': 'Learn and build modern websites using Bootstrap 5',
        'Links': {
            'My Implementation': 'https://katybootstrapfromscratch.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/bootstrap-from-scratch/',
        },
        'End': '30 Dec, 2023'
    },
    {
        'Title': 'Tailwind CSS - Zero to Hero',
        'Info': 'Building a tailwind css music festival site, custom plugins, components & more!',
        'Links': {
            'My Implementation': 'https://katytailwindzerotohero.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/tailwind-css-zero-to-hero/',
        },
        'End': '20 Dec, 2023'
    },
    {
        'Title': 'React & TypeScript - Practical Guide',
        'Info': 'Build React apps & use TypeScript to enhance it.',
        'Links': {
            'My Implementation': 'https://katyreacttypescript.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/react-typescript-the-practical-guide/',
        },
        'End': '20 Dec, 2023'
    },
    {
        'Title': 'The Python Bible',
        'Info': 'Build 11 Projects from Beginner to Pro in Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/The-Python-Bible',
            'Original Course': 'https://www.udemy.com/course/the-python-bible/',
        },
        'End': '19 Dec, 2023'
    },
    {
        'Title': 'Tailwind CSS',
        'Info': 'Learn Tailwind by building projects.',
        'Links': {
            'My Implementation': 'https://katytailwindcss.netlify.app',
            'Original Course': 'https://www.udemy.com/course/tailwind-css-course/',
        },
        'End': '18 Dec, 2023'
    },
    {
        'Title': 'JavaScript – The Tricky Parts',
        'Info': 'The most tricky parts of JavaScript.',
        'Links': {
            'Original Course': 'https://pro.academind.com/p/javascript-the-tricky-parts',
        },
        'End': '17 Dec, 2023'
    },
    {
        'Title': 'TypeScript for Professionals',
        'Info': 'The TypeScript type system',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/typescript-for-professionals/',
        },
        'End': '14 Dec, 2023'
    },
    {
        'Title': 'Python and Django Full Stack',
        'Info': 'HTML/CSS, JS, Jquery, Bootstrap, Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Python-and-Django-Full-Stack-Bootcamp',
            'Original Course': 'https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/',
        },
        'End': '14 Dec, 2023'
    },
    {
        'Title': 'CS50p Harvard',
        'Info': 'Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50p-Course',
            'Original Course': 'https://shorturl.at/ksOSU'
        },
        'End': '13 Dec, 2023'
    },
    {
        'Title': 'Automate Boring Stuff with Python',
        'Info': 'Python',
        'Links': {
            'The Book': 'https://automatetheboringstuff.com/',
            'Original Course': 'https://www.udemy.com/course/automate/',
        },
        'End': '10 Dec, 2023'
    },
    {
        'Title': 'Understanding TypeScript',
        'Info': 'Core types, Generics, TypeScript + React or Node',
        'Links': {
            'My Implementation': 'https://katyundrestandingts.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/understanding-typescript/',
        },
        'End': '4 Dec, 2023'
    },
    {
        'Title': '30 Days of JavaScript Leetcode',
        'Info': 'JavaScript',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/30-Days-of-JavaScript-leetcode',
            'The Site': 'https://leetcode.com/studyplan/30-days-of-javascript/'
        },
        'End': '23 Nov, 2023'
    },
    {
        'Title': 'Advanced CSS and Sass',
        'Info': 'master flexbox, CSS Grid, responsive design, & ...',
        'Links': {
            'My Implementation': 'https://katyadvcssandsass.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/advanced-css-and-sass/',
        },
        'End': '23 Nov, 2023'
    },
    {
        'Title': 'CS50x Harvard',
        'Info': 'Scratch, C, Python, SQL, HTML/CSS & Flask',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50x-Course',
            'Original Course': 'https://shorturl.at/dnvzA'
        },
        'End': '14 Nov, 2023'
    },
    {
        'Title': '100 Days CSS Challenge',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katy100dayscss.netlify.app/',
            'The Site': 'https://100dayscss.com/'
        },
        'End': '8 Nov, 2023'
    },
    {
        'Title': 'Python with 100 Python Exercises',
        'Info': 'Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Practice-Python-with-100-Exercises',
            'Original Course': 'https://www.udemy.com/course/python-video-workbook/',
        },
        'End': '1 Nov, 2023'
    },
    {
        'Title': 'Frontend Mentor Challenges',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katyfrontendmentorchallenges.netlify.app/',
            'The Site': 'https://shorturl.at/xyzP1'
        },
        'End': ''
    },
    {
        'Title': 'Learn and Understand NodeJS',
        'Info': 'NodeJS. Learn V8, Express & ...',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/understand-nodejs/'
        },
        'End': '1 Nov, 2023'
    },
    {
        'Title': 'Programming Skills Leetcode',
        'Info': 'JavaScript',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Programming-Skills-leetcode/',
            'The Site': 'https://leetcode.com/studyplan/programming-skills/'
        },
        'End': '1 Nov, 2023'
    },
    {
        'Title': 'Complete Flexbox Course',
        'Info': 'Master CSS3 Flexbox for Good',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/flexbox-tutorial/',
        },
        'End': '23 Oct, 2023'
    },
    {
        'Title': '50 Projects In 50 Days',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katy50projects50days.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/50-projects-50-days/'
        },
        'End': '6 Oct, 2023'
    },
    {
        'Title': 'The Modern JavaScript Tutorial',
        'Info': 'All 3 Editions - JavaScript',
        'Links': {
            'The Book': 'https://javascript.Info/'
        },
        'End': 'Dec 2022'
    },
    {
        'Title': 'Frontend Path Scrimba',
        'Info': 'CSS, Js, Responsive Design, UI Design, React',
        'Links': {
            'My Implementation': 'https://katayoon-rb.github.io/Fronend-Path-Scrimba/',
            'Original Course': 'https://scrimba.com/learn/frontend'
        },
        'End': '14 Oct, 2022'
    }
]

export default courseArr