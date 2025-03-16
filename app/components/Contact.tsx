'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { translations } = useLanguage()
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    bericht: '',
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('submitting')
    
    try {
      // Send email using a service like EmailJS, SendGrid, or your own API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      setSubmitStatus('success')
      setFormData({ naam: '', email: '', telefoon: '', bericht: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: translations.contact.info.phone,
      content: '+31 6 52345285',
      href: 'tel:+31652345285',
    },
    {
      icon: EnvelopeIcon,
      title: translations.contact.info.email,
      content: 'info@waytogrowth.nl',
      href: 'mailto:info@waytogrowth.nl',
    },
    {
      icon: MapPinIcon,
      title: translations.contact.info.location,
      content: translations.contact.info.locationText,
      href: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {translations.contact.info.title}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start space-x-4 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <item.icon className="h-6 w-6 mt-1" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p>{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="naam" className="block text-sm font-medium text-gray-700">
                  {translations.contact.form.name}
                </label>
                <input
                  type="text"
                  name="naam"
                  id="naam"
                  value={formData.naam}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {translations.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700">
                  {translations.contact.form.phone}
                </label>
                <input
                  type="tel"
                  name="telefoon"
                  id="telefoon"
                  value={formData.telefoon}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="bericht" className="block text-sm font-medium text-gray-700">
                  {translations.contact.form.message}
                </label>
                <textarea
                  name="bericht"
                  id="bericht"
                  rows={4}
                  value={formData.bericht}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-md">
                  {translations.contact.form.success}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-md">
                  {translations.contact.form.error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className={`w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white ${
                  submitStatus === 'submitting'
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {submitStatus === 'submitting' ? translations.contact.form.submitting : translations.contact.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 