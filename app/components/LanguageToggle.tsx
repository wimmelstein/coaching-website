'use client'

import { useLanguage } from '../context/LanguageContext'
import { motion } from 'framer-motion'
import { DutchFlag, BritishFlag } from './Icons/Flags'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('Button clicked, current language:', language)
    toggleLanguage()
  }

  return (
    <motion.button
      onClick={handleClick}
      type="button"
      className="fixed top-4 right-20 z-[9999] bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 px-4 py-2">
        <div className="w-6 h-4 flex items-center justify-center">
          {language === 'nl' ? <DutchFlag /> : <BritishFlag />}
        </div>
        <span className="text-sm font-medium text-gray-700 select-none">
          {language === 'nl' ? 'NL' : 'EN'}
        </span>
      </div>
    </motion.button>
  )
} 