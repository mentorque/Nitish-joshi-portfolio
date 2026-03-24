import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Maynooth University",
      position: "Teaching Assistant",
      location: "Ireland",
      duration: "Sep 2025 – Present",
      logo: "MU",
      achievements: [
        {
          impact: "Full-Stack Guidance",
          description: "Guided 3+ student teams in designing and implementing full-stack applications by reviewing backend APIs, database schemas, and frontend integrations across multiple sprint cycles."
        },
        {
          impact: "Scrum & Delivery",
          description: "Improved project delivery consistency by facilitating Scrum ceremonies and helping teams decompose features into well-defined engineering tasks."
        },
        {
          impact: "Code Quality & Architecture",
          description: "Enhanced code quality and architectural decisions through pull request reviews and guidance on object-oriented design, REST API structuring, and database modeling."
        }
      ],
      technologies: ["Full-Stack", "REST APIs", "Database Design", "Scrum", "OOP", "Code Review"]
    },
    {
      company: "Softel Solutions",
      position: "Software Developer",
      location: "India",
      duration: "Jan 2023 – Aug 2024",
      logo: "SS",
      achievements: [
        {
          impact: "Billing & Tax Automation",
          description: "Reduced manual billing corrections across municipal workflows by implementing Java-based business logic for tax calculation, invoice generation, and payment reconciliation."
        },
        {
          impact: "Spring Boot REST APIs",
          description: "Decreased internal issue resolution time by ~20% by developing and refining Spring Boot REST APIs supporting billing and user-record workflows."
        },
        {
          impact: "MySQL Optimization",
          description: "Reduced query failures by ~25% by optimizing MySQL queries through indexing, join restructuring, and schema normalization."
        },
        {
          impact: "Production Defects",
          description: "Lowered recurrence of production defects by ~30% by diagnosing issues in business logic and database interactions and deploying validated fixes."
        }
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "JPA/Hibernate", "Billing Systems"]
    }
  ];

  return (
    <section id="experience" className="section-contain py-24 px-4 sm:px-6 bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="text-center mb-16" variant="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building and maintaining backend systems, mentoring students, and delivering measurable impact
            through clean code and solid architecture.
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} variant="fade-up" delay={index * 40}>
              <Card className="card-premium card-gradient border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-2xl font-bold text-background shadow-lg">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Achievements */}
                <div className="relative">
                  {/* Desktop: Normal stacked layout */}
                  <div className="hidden md:block space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-primary font-semibold text-lg">
                            {achievement.impact}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile: Carousel layout */}
                  <div className="md:hidden">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full"
                    >
                      <CarouselContent className="-ml-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <CarouselItem key={achIndex} className="pl-2 basis-full">
                            <div className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                  <TrendingUp className="w-4 h-4 text-primary" />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="text-primary font-semibold text-lg">
                                  {achievement.impact}
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                  {achievement.description}
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                    
                    {/* Mobile Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                      {exp.achievements.map((_, achIndex) => (
                        <div
                          key={achIndex}
                          className="w-2 h-2 rounded-full bg-muted-foreground/30"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
