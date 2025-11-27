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
    theme: 'btn-back-pink',
    name: 'Event Catering Company Website',
    description: 'Developed a Full-Service Event Catering & Menu Site, primarily focusing on menu presentation, package clarity, and booking inquiry. Key features include high-quality food photography, a customizable menu builder tool, detailed service pricing (staffing, rentals), and a prominent Request A Quote form with event details capture.',
    link: '#', // Replace with actual project link
  },
  {
    theme: 'btn-back-red', // or another available color theme
    name: 'Chit Fund Management System',
    description: 'Developed a comprehensive web application for managing Chit Funds, focusing on financial transparency, member enrollment, and automated auction processes. Features include member registration and profile management, digital tracking of monthly contributions, an automated bidding and dividend calculation system, and generation of regulatory compliance reports.',
    link: '#', 
  },
  {
    theme: 'btn-back-green',
    name: 'Local Produce & Fruit Shop Grocer',
    description: 'Designed a Local Produce Delivery & Grocer Site with a focus on freshness, inventory management, and local delivery logistics. Features include a daily/seasonal specials section, clear inventory status, local delivery zone checking, and easy category browsing for produce types (e.g., Exotic, Organic).',
    link: '#', 
  },
  {
    theme: 'btn-back-blue',
    name: 'High-End Artisan Jewelry E-commerce',
    description: 'Created a High-End Artisan Jewelry E-commerce platform emphasizing luxury branding, detail display, and trust/security. Features implemented are ultra high-resolution product photography with zoom, detailed material and sizing specifications, security seals/certifications, and a private appointment booking option for viewings.',
    link: '#', 
  },
  {
    theme: 'btn-back-pink',
    name: 'Boutique Fashion Retail E-commerce',
    description: 'Built a Boutique Fashion E-commerce site focused on visual merchandising, trend relevance, and size/fit guidance. The site includes interactive lookbooks, a product recommendation engine (\'Complete the Look\'), model sizing and fit details on product pages, and clear information on the returns/exchange process.',
    link: '#', 
  },
  {
    theme: 'btn-back-red',
    name: 'Custom Home Furniture Showroom',
    description: 'Developed a Custom & Ready-Made Home Furnishings E-commerce solution, highlighting lifestyle integration, dimensions, and delivery logistics. Features include a room visualizer/AR tool (if possible), clear product dimensions and material swatches, financing options display, and estimated delivery/assembly scheduling.',
    link: '#', 
  },
  {
    theme: 'btn-back-green',
    name: 'Computer Retail & Repair Service Site',
    description: 'Designed a Local Retailer & Custom Build/Repair Service Site centered on technical specs, service booking, and trust. The application offers a PC builder tool or configuration options, dedicated pages for repair services with transparent pricing, a stock availability checker, and technician certification display.',
    link: '#', 
  },
  {
    theme: 'btn-back-blue',
    name: 'Motorcycle & Bicycle Showroom',
    description: 'Created a Motorcycle/Bicycle Retail & Service Center website prioritizing performance specs, experiential content, and test ride booking. Key features are detailed specs sheets for models, a comparison tool, a visual accessories/parts catalog, and a prominent Book A Test Ride form.',
    link: '#', 
  },
  {
    theme: 'btn-back-pink',
    name: 'Car Dealership & Inventory Portal',
    description: 'Built a New & Used Vehicle Dealership Site focused on inventory search, financing leads, and service scheduling. This includes robust inventory search filters (make, model, year, price), prominent financing calculator/application link, and an online service appointment scheduler.',
    link: '#', 
  },
  {
    theme: 'btn-back-red',
    name: 'Community Hospital/Clinic Portal',
    description: 'Developed a Healthcare Institution & Patient Portal emphasizing authority, accessibility, and emergency info. Core features include doctor and department directories with specialization filters, online appointment requests, a patient portal login, and clear emergency contact/directions information.',
    link: '#', 
  },
  {
    theme: 'btn-back-green',
    name: 'Travel Agency & Tour Booking Site',
    description: 'Designed an Agency & Tour Operator Booking Site with a focus on destination inspiration, package clarity, and secure booking. Features implemented are dynamic destination guides, a customizable itinerary builder, price breakdown transparency, and a secure payment gateway integration for bookings.',
    link: '#', 
  },
  {
    theme: 'btn-back-blue',
    name: 'Footwear Retail E-commerce',
    description: 'Built a Shoe Retail E-commerce platform primarily focused on comfort, fit, and visual appeal. Features include 360-degree product views, detailed sizing charts and fit guides (e.g., width), filtering by activity (running/casual), and customer reviews focused on comfort/sizing.',
    link: '#', 
  },
  {
    theme: 'btn-back-pink',
    name: 'Specialty Camera Equipment Shop',
    description: 'Developed a Specialty Photography Equipment Retailer site concentrating on technical comparison, expert advice, and educational content. Key features are a side-by-side comparison tool for cameras/lenses, an expert blog/review section, used gear trade-in program details, and rental equipment booking.',
    link: '#', 
  },
  {
    theme: 'btn-back-red',
    name: 'Hardware & DIY Supplies Center',
    description: 'Created a Building Supplies & DIY Project Center website focused on product categorization, bulk orders, and project inspiration. The site includes clear categorization for complex inventory (lumber, tools, electrical), a bulk/contractor account signup portal, and integrated DIY project guides/videos.',
    link: '#', 
  },
  {
    theme: 'btn-back-green',
    name: 'Salon & Beauty Parlor Booking Site',
    description: 'Designed a Salon & Spa Services Booking Site emphasizing visual results, staff expertise, and appointment booking. Features include stylist/technician portfolios, a detailed service menu with time/price estimates, an integrated online scheduling tool, and current promotion/loyalty program details.',
    link: '#', 
  },
  {
    theme: 'btn-back-blue',
    name: 'Gift & Flower Delivery Shop',
    description: 'Built a Local Gifting & Floral Arrangement Delivery site, focusing on emotional appeal, occasion filtering, and delivery tracking. Features include filtering by occasion (Birthday, Sympathy, Holiday), clear delivery cutoff times and fees, a customization request form, and high-quality floral arrangement photography.',
    link: '#', 
  }
];