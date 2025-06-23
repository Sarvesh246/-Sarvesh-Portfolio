import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiEye, FiFileText, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [viewMode, setViewMode] = useState('html'); // 'html' or 'pdf'

  const contactInfo = {
    email: 'sarveshvjagtap@gmail.com',
    phone: '732-762-0126',
    location: 'United States'
  };

  const education = {
    school: 'High School',
    gpa: '4.27 Weighted / 3.39 Unweighted',
    classRank: '144/653',
    sat: '1350 (700 Math, 650 Reading/Writing)'
  };

  const skills = [
    'Computer Science', 'Machine Learning', 'Python', 'HTML/CSS', 'JavaScript',
    'Data Analysis', 'Team Leadership', 'Problem Solving', 'Time Management',
    'Communication', 'Project Management', 'IoT Development'
  ];

  const experience = [
    {
      title: 'ParkPoint - Smart Parking Solution',
      role: 'Founder & Developer',
      period: '2024 - Present',
      description: 'Developing a smart parking solution using solar-powered sensors for real-time availability detection.',
      achievements: [
        'Built mock HTML/CSS website to visualize concept',
        'Developing business and technical model',
        'IoT sensor integration and mobile app planning'
      ]
    },
    {
      title: 'Inspirit AI Certificate Program',
      role: 'Team Member',
      period: '2024',
      description: 'Completed selective AI program with team-based exoplanet detection project.',
      achievements: [
        'Earned official certification from Inspirit AI',
        'Developed machine learning tool for exoplanet detection',
        'Collaborated with team on data analysis and presentation'
      ]
    }
  ];

  const activities = [
    {
      title: 'Key Club',
      role: 'Member',
      period: 'Ongoing',
      description: 'School-based volunteer organization supporting local community initiatives.'
    },
    {
      title: 'Public Library',
      role: 'Volunteer',
      period: 'Regular',
      description: 'Assisting with programs and organizing resources at local public library.'
    },
    {
      title: 'Robotics Club',
      role: 'Past Member',
      period: 'Previous',
      description: 'Helped contribute to team success qualifying for VEX competition.'
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
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
              Resume
            </h2>
            <div className="w-20 h-1 bg-mint-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional summary of my academic achievements, experience, and skills
            </p>
          </motion.div>

          {/* View Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 flex">
              <button
                onClick={() => setViewMode('html')}
                className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                  viewMode === 'html' 
                    ? 'bg-white dark:bg-gray-700 text-navy-800 dark:text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-navy-800 dark:hover:text-white'
                }`}
              >
                <FiEye className="inline w-4 h-4 mr-2" />
                HTML View
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                  viewMode === 'pdf' 
                    ? 'bg-white dark:bg-gray-700 text-navy-800 dark:text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-navy-800 dark:hover:text-white'
                }`}
              >
                <FiFileText className="inline w-4 h-4 mr-2" />
                PDF View
              </button>
            </div>
          </motion.div>

          {/* Resume Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {viewMode === 'html' ? (
              /* HTML Resume */
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-colors duration-300">
                {/* Header */}
                <div className="bg-gradient-to-r from-navy-600 to-navy-800 text-white p-8">
                  <h1 className="text-3xl font-bold mb-2">Sarvesh Jagtap</h1>
                  <p className="text-xl text-navy-100 mb-4">Aspiring Computer Scientist & Student-Athlete</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <FiMail className="w-4 h-4" />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiPhone className="w-4 h-4" />
                      <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="w-4 h-4" />
                      <span>{contactInfo.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Education */}
                  <div>
                    <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 border-b-2 border-mint-500 pb-2">
                      Education
                    </h2>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg text-navy-800 dark:text-white">{education.school}</h3>
                          <p className="text-gray-600 dark:text-gray-300">Class Rank: {education.classRank}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-navy-800 dark:text-white">{education.gpa}</p>
                          <p className="text-gray-600 dark:text-gray-300">SAT: {education.sat}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 border-b-2 border-mint-500 pb-2">
                      Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-navy-100 dark:bg-navy-700 text-navy-700 dark:text-navy-200 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 border-b-2 border-mint-500 pb-2">
                      Experience
                    </h2>
                    <div className="space-y-6">
                      {experience.map((exp, index) => (
                        <div key={index} className="border-l-4 border-mint-500 pl-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold text-lg text-navy-800 dark:text-white">{exp.title}</h3>
                              <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-3">{exp.description}</p>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, aIndex) => (
                              <li key={aIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                <div className="w-1.5 h-1.5 bg-mint-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activities */}
                  <div>
                    <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 border-b-2 border-mint-500 pb-2">
                      Activities & Leadership
                    </h2>
                    <div className="space-y-4">
                      {activities.map((activity, index) => (
                        <div key={index} className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-navy-800 dark:text-white">{activity.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{activity.period}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Athletics */}
                  <div>
                    <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 border-b-2 border-mint-500 pb-2">
                      Athletics
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-navy-800 dark:text-white">Varsity Cross Country</h3>
                        <p className="text-gray-600 dark:text-gray-300">5K PR: 16:48</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-800 dark:text-white">Varsity Track & Field</h3>
                        <p className="text-gray-600 dark:text-gray-300">Mile PR: 4:45 | 400m PR: 56s</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* PDF Embed Placeholder */
              <div className="bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center transition-colors duration-300">
                <FiFileText className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">PDF Resume</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  PDF version of the resume will be embedded here. 
                  You can upload your resume PDF to the public folder.
                </p>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg max-w-md mx-auto transition-colors duration-300">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    To add your PDF resume:
                  </p>
                  <ol className="text-sm text-gray-600 dark:text-gray-300 text-left space-y-2">
                    <li>1. Add your resume PDF to the <code className="bg-gray-100 dark:bg-gray-600 px-1 rounded">public</code> folder</li>
                    <li>2. Update the src path in the PDF embed below</li>
                    <li>3. The PDF will display here for easy viewing</li>
                  </ol>
                </div>
              </div>
            )}
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 