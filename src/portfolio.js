const header = {
  homepage: "#",
  title: "AV.",
};

const about = {
  name: "Alexandru Visan",
  role: "Front End Developer",
  description:
    "I love working on web projects and creating beautiful user interfaces. I strive to create an intuitive and enjoyable experience for users, while also keeping the code clean and organized. I'm currently focusing on front-end development, and love using new technologies and frameworks to create interactive websites. When I'm not coding, I like to spend time with my family and friends.",
  resume: "file:///public/resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/visan-alexandru/",
    github: "https://github.com/alexandruvisan19",
    codewars: "https://www.codewars.com/users/Karagk19",
  },
};

const projects = [
  {
    name: "Affiliate Website",
    description:
      "Website built for the purpose of ranking on Google through SEO.",
    stack: ["NextJs", "GraphQL", "SASS", "Wordpress"],
    sourceCode: "https://github.com/alexandruvisan19/thecrittercove-cms-nextjs",
    livePreview: "https://www.thecrittercove.com/",
  },
  {
    name: "Excel Table Formatter",
    description:
      "A tool built using react to be able to format a table in a specific way.",
    stack: ["React", "Firebase", "XLSX"],
    sourceCode:
      "https://github.com/alexandruvisan19/react-table-formatter/blob/master/README.md",
    livePreview: "https://table-formatter.web.app/",
  },
  {
    name: "Bug Tracker",
    description: "A tool that can keep track of different issues using CRUD",
    stack: ["React", "Firebase", "React Router"],
    sourceCode: "https://github.com/alexandruvisan19/bug-tracker",
    livePreview: "https://boisterous-tarsier-2238e7.netlify.app/",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "NextJs",
  "SASS",
  "Node",
  "Git",
  "SEO",
];

const contact = {
  email: "alexandruvisan1908@gmail.com",
};

export { header, about, projects, skills, contact };
