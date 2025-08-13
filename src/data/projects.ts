import {TProject} from '@/types';
import projectImage from '@/assets/images/projects-image.jpg';

export const projects: TProject[] = [
  {
    id: '1',
    slug: 'ecommerce-nextjs',
    name: 'ShopEasy',
    title: 'Full-Stack E-commerce Platform',
    description:
      'Modern e-commerce solution with payment integration and admin dashboard',
    longDescription:
      'A comprehensive e-commerce platform built with Next.js 14, featuring user authentication, product management, shopping cart, payment processing with Stripe, order tracking, and a complete admin dashboard for inventory management.',
    image: projectImage,
    images: [],
    skills: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Stripe',
      'Tailwind CSS',
      'NextAuth',
    ],
    liveLink: 'https://shopeasy-demo.vercel.app',
    githubLink: 'https://github.com/username/shopeasy',
    category: 'fullstack',
    featured: true,
    completedDate: '2024-01',
    challenges: [
      'Implementing real-time inventory management',
      'Handling complex payment flows and webhooks',
      'Optimizing database queries for large product catalogs',
    ],
    features: [
      'User authentication and profiles',
      'Advanced product filtering and search',
      'Shopping cart with persistent storage',
      'Secure payment processing',
      'Order tracking and history',
      'Admin dashboard with analytics',
    ],
  },
  {
    id: '2',
    slug: 'task-management-saas',
    name: 'TaskFlow Pro',
    title: 'SaaS Task Management Platform',
    description:
      'Team collaboration tool with real-time updates and project tracking',
    longDescription:
      'A powerful SaaS application for team task management featuring real-time collaboration, project analytics, team workspaces, and subscription-based pricing with multi-tenant architecture.',
    image: projectImage,
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
  {
    id: '3',
    slug: 'restaurant-website',
    name: 'Bella Vista',
    title: 'Restaurant Website with Online Ordering',
    description:
      'Beautiful restaurant website with menu management and online ordering system',
    longDescription:
      'A stunning restaurant website featuring online menu, table reservation system, online food ordering with payment integration, and an admin panel for menu and order management.',
    image: projectImage,
    images: [],
    skills: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://bellavista-demo.vercel.app',
    githubLink: 'https://github.com/username/restaurant-website',
    category: 'fullstack',
    featured: false,
    completedDate: '2023-09',
    features: [
      'Interactive menu display',
      'Table reservation system',
      'Online ordering and payment',
      'Admin dashboard for orders',
      'Beautiful animations',
      'Mobile-first design',
    ],
  },
];
