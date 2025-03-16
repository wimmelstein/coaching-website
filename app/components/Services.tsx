'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { useLanguage } from '../context/LanguageContext'

export default function Services() {
  const { translations } = useLanguage()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const icons = {
    0: BriefcaseIcon,
    1: HeartIcon,
    2: AcademicCapIcon,
    3: SparklesIcon,
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.services.subtitle}
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {translations.services.items.map((service, index) => {
            const Icon = icons[index as keyof typeof icons]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-indigo-600 mb-4">
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 