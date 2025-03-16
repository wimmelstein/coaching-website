'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { en } from '../translations/en'
import { nl } from '../translations/nl'

type Language = 'en' | 'nl'
type Translations = typeof en

interface LanguageContextType {
  language: Language
  translations: Translations
  toggleLanguage: () => void
}

const translations = {
  en,
  nl,
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Initialize with a default value
  const [language, setLanguage] = useState<Language>('nl')

  useEffect(() => {
    // Get stored language preference or default to 'nl'
    const storedLang = localStorage.getItem('language')
    if (storedLang === 'en' || storedLang === 'nl') {
      setLanguage(storedLang)
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'en' ? 'nl' : 'en'
      localStorage.setItem('language', newLang)
      return newLang
    })
  }

  const value = {
    language,
    translations: translations[language],
    toggleLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 