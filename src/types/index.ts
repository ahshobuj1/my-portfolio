import {StaticImageData} from 'next/image';

export type TContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  projectType?: 'frontend' | 'backend' | 'fullstack';
  message: string;
};

export type TProject = {
  id: string;
  slug: string; // URL
  name: string;
  title: string;
  description: string;
  longDescription: string;
  image: string | StaticImageData;
  images: string[]; // Multiple images for gallery
  skills: string[];
  liveLink: string;
  githubLink: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'saas';
  featured: boolean;
  completedDate?: string;
  challenges?: string[];
  features?: string[];
};
