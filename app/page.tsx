import { Hero } from "@/sections/Hero";
import { SceneWeb } from "@/components/scenes/SceneWeb";
import { SceneMobile } from "@/components/scenes/SceneMobile";
import { SelectedWork } from "@/sections/SelectedWork";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { MoonAtmosphere } from "@/components/layout/MoonAtmosphere";
import { cvExists } from "@/lib/cvStatus";

export default function Home() {
  const cvAvailable = cvExists();

  return (
    <>
      <MoonAtmosphere />
      <Hero />
      <SceneWeb />
      <SceneMobile />
      <SelectedWork />
      <About />
      <Contact cvAvailable={cvAvailable} />
    </>
  );
}
