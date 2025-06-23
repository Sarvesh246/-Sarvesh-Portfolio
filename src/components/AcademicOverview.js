import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBook, FiTrendingUp } from 'react-icons/fi';

const AcademicOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const academicStats = [
    { label: 'Weighted GPA', value: '4.27', icon: FiTrendingUp, color: 'bg-mint-500' },
    { label: 'Unweighted GPA', value: '3.39', icon: FiAward, color: 'bg-navy-500' },
    { label: 'Class Rank', value: '144/653', icon: FiBook, color: 'bg-primary-500' },
    { label: 'SAT Score', value: '1350', icon: FiAward, color: 'bg-mint-600' },
  ];

  const satBreakdown = [
    { subject: 'Math', score: '700' },
    { subject: 'Reading/Writing', score: '650' },
  ];

  const honorsCourses = [
    'Biology', 'Chemistry', 'Geometry', 'Algebra II', 'English I', 'Spanish I–III'
  ];

  const apCourses = [
    'AP Human Geography',
    'AP Computer Science A',
    'AP World History',
    'AP English II',
    'AP Calculus BC',
    'AP Psychology',
    'AP U.S. History',
    'AP Biology',
    'AP Physics I'
  ];

  return (
    <section id="academic" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
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
              Academic Overview
            </h2>
            <div className="w-20 h-1 bg-mint-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Strong academic foundation with a focus on advanced coursework and continuous improvement
            </p>
          </motion.div>

          {/* Academic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {academicStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center hover-lift transition-colors duration-300"
              >
                <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-navy-800 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* SAT Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 mb-16"
          >
            {/* SAT Scores */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-300">
              <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-6 flex items-center gap-3">
                <FiAward className="w-6 h-6 text-mint-600" />
                SAT Breakdown
              </h3>
              <div className="space-y-4">
                {satBreakdown.map((item, index) => (
                  <div key={item.subject} className="flex justify-between items-center p-4 bg-white dark:bg-gray-700 rounded-lg transition-colors duration-300">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{item.subject}</span>
                    <span className="text-2xl font-bold text-navy-800 dark:text-white">{item.score}</span>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800 dark:text-white">Total Score</span>
                    <span className="text-3xl font-bold text-mint-600">1350</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Overview */}
            <div className="space-y-8">
              {/* Honors Courses */}
              <div>
                <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 flex items-center gap-3">
                  <FiBook className="w-6 h-6 text-primary-600" />
                  Honors Courses
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {honorsCourses.map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + index * 0.05, duration: 0.5 }}
                      className="bg-gray-50 dark:bg-gray-700 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* AP Courses */}
              <div>
                <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 flex items-center gap-3">
                  <FiTrendingUp className="w-6 h-6 text-navy-600" />
                  AP Courses
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {apCourses.map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2 + index * 0.05, duration: 0.5 }}
                      className="bg-navy-50 dark:bg-navy-900/30 px-4 py-3 rounded-lg text-navy-700 dark:text-navy-300 font-medium border-l-4 border-navy-500 transition-colors duration-300"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Academic Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="bg-gradient-to-r from-navy-50 to-mint-50 dark:from-navy-900/50 dark:to-mint-900/50 p-8 rounded-lg transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-6 text-center">
              Academic Highlights
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-mint-600 mb-2">9</div>
                <div className="text-gray-700 dark:text-gray-300">AP Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-600 mb-2">6</div>
                <div className="text-gray-700 dark:text-gray-300">Honors Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">22%</div>
                <div className="text-gray-700 dark:text-gray-300">Class Rank Percentile</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicOverview; 