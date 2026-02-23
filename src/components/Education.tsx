import ScrollReveal from "@/components/ScrollReveal";

const Education = () => {
  const education = [
    {
      degree: "MSc Software Engineering (2:1)",
      school: "Maynooth University",
      location: "Ireland",
      period: "2024 – 2025",
      coursework: ["Advanced Object-Oriented Programming", "Database Systems", "System Design & Requirements Engineering", "Cryptography", "Software Project Management"],
      logo: "MU"
    },
    {
      degree: "B.E. Computer Science",
      school: "MRSPTU",
      location: "India",
      period: "2019 – 2023",
      coursework: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management Systems"],
      logo: "MRSPTU"
    }
  ];

  return (
    <section id="education" className="section-contain py-24 px-4 sm:px-6 bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="text-center mb-16" variant="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey in Software Engineering and Computer Science
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <ScrollReveal key={index} variant="fade-up" delay={index * 40}>
            <div className="card-premium bg-gray-900/80 rounded-xl p-8 border border-white/[0.06] backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {edu.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold text-lg">{edu.school}, {edu.location}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-gray-300 font-medium">{edu.period}</p>
                </div>
              </div>
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-2">Coursework:</p>
                  <p className="text-gray-300 text-sm">{edu.coursework.join(", ")}</p>
                </div>
              )}
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
