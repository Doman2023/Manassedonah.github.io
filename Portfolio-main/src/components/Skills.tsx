import { Code2, Wrench, TrendingUp } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git & GitHub', 'Chart.js', 'REST APIs', 'Vite', 'npm', 'VS Code'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Soft Skills',
      icon: TrendingUp,
      skills: [
        'Digital Communication',
        'Project Management',
        'Problem Solving',
        'Team Collaboration',
        'Testing & QA',
        'Documentation',
      ],
      gradient: 'from-blue-600 to-purple-600',
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A diverse toolkit combining technical proficiency with strategic thinking
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl from-blue-500 to-purple-600"></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:scale-110 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-gradient-to-br from-blue-400/0 to-purple-600/0 group-hover:from-blue-400/20 group-hover:to-purple-600/20 rounded-2xl blur-xl transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Proficiency Levels
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: 'HTML', level: 80 },
              { skill: 'CSS', level: 80},
              { skill: 'React', level: 40 },
              { skill: 'JavaScript', level: 70 },
              { skill: 'Tailwind CSS', level: 45 },
              { skill: 'Figma', level: 70 },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {item.skill}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">{item.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
