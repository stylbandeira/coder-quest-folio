import { Brain, Code, Zap, Shield, Users, Rocket } from "lucide-react";

interface Stat {
  name: string;
  value: number;
  max: number;
  icon: React.ReactNode;
  description: string;
}

const CharacterStats = () => {
  const stats: Stat[] = [
    {
      name: "Inteligência",
      value: 95,
      max: 100,
      icon: <Brain className="w-6 h-6" />,
      description: "Resolução de problemas e algoritmos"
    },
    {
      name: "Código",
      value: 90,
      max: 100,
      icon: <Code className="w-6 h-6" />,
      description: "Domínio de linguagens e frameworks"
    },
    {
      name: "Agilidade",
      value: 85,
      max: 100,
      icon: <Zap className="w-6 h-6" />,
      description: "Velocidade de desenvolvimento"
    },
    {
      name: "Defesa",
      value: 88,
      max: 100,
      icon: <Shield className="w-6 h-6" />,
      description: "Segurança e boas práticas"
    },
    {
      name: "Carisma",
      value: 92,
      max: 100,
      icon: <Users className="w-6 h-6" />,
      description: "Trabalho em equipe e comunicação"
    },
    {
      name: "Criatividade",
      value: 87,
      max: 100,
      icon: <Rocket className="w-6 h-6" />,
      description: "Inovação e soluções criativas"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
            Character Stats
          </h2>
          <p className="text-muted-foreground text-lg">
            Atributos e habilidades do desenvolvedor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border-2 border-primary/30 rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                  {stat.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{stat.name}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/80">Nível</span>
                  <span className="text-primary font-bold">{stat.value}/{stat.max}</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ width: `${(stat.value / stat.max) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills/Technologies Section */}
        <div className="mt-16 bg-card border-2 border-primary/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-accent">
            Arsenal de Tecnologias
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterStats;
