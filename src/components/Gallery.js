import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiImage, FiPlay, FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Placeholder gallery items - replace with actual images
  const galleryItems = [
    {
      id: 1,
      title: 'Track Race',
      category: 'Athletics',
      description: 'Competing in a cross country meet',
      type: 'image',
      placeholder: 'Track Race Photo'
    },
    {
      id: 2,
      title: 'Volunteer Event',
      category: 'Community',
      description: 'Helping at a local community event',
      type: 'image',
      placeholder: 'Volunteer Event Photo'
    },
    {
      id: 3,
      title: 'Project Mockup',
      category: 'Projects',
      description: 'ParkPoint parking solution concept',
      type: 'image',
      placeholder: 'Project Mockup'
    },
    {
      id: 4,
      title: 'Coding Session',
      category: 'Technology',
      description: 'Working on programming projects',
      type: 'image',
      placeholder: 'Coding Session'
    },
    {
      id: 5,
      title: 'Team Collaboration',
      category: 'Projects',
      description: 'Working with team on AI project',
      type: 'image',
      placeholder: 'Team Collaboration'
    },
    {
      id: 6,
      title: 'ParkPoint Pitch',
      category: 'Projects',
      description: 'Presenting ParkPoint concept',
      type: 'video',
      placeholder: 'Video: ParkPoint Pitch'
    }
  ];

  const categories = ['All', 'Athletics', 'Community', 'Projects', 'Technology'];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openImage = (item, index) => {
    setSelectedImage(item);
    setCurrentImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredItems.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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
              Gallery
            </h2>
            <div className="w-20 h-1 bg-mint-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Visual highlights from my academic, athletic, and community experiences
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    activeCategory === category
                      ? 'bg-navy-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                className="group relative bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover-lift cursor-pointer transition-colors duration-300"
                onClick={() => openImage(item, index)}
              >
                {/* Placeholder Image */}
                <div className="aspect-square bg-gradient-to-br from-navy-400 to-mint-400 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <FiImage className="w-12 h-12 mx-auto mb-3 opacity-80" />
                    <div className="text-lg font-semibold mb-1">{item.placeholder}</div>
                    <div className="text-sm opacity-75">Click to view</div>
                  </div>
                  
                  {/* Video indicator */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <FiPlay className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="text-lg font-semibold mb-2">{item.title}</div>
                    <div className="text-sm opacity-90">{item.description}</div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-navy-800 dark:text-white rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg card-shadow max-w-2xl mx-auto transition-colors duration-300">
              <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-4">
                More Photos Coming Soon
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm continuously adding photos from my experiences. Check back for updates!
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500 dark:text-gray-400">
                <span>• Track races and competitions</span>
                <span>• Volunteer events</span>
                <span>• Project presentations</span>
                <span>• Team collaborations</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <FiX className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <FiArrowLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <FiArrowRight className="w-8 h-8" />
            </button>

            {/* Image/Video Content */}
            <div
              className="bg-gradient-to-br from-navy-400 to-mint-400 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  {selectedImage.type === 'video' ? (
                    <>
                      <FiPlay className="w-20 h-20 mx-auto mb-4 opacity-80" />
                      <div className="text-2xl font-bold mb-2">{selectedImage.title}</div>
                      <div className="text-lg opacity-90">{selectedImage.description}</div>
                      <div className="text-sm opacity-75 mt-4">Video content will be embedded here</div>
                    </>
                  ) : (
                    <>
                      <FiImage className="w-20 h-20 mx-auto mb-4 opacity-80" />
                      <div className="text-2xl font-bold mb-2">{selectedImage.title}</div>
                      <div className="text-lg opacity-90">{selectedImage.description}</div>
                      <div className="text-sm opacity-75 mt-4">Image will be displayed here</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Image Info */}
            <div className="mt-4 text-center text-white">
              <div className="text-lg font-semibold">{selectedImage.title}</div>
              <div className="text-gray-300">{selectedImage.description}</div>
              <div className="text-sm text-gray-400 mt-2">
                {currentImageIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery; 