'use client'

import Image from 'next/image'
import Link from 'next/link'
import { students, projects } from '@/data/mockData'
import { ArrowLeft, Github, ExternalLink, Calendar, GraduationCap } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'

interface StudentProfilePageProps {
  params: {
    id: string
  }
}

export default function StudentProfilePage({ params }: StudentProfilePageProps) {
  const student = students.find(s => s.id === params.id)
  const studentProjects = projects.filter(p => p.studentId === params.id)

  if (!student) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Student Not Found</h1>
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

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <Image
                src={student.avatar}
                alt={student.name}
                width={120}
                height={120}
                className="rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {student.name}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <GraduationCap className="w-5 h-5" />
                  <span>Class of {student.graduationYear}</span>
                </div>
                <span className={getSchoolTagClass(student.school)}>
                  {student.school}
                </span>
              </div>
              <p className="text-lg text-gray-700 max-w-2xl">
                {student.bio}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Skills Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {student.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Projects ({studentProjects.length})
                </h2>
              </div>
              
              {studentProjects.length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Github className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects yet</h3>
                  <p className="text-gray-600">This student hasn't submitted any projects yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {studentProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Student Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Student Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Projects</span>
                  <span className="text-2xl font-bold text-dark-blue">
                    {studentProjects.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Graduation Year</span>
                  <span className="font-semibold">{student.graduationYear}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Program</span>
                  <span className={getSchoolTagClass(student.school)}>
                    {student.school}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Skills</span>
                  <span className="font-semibold">{student.skills.length}</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${student.name.toLowerCase().replace(' ', '.')}@university.edu`}
                  className="flex items-center space-x-3 text-gray-600 hover:text-dark-blue transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">@</span>
                  </div>
                  <span>Send Email</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-600 hover:text-dark-blue transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Github className="w-5 h-5" />
                  </div>
                  <span>GitHub Profile</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-600 hover:text-dark-blue transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <span>Portfolio Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



