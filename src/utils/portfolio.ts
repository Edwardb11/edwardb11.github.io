import { StringKeyValueType } from '../types';
import {
  AboutSectionType,
  ContactSectionType,
  EducationSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  facebook: 'https://www.facebook.com/EdwardBritoDiaz/',
  instagram: 'https://www.instagram.com/brito_edward11/',
  twitter: 'https://twitter.com/brito_edward11',
  github: 'https://github.com/Edwardb11',
  linkedin: 'https://www.linkedin.com/in/edwardb11/',
};

export const author = {
  name: 'Edward Brito',
  email: 'edwardbrito11@hotmail.com',
};

export const seoData = {
  title: 'Edward Brito | Full-Stack Developer',
  description:
    'Edward Brito is a Full-Stack developer who specializes in building complete Frontend and Backend applications.',
  author: author.name,
  image: '',
  url: 'https://edwardb11-github-io.vercel.app/',
  keywords: [
    'Edward',
    'Edward Brito',
    '@brito_edward11',
    'edwardbrito',
    'Portfolio',
    'Edward Portfolio ',
    'Edward Brito Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Edward Brito.',
  tagline: 'I create visually pleasing interfaces for the web.',
  description:
    'I am a Full-Stack web developer having experience in web applications with React.js and Next.js with TypeScript and TailwindCSS and Next.Js and ExpressJs.',
  // specialText: 'Currently available for remote job & freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'ReactJs',
      'NextJs',
      'TailwindCSS',
      'ExpressJs',
      'NestJs',
      'TypeScript',
      'PostgreSQL',
      'AppSheet',
    ],
  },
  img: '/edward-brito.jpeg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express and NestJs',
      ],
      softwareSkills: [
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'mysql', icon: 'vscode-icons:file-type-mysql' },
        { name: 'nestjs', icon: 'vscode-icons:file-type-nestjs' },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Intellisys D. Corp.',
      companyUrl:
        'https://www.linkedin.com/company/intellisys-d--corp-/mycompany/',
      role: 'Full-Stack Developer',
      started: 'august 2021',
      upto: 'present',
      tasks: [
        'I worked on the development of the telemedicine website TuHospital.do',
        'Develop API with NestJs, Graphql Postgres and TypeScript. ',
        'Collaborated with diverse  team of developers.',
      ],
    },
  ],
};

export const educationSection: EducationSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'SHMTH Capital',
      companyUrl: 'https://www.linkedin.com/company/shmth-capital/about/',
      role: 'frontend developer intern',
      started: 'april 2023',
      upto: 'july 2023',
      tasks: [
        'Built trading platform using TradingView library.',
        'Designed SHMTH Capital website with Next.js, TypeScript & TailwindCSS.',
        'Collaborated with diverse nationwide team of developers.',
      ],
    },
    {
      company: 'webnetics',
      companyUrl: 'https://webnetic.vercel.app/',
      role: 'frontend developer',
      started: 'june 2022',
      upto: 'january 2023',
      tasks: [
        'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
        'Architected the folder structure and initial setup of the app.',
        'Reviewed and approved multiple Pull requests.',
        'Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing.',
      ],
    },
    {
      company: 'Kronos',
      companyUrl: 'https://kronos-sscbs-21.github.io/proj-kronos-site/',
      role: 'designer & developer',
      started: 'january 2021',
      upto: 'june 2021',
      tasks: [
        'Designed social media posts.',
        'Worked remotely with designing & tech team.',
      ],
    },
  ],
};
// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Package Tracking System',
      url: 'https://package-tracking-frontend.vercel.app',
      repo: 'https://github.com/Edwardb11/package-tracking-frontend',
      img: '/projects/tracking.png',
      year: 2022,
      tags: ['React', 'TailiwndCSS', 'ExpressJs', 'MySQL'],
    },
    {
      id: getId(),
      name: 'Tic Calculator',
      url: 'https://tip-calculator-app1-b6c66mx91-edwardb11.vercel.app/',
      repo: 'https://github.com/Edwardb11/Tip-calculator-app',
      img: '/projects/tic-calculator.jpg',
      year: 2022,
      tags: ['React', 'TailwindCSS', ],
    },
    {
      id: getId(),
      name: 'Phrase Generator',
      url: 'https://advice-generator-app-ju49kz11a-edwardb11.vercel.app/',
      repo: 'https://github.com/Edwardb11/advice-generator-app',
      img: '/projects/advice.png',
      year: 2022,
      tags: ['React', 'CSS', ],
    },
    {
      id: getId(),
      name: 'Checkers',
      url: 'https://github.com/Edwardb11/Checkers',
      repo: 'https://github.com/Edwardb11/Checkers',
      img: '/projects/game.png',
      year: 2021,
      tags: ['Python', 'TKinter', ],
    },
    {
      id: getId(),
      name: 'Task App',
      url: 'https://mean-stack-frontend-3r720kjax-edwardb11.vercel.app/auth',
      repo: 'https://github.com/Edwardb11/mean-stack-frontend',
      img: '/projects/meanStack.png',
      year: 2022,
      tags: ['Mongo', 'Express','Angular', 'Node' ],
    },
    {
      id: getId(),
      name: 'To Do List ',
      url: 'https://github.com/Edwardb11/php/tree/to-do-list',
      repo: 'https://github.com/Edwardb11/php/tree/to-do-list',
      img: '/projects/todolist.png',
      year: 2021,
      tags: ['Php', 'Bulma','Mysql' ],
    },
    {
      id: getId(),
      name: 'Dental appointments',
      url: 'https://github.com/Edwardb11/sistema_de_cita_odontologica',
      repo: 'https://github.com/Edwardb11/sistema_de_cita_odontologica',
      img: '/projects/odontologica.png',
      year: 2021,
      tags: ['Php', 'Bootstrap','Mysql' ],
    },
    {
      id: getId(),
      name: 'Simple task List',
      url: 'https://tasks-e9r5lzolb-edwardb11.vercel.app/',
      repo: 'https://github.com/Edwardb11/learning-angular',
      img: '/projects/task.png',
      year: 2022,
      tags: ['Angular', 'Bootstrap', ],
    },
    {
      id: getId(),
      name: 'Budget',
      url: 'https://github.com/Edwardb11/app-presupuesto-js',
      repo: 'https://github.com/Edwardb11/app-presupuesto-js',
      img: '/projects/app-presupuesto.png',
      year: 2021,
      tags: ['Angular', 'Bootstrap', ],
    },
    {
      id: getId(),
      name: 'Blog',
      url: 'https://build-a-blog-project-bkjrvivau-edwardb11.vercel.app/',
      repo: 'https://github.com/Edwardb11/blog-project-front',
      img: '/projects/blog.png',
      year: 2022,
      tags: ['React', 'TailwindCSS','ExpressJs' ],
    },

  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    // 'I’m currently looking for a remote job or any new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'lucide:facebook',
      url: socialLinks.facebook,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Made with ☕ and ❤️ by Edwardb11',
  link: 'https://github.com/Edwardb11/edwardb11.github.io',
};
