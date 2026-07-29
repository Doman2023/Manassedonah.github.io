import { Code, Briefcase, Target } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    Background
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    IT and Electronics student with a passion for web development and creating
                    intuitive digital experiences. Based in Madagascar, I combine technical
                    expertise with creative problem-solving.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-900/10 dark:to-blue-900/10 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    Expertise
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Skilled in modern web technologies including React, JavaScript, and responsive
                    design. Experienced in digital communication strategies and project management,
                    bringing a unique blend of technical and soft skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    Career Goals
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Seeking opportunities to grow as a junior web developer, contributing to
                    innovative projects while expanding my expertise in full-stack development and
                    digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                      MJM
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                    Manasse Jean Mananga Donah
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Junior Web Developer
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                      JavaScript
                    </span>
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
