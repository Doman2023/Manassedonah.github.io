import { ExternalLink, Github, Cloud, DollarSign, Palette, Play } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Currency Converter',
      description:
        'Real-time currency conversion web application with live exchange rates. Features multiple currency support and interactive charts for rate history visualization.',
      technologies: ['HTML','CSS','JavaScript', 'Chart.js', 'REST API','Boosted'],
      icon: DollarSign,
      gradient: 'from-blue-500 to-cyan-500',
      demoUrl: '#',
      githubUrl: 'https://github.com/manassejm/currency-converter',
    },
    {
      title: 'SoundAddict Music Streaming Prototype',
      description:'Music streaming platform prototype designed to provide seamless audio listening, playlist management, and music discovery. Features a modern responsive interface, real-time playback controls, artist and album organization, and an immersive user experience inspired by contemporary streaming services.',
      technologies: ['FIGMA','UX/UI','Wireframe'],
      icon: Play,
      gradient: 'from-purple-500 to-pink-500',
      demoUrl: 'https://www.figma.com/proto/eNV1cLQQx2Fxl3sVOa5EXU/Portfolio?node-id=232-2&p=f&t=H1fr6VS3vqzqc7J0-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=232%3A2',
      githubUrl: 'https://github.com/manassejm/soundaddict',
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in web development and digital design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-1 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl p-6 overflow-hidden">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="text-white" size={28} />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.demoUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/manassejm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg text-gray-800 dark:text-white rounded-full font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
