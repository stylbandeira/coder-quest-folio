import Hero from "@/components/Hero";
import CharacterStats from "@/components/CharacterStats";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ExperienceLogs from "@/components/ExperienceLog";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CharacterStats />
      <Projects />
      <ExperienceLogs />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/30">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 - Desenvolvido com ⚔️ e 💚</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
