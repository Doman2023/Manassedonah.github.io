import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Manasse Jean Mananga Donah
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in-delay-1">
            Web Developer & Digital Communication Enthusiast
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Crafting digital experiences with modern web technologies from Madagascar
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                View Projects
                <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg text-gray-800 dark:text-white rounded-full font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in-delay-4">
            <a
              href="https://github.com/manassejm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/manasse-donah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:manasse.donah@example.com"
              className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400 dark:text-gray-600" size={32} />
      </div>
    </section>
  );
}
