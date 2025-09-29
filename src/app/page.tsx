'use client'

import { useState, useMemo } from 'react'
import { projects } from '@/data/mockData'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import { GraduationCap, Users, Lightbulb } from 'lucide-react'

export default function Home() {
  const [filters, setFilters] = useState({
    graduationYear: '',
    school: '',
    search: ''
  })

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesYear = !filters.graduationYear || project.graduationYear.toString() === filters.graduationYear
      const matchesSchool = !filters.school || project.school === filters.school
      const matchesSearch = !filters.search || 
        project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.studentName.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(filters.search.toLowerCase()))
      
      return matchesYear && matchesSchool && matchesSearch
    })
  }, [filters])

  return (
    <div className="min-h-screen bg-light-gray">
      <Navbar onFilterChange={setFilters} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Showcase Your
              <span className="text-gold block">Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover amazing student projects from SSE, SHSS, and BA programs. 
              Explore innovative solutions, creative designs, and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary text-lg px-8 py-4">
                Explore Projects
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-dark-blue px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                Submit Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-dark-blue" />
              </div>
              <h3 className="text-3xl font-bold text-dark-blue mb-2">50+</h3>
              <p className="text-gray-600">Student Projects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-dark-blue" />
              </div>
              <h3 className="text-3xl font-bold text-dark-blue mb-2">25+</h3>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-dark-blue" />
              </div>
              <h3 className="text-3xl font-bold text-dark-blue mb-2">3</h3>
              <p className="text-gray-600">Academic Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover innovative projects created by talented students across different programs
            </p>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Showcase Your Work?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of innovative students and share your projects with the world
          </p>
          <button className="btn-secondary text-lg px-8 py-4">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                  <span className="text-dark-blue font-bold text-lg">U</span>
                </div>
                <span className="text-xl font-bold">UniShowcase</span>
              </div>
              <p className="text-gray-400">
                Showcasing student innovation across SSE, SHSS, and BA programs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li>SSE</li>
                <li>SHSS</li>
                <li>BA</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Submit Project</li>
                <li>Guidelines</li>
                <li>Help Center</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>unishowcase@university.edu</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 UniShowcase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}



