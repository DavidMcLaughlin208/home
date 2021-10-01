// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "David",
  middleName: "",
  lastName: "McLaughlin",
  message: " Passionate about solving complex problems through collaboration and creative solutions ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/davidmclaughlin208",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/davidmclaughlin208",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/DavidMcLaughlinPhoto.png"),
  imageSize: 375,
  message:
  "My name is David McLaughlin. I'm a software developer who loves to solve challenging problems through collaboration and creative solutions. After getting a BA in Accounting and working for a year I discovered the art of programming. I pursued this new passion by attending DevBootcamp and then working for Amazon for 4 years as a Support Engineer and Software Developer. I was able to expand my skillset as well as my grasp of all the aspects of the software development job and lifecycle. In my free time I like to work on coding various simulations with a visual component as well as writing and recording music.",
  resume: "https://docs.google.com/document/d/1vmRRFo4rxQim8WvidcGFb5CGU_V8Y7CVaP29mY8q6vk/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Notable Projects",
  gitHubUsername: "davidmclaughlin208", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["PixelSorting", "SlimeMoldPhysarum", "FallingSandJava"],
  gifs: {"PixelSorting": require("../editable-stuff/PixelSorting.gif"), "SlimeMoldPhysarum": require("../editable-stuff/SlimeMoldPhysarum.gif"), "FallingSandJava": require("../editable-stuff/FallingSandJava.gif")}
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/DavidMcLaughlin.JPG"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/DavidMcLaughlin.JPG"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C++", value: 55 },
    { name: "Python", value: 65 },
    { name: "Angular", value: 75 },
    { name: "HTML/CSS", value: 60 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "davidmclaughlin208@gmail.com",
};

const techExperiences = {
  show: true,
  heading: "Technical Mastery",
  data : [
    {
      heading: "Java/Spring, JUnit/Mockito",
      subHeading: "3 years professional experience + personal projects",
      img: require("../editable-stuff/java.png"), 
      content: "I worked primarily with Java on my team at Amazon. Our SpringBoot application made extensive use of multithreading and synchronization which has given me a developed understanding of the care required to make a comprehensive parellel system. I also wrote CRUD APIs within the framework and contributed to the comprehensive unit, integration, and UI testing suite we had developed."      
    },
    {
      heading: "JavaScript, Angular, Bootstrap",
      subHeading: "3 years professional experience",
      img: require("../editable-stuff/javascript.png"), 
      content: "My Amazon team had a UI component to our service which was powered by JS and AngularJS. When I first started on the team I worked primarily on the UI, making improvements and enhancements, using AngularJS and Bootstrap, which I identified based on client feedback. After gaining more expertise I built multiple dynamic UI pages from scratch to connect with backend APIs I was developing. This has given me a good understanding of reactive UI frameworks."
    },
    {
      heading: "Shell Scripting",
      subHeading: "2 years professional experience",
      img: require("../editable-stuff/bash.png"), 
      content: "In my time at Amazon I identified multiple processes which could be automated and streamlined by writing a shell script for use by the team. Most notable example was a comprehensive script to fetch host names for a fleet, run a log fetching command in parallel for all hosts, used 'sed' and 'awk' to parse the logs, and displayed all WARN/ERROR logs which occurred after the latest deployment in order of count and frequency. This helped us identify any deployment related issues with increased speed."
    },
    {
      heading: "Linux/Unix Development",
      subHeading: "3 years professional experience",
      img: require("../editable-stuff/linux.png"), 
      content: "Professionally, I developed on a combination of a physical MacBook and a cloud-desktop running Linux. This has helped me become familiar with navigating Linux by command line as well as managing terminal sessions, managing processes, setting up custom cron jobs, and monitoring network traffic."
    },
    {
      heading: "AWS Services",
      subHeading: "3 years professional experience",
      img: require("../editable-stuff/aws.png"), 
      content: "In my three years of software development experience I was able to work with a variety of AWS services. The services I worked with in order of experience level are: DynamoDB, SQS, Lambda, DataPipelines, CloudFormation, EC2, and ECS"
    },
    {
      heading: "C++, OpenFrameworks",
      subHeading: "1 year of personal projects",
      img: require("../editable-stuff/cpp.png"), 
      content: "I wanted to expand my scope of mastered languages and in the past year have completed multiple personal projects using c++ as the primary language. Learning to use this language has improved my understanding of datatypes, agorithms, and memory management. Two of the listed projects below were written with c++."
    }
    
  ]
}

const experiences = {
  show: true,
  heading: "Job Experience",
  data: [
    {
      role: 'Support Engineer III - Amazon, Inc',
      companylogo: require('../assets/img/AmazonLogo.jpeg'),
      date: 'June 2017 – November 2018',
      time: "1 year, 4 months"
    },
    {
      role: 'Software Development Engineer I - Amazon, Inc',
      companylogo: require('../assets/img/AmazonLogo.jpeg'),
      date: 'November 2018 – December 2020',
      time: "2 years, 1 month"
    },
    {
      role: 'Software Development Engineer II - Amazon, Inc',// Here Add Company Name
      companylogo: require('../assets/img/AmazonLogo.jpeg'),
      date: 'December 2020 – April 2021',
      time: "5 months"
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, techExperiences };
