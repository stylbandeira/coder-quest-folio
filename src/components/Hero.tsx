import { Github, Linkedin, Mail, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="relative">
          {/* Decorative glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl opacity-50 animate-glow" />

          <div className="relative bg-card border-2 border-primary/30 rounded-lg p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar placeholder */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary to-accent rounded-lg border-4 border-accent/50 shadow-lg flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <div className="mt-4 flex gap-2 justify-center">
                  <a href="https://github.com/stylbandeira" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="border-primary/50 hover:border-primary">
                      <Github className="w-5 h-5" />
                    </Button>
                  </a>

                  <a href="https://www.linkedin.com/in/styl-bandeira/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="border-primary/50 hover:border-primary">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Character Info */}
              <div className="flex-1">
                <div className="inline-block bg-accent/20 border border-accent/50 px-4 py-1 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">LEVEL 36 DEVELOPER</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shine bg-[length:200%_auto]">
                  Styl Bandeira
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                  Full Stack Developer
                </p>

                <div className="space-y-2 text-foreground/90">
                  <p className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>Classe: Desenvolvedor Full Stack</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span>Guild: [Freelancer]</span>
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Ver Projetos
                  </Button>

                  <a href="/public/curriculo_r.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-primary/50 hover:border-primary">
                      Download CV
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
