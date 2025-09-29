import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Project } from '@/data/mockData'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
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
    <div className="card group overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <Link
            href={`/projects/${project.id}`}
            className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 btn-primary"
          >
            View Project
          </Link>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-dark-blue transition-colors">
            {project.title}
          </h3>
        </div>
        
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={`https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face`}
              alt={project.studentName}
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{project.studentName}</p>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {project.graduationYear}
              </span>
              <span className={getSchoolTagClass(project.school)}>
                {project.school}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <Link
            href={`/projects/${project.id}`}
            className="text-sm text-dark-blue hover:text-blue-800 font-medium transition-colors"
          >
            Learn more →
          </Link>
          <div className="flex space-x-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}



