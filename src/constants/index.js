import {
    mobile,
    backend,
    creator,
    web,
    java,
    python,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    django,
    aws,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    socialapp,
    showtracker,
    VIsemproject,
    todo,
    tripguide,
    threejs,
    primaryGIF,
    secondary,
    graduation,
    linkedin,
    github_hero,
    instagram,
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
  
  const socials = [
    {
      title: "linkedin",
      icon: linkedin,
      social_link: "https://www.linkedin.com/in/archit-mahule-10893124a/",
    },
    {
      title: "instagram",
      icon: instagram,
      social_link: "https://instagram.com/arcc.hitt?igshid=ZDc4ODBmNjlmNQ==",
    },
    {
      title: "github",
      icon: github_hero,
      social_link: "https://github.com/arcc-hitt",
    },
  ];

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "django",
      icon: django,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "CSE Undergraduate",
      company_name: "Shri Ramdeobaba College of Engineering and Management, Nagpur",
      icon: graduation,
      iconBg: "#383E56",
      date: "2020 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    {
      title: "Secondary Education",
      company_name: "Dinanath High School and Junior College, Dhantoli, Nagpur",
      icon: secondary,
      iconBg: "#E6DEDD",
      date: "2018 - 2020",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Primary Education",
      company_name: "Modern School, Koradi Road, Nagpur",
      icon: primaryGIF,
      iconBg: "#383E56",
      date: "2008 - 2018",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },    
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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Social Media App",
      description:
        "Developed a cutting-edge Social Media App, showcasing functionalities like like, comment, and follow, while ensuring responsive design for optimal cross-device user experience.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        }
      ],
      image: socialapp,
      source_code_link: "https://github.com/arcc-hitt/Social-Media-App",
    },
    {
      name: "Show Tracker",
      description:
        "An Android app simplifying user tracking of web series/movies. Integrated search functionality & statistical features such as favorites, watch later, & watch history.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "xml",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        }
      ],
      image: showtracker,
      source_code_link: " https://github.com/arcc-hitt/ShowTracker",
    },
    {
      name: "Employment Of Biomedical Signals For Rehabilitation Equipments (VI Sem Project)",
      description:
        "EMG-based project to enhance rehab equipment control, deploying ML models like, SVM, Random Forest for precise gesture recognition. Designed an interactive demo.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: "gradio",
          color: "pink-text-gradient",
        },
      ],
      image: VIsemproject,
      source_code_link: "https://github.com/arcc-hitt/CodeClause-Internship/tree/main/ToDo-List",
    },
    {
      name: "To-Do List App",
      description:
        "An efficient To-Do List app with category selection - Business/Personal. Add, Modify, Delete functionalities, completion tracking, and local storage support.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javacript",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/arcc-hitt/CodeClause-Internship/tree/main/ToDo-List",
    },
  ];
  
  export { socials, services, technologies, experiences, testimonials, projects };