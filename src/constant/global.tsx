import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaStripe,
  FaJs,
  FaGitAlt,
  FaLock,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiFirebase,
  SiAntdesign,
  SiNextdotjs,
  SiFigma,
} from 'react-icons/si';

import {MdDesignServices} from 'react-icons/md'; // Material UI

//  Frontend skills
export const frontendSkills = [
  {name: 'HTML5', desc: 'Markup', icon: <FaHtml5 />},
  {name: 'CSS3', desc: 'Styling', icon: <FaCss3Alt />},
  {name: 'Tailwind', desc: 'Utility Framework', icon: <SiTailwindcss />},
  {name: 'JavaScript', desc: 'Language', icon: <FaJs />},
  {name: 'TypeScript', desc: 'Language', icon: <SiTypescript />},
  {name: 'React JS', desc: 'Library', icon: <FaReact />},
  {name: 'Next.js', desc: 'Framework', icon: <SiNextdotjs />},
  {name: 'Ant Design', desc: 'UI Library', icon: <SiAntdesign />},
  {name: 'Material UI', desc: 'UI Library', icon: <MdDesignServices />},
];

//  Backend skills
export const backendSkills = [
  {name: 'Node.js', desc: 'Runtime', icon: <FaNodeJs />},
  {name: 'Express.js', desc: 'Framework', icon: <SiExpress />},
  {name: 'TypeScript', desc: 'Language', icon: <SiTypescript />},
  {name: 'MongoDB', desc: 'Database', icon: <SiMongodb />},
  {name: 'JWT', desc: 'Auth', icon: <SiJsonwebtokens />},
  {name: 'Firebase', desc: 'Auth & Hosting', icon: <SiFirebase />},
];

//  Other / Tools / Payment
export const otherSkills = [
  {name: 'Figma', desc: 'UI Design', icon: <SiFigma />},
  {name: 'SSL Commerz', desc: 'Payment', icon: <FaLock />},
  {name: 'Stripe.js', desc: 'Payment', icon: <FaStripe />},
  {name: 'Git', desc: 'Version Control', icon: <FaGitAlt />},
];
