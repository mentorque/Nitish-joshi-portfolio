import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github, Zap, BookOpen, MessageCircle, ShoppingCart, Bell, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform (Real Users)",
      description: "Medusa is a commerce platform with a built-in framework for customization that allows you to build custom commerce applications without reinventing core commerce logic. The framework and modules support advanced B2B or DTC commerce stores, marketplaces, distributor platforms, PoS systems, and similar solutions. All commerce modules are open-source and freely available on npm.",
      icon: <ShoppingCart className="w-8 h-8" />,
      achievements: [
        {
          metric: "Headless commerce architecture",
          description: "API-first, frontend-agnostic design; modular carts, payments, inventory, shipping"
        },
        {
          metric: "Production-ready use cases",
          description: "Supports B2B, DTC, marketplaces, and POS; open-source extensibility used by real teams"
        },
        {
          metric: "Full commerce lifecycle",
          description: "Real checkout, order lifecycle, and user accounts; mapped to Amazon, Shopify, Walmart-scale primitives"
        }
      ],
      technologies: ["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Redis", "REST APIs"],
      category: "E-Commerce",
      gradient: "from-amber-500 to-orange-600",
      githubUrl: "https://github.com/medusajs/medusa",
      liveUrl: "https://demo.medusajs.com/us/account"
    },
    {
      title: "Fault-Tolerant Notification System (Email/SMS/Push)",
      description: "A highly reliable notification delivery system that handles retries, exponential backoff, dead-letter queues, and multi-channel notifications (email, SMS, push). Designed to simulate enterprise-scale messaging infrastructure.",
      icon: <Bell className="w-8 h-8" />,
      achievements: [
        {
          metric: "Event-driven architecture",
          description: "Kafka-based messaging; retry with exponential backoff and dead-letter queue handling"
        },
        {
          metric: "Multi-channel routing",
          description: "Email, SMS, and push notification routing with failure monitoring dashboard"
        },
        {
          metric: "High availability design",
          description: "Resilient backend systems; mapped to Uber, LinkedIn, Swiggy, Netflix-scale infra"
        }
      ],
      technologies: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "React", "Docker", "Kubernetes", "JUnit"],
      category: "Backend / DevOps",
      gradient: "from-emerald-500 to-teal-600",
      githubUrl: "https://github.com/dileepkanumuri/Distributed-Async-Notification-System"
    },
    {
      title: "Web-Based Educational Games for Computational Thinking",
      description: "Built three full-stack browser-based educational games by extending a Python codebase and implementing core gameplay logic, integrating frontend components with backend logic using Brython for browser-based execution. Designed parameter-driven multiple-choice logic with controlled distractor generation and state-based progression, and validated gameplay effectiveness through testing with 100+ school students (ages 6-12).",
      icon: <BookOpen className="w-8 h-8" />,
      achievements: [
        {
          metric: "Full-Stack Browser Games",
          description: "Three full-stack educational games with Python backend and Brython for browser execution"
        },
        {
          metric: "100+ Student Validation",
          description: "Validated gameplay effectiveness through testing with 100+ school students (ages 6-12)"
        },
        {
          metric: "Parameter-Driven Logic",
          description: "Parameter-driven multiple-choice logic with controlled distractor generation and state-based progression"
        }
      ],
      technologies: ["Python", "JavaScript", "HTML", "CSS", "Brython", "CTGames", "Git", "Docker"],
      category: "EdTech",
      gradient: "from-purple-500 to-pink-500",
      githubUrl: "#"
    },
    {
      title: "Twitter/X Clone Backend System (Java)",
      description: "Developed a Twitter-clone full-stack application using Java Spring Boot and React, applying advanced OOP principles and the Factory Method design pattern within a layered Controller-Service-Repository architecture. Implemented authentication, user follow/unfollow workflows, and interaction logic using JPA/Hibernate with relational database mappings.",
      icon: <MessageCircle className="w-8 h-8" />,
      achievements: [
        {
          metric: "Layered Architecture",
          description: "Controller-Service-Repository architecture with Factory Method design pattern"
        },
        {
          metric: "Auth & Social Features",
          description: "Authentication, user follow/unfollow workflows, and interaction logic"
        },
        {
          metric: "JPA/Hibernate & PostgreSQL",
          description: "Relational database mappings with JPA/Hibernate and PostgreSQL"
        }
      ],
      technologies: ["Java", "Spring Boot", "JPA/Hibernate", "PostgreSQL", "React", "WebSockets", "Git"],
      category: "Full-Stack",
      gradient: "from-blue-500 to-cyan-500",
      githubUrl: "#"
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="projects" className="section-contain py-24 px-4 sm:px-6 bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="text-center mb-16" variant="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack and educational projects demonstrating expertise in Java, Spring Boot, React,
            and browser-based applications.
          </p>
        </ScrollReveal>

        <ScrollReveal className="relative" variant="fade-up" delay={40}>
          <div className="relative w-full px-14 md:px-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                duration: 35,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-3">
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-3 basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="h-full min-h-[600px]">
                    <Card className="card-premium card-gradient border-primary/20 group overflow-hidden h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(project.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {project.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 md:space-y-6 flex-grow flex flex-col px-4 md:px-6">
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {project.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                        {project.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex gap-3 p-3 bg-background/50 rounded-lg border border-primary/10">
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                <Zap className="w-3 h-3 text-primary" />
                              </div>
                            </div>
                            <div>
                              <div className="text-primary font-semibold text-sm">
                                {achievement.metric}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex-grow">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 min-h-[60px]">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4 mt-auto">
                        <Button variant="outline" size="sm" asChild className="w-full">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        </Button>
                        {"liveUrl" in project && project.liveUrl && (
                          <Button variant="outline" size="sm" asChild className="w-full">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 bg-background shadow-md hover:bg-background/90 z-10 [&_svg]:h-6 [&_svg]:w-6" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 bg-background shadow-md hover:bg-background/90 z-10 [&_svg]:h-6 [&_svg]:w-6" />
            </Carousel>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal className="text-center mt-16" variant="scale-in" delay={60}>
          <Card className="card-premium card-gradient border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                Interested in <span className="text-gradient">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                I'm always excited to work on challenging problems and innovative solutions. 
                Let's discuss how we can build something amazing together.
              </p>
              <div className="flex justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <a href="mailto:nitishjoshi04@gmail.com">
                    Get In Touch
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
