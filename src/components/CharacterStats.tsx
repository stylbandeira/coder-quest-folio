import { Dices } from "lucide-react";

interface Technology {
  name: string;
  level: number; // 0-5
  category: "Frontend" | "Backend" | "DevOps" | "Mobile";
}

// Dice component to represent skill level
const DiceLevel = ({ level }: { level: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`w-6 h-6 rounded border-2 flex items-center justify-center text-xs font-bold transition-all ${
            index < level
              ? "border-accent bg-accent/20 text-accent"
              : "border-muted bg-muted/10 text-muted-foreground/30"
          }`}
        >
          {index < level ? "●" : "○"}
        </div>
      ))}
    </div>
  );
};

const CharacterStats = () => {
  const technologies: Technology[] = [
    { name: "React", level: 5, category: "Frontend" },
    { name: "TypeScript", level: 5, category: "Frontend" },
    { name: "Tailwind CSS", level: 4, category: "Frontend" },
    { name: "Next.js", level: 4, category: "Frontend" },
    { name: "Vue.js", level: 3, category: "Frontend" },
    { name: "Node.js", level: 5, category: "Backend" },
    { name: "Python", level: 4, category: "Backend" },
    { name: "PostgreSQL", level: 4, category: "Backend" },
    { name: "MongoDB", level: 3, category: "Backend" },
    { name: "Docker", level: 4, category: "DevOps" },
    { name: "AWS", level: 3, category: "DevOps" },
    { name: "React Native", level: 3, category: "Mobile" },
  ];

  const categories = ["Frontend", "Backend", "DevOps", "Mobile"] as const;

  return (
    <section className="py-20 px-4 relative">
      {/* RPG Board Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-accent">
            <Dices className="w-8 h-8 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Arsenal de Habilidades
            </h2>
            <Dices className="w-8 h-8 animate-float" />
          </div>
          <p className="text-muted-foreground text-lg">
            Nível de proficiência em tecnologias (0-5 pontos)
          </p>
        </div>

        {/* Tech Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => {
            const categoryTechs = technologies.filter(tech => tech.category === category);
            if (categoryTechs.length === 0) return null;
            
            return (
              <div
                key={category}
                className="bg-card border-2 border-primary/30 rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden"
              >
                {/* Decorative dice in corner */}
                <div className="absolute -top-4 -right-4 text-primary/10 rotate-12">
                  <Dices className="w-24 h-24" />
                </div>
                
                <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                  <span className="text-2xl">
                    {category === "Frontend" && "🎨"}
                    {category === "Backend" && "⚙️"}
                    {category === "DevOps" && "☁️"}
                    {category === "Mobile" && "📱"}
                  </span>
                  {category}
                </h3>
                
                <div className="space-y-4 relative z-10">
                  {categoryTechs.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between gap-4 p-3 bg-secondary/50 rounded border border-primary/20 hover:border-primary/50 transition-all"
                    >
                      <span className="font-semibold text-foreground min-w-[120px]">
                        {tech.name}
                      </span>
                      <DiceLevel level={tech.level} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-12 bg-card border-2 border-accent/30 rounded-lg p-6 text-center">
          <h4 className="text-lg font-bold mb-4 text-accent">Sistema de Pontuação</h4>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">0-1:</span>
              <span className="text-foreground">Iniciante</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">2:</span>
              <span className="text-foreground">Básico</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">3:</span>
              <span className="text-foreground">Intermediário</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">4:</span>
              <span className="text-foreground">Avançado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">5:</span>
              <span className="text-accent font-bold">Mestre</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterStats;
