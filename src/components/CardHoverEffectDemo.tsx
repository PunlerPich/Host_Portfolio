import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 pt-28">
      <div className=" space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-black dark:text-white">
          Skills & Expertise
        </h1>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const projects = [
  {
    title: "Java",
    description:
      "I have a lot of experiences with Java,and I work a lot with java framwork Spring Boot to CRUD API, and I also understanding micro service concept. ",
    link: "https://www.java.com/en/",
  },
  {
    title: "Python",
    description:
      "Python one of favorite backend language it easy and fast, I did't use it much on work I used it when I do personal project specially with ai and also work with python framwork Django.",
    link: "https://www.python.org/",
  },
  {
    title: "PHP",
    description:
      "It my first start backend language. I use it a lot when I stated my career as backend ",
    link: "https://www.php.net/",
  },
  {
    title: "Node JS",
    description:
      " Node.js is pretty impressive! It's a powerful runtime environment that allows developers to run JavaScript code on the server side. ",
    link: "https://nodejs.org/en",
  },
  {
    title: "React Js",
    description:
      "React.js is another fantastic technology in the realm of web development! It's a JavaScript library for building user interfaces, developed by Facebook. React.js is known for its component-based architecture, which promotes modular, reusable, and maintainable code.",
    link: "https://react.dev/",
  },
  {
    title: "NEXT Js",
    description:
      " Next.js simplifies the process of setting up server-side rendering, routing, and other complex tasks, allowing developers to focus more on building features rather than configuring infrastructure.",
    link: "https://nextjs.org/",
  },
  {
    title: "HTML and CSS",
    description:
      "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript",
    link: "https://nextjs.org/",
  },
  {
    title: "My SQL",
    description:
      "MySQL is an open-source relational database management system. Its name is a combination of , the name of co-founder Michael Widenius's daughter My, and , the acronym for Structured Query Language.",
    link: "https://www.mysql.com/",
  },
  {
    title: "SQL",
    description:
      "Structured query language (SQL) is a programming language for storing and processing information in a relational database. A relational database stores information in tabular form, with rows and columns representing different data attributes and the various relationships between the data values",
    link: "https://amazon.com",
  },
  {
    title: "BlogChain",
    description:
      "Be early to the future of finance · The only crypto wallet you'll ever need · Lightning-fast crypto trading · High-touch crypto solutions for institutions.",
    link: "https://www.blockchain.com/",
  },
  {
    title: "Git & GitHUB",
    description:
      "GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project",
    link: "https://git-scm.com/",
  },
  {
    title: "Docker",
    description:
      "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.",
    link: "https://www.docker.com/",
  },
];
