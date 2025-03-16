'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface ImageOverlayProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function ImageOverlay({ isOpen, onClose, children }: ImageOverlayProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden cursor-default"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 