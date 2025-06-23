import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiHeart, FiBookOpen, FiCpu, FiUsers, FiCalendar } from 'react-icons/fi';

const LeadershipAndService = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const volunteerActivities = [
    {
      title: 'Key Club',
      subtitle: 'School-based Volunteer',
      icon: FiHeart,
      color: 'bg-mint-500',
      description: 'Active member of Key Club, participating in various local community support initiatives.',
      details: [
        'Participated in food drives and community service events',
        'Helped organize fundraisers for local charities',
        'Assisted with school and community improvement projects',
        'Developed leadership and organizational skills',
        'Contributed to positive community impact'
      ],
      duration: 'Ongoing',
      impact: 'Community Support'
    },
    {
      title: 'Public Library',
      subtitle: 'Regular Volunteer',
      icon: FiBookOpen,
      color: 'bg-navy-500',
      description: 'Regular volunteer assisting with programs and organizing resources at the local public library.',
      details: [
        'Assisted with library programs and events',
        'Helped organize and maintain library resources',
        'Supported literacy initiatives and reading programs',
        'Provided customer service to library patrons',
        'Gained experience in community education support'
      ],
      duration: 'Regular',
      impact: 'Education Support'
    },
    {
      title: 'Robotics Club',
      subtitle: 'Past Member',
      icon: FiCpu,
      color: 'bg-primary-500',
      description: 'Former member of the Robotics Club, helping contribute to team success qualifying for VEX competition.',
      details: [
        'Helped design and build competition robots',
        'Contributed to team strategy and problem-solving',
        'Participated in VEX robotics competitions',
        'Developed technical and engineering skills',
        'Worked collaboratively in a competitive environment'
      ],
      duration: 'Past Experience',
      impact: 'Technical Skills'
    },
    {
      title: 'Student Leadership',
      subtitle: 'Club Officer & President',
      icon: FiUsers,
      color: 'bg-yellow-500',
      description: 'Active leadership roles in multiple student organizations, focusing on community and student engagement.',
      details: [
        'Served on the Student Council to represent student interests',
        'Led the Green Team as President, promoting environmental awareness',
        'Organized events and activities as a Volleyball Club Officer',
        'Developed skills in leadership, organization, and teamwork'
      ],
      duration: 'Current',
      impact: 'Leadership'
    }
  ];

  return (
    <section id="leadership" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
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
              Leadership & Service
            </h2>
            <div className="w-20 h-1 bg-mint-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Active involvement in community service and extracurricular activities
            </p>
          </motion.div>

          {/* Volunteer Activities Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {volunteerActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover-lift transition-colors duration-300"
              >
                {/* Activity Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${activity.color} rounded-full flex items-center justify-center`}>
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-800 dark:text-white">{activity.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{activity.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {activity.description}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-navy-800 dark:text-white">Key Contributions:</h4>
                  <ul className="space-y-2">
                    {activity.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.2 + detailIndex * 0.1, duration: 0.5 }}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-mint-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Activity Info */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <FiCalendar className="w-4 h-4" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <FiUsers className="w-4 h-4" />
                    <span>{activity.impact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="bg-gradient-to-r from-navy-50 to-mint-50 dark:from-navy-900/50 dark:to-mint-900/50 p-8 rounded-lg transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-6 text-center">
              Community Impact
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-mint-600 mb-2">3</div>
                <div className="text-gray-700 dark:text-gray-300">Organizations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-600 mb-2">100+</div>
                <div className="text-gray-700 dark:text-gray-300">Hours Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                <div className="text-gray-700 dark:text-gray-300">Areas of Impact</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Through these experiences, I've developed strong leadership skills, 
                community awareness, and a commitment to making a positive difference 
                in the lives of others.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipAndService; 