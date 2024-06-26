export const projects = [
    {
        title: "Eat Where",
        techStack: "Vue.js | Express.js",
        img: "../../eatWhere.png",
        date: "Tuesday, May 7, 2024",
        demo: 'https://eat-where-ah.vercel.app',
        objectives: "My partner and I always can't seem to decide what to eat. Hence, this project came as an inspiration to build something for the indecisive Singaporeans.",
        challenges: 'This project was more complex compared to the other two below. I had to find a way to get the registered restuarants in SG, which after sourcing awhile, I landed on the Yelp API. I also had to use the Geolocation API to get the location of users. This meant that I needed a back-end to handle the incoming requests. Moreover, due to needing multiple pages but still retaining its nature as a SPA, I had to introduce conditionals to manipulate the DOM to render the correct UI. I also wanted to provide a loading skeleton for a better UX. Lastly, I added accesibility best practices to make the app more holistic.',
        learning: "Seeing the completed project felt rewarding! I felt like I have levelled up my understading of Vue in terms of not only using it to build simple SPA, but also to incorporate a back-end using Express, culminating into a full-stack application. There are other features that could be expanded on this project, such as filtering. However, noting that the project is bounded by the options provided by the Yelp API, not all restuarants would be provided by the web app, but it is a good start. I look forward to more options listed on Yelp!"
    },
    {
        title: "What Todo",
        techStack: "Vue.js | Tailwind",
        img: "../../vuetodo.png",
        date: "Monday, April 15, 2024",
        demo: 'https://whattodoah.vercel.app',
        objectives: "This project was an extension to the Expense Tracker to consolidate my knowledge on Vue. I also wanted to create something that was practical and at the same time conceptually simple.",
        challenges: 'The main challenge to this project was the styling. I wanted the options to show different colours and not the default. However, such options were not stylable, and I had to improvise. Unlike other todo apps where there may be a specific page to edit todos, mine uses input boxes to edit and create todos. That itself posed challenges in getting the data to persist.',
        learning: "This project allowed me to reinforce my understanding of State Management, Data binding and CRUD Operations in Vue."
    },
    {
        title: "Expense Tracker",
        techStack: "Vue.js",
        img: "../../expense.png",
        date: "Friday, April 12, 2024",
        demo: 'https://kc-expense-tracker.vercel.app',
        objectives: "The concept of this project was simple as it served as a first touchpoint for Vue.js. I wanted to expand my knowledge on other front-end technologies and see how they compare to React.js",
        challenges: 'When I first learnt Vue, I got exposed to the options API. However, I soon realised that there was also a composition API. At the start, I was confused between the two, as the tutorial taught me the options version, but when I consulted the documentation, most of them worked with the Composition API. This led to a slower development process, and also time spent trying to understand the concepts of ref, reactive, and emit. These are important to declare at the start of any variable, if we require them to mutate or be reactive.',
        learning: "This project gave me a solid understanding of the basics of Vue. In hindsight, the composition API does provide a more declarative way of writing code which I prefer, and it reduces the boilerplate code needed, especially with the Script SetUp. In terms of concepts, the use of defineProps and components were not foreign to me, but I did learn that directives powers Vue's reactivity. In learning basic Directives like v-on, v-for, v-if, v-model, I managed to built an app that was reactive and able to conditionally render data. I also learnt more about Attribute, Class and Style Binding, which allows for reactivity. Moreover, Vue has a unique way of passing data from child components to parents via Emits/Custom Events, which was refreshing to learn. Lastly, I added Toast Notifications, as well as Local Storage to provide a better UX."
    },
    {
        title: "Travel Tracker",
        techStack: "Express | EJS | PostgreSQL",
        img: "../../travel.png",
        date: "Sunday, March 31, 2024",
        demo: 'https://youtu.be/1nba58JYGAw',
        objectives: "The objectives of this project was to familiarise myself with using Express, EJS and Postgres. While I have tinkered with Express before, I mainly used it as a backend to complement my React Apps, rather than EJS to render web pages. I thought that it was worth a try to understand how EJS works through an interesting project that allows users to track the countries they have been to.",
        challenges: 'At the start, the EJS templates were quite confusing as they looked quite cryptic, such as <%= %>, or <% %>. However, it got better as I got used to it, and I realised the concept is similar to the Django framework, where we pass in extra arguments to the res.render(), and it will be reflected onto the client side. The main challenge I had was when it came to using loops on the client side, because EJS requires us to put the <% %> syntax or equivalent for every line of server side code, which was not very intuitive, as I would normally wrap the whole loop in the syntax.',
        learning: "Overall, this project was a fun and simple one to build. I now have a better understanding of the templating language used by EJS, partials, and what they mean. Building this project also gave me a refresher of vanilla JS, reminding me of how things are abit more complicated to achieve with it, and all the powerful abstractions given to me whenever I use React or Next. Working with Postgres was not too difficult, I used the node-postgres package to create a client and connect the backend to my database. Being an SQL DB, the queries used were largely similar to the ones I already know."

    },
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