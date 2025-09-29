'use client'

import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import Link from 'next/link'

interface NavbarProps {
  onFilterChange: (filters: { graduationYear?: string; school?: string; search?: string }) => void
}

export default function Navbar({ onFilterChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [graduationYear, setGraduationYear] = useState('')
  const [school, setSchool] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onFilterChange({ graduationYear, school, search: searchTerm })
  }

  const handleFilterChange = () => {
    onFilterChange({ graduationYear, school, search: searchTerm })
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-dark-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold text-dark-blue">UniShowcase</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearch} className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={graduationYear}
                  onChange={(e) => {
                    setGraduationYear(e.target.value)
                    handleFilterChange()
                  }}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-dark-blue"
                >
                  <option value="">All Years</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>
              
              <div className="relative">
                <select
                  value={school}
                  onChange={(e) => {
                    setSchool(e.target.value)
                    handleFilterChange()
                  }}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-dark-blue"
                >
                  <option value="">All Schools</option>
                  <option value="SSE">SSE</option>
                  <option value="SHSS">SHSS</option>
                  <option value="BA">BA</option>
                </select>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-dark-blue"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              
              <button
                type="submit"
                className="btn-primary text-sm"
              >
                Search
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                <select
                  value={graduationYear}
                  onChange={(e) => {
                    setGraduationYear(e.target.value)
                    handleFilterChange()
                  }}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-dark-blue"
                >
                  <option value="">All Years</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
                <select
                  value={school}
                  onChange={(e) => {
                    setSchool(e.target.value)
                    handleFilterChange()
                  }}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-dark-blue"
                >
                  <option value="">All Schools</option>
                  <option value="SSE">SSE</option>
                  <option value="SHSS">SHSS</option>
                  <option value="BA">BA</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-dark-blue"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary text-sm"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  )
}



