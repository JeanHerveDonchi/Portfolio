export const TEXT = {
    greeting: "Hi, I am",
    name: "Jean Herve Donchi",
    title: "Full-Stack Developer",
    aboutTitle: "About Me",
    aboutParagraph: `I am a passionate Full-Stack Developer with experience in building
          web and mobile applications. I love solving problems through code and
          constantly learning new technologies. With a strong foundation in
          JavaScript, React, and backend development, I strive to create
          efficient, scalable, and user-friendly applications. My journey into
          tech has been driven by curiosity and a desire to make an impact.`,
    aboutStack: "The following are tech stacks I use regularly:"
}

export const LINKS = {
    email: "mailto::donchiherve1@gmail.com",
    github: "https://github.com/JeanHerveDonchi",
    linkedIn: "https://www.linkedin.com/in/herve-donchi-b93b5b218/"
}

export const FOOTERLINKS = [
    { name: "Home", url: "#home", newPage: false },
    { name: "About", url: "#about", newPage: false },
    { name: "Projects", url: "#projects", newPage: false },
    { name: "Contact Me", url: "#contact", newPage: false },
    { name: "LinkedIn", url: LINKS.linkedIn, newPage: true },
    { name: "Email", url: LINKS.email, newPage: true },
    { name: "GitHub", url: LINKS.github, newPage: true }
]

export const EMAILJSCREDENTIALS = {
    emailServiceId: "service_xc7b5hk",
    templateId: "template_kfdzi3v",
    publicKey: "oYMz56yuLwd5BOEO2",
    emailName: "Jean Herve Donchi"
}

export const COLORS = {
    darkModeText: "#fff",
    lightModeText: "#26313F",
    primary: "blue",
    darkModeBodyBackground: "#1D1D1D",
    lightModeBodyBackground: "#fff",
    cardAndFormDarkThemeBackground: "#292c30",
    formLightThemeBackground: "#e6eced"
}

export const TECHSTACKS = [
    {icon: `${import.meta.env.BASE_URL}icons/angular.svg`, title: "Angular"},
    {icon: `${import.meta.env.BASE_URL}icons/dotnet.svg`, title: "Asp DotNet"},
    {icon: `${import.meta.env.BASE_URL}icons/js.svg`, title: "JavaScript"},
    {icon: `${import.meta.env.BASE_URL}icons/mongodb.svg`, title: "Mongo DB"},
    {icon: `${import.meta.env.BASE_URL}icons/nodejs.svg`, title: "Node JS"},
    {icon: `${import.meta.env.BASE_URL}icons/react.svg`, title: "React"},
    {icon: `${import.meta.env.BASE_URL}icons/spring_boot.svg`, title: "Spring Boot"},
    {icon: `${import.meta.env.BASE_URL}icons/sql.svg`, title: "SQL"},
    {icon: `${import.meta.env.BASE_URL}icons/tailwind.svg`, title: "TailWind"},
];

export const PROJECTLIST = [
    // {
    //     title: "Nutri-Scan Application",
    //     description: `A web-based application designed to help users make informed food
    //      choices by identifying high-quality food products and detecting potential allergens in purchased meals..`,
    //     image: "/images/placeholder.webp",
    //     videoLink: "",
    //     githubLink: "https://github.com/nbcc-wmad/ssw-project-2024-team-14",
    //     tags: ["ASP.NET", "Bootstrap", "SQL"]
    // },
    {
        title: "Restaurant Management System",
        description: `A web application built with Spring Boot and Bootstrap to manage a pop up restaurant operations.
         It follows the N-Tier architecture for server-side rendering and includes Spring authentication, authorization and Email.`,
        image: `${import.meta.env.BASE_URL}images/popup-restaurant.png`,
        videoLink: "https://drive.google.com/file/d/13B6deOMrLh89pUpoa34RUG36X0eofcro/view?usp=sharing",
        githubLink: "",
        tags: ["Spring Boot", "Bootstrap", "MySQL"]
    },
    {
        title: "Real Estate Management System",
        description: `A web application built with ASP.NET to manage a real estate company's operations.
         It follows the MVC architecture for server-side rendering and includes ASP.NET authentication and authorization.`,
        image: `${import.meta.env.BASE_URL}images/real_estate_site.png`,
        videoLink: "https://drive.google.com/file/d/1TDIwT1jZ8s3Dqoee7K5Rg8n20Sj2Gmcc/view?usp=sharing",
        githubLink: "",
        tags: ["ASP.NET", "Bootstrap", "SQL"]
    },
    {
        title: "Driving School Management System",
        description: `A WinForms application for managing a driving school's database,
         implementing various business rules and following the N-tier architecture with ORM.`,
         image: `${import.meta.env.BASE_URL}images/dsms.png`,
        videoLink: "https://drive.google.com/file/d/17etPDLB26wAUAVg_4n9GkzQtQdT0nycc/view?usp=sharing",
        githubLink: "https://github.com/JeanHerveDonchi/Driving_School_Management_System_Project",
        tags: ["WinForms", "SQL", "SSMS", "ADO.NET"]
    },
    {
        title: "Check-Games Card Game",
        description: "A comprehensive UNO-like card game for Windows, utilizing OOP to implement business rules.",
        image: `${import.meta.env.BASE_URL}images/check_games.png`,
        videoLink: "https://drive.google.com/file/d/1UcDazE-fviLLREc_-4LtdSqD4hlT8y_Q/view?usp=sharing",
        githubLink: "https://github.com/JeanHerveDonchi/card_game_project",
        tags: ["WinForms", "C#"]
    }
]
