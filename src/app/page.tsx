import { Hero } from "@/components/hero/hero";
import { Navigation } from "@/components/navigation/navigation";
import { Projects } from "@/components/projects/projects";
import { Profile } from "@/components/profile/profile";
import { Skills } from "@/components/skills/skills";
import { Experience } from "@/components/experience/experience";
import { Proof } from "@/components/proof/proof";
import { Writing } from "@/components/writing/writing";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <main id="main-content">
      <Navigation />
      <Hero />
      <Projects />
      <Profile />
      <Skills />
      <Experience />
      <Proof />
      <Writing />
      <Contact />
    </main>
  );
}
