import { Sword, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Experience {
    level: number;
    exp: number;
    time: string;
    company: string;
    position: string;
    from: number;
    to?: number;
    skills?: string[];
    achievements: string[];
    difficulty: number;
}

const ExperienceLogs = () => {
    const [showBattleLog, setShowBattleLog] = useState(false);
    const toggleBattleLog = () => setShowBattleLog((prev) => !prev);

    const projects: Experience[] = [
        {
            level: 34,
            exp: 48250,
            time: "2.5 anos",
            company: "Pedeai",
            position: "Backend Developer",
            from: 2022,
            to: 2024,
            skills: ["PHP", "Laravel", "Codeigniter", "MongoDB", "Node.js", "Docker", "MySQL"],
            achievements: ["Arquitetura de microsserviços", "Implementação de Testes Unitários", "Solução de Bugs", "Migração de Banco de Dados", "Refatoração de Código Legado"],
            difficulty: 5,
        },

        {
            level: 31,
            exp: 18000,
            time: "4 meses",
            company: "Omni Clinic",
            position: "Desenvolvedor Web Jr.",
            from: 2020,
            to: 2021,
            skills: ["PHP", "Wordpress", "API REST", "MySQL", "Node.js", "HTML", "CSS"],
            achievements: ["Arquitetura de microsserviços", "Desenvolvimento de API's para Wordpress"],
            difficulty: 2,
        },

        {
            level: 30,
            exp: 25872,
            time: "2 anos e 1 mês",
            company: "Secretaria de Educação de Petrolina",
            position: "Programador",
            from: 2018,
            to: 2020,
            skills: ["PHP", "Codeigniter 3", "MySQL"],
            achievements: ["Suporte", "MVC", "MySQL", "API REST"],
            difficulty: 3,
        },

        {
            level: 28,
            exp: 14000,
            time: "8 meses",
            company: "Ôshi Coworking",
            position: "Community Manager",
            from: 2018,
            to: 2018,
            skills: ["HTML", "CSS", "WordPress", "Mailchimp", "CorelDraw", "Adobe Photoshop"],
            achievements: ["Email marketing automatizado", "Definição de estratégias de marketing", "Suporte ao Franquiado"],
            difficulty: 3,
        },

        {
            level: 25,
            exp: 8000,
            time: "1 ano",
            company: "Univasf",
            position: "Desenvolvedor Web",
            from: 2015,
            to: 2016,
            skills: ["HTML", "CSS", "WordPress", "Joomla", "CorelDraw"],
            achievements: ["Prototipagem de sites", "Gerenciamento de conteúdo", "Atualização e suporte"],
            difficulty: 1,
        },
    ];

    return (
        <section className="py-20 px-4 bg-primary/5 relative">

            {/* Título (botão principal) */}
            <div className="flex justify-center mb-8">
                <Button
                    size="lg"
                    className="bg-emerald-900 hover:bg-emerald-800 text-white border border-emerald-600 shadow-lg shadow-emerald-900/40 font-mono"
                    onClick={toggleBattleLog}
                >
                    ⚔️ {showBattleLog ? "Fechar Battle Log" : "Abrir Battle Log"}
                </Button>
            </div>

            <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${showBattleLog ? "max-h-[5000px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-6"
                    }`}
            >
                {/* Conteúdo dos projetos */}
                <div className="space-y-6 mt-5 max-w-6xl mx-auto">

                    {/* GIF GUERREIRINHO */}
                    <div className="flex justify-center items-center gap-8 my-8">
                        {/* GIF 1 */}
                        <div className="flex-1 max-w-md">
                            <img
                                src="https://stylbandeira.com/hero.gif"
                                alt="Espada animada"
                                className="w-full h-48 object-contain border-2 border-green-500 rounded-lg"
                            />
                        </div>

                        {/* GIF 2 */}
                        {/* <div className="flex-1 max-w-md">
                            <img
                                src="/public/hero.gif"
                                alt="Espada animada"
                                className="w-full h-48 object-contain border-2 border-green-500 rounded-lg"
                            />
                        </div> */}
                    </div>

                    {projects.map((exp, index) => (
                        <div
                            key={index}
                            className="border-2 border-green-600 rounded-lg p-6 bg-black/90 hover:bg-green-950/30 transition-all duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 relative"
                        >
                            {/* Level Badge */}
                            <div className="absolute -top-3 -left-3 bg-green-600 text-black font-bold px-4 py-1 rounded-full border-2 border-green-400 font-mono text-sm">
                                LVL {exp.level}
                            </div>

                            {/* XP Gained */}
                            <div className="absolute -top-3 -right-3 bg-yellow-600 text-black font-bold px-3 py-1 rounded-full border-2 border-yellow-400 font-mono text-sm">
                                +{exp.exp}XP
                            </div>

                            {/* Header */}
                            <div className="mb-4 pt-2">
                                <div className="flex flex-wrap items-center gap-4 mb-2">
                                    <h3 className="text-2xl font-bold text-green-400 font-mono">
                                        🏰 {exp.company}
                                    </h3>
                                    <span className="text-green-300 font-mono bg-green-900/50 px-3 py-1 rounded border border-green-700">
                                        ⏱️ {exp.time}
                                    </span>
                                </div>
                                <p className="text-green-300 font-mono text-lg mb-1">
                                    💼 {exp.position}
                                </p>
                                <p className="text-green-500 font-mono text-sm">
                                    📅 {exp.from} - {exp.to}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Skills */}
                                <div>
                                    <h4 className="text-green-400 font-mono text-lg mb-3 flex items-center gap-2">
                                        <Sword className="w-5 h-5" />
                                        HABILIDADES ADQUIRIDAS:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills?.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="bg-green-900/50 text-green-300 px-3 py-1 rounded border border-green-700 font-mono text-sm hover:bg-green-800 hover:text-green-200 transition-all cursor-help"
                                            >
                                                ⚡ {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div>
                                    <h4 className="text-green-400 font-mono text-lg mb-3 flex items-center gap-2">
                                        <Zap className="w-5 h-5" />
                                        CONQUISTAS:
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, achievementIndex) => (
                                            <li
                                                key={achievementIndex}
                                                className="text-green-300 font-mono text-sm flex items-start gap-2 hover:text-green-200 transition-colors"
                                            >
                                                <span className="text-green-500 mt-1">✔</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-4">
                                <div className="flex justify-between text-green-400 font-mono text-sm mb-1">
                                    <span>DIFICULDADE:</span>
                                    <span>{exp.difficulty}/5 ★</span>
                                </div>
                                <div className="w-full bg-green-900/30 rounded-full h-3 border border-green-700">
                                    <div
                                        className="bg-gradient-to-r from-green-500 to-green-300 h-full rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${(exp.difficulty / 5) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceLogs;
