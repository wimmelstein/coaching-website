'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PhotoGallery() {
  const images = [
    {
      src: 'https://placehold.co/600x800/e2e8f0/1e40af?text=Coaching+Session',
      alt: 'Coaching session in progress',
      caption: 'Persoonlijke begeleiding tijdens een coaching sessie'
    },
    {
      src: 'https://placehold.co/800x600/e2e8f0/1e40af?text=Workshop',
      alt: 'Leading a workshop',
      caption: 'Workshops en groepssessies voor maximale impact'
    },
    {
      src: 'https://placehold.co/600x800/e2e8f0/1e40af?text=One+on+One',
      alt: 'One-on-one conversation',
      caption: 'Individuele gesprekken in een vertrouwde omgeving'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative group"
        >
          <div className="aspect-[4/5] relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-4 left-4 right-4 text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.caption}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 