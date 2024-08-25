import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    AlphaRig,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Wanderlust,
    Libraria,
    College,
    cpp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competitive Coder",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "C++",
      icon: cpp,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company_name: "Alpha Rig Private Limited",
      icon: AlphaRig,
      iconBg: "#383E56",
      date: "October 2023 - December 2023",
      points: [
        "Developed and optimized user interfaces (UIs) for numerous net packages, improving consumer experience and overall performance.",
        "Implemented internet site optimization techniques to enhance loading instances and overall website overall performance.",
        "Designed and incorporated responsive login/signup pages the use of modern the front-cease technologies.",
        "Created interactive loading pages to enhance the user experience for the duration of content material retrieval.",
        "Collaborated with cross-practical groups to make certain seamless integration of the front-stop and again-end components.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Pursuing my Masters of Computer Application with a specialization in AIML at LNCT University.",
      name: "LNCT University",
      designation: "Degree: Masters of Computer Application (AIML)",
      company: "CGPA: 9.03 | Year: 2023-present",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Completed my Bachelor of Science at St. Aloysius (Auto.) College.",
      name: "St. Aloysius (Auto.) College",
      designation: "Degree: Bachelor of Science (cs-phy)",
      company: "Percentage: 74.6 | Year: 2019-22",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Completed my Higher Studies at Blossoming Flower Eng. Meg. Hr. Sec. School.",
      name: "Blossoming Flower H. S. School",
      designation: "Intermediate/+2",
      company: "Percentage: 72.4 | Year: 2018-19",
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Wanderlust",
      description:
        "Developed a full-stack Airbnb clone with user authentication, dynamic property listings, and review system using Node.js, Express, EJS, and MongoDB. Implemented robust error handling and validation for enhanced user experience.",
      tags: [
        {
          name: " Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express | EJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: Wanderlust,
      source_code_link: "https://github.com/sonianurag02/Major-Project-Wanderlust.git",
    },
    {
      name: "Libraria",
      description:
        "Created an online library management system with student registration, book request, real-time chat, and admin interface using PHP, MySQL, HTML, CSS, and JavaScript. Ensured secure data handling and efficient library operations.",
      tags: [
        {
          name: "HTML | CSS | JS",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
      ],
      image: Libraria,
      source_code_link: "https://github.com/sonianurag02/Libraria.git",
    },
    {
      name: "University Website",
      description:
        "Developed a college website featuring About, Blog, Contact, and Course sections using HTML, CSS, and JavaScript. Designed for clear navigation and an engaging user experience.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: College,
      source_code_link: "https://github.com/sonianurag02/College-Website/tree/main/COLLEGE%20WEBSITE",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };