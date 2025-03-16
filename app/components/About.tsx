'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  HeartIcon, 
  SparklesIcon, 
  LightBulbIcon, 
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '../context/LanguageContext'
import PhotoGallery from './PhotoGallery'

export default function About() {
  const { translations } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="prose prose-lg mx-auto"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8"
            variants={itemVariants}
          >
            {translations.about.title}
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-center italic text-gray-600 mb-16 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            &ldquo;{translations.about.slogan}&rdquo;
          </motion.p>

          <motion.div 
            className="space-y-12"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-blue-100"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-6">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <LightBulbIcon className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {translations.about.intro}
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-blue-100"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-6">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <HeartIcon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {translations.about.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {translations.about.answer}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-blue-100"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-6">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <SparklesIcon className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {translations.about.potential}
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-blue-100"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-6">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {translations.about.approach}
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-blue-100"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-6">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <UserGroupIcon className="h-8 w-8 text-blue-600" />
                </div>
                <blockquote className="italic text-gray-700 border-l-4 border-blue-400 pl-6 text-lg">
                  &ldquo;{translations.about.testimonial}&rdquo;
                </blockquote>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="overflow-hidden"
            >
              <PhotoGallery />
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center border border-blue-100"
              variants={itemVariants}
            >
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                {translations.about.closing}
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {translations.about.cta}
                  <ArrowRightIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 