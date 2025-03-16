'use client'

import { LanguageProvider } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <>
        <LanguageToggle />
        {children}
      </>
    </LanguageProvider>
  )
} 