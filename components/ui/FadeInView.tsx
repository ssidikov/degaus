'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInViewProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function FadeInView({ children, delay = 0, className = '' }: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}>
      {children}
    </motion.div>
  )
}
