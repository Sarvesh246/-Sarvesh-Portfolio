import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Sarvesh Jagtap</h3>
            <p className="text-navy-200 mb-6 max-w-2xl mx-auto">
              "Building with Purpose" - Every line of code, every project, and every step forward 
              is driven by the desire to make a meaningful impact in the world.
            </p>
            
            {/* Quote */}
            <div className="bg-navy-800 p-6 rounded-lg max-w-3xl mx-auto mb-8">
              <blockquote className="text-lg italic text-navy-100 mb-2">
                "The best way to predict the future is to invent it."
              </blockquote>
              <cite className="text-navy-300">— Alan Kay</cite>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="font-semibold mb-3">Academic</h4>
              <ul className="space-y-2 text-sm text-navy-200">
                <li>4.27 Weighted GPA</li>
                <li>9 AP Courses</li>
                <li>1350 SAT Score</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Athletics</h4>
              <ul className="space-y-2 text-sm text-navy-200">
                <li>Varsity Cross Country</li>
                <li>Varsity Track & Field</li>
                <li>5K PR: 16:48</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Projects</h4>
              <ul className="space-y-2 text-sm text-navy-200">
                <li>ParkPoint Smart Parking</li>
                <li>Inspirit AI Certificate</li>
                <li>Community Service</li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-navy-700 pt-8 mb-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-navy-200">
              <span>Email: sarveshvjagtap@gmail.com</span>
              <span>•</span>
              <span>Phone: 732-762-0126</span>
              <span>•</span>
              <span>Location: United States</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-navy-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-navy-300 mb-4 sm:mb-0">
              © 2025 Sarvesh Jagtap | Building with Purpose
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-navy-300">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiHeart className="w-4 h-4 text-red-400" />
              </motion.div>
              <span className="text-sm text-navy-300">using React & Tailwind</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-navy-600 hover:bg-navy-500 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 z-40"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer; 