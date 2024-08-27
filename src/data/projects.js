import images from '../img/images';

const projects = [
    {
        "liveurl": "https://souptik-golds-gym.netlify.app/",
        "githuburl": "https://github.com/SouptikDatta/golds-gym-react-fitness",
        "title": "Golds Gym",
        "image": {
            "public_id": "1706285511679-xe7r9t",
            "url": images.Goldsgym,
        },
        "description": "A Fitness App, offering exercise category selection, muscle group filtering over 1,000+ exercises with practical examples, YouTube video integration and 3+ similar exercise recommendations",
        "techStack": ["Reactjs ", " Material UI ", " CSS", " Rapid API"],
        "features": [
            { "feature": "Exercise Category Selection", "image": images.Feature1 },
            { "feature": "Muscle Group Filtering", "image": images.Feature2 },
            { "feature": "YouTube Video Integration", "image": images.Feature3 },
            { "feature": "Similar Exercise Recommendations", "image": images.Feature4 }
        ]
    },
    {
        "liveurl": "https://tasty-eats.vercel.app/",
        "githuburl": "https://github.com/SouptikDatta/TastyEats",
        "title": "TastyEats",
        "image": {
            "public_id": "1706285468702-igx05q",
            "url": images.TastyEats,
        },
        "description": "An end-to-end restaurant site with advanced admin dashboard and it offers 100+ items of 6 menu categories, online food order tracking, stripe payment gateway, ratings & feedback, contact support.",
        "techStack": ["React JS ", " Node JS ", " MongoDB", " Tailwind CSS", " Daisy UI", " Stripe"],
        "features": [
            { "feature": "A visually appealing fully functional modern animated Restaurant site", "image": images.TETestimonials },
            { "feature": "Secure authentication system using Firebase and utilize JWT access tokens to specific user roles", "image": images.TELogin },
            { "feature": "Filter accross 6 Item categories , pagination for 100+ dishes", "image": images.TECategories },
            { "feature": "All Cart functionalities including add, delete items and auto calulated order quantity and price", "image": images.TECartPage },
            { "feature": "Store and Removal of Favorite items seperately for quick access", "image": images.TEFavorite },
            { "feature": "Secured Stripe Payment Gateway with various payment options while placing order", "image": images.TEPayment },
            { "feature": "Online food order tracking with Ratings & Feedback section for customers on completed orders", "image": images.TERatings },
            { "feature": "World's top most cuisines which are available to order are listed on a stunning image slideshow", "image": images.TECuisines },
            { "feature": "Detailed animated About Page with vision and timelines about the development, launching phase of the website", "image": images.TEAbout },
            { "feature": "Admin only access Advanced feature rich Dashboard ensuring data security and preventing unauthorized access", "image": images.TEDashboard },
            { "feature": "Provide administrators with the ability to upload new menu items, update uploaded items", "image": images.TEManageItems },
            { "feature": "Admins can also view, confirm or delete orders based on transaction id", "image": images.TEManageUsers },
            { "feature": "Frequently asked Questions listed in accodion for help of the customers", "image": images.TEFaq },
            { "feature": "Customer support via Emails and impressive contact page", "image": images.TEContactPage },
            { "feature": "Stunning Footer UI including Naviagation links, contact informations and copyright notice", "image": images.TEFooter },
        ]
    },
    {
        "liveurl": "https://socialoo-suchi-soup.netlify.app/",
        "githuburl": "https://github.com/SouptikDatta/Socialoo",
        "title": "Socialoo",
        "image": {
            "public_id": "1706285431821-3lfg2r",
            "url": images.Socialoo,
        },
        "description": "A Visually appealing and user-friendly interface of a social media website with beautiful profile page.",
        "techStack": ["React JS ", " SCSS"],
        "features": [
            { "feature": "Beautiful Profile Page", "image": images.Feature1 },
            { "feature": "User-Friendly Interface", "image": images.Feature2 },
            { "feature": "Social Sharing", "image": images.Feature3 }
        ]
    },
    {
        "liveurl": "https://suchi-soup-homyz-app.netlify.app/",
        "githuburl": "https://github.com/SouptikDatta/Homyz-app",
        "title": "Homyz",
        "image": {
            "public_id": "1706285416017-wra7swm",
            "url": images.Homyz,
        },
        "description": "An awesome real estate website built with modern CSS, framer-motion, mantine UI and many more.",
        "techStack": ["React JS ", " Tanstack Query ", " CSS"],
        "features": [
            { "feature": "Modern CSS Design", "image": images.Feature1 },
            { "feature": "Interactive Animations", "image": images.Feature2 },
            { "feature": "Responsive Layout", "image": images.Feature3 }
        ]
    },
    {
        "liveurl": "https://souptik-catalix.netlify.app/",
        "githuburl": "https://github.com/SouptikDatta/catalix-admin-assignment",
        "title": "Catalix",
        "image": {
            "public_id": "1706285405228-98liol",
            "url": images.Catalix,
        },
        "description": "A visually appealing dashboard with multiple graphical analysis tools",
        "techStack": ["Reactjs ", " Material UI", " Ant Design"],
        "features": [
            { "feature": "Graphical Analysis Tools", "image": images.Feature1 },
            { "feature": "Customizable Dashboards", "image": images.Feature2 },
            { "feature": "Real-Time Data", "image": images.Feature3 }
        ]
    },
]

export default projects;
