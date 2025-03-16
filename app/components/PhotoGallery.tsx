'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: '/images/about-coaching-1.jpg',
      alt: 'Professional coaching session',
      caption: 'Professionele coaching sessies in een vertrouwde omgeving'
    },
    {
      src: '/images/about-coaching-2.jpg',
      alt: 'Group workshop session',
      caption: 'Interactieve workshops voor effectief leren'
    },
    {
      src: '/images/about-coaching-3.jpg',
      alt: 'One-on-one mentoring',
      caption: 'Persoonlijke begeleiding op maat'
    }
  ]

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedImage === null) return

    if (e.key === 'ArrowRight') {
      setSelectedImage((prev) => (prev === null ? null : (prev + 1) % images.length))
    } else if (e.key === 'ArrowLeft') {
      setSelectedImage((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length))
    } else if (e.key === 'Escape') {
      setSelectedImage(null)
    }
  }, [selectedImage, images.length])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-indigo-900/20 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-300"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length))
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-300"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage((prev) => (prev === null ? null : (prev + 1) % images.length))
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-300"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>

              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg text-center">
                  {images[selectedImage].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 