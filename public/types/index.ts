export type TContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  projectType?: 'frontend' | 'backend' | 'fullstack';
  message: string;
};
