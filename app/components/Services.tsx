'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  SparklesIcon,
  CommandLineIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { useLanguage } from '../context/LanguageContext'

export default function Services() {
  const { translations } = useLanguage()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const icons = {
    0: CommandLineIcon,    // Agile Coaching
    1: UserGroupIcon,      // Scrum Master
    2: BriefcaseIcon,      // Career Coaching
    3: HeartIcon,          // Life Coaching
    4: AcademicCapIcon,    // Leadership Development
    5: SparklesIcon,       // Performance Coaching
  }

  const serviceImages = {
    0: '/images/agile-coaching.jpg',
    1: '/images/scrum-master.jpg',
    2: '/images/career-coaching.jpg',
    3: '/images/life-coaching.jpg',
    4: '/images/leadership.jpg',
    5: '/images/performance.jpg',
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {translations.services.items.map((service, index) => {
            const Icon = icons[index as keyof typeof icons]
            const imagePath = serviceImages[index as keyof typeof serviceImages]
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={imagePath}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-indigo-900/20 to-amber-500/10" />
                </div>
                <div className="text-amber-500 mb-4">
                  <Icon className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 