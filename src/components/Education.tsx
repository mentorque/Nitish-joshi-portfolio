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
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey in Software Engineering and Computer Science
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
