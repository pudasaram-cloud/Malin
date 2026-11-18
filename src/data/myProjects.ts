import projds1 from '../assets/projds1.png';
import projds2 from '../assets/projds2.png';
import projds3 from '../assets/projds3.png';
import projds4 from '../assets/projds4.png';
import prosur1 from '../assets/prosur1.png';
import prosur2 from '../assets/prosur2.png';
import prosur3 from '../assets/prosur3.png';
import provel0 from '../assets/provel0.png';
import provel1 from '../assets/provel1.png';
import provel2 from '../assets/provel2.png';
import provel3 from '../assets/provel3.png';
import provel4 from '../assets/provel4.png';
import provel5 from '../assets/provel5.png';
import provel6 from '../assets/provel6.png';
import provel7 from '../assets/provel7.png';
import prov1 from '../assets/prov1.png';
import prov2 from '../assets/prov2.png';
import prov3 from '../assets/prov3.png';
import prov4 from '../assets/prov4.png';


// Technical specification item
export interface TechSpec {
  label: string;
  value: string;
  fullWidth?: boolean;
}

// Project Item Interface
export interface ProjectItem {
  id: string;
  title: string;
  url: string;
  slides: string[];
  description: string;
  buttonText?: string;
  buttonLink?: string;
  specs: TechSpec[];
}

// Section Header Information
export interface ProjectsHeader {
  title: string;
  tagline: string;
  description: string;
}

export const projectsHeaderData: ProjectsHeader = {
  title: 'My Projects',
  tagline: "Discover what I've built, what I've learned, and what I'm passionate about.",
  description:
    'I focus on building reliable, scalable, and user-friendly software solutions that deliver long-term value. My projects emphasize quality, efficiency, and successful project delivery through effective planning, problem-solving, and continuous improvement.',
};

// Top Project Preview Card (Right side of heading)
export interface TopProjectPreview {
  title: string;
  url: string;
  image: string;
}

export const topProjectPreview: TopProjectPreview = {
  title: 'JDS Furniture Store',
  url: 'https://jdsfurniture.vercel.app/',
  image: projds1,
};

// Main Projects List
// You can add more projects by simply adding a new object to this array!
export const myProjectsData: ProjectItem[] = [

    {
    id: 'VELORA',
    title: 'VELORA',
    url: '',
    slides: [
     prov1, prov2, prov3, prov4
    ],
    description:
      'It is a software developed for managing garment orders, inventory, and customer details. It provides a centralized system for order tracking, inventory management, and customer relationship management, streamline workflow, reduce errors, and improve overall efficiency.',
    buttonText: 'Discuss Your Project',
    buttonLink: '#contact',
    specs: [
      { label: 'Frontend', value: 'HTML, CSS, JavaScript, jQuery' },
      { label: 'Styling', value: 'Bootstrap 5' },
      { label: 'Backend', value: 'FastAPI, Redis, ClickHouse' },
      // { label: 'Programming Language', value: 'TypeScript, Python' },
      // { label: 'Framework', value: 'React + Vite' },
      // { label: 'Deployment', value: 'Google Cloud Run' },
      // { label: 'Integration', value: 'Webhooks / REST API', fullWidth: true },
    ],
  },
  {
    id: 'jds-furniture',
    title: 'JDS FURNITURE',
    url: 'https://jdsfurniture.vercel.app/',
    slides: [projds1, projds2, projds3, projds4],
    description:
      'Designed and developed a modern, responsive furniture e-commerce website using Next.js and TypeScript, featuring an elegant user interface and seamless shopping experience. The platform showcases furniture collections, product listings, detailed product pages, promotional discounts, and quick WhatsApp contact options. Built with a focus on performance, usability, and responsive design, providing customers with an easy way to explore furniture products and connect with the business.',
    buttonText: 'Discuss Your Project',
    buttonLink: '#contact',
    specs: [
      { label: 'Frontend', value: 'Next.js, React.js, TypeScript' },
      { label: 'Styling', value: 'Tailwind CSS, CSS3' },
      { label: 'Backend', value: 'Next.js API Routes' },
      { label: 'Programming Language', value: 'TypeScript, JavaScript' },
      { label: 'Framework', value: 'Next.js' },
      { label: 'Deployment', value: 'Vercel' },
      { label: 'Integration', value: 'WhatsApp API / WhatsApp Direct Link', fullWidth: true },
    ],
  },
  {
    id: 'sugar-petals',
    title: 'Sugar petals Cakes & Bakes',
    url: 'https://www.sugarpetals.web.lk/',
    slides: [
      prosur1, prosur2, prosur3,
    ],
    description:
      'Handcrafted cakes, cupcakes, and sweet creations for special occasions. The website showcases a variety of offerings—including birthday cakes, floral cupcake gift boxes, and celebration cakes—alongside current promotional bundles such as the Luxurious Chocolate Drip Cake and Vanilla Berry Bliss Layer Cake. Visitors can browse a gallery of past creations, learn about the business, and submit a direct online inquiry form with their preferred date, occasion, and design details to request a custom cake quote.',
    buttonText: 'Discuss Your Project',
    buttonLink: '#contact',
    specs: [
      { label: 'Frontend', value: 'Next.js, React, TypeScript' },
      { label: 'Styling', value: 'Tailwind CSS, CSS3' },
      { label: 'Backend', value: 'Next.js API Routes, Node.js' },
      { label: 'Programming Language', value: 'TypeScript, PostgreSQL' },
      { label: 'Framework', value: 'Next.js App Router' },
      { label: 'Deployment', value: 'Vercel / AWS' },
      { label: 'Integration', value: 'REST API / POS Hardware Direct SDK', fullWidth: true },
    ],
  },
  {
    id: 'Velvet Vogue',
    title: 'Velvet Vogue Managing System',
    url: '',
    slides: [
      provel0, provel1, provel2, provel3, provel4, provel5, provel6, provel7,
    ],
    description:
      'It is a software developed for managing garment orders, inventory, and customer details. It provides a centralized system for order tracking, inventory management, and customer relationship management, streamline workflow, reduce errors, and improve overall efficiency.',
    buttonText: 'Discuss Your Project',
    buttonLink: '#contact',
    specs: [
      { label: 'Frontend', value: 'React, TypeScript, Recharts' },
      { label: 'Styling', value: 'Tailwind CSS, Radix UI' },
      { label: 'Backend', value: 'FastAPI, Redis, ClickHouse' },
      { label: 'Programming Language', value: 'TypeScript, Python' },
      { label: 'Framework', value: 'React + Vite' },
      { label: 'Deployment', value: 'Google Cloud Run' },
      { label: 'Integration', value: 'Webhooks / REST API', fullWidth: true },
    ],
  },
];
