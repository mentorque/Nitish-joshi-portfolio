import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { Code, Cloud, Database, Zap } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "C++"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Databases & Frameworks",
      skills: ["Spring Boot", "Node.js", "Express.js", "React", "PostgreSQL", "MySQL", "MongoDB", "JPA/Hibernate"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Concepts",
      skills: ["Object-Oriented Design", "Layered Architecture", "RESTful API Design", "Authentication & Authorization", "Data Modeling", "Data Structures & Algorithms", "Agile/Scrum"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Tools & Practices",
      skills: ["Git", "Docker", "WebSockets", "Brython", "CTGames"]
    }
  ];

  const summary = `Backend Software Developer with around 2 years of experience contributing to Java-based RESTful systems and relational
  database-driven applications. Experienced in building and maintaining Spring Boot APIs, optimizing MySQL queries, and
  resolving production issues in real-world billing and workflow systems. Strong foundation in object-oriented design, layered
  architecture, and scalable backend development.`;

  return (
    <section id="about" className="section-contain py-24 px-4 sm:px-6 bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="text-center mb-16" variant="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Backend Software Developer with around 2 years of experience contributing to Java-based RESTful systems and relational
            database-driven applications. Experienced in Spring Boot APIs, MySQL optimization, and resolving production issues.
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-4xl mx-auto mb-16" variant="fade-up" delay={40}>
          <Card className="card-premium card-gradient border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {summary}
                </p>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal className="space-y-8" variant="fade-up" delay={60}>
          <h3 className="text-3xl font-bold text-center">
            Technical <span className="text-gradient">Skills</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={index} variant="scale-in" delay={80 + index * 30}>
                <Card className="card-premium card-gradient border-primary/20 group h-full hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-primary group-hover:text-accent transition-colors">
                        {category.icon}
                      </div>
                      <h4 className="font-bold text-lg">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12 text-center" variant="fade-in" delay={100}>
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Core Concepts</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["Agile/Scrum", "System Design", "Object-Oriented Design", "Data Structures & Algorithms", "RESTful APIs", "Layered Architecture", "Data Modeling"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                {concept}
              </Badge>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
