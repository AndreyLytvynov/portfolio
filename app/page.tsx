import Certificates from '@/sections/Certificates/Certificates';
import Feedback from '@/sections/Feedback/Feedback';
import Hero from '@/sections/Hero/Hero';
import Projects from '@/sections/Projects/Projects';
import Skills from '@/sections/Skills/Skills';
import Testimonials from '@/sections/Testimonials/Testimonials';

export default function Home() {
  return (
    <main className="flex-grow pt-20 tablet:pt-32 desktop:pt-40">
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Testimonials />
      <Feedback />
    </main>
  );
}
