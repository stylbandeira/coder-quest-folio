import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  difficulty: "common" | "uncommon" | "rare" | "legendary";
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Projeto Épico 1",
      description: "Descrição do seu projeto incrível. Sistema completo com funcionalidades avançadas.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/seuusuario/projeto1",
      liveUrl: "https://projeto1.com",
      stars: 42,
      difficulty: "legendary"
    },
    {
      title: "Projeto Épico 2",
      description: "Outro projeto impressionante que resolve problemas reais com elegância.",
      technologies: ["TypeScript", "Next.js", "Tailwind"],
      githubUrl: "https://github.com/seuusuario/projeto2",
      stars: 28,
      difficulty: "rare"
    },
    {
      title: "Projeto Épico 3",
      description: "Aplicação web moderna com design responsivo e performance otimizada.",
      technologies: ["Vue.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/seuusuario/projeto3",
      liveUrl: "https://projeto3.com",
      stars: 15,
      difficulty: "uncommon"
    }
  ];

  const difficultyColors = {
    common: "border-gray-500 bg-gray-500/10",
    uncommon: "border-green-500 bg-green-500/10",
    rare: "border-blue-500 bg-blue-500/10",
    legendary: "border-accent bg-accent/10"
  };

  const difficultyLabels = {
    common: "Comum",
    uncommon: "Incomum",
    rare: "Raro",
    legendary: "Lendário"
  };

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
            Quests Completadas
          </h2>
          <p className="text-muted-foreground text-lg">
            Projetos e conquistas no GitHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border-2 border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group"
            >
              {/* Header with difficulty badge */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[project.difficulty]}`}>
                    {difficultyLabels[project.difficulty]}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span>{project.stars}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="px-6 pb-6 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/50 hover:border-primary"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:border-primary"
            asChild
          >
            <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Ver todos os projetos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
