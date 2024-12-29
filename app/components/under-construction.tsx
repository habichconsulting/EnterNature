'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

export default function UnderConstruction() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Sticky Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-xl font-bold text-[#649600]">EnterNature</Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-8">
             <Link
                href="/impressum"
                className="block text-2xl text-gray-800 hover:text-[#649600] mb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Impressum
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 mt-20">
        <div className="text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/enternature-Y5QFXxAAlWezLfGpV43CJ48YNLdrBL.png"
            alt="EnterNature Logo"
            width={150}
            height={150}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Neue Webseite im Aufbau
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Wir arbeiten fleißig daran, Ihnen bald eine neue, informative Webseite präsentieren zu können. 
            Schauen Sie bald wieder vorbei!
          </p>
          <div className="w-24 h-1 bg-[#649600] mx-auto"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} EnterNature. Alle Rechte vorbehalten.
          </p>
         <Link href="/impressum" className="text-sm text-[#649600] hover:underline mt-2 inline-block ml-4">
            Impressum
          </Link>
        </div>
      </footer>
    </div>
  )
}

