
import profile from './profile.jpeg';
import { faAppStore, faGithub, faGooglePlay, faChrome } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Kin Ishii",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Kin Ishii",
  description: "A passionate about programming",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "#",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "As a professional, I am committed to continuous improvement in the areas of web development. I demonstrate a passion and ability to quickly assimilate new knowledge, keeping myself constantly updated according to market demands. Graduating in software engineering at Descomplica and a bootcamp called Trybe. I have experience in Node.js, Reactjs, and MongoDB. Looking for work in any programming field.",
  ],
}

export const work = {
  title: "What I can do",
  cards: [
    {
      title: "Frontend Development",
      description: "I create responsive and dinamic websites using Reactjs. Good knowledge of Redux, Context API, and other state management libraries. Can write unit tests and integration tests using Jest and React Testing Library. Actually learning about web performance, SEO, Angular and next.js.",
      icons: null,
    },
    {
      title: "Backend Development",
      description: "I have experience in creating RESTful APIs using Node.js and Express. I have also worked with MongoDB and Mongoose for database management. Sequelize for SQL databases. Good knowledge of JWT and TypeScript. Can write unit tests and integration tests using Mocha, Chai and Sinon. Actually learning about Java Spring Boot, design patterns and microservices.",
      icons: null,
    },
    {
      title: "UI/UX Design",
      description: "I have a good understanding of UI/UX design principles and tools like Figma. I can create wireframes, mockups, and prototypes for web applications. I also have experience in creating responsive designs using CSS frameworks like Bootstrap and tailwindcss and styled-components. Actually learning about design systems and web accessibility.",
      icons: null,
    },
    {
      title: "Database Management",
      description: "I have experience in creating and managing databases using MongoDB and Mongoose. I have also worked with SQL databases using Sequelize. I have a good understanding of database design and normalization. Good understanding in UML and ERD diagrams. Can write queries and build relationships between tables. Actually learning python, data structures and algorithms.",
      icons: null,
    },
    {
      title: "DevOps and Deployment",
      description: "I have a good understanding of Docker and kubernetes. I can also configure and manage servers using Nginx. Good understanding in linux and bash commands, newtworking and security. Actually learning about AWS, GCP, CI/CD pipelines and monitoring tools.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Recipe app",
      description: "A recipe app developed using React.js. A project from Trybe bootcamp. The app was created only for mobile devices.",
      icons: [
        {
          icon: faChrome,
          link: "https://recipe-app-trybe.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/kinishii1/recipe-app-trybe",
        },
      ]
    },
    {
      title: "Registration form for Trybe",
      description: "A registration form developed using React.js. A project from Trybe bootcamp.",
      icons: [
        {
          icon: faChrome,
          link: "https://project-registration-form-trybe.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/kinishii1/project-registration-form-trybe",
        },

      ]
    },
    {
      title: "Solar System",
      description: "A solar system developed using React.js. A project from Trybe bootcamp.",
      icons: [
        {
          icon: faChrome,
          link: "https://project-solar-system-trybe.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/kinishii1/project-solar-system-trybe",
        },
      ]
    },
    {
      title: "Trybe Twitter",
      description: "A twitter clone developed using React.js. A project from Trybe bootcamp.",
      icons: [
        {
          icon: faChrome,
          link: "https://project-twitter-clone-trybe.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/kinishii1/project-solar-system-trybe",
        },
      ]
    },
    {
      title: "Frontend Online Store",
      description: "An online store developed using React.js and the mercadolibre API. A project from Trybe bootcamp.",
      icons: [
        {
          icon: faChrome,
          link: "https://front-end-online-store-trybe.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/kinishii1/front-end-online-store-trybe",
        },
      ]
    },
    {
      title: "Talker Manager",
      description: "A talker manager developed using Node.js. A project from Trybe bootcamp. An rest API to manage speakers and talks.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/kinishii1/talker-manager-trybe",
        },
      ]
    },
    {
      title: "Store Manager",
      description: "A store manager developed using Node.js. A project from Trybe bootcamp. An rest API to manage products and sales.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/kinishii1/store-manager-trybe",
        },
      ]
    },
    {
      title: "Blog API",
      description: "A blog API developed using Node.js. A project from Trybe bootcamp. An rest API to manage articles and authors.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/kinishii1/blog-api-trybe",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "My contact information is below. Feel free to reach out to me via email (kinmiyajiishii@hotmail.com) or LinkedIn. I will get back to you as soon as possible.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:kinmiyajiiishii@hotmail.com",
      isPrimary: true,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/kinishii/",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  title: "Kin Ishii | Web Developer | Node.js | Reactjs | MongoDB",
  description: "I am a web developer with experience in Node.js, Reactjs, and MongoDB. Actually, graduating in software engineering at Descomplica.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@kinishiii",
  description: "Web Developer | Node.js | Reactjs | MongoDB",
  cards: [
    {
      title: "My website",
      link: "#",
    },
    {
      title: "My GitHub",
      link: "https://github.com/kinishii1/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/kinishii/",
    },
    {
      title: "My Resume",
      link: "#",
    },
  ]
}