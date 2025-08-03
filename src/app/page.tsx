// import Image from 'next/image';

import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import HeroSection from '@/components/HeroSection/HeroSection';
import Projects from '@/components/Projects/Projects';
import Services from '@/components/Services/Services';
import Skills from '@/components/Skills/Skills';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
