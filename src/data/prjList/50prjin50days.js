const prjs = [
    'Expanding Cards',
    'Progress Steps',
    'Rotating Navigation',
    'Hidden Search',
    'Blurry Loading',
    'Scroll animation',
    'Split Landing Page',
    'Form Wave Animation',
    'Sound Board',
    'Dad Jokes',
    'Event Keycodes',
    'Faq Collapse',
    'Random Choice Picker',
    'Animated Navigation',
    'Incrementing Counter',
    'Drink Water',
    'Movie App',
    'Background Slider',
    'Theme Clock',
    'Button Ripple Effect',
    'Drag N Drop',
    'Drawing App',
    'Kinetic Loader',
    'Content Placeholder',
    'Sticky Navbar',
    'Double Vertical Slider',
    'Toast Notification',
    'Github Profiles',
    'Double Click Heart',
    'Auto Text Effect',
    'Password Generator',
    'Good Cheap Fast',
    'Notes App',
    'Animated Countdown',
    'Image Carousel',
    'Hoverboard',
    'Pokedex',
    'Mobile Tab Navigation',
    'Password Strength Background',
    '3D Background Boxes',
    'Verify Account UI',
    'Live User Filter',
    'Feedback UI Design',
    'Custom Range Slider',
    'Netflix Mobile Navigation',
    'Quiz App',
    'Testimonial Box Switcher',
    'Random Image Feed',
    'Todo List',
    'Insect Catch Game'
]

let c50prjIn50daysPrj = []

for (let i = 1; i < 50 + 1; i++) {
    let day = i < 10 ? `0${i}`: i
    c50prjIn50daysPrj.push({
        'name': prjs[i - 1],
        'link': `https://katy50projects50days.netlify.app/${day} ${prjs[i - 1]}/index.html`,
        'lan': ['html', 'css', 'javascript']
    })
}


export default c50prjIn50daysPrj 