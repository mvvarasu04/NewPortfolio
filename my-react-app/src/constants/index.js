import { meta, shopify, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    cv,
    git,
    github,
    html,
    javascript,
    linkedin, 
    nextjs,   
    pricewise,
    react,   
    sass,
    snapgram,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
   
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
  
  
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
  
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
   
    {
        title: "Frontend Developer",
        company_name: "Jambavan Software Solutions",
        icon: tesla,
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
        icon: shopify,
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
        icon: meta,
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
        iconUrl: github,
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Scientific Calculator',
        description: 'developed a scientific calculator that performs complex calculations, including trigonometric functions, logarithms, and exponentiation.',
        link: 'https://calculator-omega-lovat-44.vercel.app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Sri Veera Crane Service',
        description: 'Created a web application for a crane service company, allowing users to book cranes and manage their services online.',
        link: 'https://github.com/mvvarasu04/CraneService',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'QR Code Generator',
        description: 'Developed a QR code generator that allows users to create custom QR codes for various purposes, such as URLs, text, and contact information.',
        link: "https://qrcodegenerator-bay.vercel.app",
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'BMI Calculator',
        description: 'BMI calculator, designed and developed for provides a quick and accurate way to assess body mass index using personalized height and weight inputs..',
        link: ' https://bmicalculator-delta-nine.vercel.app ',
    },
    
];