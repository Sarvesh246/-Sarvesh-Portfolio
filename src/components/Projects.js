import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiZap, FiGlobe, FiUsers, FiAward } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'ParkPoint',
      subtitle: 'Smart Parking Solution',
      status: 'In Development',
      icon: FiZap,
      color: 'bg-mint-500',
      description: 'A smart parking solution using solar-powered sensors that detect real-time availability of parking spots.',
      details: [
        'Built a mock HTML/CSS website to visualize the concept',
        'Currently developing the business and technical model',
        'Solar-powered IoT sensors for real-time data collection',
        'Mobile app integration for user convenience',
        'Reduces parking congestion and environmental impact'
      ],
      technologies: ['IoT', 'Solar Power', 'HTML/CSS', 'Mobile App', 'Business Model'],
      image: '/parkpoint-mockup.jpg' // Placeholder
    },
    {
      title: 'Inspirit AI Certificate',
      subtitle: 'Machine Learning Project',
      status: 'Completed',
      icon: FiAward,
      color: 'bg-navy-500',
      description: 'Completed a selective AI program where I collaborated with a team to develop a machine learning tool that detects exoplanets.',
      details: [
        'Earned official certification from Inspirit AI',
        'Collaborated with team to develop exoplanet detection tool',
        'Applied machine learning algorithms for astronomical data analysis',
        'Presented findings and technical implementation',
        'Gained hands-on experience with AI/ML technologies'
      ],
      technologies: ['Machine Learning', 'Python', 'Data Analysis', 'Team Collaboration', 'AI'],
      image: '/inspirit-ai.jpg' // Placeholder
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 dark:text-white mb-4">
              Projects & Experience
            </h2>
            <div className="w-20 h-1 bg-mint-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Innovative solutions and hands-on experience in technology and AI
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {/* Project Header */}
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 ${project.color} rounded-full flex items-center justify-center`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-800 dark:text-white">{project.title}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">{project.subtitle}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                          : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Details */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-navy-800 dark:text-white">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + index * 0.2 + detailIndex * 0.1, duration: 0.5 }}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-mint-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-navy-800 dark:text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + index * 0.2 + techIndex * 0.1, duration: 0.5 }}
                          className="px-3 py-1 bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-300 rounded-full text-sm font-medium transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Image/Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                    className="relative"
                  >
                    {/* Placeholder for project image */}
                    <div className="w-full h-80 bg-gradient-to-br from-navy-400 to-mint-400 rounded-lg flex items-center justify-center shadow-xl">
                      <div className="text-center text-white">
                        <project.icon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <div className="text-2xl font-bold mb-2">{project.title}</div>
                        <div className="text-lg opacity-90">Project Preview</div>
                        <div className="text-sm opacity-75 mt-2">Coming Soon</div>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-mint-400 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-navy-400 rounded-full opacity-60"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg card-shadow transition-colors duration-300">
              <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-4">
                Interested in Collaborating?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always open to new opportunities and exciting projects. Let's discuss how we can work together!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-navy-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-700 transition-colors duration-200"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 