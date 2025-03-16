'use client'

import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from './Icons'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { translations } = useLanguage()

  const navigation = {
    main: [
      { name: translations.footer.nav.home, href: '#' },
      { name: translations.footer.nav.services, href: '#services' },
      { name: translations.footer.nav.about, href: '#about' },
      { name: translations.footer.nav.testimonials, href: '#testimonials' },
      { name: translations.footer.nav.contact, href: '#contact' },
    ],
    social: [
      {
        name: 'Facebook',
        href: 'https://facebook.com',
        icon: FacebookIcon,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: TwitterIcon,
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: LinkedInIcon,
      },
      {
        name: 'Instagram',
        href: 'https://instagram.com',
        icon: InstagramIcon,
      },
    ],
  }

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center space-x-6 md:space-x-12 mb-8">
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base text-gray-400 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex justify-center space-x-6 md:space-x-8 mb-8">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Way to Growth. {translations.footer.legal.rights}
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              {translations.footer.legal.privacy}
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              {translations.footer.legal.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 