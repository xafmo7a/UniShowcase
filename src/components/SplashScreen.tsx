'use client'

import { useEffect, useState } from 'react'
import { GraduationCap } from 'lucide-react'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500) // Small delay before transitioning
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-dark-blue to-blue-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8 animate-bounce">
          <div className="w-24 h-24 bg-gold rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
            <GraduationCap className="w-12 h-12 text-dark-blue" />
          </div>
        </div>
        
        {/* App Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-pulse">
          UniShowcase
        </h1>
        
        {/* Tagline */}
        <p className="text-xl text-blue-100 mb-12 animate-fade-in">
          Showcase Your Innovation
        </p>
        
        {/* Progress Bar */}
        <div className="w-80 max-w-full mx-auto">
          <div className="bg-blue-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gold h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-blue-200 text-sm mt-2">
            Loading... {Math.round(progress)}%
          </p>
        </div>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}
