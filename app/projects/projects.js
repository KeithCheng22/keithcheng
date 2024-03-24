export const projects = [
    {
        title: "Creative Portfolio",
        techStack: "Next.js | Three.js | GSAP",
        img: "../../creativePort.png",
        date: "Friday, March 1, 2024",
        demo: '',
        objectives: "Embarking on my second portfolio endeavor marked a pivotal moment in my journey — a chance to reflect on how far I've come since my early days crafting with Flask and Python. With this iteration, my aim was clear: to not just demonstrate growth, but to make a bold statement in design and interactivity. That's why I ventured into uncharted territory, embracing the captivating realm of 3D animations using Three.js and the dynamic capabilities of the GSAP animation library.",
        challenges: 'As with learning anything new, the initial learning curve for both three.js and GSAP were daunting. I found it challenging to understand the concepts of 3D animations of Scenes, Camera and Meshes to create 3D models. Not only that, because this was NextJs, I also had to learn a bit of React Three Fiber, and also React Three Drei. Moreover, when it came to animation, I also got introduced to the concepts of Tweens and Timeline, which once again added to the complexity of this project. The culmination of learning so many things at once was surely overwhelming.',
        learning: "Throughout this project, I have gained a better understanding of 3D animations. While I still have much more to learn, this project was a good starting point. I learnt how to use the basics of geometry to create models with Three.js, and to complement the UI using utilities made from open-source project React-Three Drei. With all animations seen in this project, I wanted to elevate the usual animations that is done with standard CSS, and venture more into creative animations, like the bounce effect from the mobile version of the NavBar. Speaking of mobile, this project was a good platform for me to practice my web responsive skills - something which I never considered in my first portfolio. By the way, if you haven't seen what happens if you venture into the 404 Page, give it a try!"

    },
    {
        title: "AEK Communications",
        techStack: "React | React Router v6",
        img: "/../../aek.png",
        date: "Sunday, December 10, 2023",
        demo: 'https://aek.com.sg',
        objectives: "Creating this project for my father's SME company was a deeply personal endeavor for me. Witnessing the outdated state of my father's old website ignited a desire to leverage my skills in React and React-Router v6 to breathe new life into it.",
        challenges: "The hardest part of this project was to figure out a filtering system for the IT products, and retaining the filtered options after the user clicks on a product and decides to click the back button to view the list of products again. This involved manipulating the browser's history stack.",
        learning: 'In hindest, this project presented me with a lot of opportunities to leverage the hooks provided in react router v6, such as useLocation, useSearchParams and useParams, to create a dynamic site. Beyond the technical aspects, I truly enjoyed building the project, as it felt meaningful and close to heart.'
        
    },
    {
        title: "NetFlick",
        techStack: "Next.js | Tailwind",
        img: "../../NetFlick.png",
        date: "Sunday, August 18, 2023",
        demo: 'https://netflick-one.vercel.app',
        objectives: 'After experimenting with Next.js, I wanted to try out its capabilities of server actions, apart from the usual client components. Hence this project was designed through the server action of fetching movies from the database, and using infinite scrolling to create a captivating UI.',
        challenges: 'The concept of a server action was astonishing and confusing at the same time, and not to mention how I keep forgetting the difference between server actions and server components. ',
        learning: 'Learning server actions is indeed a game-changer, especially for fetching data through RESTful APIs, as it abstracts away the need to write a route ourselves. It is useful when we want to run a server-side code on the client. such as fetching data from our back-end directly in a client component. It also allows for faster page loads, as the code is run on the server. Overall, this project was more of enhancing the UX of a website, delving into the realm of when to use Client Components, Server Components and Server Actions. '
    },
    {
        title: "Todo App",
        techStack: "Next.js | MongoDB | RESTful APIs",
        img: "../../todo.png",
        date: "Wednesday, July 5, 2023",
        demo: '',
        objectives: 'For this project, I wanted to tinker with creating RESTful APIs, to accomplish CRUD operations for my todo app. Moreover, I wanted to venture into using TailwindCSS, instead of the standard CSS, or BootStrap.',
        challenges: 'This project posed several challenges, from learning RESTful APIs itself, to learning about MongoDB and Mongoose. All of them new forign to me, and it was hard to figure out how to connect the back end to the front end, and how to create APIs which can get, edit, and delete data from the database. One major challenge was on how I could update the database when the user checked the checkbox as completed. It was easy to implement the front-end, but in order to make that data persist, I had to incorporate state management, and calls to APIs to ensure that the data is saved in the database. Learning how to use tailwind was confusing at first, due to its utility classes, although some were relatively straight forward.',
        learning: 'In hindsight, while the UI is rather simplistic, I enjoyed the process of building this project. Not only is it practical, but it was a good platform for me to practice creating my own APIs and learning how to integrate MongoDB into the project. Leveraging the power of Tailwind was incredible as I no longer need to think of class names, and everthing was simplified, it truly elevated my front-end game. Overall, this project helped me to set the foundation of APIs, as I transitioned to learning more about using the ExpressJS framework.'
    },
    {
        title: "Weather World",
        techStack: "React | APIs",
        img: "../../weatherWorld.png",
        date: "Thursday, June 08, 2023",
        demo: 'https://weather-world.vercel.app',
        objectives: 'My aim for this project was to incorporate public APIs into the project before moving on to creating my own RESTful APIs. Having learnt React recently as well, I wanted to get familiar with its features through building the app.',
        challenges: 'As it was my first time writing JSX, I was still unfamiliar with the overall idea of building resusable components or just components in general. However, I would not say the learning curve is very steep. Through this project, I got to experiment with state managment and using APIs in JavaScript. ',
        learning: 'Overall, this project gave me the opportunity to consolidate what I have learnt about React and its idea of using JSX. It is definitely different from plain vanilla JavaScript, and much easier to write templated HTML code with JSX. I quite enjoy using React as a front-end framework, and may delve into its competiions like Vue or Angular in the future.'
    },
    {
        title: "DanceSync",
        techStack: "Django | Databases | Auth",
        img: "../../dance.png",
        date: "Tuesday, May 23, 2023",
        demo: 'https://youtu.be/f32HosNvlMo',
        objectives: "As part of CS50W, a course provided by Havard University, final project, I was tasked to use what I have learnt in Django to build a complex website. For this project, I challeneged myself to use Django to strengthen my understanding of Django's MVT template as well as JavaScript Asynchronous Operations.",
        challenges: 'As I wanted to incorporate the use of Async Operations in Django, I had to figure out how to change the UI as well as the data in the database itself to ensure that the data persists. The concept of async was relatively new to me, so I spent quite some time tinking with it before managing to incorporate it into the project. One of the more notable difficulties faced was the management of relational database, and related models.',
        learning: "Overall, this project solidified my understanding of Django. It was surely a step up from Flask due to its in-built database management system and the admin UI, which allowed for easy manipulation of the data for testing. I managed to better understand the concept of relational databases, through the use of Foreign Keys, One-to-many relationships,  and how we can use them to acheive 'Seperation of Concerns'. "
    },
]