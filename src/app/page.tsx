// import Image from 'next/image';

import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import HeroSection from '@/components/HeroSection/HeroSection';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
