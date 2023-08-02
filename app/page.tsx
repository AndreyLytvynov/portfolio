import Certificates from '@/sections/Certificates/Certificates';
import Hero from '@/sections/Hero/Hero';
import Projects from '@/sections/Projects/Projects';
import Skills from '@/sections/Skills/Skills';

export default function Home() {
  return (
    <main className="flex-grow pt-40" id="home">
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
    </main>
  );
}
