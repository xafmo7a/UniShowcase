'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects, students } from '@/data/mockData'
import { ExternalLink, Github, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'

interface ProjectDetailsPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const project = projects.find(p => p.id === params.id)
  const student = project ? students.find(s => s.id === project.studentId) : null
  const relatedProjects = projects
    .filter(p => p.id !== project?.id && p.studentId === project?.studentId)
    .slice(0, 3)

  if (!project || !student) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const getSchoolTagClass = (school: string) => {
    switch (school) {
      case 'SSE':
        return 'school-tag school-sse'
      case 'SHSS':
        return 'school-tag school-shss'
      case 'BA':
        return 'school-tag school-ba'
      default:
        return 'school-tag school-sse'
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    )
  }

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Banner Image */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={project.banner}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{project.studentName}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{project.graduationYear}</span>
              </div>
              <span className={getSchoolTagClass(project.school)}>
                {project.school}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Project Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            </div>

            {/* Project Description */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Project</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshots Carousel */}
            {project.screenshots.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Screenshots</h2>
                <div className="relative">
                  <div className="relative h-96 overflow-hidden rounded-lg">
                    <Image
                      src={project.screenshots[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                    {project.screenshots.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>
                  {project.screenshots.length > 1 && (
                    <div className="flex justify-center mt-4 space-x-2">
                      {project.screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'bg-dark-blue'
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Student Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student</h3>
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={student.avatar}
                  alt={student.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{student.name}</h4>
                  <p className="text-gray-600">{student.graduationYear} • {student.school}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">{student.bio}</p>
              <div className="flex flex-wrap gap-2">
                {student.skills.slice(0, 4).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
                {student.skills.length > 4 && (
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    +{student.skills.length - 4} more
                  </span>
                )}
              </div>
              <Link
                href={`/students/${student.id}`}
                className="block mt-4 text-center btn-primary text-sm"
              >
                View Profile
              </Link>
            </div>

            {/* Project Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Created</span>
                  <span className="font-medium">
                    {new Date(project.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">School</span>
                  <span className={getSchoolTagClass(project.school)}>
                    {project.school}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year</span>
                  <span className="font-medium">{project.graduationYear}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More from {student.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}



