import { Hero } from "@/sections/Hero";
import { SelectedWork } from "@/sections/SelectedWork";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { TechStack } from "@/sections/TechStack";
import { Contact } from "@/sections/Contact";
import { cvExists } from "@/lib/cvStatus";

export default function Home() {
  const cvAvailable = cvExists();

  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Experience />
      <TechStack />
      <Contact cvAvailable={cvAvailable} />
    </>
  );
}
