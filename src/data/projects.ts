import {TProject} from '@/types';

export const projects: TProject[] = [
  {
    id: '1',
    slug: 'hospital-management-system',
    name: 'Hospital Management System',
    title: 'Full-Stack Hospital Management System',
    description:
      'Comprehensive hospital platform with patient appointment booking, doctor scheduling, blood donation management, and admin dashboard.',
    longDescription:
      'A full-stack hospital management system built with Next.js, React, Node.js, Express.js, MongoDB, and TypeScript. It allows patients to book appointments with doctors based on their available schedules, view doctor profiles, and access blood donation services. The admin dashboard provides tools for managing doctors, schedules, appointments, and donor records. Secure authentication is implemented using JWT, ensuring privacy and data protection.',
    image:
      'https://res.cloudinary.com/duu47ahmd/image/upload/v1755121351/react-next-js-frontend-website_embdac.jpg',
    images: [],
    skills: [
      'Next.js',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'TypeScript',
      'Next UI',
      'JWT',
      'Tailwind CSS',
    ],
    liveLink: 'https://hospital-demo.vercel.app',
    githubLink: 'https://github.com/username/hospital-management-system',
    category: 'fullstack',
    featured: true,
    completedDate: '2024-08',
    challenges: [
      'Restricting appointment booking to only doctor-available dates',
      'Implementing real-time schedule updates for doctors',
      'Designing an efficient blood donation record system',
      'Ensuring secure authentication and role-based access control',
    ],
    features: [
      'Patient appointment booking system',
      'Doctor profile and schedule management',
      'Blood donation section with donor requirements',
      'Dynamic date picker showing only available days',
      'Admin dashboard for managing hospital data',
      'Secure JWT-based authentication and authorization',
    ],
  },

  {
    id: '2',
    slug: 'restaurant-website',
    name: 'Foodies Paradise',
    title: 'Full-Stack Restaurant Ordering Platform',
    description:
      'Modern restaurant website with category tabs, carousel showcase, food ordering, online payment, and admin dashboard.',
    longDescription:
      'A visually stunning full-stack restaurant platform built with Next.js, React, Node.js, Express.js, MongoDB, and TypeScript. The homepage features a beautiful navigation bar and a dynamic carousel to showcase signature dishes. Users can browse foods by category tabs, add them to their cart, and place orders. Secure payment integration with Stripe allows seamless checkout. Both users and admins have their own dashboards — users can track their order status, while admins can manage menu items, view orders, and monitor sales statistics.',
    image:
      'https://res.cloudinary.com/duu47ahmd/image/upload/v1755121351/react-next-js-frontend-website_embdac.jpg',
    images: [],
    skills: [
      'Next.js',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'TypeScript',
      'Stripe',
      'Tailwind CSS',
      'JWT',
      'Framer Motion',
    ],
    liveLink: 'https://foodies-paradise.vercel.app',
    githubLink: 'https://github.com/username/restaurant-website',
    category: 'fullstack',
    featured: true,
    completedDate: '2024-09',
    challenges: [
      'Creating a responsive and visually appealing UI with carousel and tabs',
      'Integrating secure Stripe payment processing',
      'Implementing cart functionality with persistent storage',
      'Building role-based dashboards for users and admins',
    ],
    features: [
      'Beautiful carousel showcasing featured dishes',
      'Food browsing with category-based tabs',
      'Add-to-cart and checkout system',
      'Stripe payment gateway integration',
      'User dashboard to track orders and history',
      'Admin dashboard for menu, orders, and analytics',
      'JWT-based secure authentication',
    ],
  },

  {
    id: '3',
    slug: 'task-management-saas',
    name: 'TaskFlow Pro',
    title: 'SaaS Task Management Platform',
    description:
      'Team collaboration tool with real-time updates and project tracking',
    longDescription:
      'A powerful SaaS application for team task management featuring real-time collaboration, project analytics, team workspaces, and subscription-based pricing with multi-tenant architecture.',
    image:
      'https://res.cloudinary.com/duu47ahmd/image/upload/v1755121351/react-next-js-frontend-website_embdac.jpg',
    images: [],
    skills: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Docker', 'AWS'],
    liveLink: 'https://taskflow-pro.com',
    githubLink: 'https://github.com/username/taskflow-pro',
    category: 'saas',
    featured: true,
    completedDate: '2023-11',
    challenges: [
      'Building scalable real-time features',
      'Implementing multi-tenant architecture',
      'Managing complex user permissions',
    ],
    features: [
      'Real-time collaboration',
      'Kanban board interface',
      'Team workspaces',
      'Advanced analytics dashboard',
      'Subscription management',
      'Mobile responsive design',
    ],
  },
];
