import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-lg">
            Pronto para começar uma nova quest juntos?
          </p>
        </div>

        <div className="bg-card border-2 border-primary/30 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a
              href="mailto:stylbandeira@gmail.com"
              className="flex flex-col items-center gap-3 p-6 bg-secondary/50 border border-primary/30 rounded-lg hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="p-3 bg-primary/20 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold">Email</span>
              <span className="text-sm text-muted-foreground">stylbandeira@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/styl-bandeira/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-secondary/50 border border-primary/30 rounded-lg hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="p-3 bg-primary/20 rounded-full">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold">LinkedIn</span>
              <span className="text-sm text-muted-foreground">@stylbandeira</span>
            </a>

            <a
              href="https://github.com/stylbandeira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-secondary/50 border border-primary/30 rounded-lg hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="p-3 bg-primary/20 rounded-full">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold">GitHub</span>
              <span className="text-sm text-muted-foreground">@stylbandeira</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Interessado em colaborar ou tem alguma oportunidade? Envie uma mensagem!
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="https://wa.me/87996236447">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
