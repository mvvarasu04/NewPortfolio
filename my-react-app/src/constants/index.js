import { cloud,
    ecommerce,
    software,
    web,
    uiux,
    mobile
 } from "../assets/images";
import {
     Css,
    Expressjs,
    Js,
    Html,
    MongoDB,
    Nodejs,
    Python,
    Reactjs,
    Sql,
    Tailwindcss,
    linkedin,
    cv,
    
    contact,
    Java,
    Devops
} from "../assets/icons";

export const services = [
  {
    title: 'Custom Software Development',
    image: software,
    description:
      "We build software that fits like a glove—tailored to your unique business needs.\nNo cookie-cutter code here, just solutions that stand the test of time.\nFrom concept to completion, we leave no stone unturned.\nLet your ideas take flight with scalable, secure, and smart systems.",
  },
  {
    title: 'Full-Stack Web Development',
    image: web,
    description:
      "We cover all bases—from pixel-perfect front-end to rock-solid back-end.\nYour website will be fast as lightning and smooth as silk.\nBuilt to handle traffic like a pro, even when the chips are down.\nLet’s turn your digital presence into a force to be reckoned with.",
  },
  {
    title: 'Mobile App Development',
    image: mobile,
    description:
      "Apps that put your brand in the palm of their hands—literally.\nWe craft experiences that keep users coming back for more.\nWhether native or hybrid, we hit the ground running.\nYour app will be sleek, swift, and ready to steal the show.",
  },
  {
    title: 'UI/UX Design',
    image: uiux,
    description:
      "Designs that speak louder than words and flow like water.\nWe read between the lines to understand your users’ needs.\nNo bells and whistles—just clean, intuitive, and delightful interfaces.\nLet’s make your product love at first sight.",
  },
  {
    title: 'Cloud & DevOps',
    image: cloud,
    description:
      "We take your infrastructure to the cloud—no strings attached.\nAutomate, optimize, and deploy at the drop of a hat.\nSay goodbye to downtime and hello to peace of mind.\nWith us, your tech stack runs like a well-oiled machine.",
  },
  {
    title: 'E-commerce Platforms',
    image: ecommerce,
    description:
      "Sell smarter, not harder—with platforms built to convert.\nFrom browsing to checkout, we smooth out every bump in the road.\nYour store will be open 24/7, rain or shine.\nLet’s turn clicks into customers and carts into cash.",
  },
];

export const techIcons = [
  { name: 'HTML', src: Html },
  { name: 'CSS', src: Css },
  { name: 'JavaScript', src: Js },
  { name: 'ReactJS', src: Reactjs },
  { name: 'NodeJS', src: Nodejs },
  { name: 'MongoDB', src: MongoDB },
  { name: 'ExpressJS', src: Expressjs },
  { name: 'TailwindCSS', src: Tailwindcss },
  { name: 'SQL', src: Sql },
  { name: 'DevOps', src: Devops },
  { name: 'Java', src: Java },
  { name: 'Python', src: Python },
];



export const experiences = [
   
    {
        title: "Frontend Developer",
        company_name: "Jambavan Software Solutions",
        
        iconBg: "#fbc3bc",
        date: "Augest 2025 - Still now",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Programming Intern",
        company_name: "Jambavan Software Solutions",
       
        iconBg: "#b7e4c7",
        date: "Feb 2024 - Jun 2025",
        points: [
            "Collaborated with cross-functional teams to build and refine responsive web pages that aligned with modern UI/UX standards.",
            "Got hands-on experience with HTML, CSS, JavaScript, and React, learning the ropes of component-based architecture and performance optimization.",
            "From debugging layout issues to implementing interactive features, I consistently rolled up my sleeves to tackle challenges head-on",
            "It was a stepping stone that helped me sharpen my skills and hit the ground running in real-world development environments.",
        ],
    },
    {
        title: "Worker-3 Employee",
        company_name: "Fairaway Enterprises Company Limited",
       
        iconBg: "#a2d2ff",
        date: "March 2021 - Jan 2024",
        points: [
            "Gained solid experience in installing software, applying updates, and debugging runtime errors that can throw systems off track",
            "Learned to keep my ear to the ground, identifying issues early and resolving them efficiently to maintain smooth operations",
            "Alongside technical work, I have taken initiative in team settings, offering support, sharing knowledge, and stepping up when leadership was needed",
            "Build a strong foundation, proving that I can hold my own and contribute meaningfully in both technical and collaborative environments.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'tel:8681921236',
    },
    {
        name: 'GitHub',
        
        link: 'https://github.com/mvvarasu04',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/veera-vanniya-arasu-m-18595a377',
    },
    {
        name: 'VeeraResume',
        iconUrl: cv,
        link: '/VeeraCV.pdf', 
        download: true,      
    }

];

export const projects = [
    {
        
        theme: 'btn-back-red',
        name: 'Scientific Calculator',
        description: 'developed a scientific calculator that performs complex calculations, including trigonometric functions, logarithms, and exponentiation.',
        link: 'https://calculator-omega-lovat-44.vercel.app',
    },
    {
        
        theme: 'btn-back-green',
        name: 'Sri Veera Crane Service',
        description: 'Created a web application for a crane service company, allowing users to book cranes and manage their services online.',
        link: 'https://github.com/mvvarasu04/CraneService',
    },
    {
        
        theme: 'btn-back-blue',
        name: 'QR Code Generator',
        description: 'Developed a QR code generator that allows users to create custom QR codes for various purposes, such as URLs, text, and contact information.',
        link: "https://qrcodegenerator-bay.vercel.app",
    },
    {
        
        theme: 'btn-back-pink',
        name: 'BMI Calculator',
        description: 'BMI calculator, designed and developed for provides a quick and accurate way to assess body mass index using personalized height and weight inputs..',
        link: ' https://bmicalculator-delta-nine.vercel.app ',
    },
    
];