import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-mint-500 rounded-full mb-6"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a 17-year-old student passionate about technology, computer science, and entrepreneurship. 
                I've lived in the U.S. since age 4 and thrive on solving real-world problems through innovation.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm also a varsity runner and involved in volunteer work that supports my local community. 
                My goal is to combine my technical skills with my passion for making a positive impact.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid sm:grid-cols-2 gap-4 pt-6"
            >
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg card-shadow hover-lift transition-colors duration-300">
                <h3 className="font-semibold text-navy-800 dark:text-white mb-2">Computer Science</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Passionate about AI, machine learning, and innovative solutions</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg card-shadow hover-lift transition-colors duration-300">
                <h3 className="font-semibold text-navy-800 dark:text-white mb-2">Student-Athlete</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Varsity cross country and track runner with strong discipline</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg card-shadow hover-lift transition-colors duration-300">
                <h3 className="font-semibold text-navy-800 dark:text-white mb-2">Community Service</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Active volunteer supporting local community initiatives</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg card-shadow hover-lift transition-colors duration-300">
                <h3 className="font-semibold text-navy-800 dark:text-white mb-2">Entrepreneurship</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Developing innovative solutions like ParkPoint parking system</p>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Placeholder for profile image */}
              <div className="w-80 h-80 bg-gradient-to-br from-navy-400 to-mint-400 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-2">SJ</div>
                  <div className="text-lg opacity-90">Profile Photo</div>
                  <div className="text-sm opacity-75 mt-2">Coming Soon</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-mint-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-navy-400 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary-400 rounded-full opacity-60"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 