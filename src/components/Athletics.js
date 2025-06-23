import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiClock, FiTrendingUp, FiTarget } from 'react-icons/fi';

const Athletics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personalRecords = [
    {
      event: '5K',
      time: '16:48',
      icon: FiClock,
      color: 'bg-mint-500',
      description: 'Cross Country Personal Record'
    },
    {
      event: '1600m',
      time: '4:45',
      icon: FiTarget,
      color: 'bg-navy-500',
      description: 'Track Personal Record'
    },
    {
      event: '3200m',
      time: '10:36',
      icon: FiTrendingUp,
      color: 'bg-primary-500',
      description: 'Distance Running PR'
    },
    {
      event: '800m',
      time: '2:11',
      icon: FiAward,
      color: 'bg-mint-600',
      description: 'Mid-Distance Personal Record'
    }
  ];

  const achievements = [
    'Varsity Cross Country Team Member',
    'Varsity Track & Field Team Member',
    'Consistent performance improvement',
    'Strong team leadership and sportsmanship',
    'Balanced academic and athletic commitments',
    'Taekwondo Black Belt (5 years experience)'
  ];

  return (
    <section id="athletics" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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
              Athletics
            </h2>
            <div className="w-20 h-1 bg-mint-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Varsity runner with strong discipline and continuous improvement in cross country and track
            </p>
          </motion.div>

          {/* Sports Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid lg:grid-cols-3 gap-12 mb-16"
          >
            {/* Cross Country */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg card-shadow hover-lift transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-mint-500 rounded-full flex items-center justify-center">
                  <FiTrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-800 dark:text-white">Cross Country</h3>
                  <p className="text-gray-600 dark:text-gray-300">Varsity Team Member</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg transition-colors duration-300">
                  <div className="text-3xl font-bold text-mint-600 mb-2">16:48</div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">5K Personal Record</div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Competing at the varsity level in cross country, demonstrating endurance, 
                  mental toughness, and consistent performance improvement throughout the season.
                </p>
              </div>
            </div>

            {/* Track & Field */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg card-shadow hover-lift transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-navy-500 rounded-full flex items-center justify-center">
                  <FiTarget className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-800 dark:text-white">Track & Field</h3>
                  <p className="text-gray-600 dark:text-gray-300">Varsity Team Member</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg text-center transition-colors duration-300">
                    <div className="text-2xl font-bold text-navy-600 dark:text-navy-300 mb-1">4:45</div>
                    <div className="text-gray-700 dark:text-gray-300 text-sm">1600m PR</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg text-center transition-colors duration-300">
                    <div className="text-2xl font-bold text-navy-600 dark:text-navy-300 mb-1">2:11</div>
                    <div className="text-gray-700 dark:text-gray-300 text-sm">800m PR</div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Competing in multiple events including distance and sprint races, 
                  showing versatility and dedication to athletic excellence.
                </p>
              </div>
            </div>

            {/* Martial Arts */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg card-shadow hover-lift transition-colors duration-300 lg:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <FiAward className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-800 dark:text-white">Martial Arts</h3>
                  <p className="text-gray-600 dark:text-gray-300">Taekwondo</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">Black Belt</div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">5 Years of Experience</div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Dedicated practice in Taekwondo, cultivating discipline, focus, and respect.
                  Achieved the rank of black belt through years of commitment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Personal Records Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {personalRecords.map((record, index) => (
              <motion.div
                key={record.event}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center hover-lift transition-colors duration-300"
              >
                <div className={`w-12 h-12 ${record.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <record.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-navy-800 dark:text-white mb-2">{record.time}</div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{record.event}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{record.description}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-gradient-to-r from-navy-50 to-mint-50 dark:from-navy-900/50 dark:to-mint-900/50 p-8 rounded-lg mb-16 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-6 text-center">
              Athletic Achievements
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 bg-white dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-mint-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Athletic Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg card-shadow max-w-4xl mx-auto transition-colors duration-300">
              <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-6">
                Student-Athlete Philosophy
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                "Running has taught me the value of discipline, perseverance, and continuous improvement. 
                The same dedication I bring to athletics translates into my academic and personal pursuits. 
                Being a student-athlete has helped me develop time management skills, mental toughness, 
                and the ability to work effectively under pressure."
              </p>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-mint-600 mb-2">Discipline</div>
                  <div className="text-gray-600 dark:text-gray-400">Consistent training and commitment</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-600 mb-2">Perseverance</div>
                  <div className="text-gray-600 dark:text-gray-400">Overcoming challenges and setbacks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">Growth</div>
                  <div className="text-gray-600 dark:text-gray-400">Continuous improvement mindset</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Athletics; 