// import Image from 'next/image';

import Contact from '@/components/Contact/Contact';
import HeroSection from '@/components/HeroSection/HeroSection';
import Projects from '@/components/Projects/Projects';
import Services from '@/components/Services/Services';
import Skills from '@/components/Skills/Skills';

export default function Home() {
  return (
    <div className="dark:bg-[#12304b80]">
      <HeroSection />
      <Services />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
