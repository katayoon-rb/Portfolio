const courseArr = [
    // {
    //     'Title': '',
    //     'Info': '',
    //     'Links': {
    //         'My Implementation': '',
    //         'The Course': '',
    //         'The Site': '',
    //         'The Book': ''
    //     },
    //     'Tags': [],
    //     'End': ''
    // },

    // ONGOING 
    {
        'Title': 'Next.js 14 & React',
        'Info': "Learn NextJS 14 and build fullstack ReactJS + NextJS apps with the App or Pages Router!",
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Nextjs-Complete-Guide',
            'Original Course': 'https://www.udemy.com/course/nextjs-react-the-complete-guide/',
        },
        'End': '',
        'Tags': ['react', 'next.js'], 
        'Done': false
    },
    {
        'Title': 'CS50w',
        'Info': "CS50's Web Programming with Python and JavaScript",
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50w-Course',
            'Original Course': 'https://www.edx.org/learn/web-development/harvard-university-cs50-s-web-programming-with-python-and-javascript',
        },
        'End': '',
        'Tags': ['python', 'javascript', 'react', 'bootstrap'],
        'Done': false
    },
    {
        'Title': 'CS50ai',
        'Info': 'Artificial intelligence',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50ai-Course',
            'Original Course': 'https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python',
        },
        'Tags': ["ai"],
        'End': ''
    },
    {
        'Title': 'CSS Battle',
        'Info': 'Daily Targets & Battles - HTML/CSS',
        'Links': {
            'My Implementation': 'https://katycssbattle.netlify.app/',
            'The Site': 'https://cssbattle.dev/'
        },
        'Tags': ['css'],
        'End': ''
    },

    // FINISHED
    {
        'Title': 'Angular Material In Depth',
        'Info': 'In-depth guided tour to the Angular Material component library (in Angular 17)',
        'Links': {
            'My Implementation': 'https://katyangularmaterial.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/angular-material-course/',
        },
        'End': '6 May, 2024',
        'Tags': ['angular'], 
        'Done': true
    },
    {
        'Title': 'Angular Core Deep Dive',
        'Info': 'Advanced Features of the Angular Core and Common modules.',
        'Links': {
            'My Implementation': 'https://katyangularunicourses.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/angular-course/',
        },
        'End': '5 May, 2024',
        'Tags': ['angular'], 
        'Done': true
    },
    {
        'Title': 'Angular – The Complete Guide',
        'Info': 'Master Angular (formerly "Angular 2") and build awesome, reactive web apps!',
        'Links': {
            'My Implementation': 'https://katyangularrecipebook.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/the-complete-guide-to-angular-2/',
        },
        'End': '4 May, 2024',
        'Tags': ['angular'], 
        'Done': true
    },
    {
        'Title': 'The Next.js 13 Bootcamp',
        'Info': 'The Complete Developer Guide',
        'Links': {
            'My Implementation': 'https://katyopentablenextjs.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/the-nextjs-13-bootcamp-the-complete-developer-guide/',
        },
        'End': '27 Apr, 2024',
        'Tags': ['react', 'next.js'], 
        'Done': true
    },
    {
        'Title': 'Next JS: The Complete Developer Guide',
        'Info': 'Using App Router, Next Auth, NextUI, and TailwindCSS!',
        'Links': {
            'My Implementation': 'https://katynextjsdevguide.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/next-js-the-complete-developers-guide',
        },
        'End': '',
        'Tags': ['react', 'next.js'], 
        'Done': false
    },
    {
        'Title': 'Ultimate Next.js 13 Course',
        'Info': 'Escape the shallow content & dive deep into the hottest tech of 2024',
        'Links': {
            'My Implementation': 'https://katydevflow.vercel.app/',
            'The Course': 'https://www.jsmastery.pro/ultimate-next13-course',
        },
        'Tags': ['next.js'],     
        'End': '20 Apr, 2024'
    },
    {
        'Title': 'The Ultimate Java Mastery Series',
        'Info': 'Master Java - the most popular programming language underpinning most apps and websites.',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Ultimate-Java-Mastery',
            'The Course': 'https://codewithmosh.com/p/the-ultimate-java-mastery-series',
        },
        'Tags': ['java'],
        'End': '10 Mar, 2024'
    },
    {
        'Title': 'Java Bootcamp: Zero to Mastery',
        'Info': 'Learn Java from scratch with an industry expert.',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Java-Bootcamp-ZeroToMastery',
            'The Course': 'https://zerotomastery.io/courses/java-bootcamp/',
        },
        'Tags': ['java'],
        'End': '6 Mar, 2024'
    },
    {
        'Title': 'Software Engineering 101',
        'Info': 'Use Software Engineering to Plan and Build Amazing Software + Learn SCRUM Framework!',
        'Links': {
            'The Course': 'https://www.udemy.com/course/software-engineering-101',
        },
        'Tags': [],
        'End': '28 Feb, 2024'
    },
    {
        'Title': 'Java Bootcamp',
        'Info': 'Java fundamentals and syntax, data structures, & ...',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Java-Bootcamp',
        },
        'Tags': ['java'],
        'End': '25 Feb, 2024'
    },
    {
        'Title': 'React Testing Library and Jest',
        'Info': 'A complete, all-in-one guide to fully testing your React projects using React Testing Library and Jest.',
        'Links': {
            'The Course': 'https://www.udemy.com/course/react-testing-library-and-jest',
        },
        'Tags': ['react'],
        'End': '24 Feb, 2024'
    },
    {
        'Title': 'React Front To Back',
        'Info': 'Learn modern React by building 4 projects.',
        'Links': {
            'My Implementation': 'https://katyreactfronttoback.vercel.app/',
            'The Course': 'https://www.udemy.com/course/react-front-to-back-2022/',
        },
        'Tags': ['react'],
        'End': '22 Feb, 2024'
    },
    {
        'Title': 'The Joy of React',
        'Info': 'Build rich, dynamic web apps with React',
        'Links': {
            'My Implementation': 'https://katyjoyofreact.vercel.app/',
            'The Course': 'https://www.joyofreact.com/',
        },
        'Tags': ['react'],
        'End': '3 Feb, 2024'
    },
    {
        'Title': 'Design Patterns in JavaScript',
        'Info': 'Discover the modern design patterns in Js',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Design-Patterns-in-Js',
            'The Course': 'https://www.udemy.com/course/design-patterns-javascript/',
        },
        'Tags': ['javascript'],
        'End': '15 Jan, 2024'
    },
    {
        'Title': 'Svelte.js – The Complete Guide',
        'Info': 'Build high-performance web apps with SvelteJS',
        'Links': {
            'My Implementation': 'https://katysveltejs.netlify.app/',
            'The Course': 'https://www.udemy.com/course/sveltejs-the-complete-guide/',
        },
        'Tags': ['svelte.js'],
        'End': '15 Jan, 2024'
    },
    {
        'Title': 'Tailwind CSS From Scratch',
        'Info': 'Build layouts fast and efficiently using Tailwind',
        'Links': {
            'My Implementation': 'https://katytailwindfromscratch.netlify.app/',
            'The Course': 'https://www.udemy.com/course/tailwind-from-scratch/',
        },
        'Tags': ['tailwind'],
        'End': '15 Jan, 2024'
    },
    {
        'Title': 'The Ultimate Design Pattern Series',
        'Info': 'A deep dive into Behavioral Design Patterns',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Ultimate-Design-Pattern',
            'The Course': 'https://codewithmosh.com/p/design-patterns',
        },
        'Tags': ['java'],
        'End': '10 Jan, 2024'
    },
    {
        'Title': '70+ JavaScript Challenges',
        'Info': 'Build better foundational skills as a developer',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/70-JavaScript-Challenges',
            'The Course': 'https://www.udemy.com/course/javascript-challenges/?persist_locale=&locale=en_US',
        },
        'Tags': ['javascript'],
        'End': '8 Jan, 2024'
    },
    {
        'Title': 'Vue – The Complete Guide',
        'Info': 'Vue.js is an awesome JS Framework for building Frontend Apps!',
        'Links': {
            'My Implementation': 'https://katyvueguide.netlify.app/',
            'The Course': 'https://www.udemy.com/course/vuejs-2-the-complete-guide/',
        },
        'Tags': ['vue.js'],
        'End': '8 Jan, 2024'
    },
    {
        'Title': 'Clean Code',
        'Info': 'Learn to write readable, understandable and maintainable code',
        'Links': {
            'The Course': 'https://www.udemy.com/course/writing-clean-code/',
        },
        'Tags': [],
        'End': '3 Jan, 2024'
    },
    {
        'Title': 'Bootstrap 5 From Scratch',
        'Info': 'Learn and build modern websites using Bootstrap 5',
        'Links': {
            'My Implementation': 'https://katybootstrapfromscratch.netlify.app/',
            'The Course': 'https://www.udemy.com/course/bootstrap-from-scratch/',
        },
        'Tags': ['bootstrap'],
        'End': '30 Dec, 2023'
    },
    {
        'Title': 'Tailwind CSS - Zero to Hero',
        'Info': 'Building a tailwind css music festival site, custom plugins, components & more!',
        'Links': {
            'My Implementation': 'https://katytailwindzerotohero.netlify.app/',
            'The Course': 'https://www.udemy.com/course/tailwind-css-zero-to-hero/',
        },
        'Tags': ['tailwind'],
        'End': '20 Dec, 2023'
    },
    {
        'Title': 'React & TypeScript - Practical Guide',
        'Info': 'Build React apps & use TypeScript to enhance it.',
        'Links': {
            'My Implementation': 'https://katyreacttypescript.netlify.app/',
            'The Course': 'https://www.udemy.com/course/react-typescript-the-practical-guide/',
        },
        'Tags': ['react', 'javascript', 'typescript'],
        'End': '20 Dec, 2023'
    },
    {
        'Title': 'The Python Bible',
        'Info': 'Build 11 Projects from Beginner to Pro in Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/The-Python-Bible',
            'The Course': 'https://www.udemy.com/course/the-python-bible/',
        },
        'Tags': ['python'],
        'End': '19 Dec, 2023'
    },
    {
        'Title': 'Tailwind CSS',
        'Info': 'Learn Tailwind by building projects.',
        'Links': {
            'My Implementation': 'https://katytailwindcss.netlify.app',
            'The Course': 'https://www.udemy.com/course/tailwind-css-course/',
        },
        'Tags': ['tailwind'],
        'End': '18 Dec, 2023'
    },
    {
        'Title': 'JavaScript – The Tricky Parts',
        'Info': 'The most tricky parts of JavaScript.',
        'Links': {
            'The Course': 'https://pro.academind.com/p/javascript-the-tricky-parts',
        },
        'Tags': ['javascript'],
        'End': '17 Dec, 2023'
    },
    {
        'Title': 'TypeScript for Professionals',
        'Info': 'The TypeScript type system',
        'Links': {
            'The Course': 'https://www.udemy.com/course/typescript-for-professionals/',
        },
        'Tags': ['typescript'],
        'End': '14 Dec, 2023'
    },
    {
        'Title': 'Python and Django Full Stack',
        'Info': 'HTML/CSS, JS, Jquery, Bootstrap, Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Python-and-Django-Full-Stack-Bootcamp',
            'The Course': 'https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/',
        },
        'Tags': ['html', 'css', 'javascript', 'bootstrap', 'python'],
        'End': '14 Dec, 2023'
    },
    {
        'Title': 'CS50p Harvard',
        'Info': 'Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50p-Course',
            'The Course': 'https://www.edx.org/learn/python/harvard-university-cs50-s-introduction-to-programming-with-python'
        },
        'Tags': ['python'],
        'End': '13 Dec, 2023'
    },
    {
        'Title': 'Automate Boring Stuff with Python',
        'Info': 'Python',
        'Links': {
            'The Book': 'https://automatetheboringstuff.com/',
            'The Course': 'https://www.udemy.com/course/automate/',
        },
        'Tags': ['python'],
        'End': '10 Dec, 2023'
    },
    {
        'Title': 'Understanding TypeScript',
        'Info': 'Core types, Generics, TypeScript + React or Node',
        'Links': {
            'My Implementation': 'https://katyundrestandingts.netlify.app/',
            'The Course': 'https://www.udemy.com/course/understanding-typescript/',
        },
        'Tags': ['javascript', 'typescript'],
        'End': '4 Dec, 2023'
    },
    {
        'Title': '30 Days of JavaScript Leetcode',
        'Info': 'JavaScript',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/30-Days-of-JavaScript-leetcode',
            'The Site': 'https://leetcode.com/studyplan/30-days-of-javascript/'
        },
        'Tags': ['javascript'],
        'End': '23 Nov, 2023'
    },
    {
        'Title': 'Advanced CSS and Sass',
        'Info': 'master flexbox, CSS Grid, responsive design, & ...',
        'Links': {
            'My Implementation': 'https://katyadvcssandsass.netlify.app/',
            'The Course': 'https://www.udemy.com/course/advanced-css-and-sass/',
        },
        'Tags': ['html', 'css', 'sass'],
        'End': '23 Nov, 2023'
    },
    {
        'Title': 'CS50x Harvard',
        'Info': 'Scratch, C, Python, SQL, HTML/CSS & Flask',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50x-Course',
            'The Course': 'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science'
        },
        'Tags': ['html', 'css', 'python', 'c'],
        'End': '14 Nov, 2023'
    },
    {
        'Title': '100 Days CSS Challenge',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katy100dayscss.netlify.app/',
            'The Site': 'https://100dayscss.com/'
        },
        'Tags': ['html', 'css'],
        'End': '8 Nov, 2023'
    },
    {
        'Title': 'Python with 100 Python Exercises',
        'Info': 'Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Practice-Python-with-100-Exercises',
            'The Course': 'https://www.udemy.com/course/python-video-workbook/',
        },
        'Tags': ['python'],
        'End': '1 Nov, 2023'
    },
    {
        'Title': 'Frontend Mentor Challenges',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katyfrontendmentorchallenges.netlify.app/',
            'The Site': 'https://shorturl.at/xyzP1'
        },
        'Tags': ['html', 'css', 'javascript'],
        'End': ''
    },
    {
        'Title': 'Learn and Understand NodeJS',
        'Info': 'NodeJS. Learn V8, Express & ...',
        'Links': {
            'The Course': 'https://www.udemy.com/course/understand-nodejs/'
        },
        'Tags': ['node.js'],
        'End': '1 Nov, 2023'
    },
    {
        'Title': 'Programming Skills Leetcode',
        'Info': 'JavaScript',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Programming-Skills-leetcode/',
            'The Site': 'https://leetcode.com/studyplan/programming-skills/'
        },
        'Tags': ['javascript'],
        'End': '1 Nov, 2023'
    },
    {
        'Title': 'Complete Flexbox Course',
        'Info': 'Master CSS3 Flexbox for Good',
        'Links': {
            'The Course': 'https://www.udemy.com/course/flexbox-tutorial/',
        },
        'Tags': ['css'],
        'End': '23 Oct, 2023'
    },
    {
        'Title': '50 Projects In 50 Days',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katy50projects50days.netlify.app/',
            'The Course': 'https://www.udemy.com/course/50-projects-50-days/'
        },
        'Tags': ['html', 'css', 'javascript'],
        'End': '6 Oct, 2023'
    },
    {
        'Title': 'The Modern JavaScript Tutorial',
        'Info': 'All 3 Editions - JavaScript',
        'Links': {
            'The Book': 'https://javascript.Info/'
        },
        'Tags': ['javascript'],
        'End': 'Dec 2022'
    },
    {
        'Title': 'Frontend Path Scrimba',
        'Info': 'CSS, Js, Responsive Design, UI Design, React',
        'Links': {
            'My Implementation': 'https://katayoon-rb.github.io/Fronend-Path-Scrimba/',
            'The Course': 'https://scrimba.com/learn/frontend'
        },
        'Tags': ['css', 'javascript', 'react'],
        'End': '14 Oct, 2022'
    }
]

export default courseArr
