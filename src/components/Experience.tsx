import { Briefcase, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Orange Madagascar',
      role: 'QA Tester Intern',
      period: '2023',
      description:
        'Contributed to quality assurance processes for telecommunications services and digital products.',
      responsibilities: [
        'Executed comprehensive testing procedures using industry-standard testing tools',
        'Developed and documented detailed test cases for various software modules',
        'Identified, logged, and tracked software defects through bug tracking systems',
        'Collaborated with development teams to reproduce and resolve critical issues',
        'Analyzed test scenarios and proposed improvements for enhanced test coverage',
        'Participated in team meetings and provided regular status updates',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hands-on experience in quality assurance and software testing
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 pb-12 border-l-2 border-gray-300 dark:border-gray-700 last:pb-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 ring-4 ring-white dark:ring-gray-900"></div>

              <div className="group relative p-8 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${exp.gradient} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Briefcase className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="flex items-start gap-3">
                          <CheckCircle
                            className="text-blue-500 flex-shrink-0 mt-0.5"
                            size={20}
                          />
                          <span className="text-gray-600 dark:text-gray-400">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-gradient-to-br from-blue-400/0 to-purple-600/0 group-hover:from-blue-400/20 group-hover:to-purple-600/20 rounded-2xl blur-xl transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-8 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
              Currently Seeking
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Junior Web Developer positions and internship opportunities to continue growing my
              skills and contribute to innovative projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
