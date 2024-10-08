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
    //     'Tags': [],
    //     'End': ''
    // },

    // ONGOING
    {
        'Title': 'CS50w',
        'Info': "CS50's Web Programming with Python and JavaScript",
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50w-Course',
            'Original Course': 'https://www.edx.org/learn/web-development/harvard-university-cs50-s-web-programming-with-python-and-javascript',
        },
        'End': '',
        'Tags': ['Python', 'JavaScript', 'React', 'Bootstrap'],
        'Done': false
    },
    {
        'Title': 'CS50ai',
        'Info': 'Artificial intelligence',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50ai-Course',
            'Original Course': 'https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python',
        },
        'Tags': ["Ai"],
        'End': ''
    },
    {
        'Title': 'CSS Battle',
        'Info': 'Daily Targets & Battles - HTML/CSS',
        'Links': {
            'My Implementation': 'https://katycssbattles.vercel.app/',
            'The Site': 'https://cssbattle.dev/'
        },
        'Tags': ['CSS'],
        'End': ''
    },

    // FINISHED
    {
        'Title': 'Data Cleaning',
        'Info': 'Master efficient workflows for cleaning real-world, messy data.',
        'Links': {
            'Original Course': 'https://www.kaggle.com/learn/data-cleaning',
        },
        'Tags': ['Python', 'Machine Learning'],
        'End': '15 Aug, 2024'
    },
    {
        'Title': 'Machine Learning Explainability',
        'Info': 'Extract human-understandable insights from any model.',
        'Links': {
            'Original Course': 'https://www.kaggle.com/learn/machine-learning-explainability',
        },
        'Tags': ['Python', 'Machine Learning'],
        'End': '14 Aug, 2024'
    },
    {
        'Title': 'Computer Vision',
        'Info': 'Build convolutional neural networks with TensorFlow and Keras.',
        'Links': {
            'Original Course': 'https://www.kaggle.com/learn/computer-vision',
        },
        'Tags': ['Python', 'Machine Learning'],
        'End': '13 Aug, 2024'
    },
    {
        'Title': 'Intro to Deep Learning',
        'Info': 'Use TensorFlow and Keras to build and train neural networks for structured data.',
        'Links': {
            'Original Course': 'https://www.kaggle.com/learn/intro-to-deep-learning/course',
        },
        'Tags': ['Python', 'Machine Learning'],
        'End': '12 Aug, 2024'
    },
    {
        'Title': 'Intermediate Machine Learning',
        'Info': 'Handle missing values, non-numeric values, data leakage, and more.',
        'Links': {
            'Original Course': 'https://www.kaggle.com/learn/intermediate-machine-learning',
        },
        'Tags': ['Python', 'Machine Learning'],
        'End': '5 Aug, 2024'
    },
    {
        'Title': 'Pandas',
        'Info': 'Solve short hands-on challenges to perfect your data manipulation skills.',
        'Links': {
            'Original Course': 'https://www.kaggle.com/learn/pandas',
        },
        'Tags': ['Python', 'Machine Learning'],
        'End': '2 Aug, 2024'
    },
    {
        'Title': 'Intro to Machine Learning',
        'Info': 'Learn the core ideas in machine learning, and build your first models.',
        'Links': {
            'Original Course': 'https://www.kaggle.com/learn/intro-to-machine-learning',
        },
        'Tags': ['Python', 'Machine Learning'],
        'End': '1 Aug, 2024'
    },
    {
        'Title': 'Python',
        'Info': 'Learn the most important language for data science.',
        'Links': {
            'Original Course': 'https://www.kaggle.com/learn/python',
        },
        'Tags': ['Python'],
        'End': '31 Jul, 2024'
    },
    {
        'Title': 'Advanced SQL',
        'Info': 'Take your SQL skills to the next level.',
        'Links': {
            'Original Course': 'https://www.kaggle.com/learn/advanced-sql',
        },
        'Tags': ['SQL'],
        'End': '30 Jul, 2024'
    },
    {
        'Title': 'Intro to SQL',
        'Info': 'Learn SQL for working with databases, using Google BigQuery.',
        'Links': {
            'Original Course': 'https://www.kaggle.com/learn/intro-to-sql',
        },
        'Tags': ['SQL'],
        'End': '29 Jul, 2024'
    },
    {
        'Title': 'The Nuxt 3 Bootcamp - The Complete Developer Guide',
        'Info': 'Build complex & engaging Vue apps with Nuxt3.',
        'Links': {
            'My Implementation': 'https://katynuxtbootcamp.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/the-nuxt-3-bootcamp-the-complete-developer-guide',
        },
        'Tags': ['Nuxt.js'],
        'End': '25 Jul, 2024'
    },
    {
        'Title': 'Python Django - The Practical Guide',
        'Info': 'Learn how to build web applications and websites with Python and the Django framework',
        'Links': {
            'My Implementation': 'https://katydjangoblog.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/python-django-the-practical-guide/',
        },
        'Tags': ['Python', 'Django'],
        'End': '5 Jul, 2024'
    },
    {
        'Title': 'Django Bootcamp: Zero to Mastery',
        'Info': 'Learn Django from scratch and from an industry expert by building real-world apps.',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Django-Bootcamp',
            'Original Course': 'https://zerotomastery.io/courses/django-bootcamp/',
        },
        'Tags': ['Django'],
        'End': '2 Jul, 2024'
    },
    {
        'Title': 'HTMX - The Practical Guide',
        'Info': 'Learn how to use the HTMX library to extend HTML and write simple yet powerful code.',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/HTMX-Practical-Guide',
            'Original Course': 'https://www.udemy.com/course/htmx-the-practical-guide/'
        },
        'Tags': ['HTMX'],
        'End': '26 Jun, 2024'
    },
    {
        'Title': 'Crash Course: Build a Full-Stack Web App',
        'Info': 'A quick, fun, and hands-on introduction to web development.',
        'Links': {
            'My Implementation': 'https://katyfullstack.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/full-stack-crash-course/',
        },
        'Tags': ['HTML', 'CSS', 'JavaScript', 'React'],
        'End': '25 Jun, 2024'
    },
    {
        'Title': 'Next.js 14 & React',
        'Info': "Learn NextJS 14 and build fullstack ReactJS + NextJS apps with the App or Pages Router!",
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Nextjs-Complete-Guide',
            'Original Course': 'https://www.udemy.com/course/nextjs-react-the-complete-guide/',
        },
        'End': '24 Jun, 2024',
        'Tags': ['React', 'Next.js'], 
        'Done': false
    },
    {
        'Title': 'Angular Material In Depth',
        'Info': 'In-depth guided tour to the Angular Material component library (in Angular 17)',
        'Links': {
            'My Implementation': 'https://katyangularmaterial.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/angular-material-course/',
        },
        'End': '6 May, 2024',
        'Tags': ['Angular'], 
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
        'Tags': ['Angular'], 
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
        'Tags': ['Angular'], 
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
        'Tags': ['React', 'Next.js'], 
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
        'Tags': ['React', 'Next.js'], 
        'Done': false
    },
    {
        'Title': 'Ultimate Next.js 13 Course',
        'Info': 'Escape the shallow content & dive deep into the hottest tech of 2024',
        'Links': {
            'My Implementation': 'https://katydevflow.vercel.app/',
            'The Course': 'https://www.jsmastery.pro/ultimate-next13-course',
        },
        'Tags': ['Next.js'],     
        'End': '20 Apr, 2024'
    },
    {
        'Title': 'The Ultimate Java Mastery Series',
        'Info': 'Master Java - the most popular programming language underpinning most apps and websites.',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Ultimate-Java-Mastery',
            'The Course': 'https://codewithmosh.com/p/the-ultimate-java-mastery-series',
        },
        'Tags': ['Java'],
        'End': '10 Mar, 2024'
    },
    {
        'Title': 'Java Bootcamp: Zero to Mastery',
        'Info': 'Learn Java from scratch with an industry expert.',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Java-Bootcamp-ZeroToMastery',
            'The Course': 'https://zerotomastery.io/courses/java-bootcamp/',
        },
        'Tags': ['Java'],
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
        'Tags': ['Java'],
        'End': '25 Feb, 2024'
    },
    {
        'Title': 'React Testing Library and Jest',
        'Info': 'A complete, all-in-one guide to fully testing your React projects using React Testing Library and Jest.',
        'Links': {
            'The Course': 'https://www.udemy.com/course/react-testing-library-and-jest',
        },
        'Tags': ['React'],
        'End': '24 Feb, 2024'
    },
    {
        'Title': 'React Front To Back',
        'Info': 'Learn modern React by building 4 projects.',
        'Links': {
            'My Implementation': 'https://katyreactfronttoback.vercel.app/',
            'The Course': 'https://www.udemy.com/course/react-front-to-back-2022/',
        },
        'Tags': ['React'],
        'End': '22 Feb, 2024'
    },
    {
        'Title': 'The Joy of React',
        'Info': 'Build rich, dynamic web apps with React',
        'Links': {
            'My Implementation': 'https://katyjoyofreact.vercel.app/',
            'The Course': 'https://www.joyofreact.com/',
        },
        'Tags': ['React'],
        'End': '3 Feb, 2024'
    },
    {
        'Title': 'Design Patterns in JavaScript',
        'Info': 'Discover the modern design patterns in Js',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Design-Patterns-in-Js',
            'The Course': 'https://www.udemy.com/course/design-patterns-javascript/',
        },
        'Tags': ['JavaScript'],
        'End': '15 Jan, 2024'
    },
    {
        'Title': 'Svelte.js – The Complete Guide',
        'Info': 'Build high-performance web apps with SvelteJS',
        'Links': {
            'My Implementation': 'https://katysveltejs.netlify.app/',
            'The Course': 'https://www.udemy.com/course/sveltejs-the-complete-guide/',
        },
        'Tags': ['Svelte.js'],
        'End': '15 Jan, 2024'
    },
    {
        'Title': 'Tailwind CSS From Scratch',
        'Info': 'Build layouts fast and efficiently using Tailwind',
        'Links': {
            'My Implementation': 'https://katytailwindfromscratch.netlify.app/',
            'The Course': 'https://www.udemy.com/course/tailwind-from-scratch/',
        },
        'Tags': ['Tailwind'],
        'End': '15 Jan, 2024'
    },
    {
        'Title': 'The Ultimate Design Pattern Series',
        'Info': 'A deep dive into Behavioral Design Patterns',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Ultimate-Design-Pattern',
            'The Course': 'https://codewithmosh.com/p/design-patterns',
        },
        'Tags': ['Java'],
        'End': '10 Jan, 2024'
    },
    {
        'Title': '70+ JavaScript Challenges',
        'Info': 'Build better foundational skills as a developer',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/70-JavaScript-Challenges',
            'The Course': 'https://www.udemy.com/course/javascript-challenges/?persist_locale=&locale=en_US',
        },
        'Tags': ['JavaScript'],
        'End': '8 Jan, 2024'
    },
    {
        'Title': 'Vue – The Complete Guide',
        'Info': 'Vue.js is an awesome JS Framework for building Frontend Apps!',
        'Links': {
            'My Implementation': 'https://katyvueguide.netlify.app/',
            'The Course': 'https://www.udemy.com/course/vuejs-2-the-complete-guide/',
        },
        'Tags': ['Vue.js'],
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
        'Tags': ['Bootstrap'],
        'End': '30 Dec, 2023'
    },
    {
        'Title': 'Tailwind CSS - Zero to Hero',
        'Info': 'Building a tailwind css music festival site, custom plugins, components & more!',
        'Links': {
            'My Implementation': 'https://katytailwindzerotohero.netlify.app/',
            'The Course': 'https://www.udemy.com/course/tailwind-css-zero-to-hero/',
        },
        'Tags': ['Tailwind'],
        'End': '20 Dec, 2023'
    },
    {
        'Title': 'React & TypeScript - Practical Guide',
        'Info': 'Build React apps & use TypeScript to enhance it.',
        'Links': {
            'My Implementation': 'https://katyreacttypescript.netlify.app/',
            'The Course': 'https://www.udemy.com/course/react-typescript-the-practical-guide/',
        },
        'Tags': ['React', 'JavaScript', 'TypeScript'],
        'End': '20 Dec, 2023'
    },
    {
        'Title': 'The Python Bible',
        'Info': 'Build 11 Projects from Beginner to Pro in Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/The-Python-Bible',
            'The Course': 'https://www.udemy.com/course/the-python-bible/',
        },
        'Tags': ['Python'],
        'End': '19 Dec, 2023'
    },
    {
        'Title': 'Tailwind CSS',
        'Info': 'Learn Tailwind by building projects.',
        'Links': {
            'My Implementation': 'https://katytailwindcss.netlify.app',
            'The Course': 'https://www.udemy.com/course/tailwind-css-course/',
        },
        'Tags': ['Tailwind'],
        'End': '18 Dec, 2023'
    },
    {
        'Title': 'JavaScript – The Tricky Parts',
        'Info': 'The most tricky parts of JavaScript.',
        'Links': {
            'The Course': 'https://pro.academind.com/p/javascript-the-tricky-parts',
        },
        'Tags': ['JavaScript'],
        'End': '17 Dec, 2023'
    },
    {
        'Title': 'TypeScript for Professionals',
        'Info': 'The TypeScript type system',
        'Links': {
            'The Course': 'https://www.udemy.com/course/typescript-for-professionals/',
        },
        'Tags': ['TypeScript'],
        'End': '14 Dec, 2023'
    },
    {
        'Title': 'Python and Django Full Stack',
        'Info': 'HTML/CSS, JS, Jquery, Bootstrap, Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Python-and-Django-Full-Stack-Bootcamp',
            'The Course': 'https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/',
        },
        'Tags': ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Python'],
        'End': '14 Dec, 2023'
    },
    {
        'Title': 'CS50p Harvard',
        'Info': 'Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50p-Course',
            'The Course': 'https://www.edx.org/learn/python/harvard-university-cs50-s-introduction-to-programming-with-python'
        },
        'Tags': ['Python'],
        'End': '13 Dec, 2023'
    },
    {
        'Title': 'Automate Boring Stuff with Python',
        'Info': 'Python',
        'Links': {
            'The Book': 'https://automatetheboringstuff.com/',
            'The Course': 'https://www.udemy.com/course/automate/',
        },
        'Tags': ['Python'],
        'End': '10 Dec, 2023'
    },
    {
        'Title': 'Understanding TypeScript',
        'Info': 'Core types, Generics, TypeScript + React or Node',
        'Links': {
            'My Implementation': 'https://katyundrestandingts.netlify.app/',
            'The Course': 'https://www.udemy.com/course/understanding-typescript/',
        },
        'Tags': ['JavaScript', 'TypeScript'],
        'End': '4 Dec, 2023'
    },
    {
        'Title': '30 Days of JavaScript Leetcode',
        'Info': 'JavaScript',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/30-Days-of-JavaScript-leetcode',
            'The Site': 'https://leetcode.com/studyplan/30-days-of-javascript/'
        },
        'Tags': ['JavaScript'],
        'End': '23 Nov, 2023'
    },
    {
        'Title': 'Advanced CSS and Sass',
        'Info': 'master flexbox, CSS Grid, responsive design, & ...',
        'Links': {
            'My Implementation': 'https://katyadvcssandsass.netlify.app/',
            'The Course': 'https://www.udemy.com/course/advanced-css-and-sass/',
        },
        'Tags': ['HTML', 'CSS', 'Sass'],
        'End': '23 Nov, 2023'
    },
    {
        'Title': 'CS50x Harvard',
        'Info': 'Scratch, C, Python, SQL, HTML/CSS & Flask',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50x-Course',
            'The Course': 'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science'
        },
        'Tags': ['HTML', 'CSS', 'Python', 'C', 'SQL'],
        'End': '14 Nov, 2023'
    },
    {
        'Title': '100 Days CSS Challenge',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katy100dayscss.netlify.app/',
            'The Site': 'https://100dayscss.com/'
        },
        'Tags': ['HTML', 'CSS'],
        'End': '8 Nov, 2023'
    },
    {
        'Title': 'Python with 100 Python Exercises',
        'Info': 'Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Practice-Python-with-100-Exercises',
            'The Course': 'https://www.udemy.com/course/python-video-workbook/',
        },
        'Tags': ['Python'],
        'End': '1 Nov, 2023'
    },
    {
        'Title': 'Frontend Mentor Challenges',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katyfrontendmentorchallenges.netlify.app/',
            'The Site': 'https://shorturl.at/xyzP1'
        },
        'Tags': ['HTML', 'CSS', 'JavaScript'],
        'End': ''
    },
    {
        'Title': 'Learn and Understand NodeJS',
        'Info': 'NodeJS. Learn V8, Express & ...',
        'Links': {
            'The Course': 'https://www.udemy.com/course/understand-nodejs/'
        },
        'Tags': ['Node.js'],
        'End': '1 Nov, 2023'
    },
    {
        'Title': 'Programming Skills Leetcode',
        'Info': 'JavaScript',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Programming-Skills-leetcode/',
            'The Site': 'https://leetcode.com/studyplan/programming-skills/'
        },
        'Tags': ['JavaScript'],
        'End': '1 Nov, 2023'
    },
    {
        'Title': 'Complete Flexbox Course',
        'Info': 'Master CSS3 Flexbox for Good',
        'Links': {
            'The Course': 'https://www.udemy.com/course/flexbox-tutorial/',
        },
        'Tags': ['CSS'],
        'End': '23 Oct, 2023'
    },
    {
        'Title': '50 Projects In 50 Days',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katy50projects50days.netlify.app/',
            'The Course': 'https://www.udemy.com/course/50-projects-50-days/'
        },
        'Tags': ['HTML', 'CSS', 'JavaScript'],
        'End': '6 Oct, 2023'
    },
    {
        'Title': 'The Modern JavaScript Tutorial',
        'Info': 'All 3 Editions - JavaScript',
        'Links': {
            'The Book': 'https://javascript.Info/'
        },
        'Tags': ['JavaScript'],
        'End': 'Dec 2022'
    },
    {
        'Title': 'Frontend Path Scrimba',
        'Info': 'CSS, Js, Responsive Design, UI Design, React',
        'Links': {
            'My Implementation': 'https://katayoon-rb.github.io/Fronend-Path-Scrimba/',
            'The Course': 'https://scrimba.com/learn/frontend'
        },
        'Tags': ['CSS', 'JavaScript', 'React'],
        'End': '14 Oct, 2022'
    }
]

export default courseArr
