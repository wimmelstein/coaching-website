'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { translations } = useLanguage()

  return (
    <section className="relative h-screen flex items-center justify-center bg-[url('/images/coaching-bg.jpg')] bg-cover bg-center">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/95 via-indigo-900/90 to-indigo-800/85 backdrop-blur-[1px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {translations.hero.title}
            <span className="text-amber-400"> {translations.hero.highlight}</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            {translations.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-amber-400 hover:bg-amber-500 transition-colors duration-300"
            >
              {translations.hero.cta.primary}
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 border border-amber-400 text-base font-medium rounded-md text-amber-400 bg-transparent hover:bg-amber-400/10 transition-colors duration-300"
            >
              {translations.hero.cta.secondary}
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#services" className="text-amber-400 hover:text-amber-300 transition-colors">
          <ArrowDownIcon className="h-8 w-8 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
} 