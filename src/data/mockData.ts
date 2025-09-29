export interface Student {
  id: string;
  name: string;
  graduationYear: number;
  school: 'SSE' | 'SHSS' | 'BA';
  bio: string;
  skills: string[];
  avatar: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  studentId: string;
  studentName: string;
  graduationYear: number;
  school: 'SSE' | 'SHSS' | 'BA';
  techStack: string[];
  thumbnail: string;
  banner: string;
  screenshots: string[];
  githubUrl: string;
  liveDemoUrl: string;
  createdAt: string;
}

export const students: Student[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    graduationYear: 2024,
    school: 'SSE',
    bio: 'Passionate about full-stack development and machine learning. Love creating user-friendly applications that solve real-world problems.',
    skills: ['React', 'Node.js', 'Python', 'Machine Learning', 'TypeScript'],
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Alex Rodriguez',
    graduationYear: 2023,
    school: 'SHSS',
    bio: 'Digital humanities researcher with expertise in data visualization and interactive storytelling.',
    skills: ['D3.js', 'Python', 'Data Visualization', 'Digital Humanities', 'JavaScript'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    graduationYear: 2024,
    school: 'BA',
    bio: 'Business analyst with a passion for fintech and user experience design.',
    skills: ['Figma', 'SQL', 'Business Analysis', 'UX Design', 'Excel'],
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '4',
    name: 'David Kim',
    graduationYear: 2025,
    school: 'SSE',
    bio: 'Mobile app developer focused on creating accessible and inclusive applications.',
    skills: ['React Native', 'Swift', 'Kotlin', 'Accessibility', 'UI/UX'],
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'EcoTrack - Environmental Impact Tracker',
    description: 'A comprehensive web application that helps users track their environmental footprint through daily activities. Features include carbon footprint calculation, sustainability tips, and progress visualization through interactive charts and graphs.',
    studentId: '1',
    studentName: 'Sarah Chen',
    graduationYear: 2024,
    school: 'SSE',
    techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'TailwindCSS'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    banner: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    ],
    githubUrl: 'https://github.com/sarahchen/ecotrack',
    liveDemoUrl: 'https://ecotrack-demo.vercel.app',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Medieval Manuscripts Digital Archive',
    description: 'An interactive digital archive showcasing medieval manuscripts with advanced search capabilities, high-resolution image viewing, and scholarly annotations. Built for academic research and public education.',
    studentId: '2',
    studentName: 'Alex Rodriguez',
    graduationYear: 2023,
    school: 'SHSS',
    techStack: ['D3.js', 'Python', 'Flask', 'PostgreSQL', 'Bootstrap'],
    thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    banner: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=400&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    ],
    githubUrl: 'https://github.com/alexrodriguez/medieval-archive',
    liveDemoUrl: 'https://medieval-archive.herokuapp.com',
    createdAt: '2023-11-20'
  },
  {
    id: '3',
    title: 'FinTech Dashboard for Small Businesses',
    description: 'A comprehensive financial dashboard designed for small business owners to track expenses, revenue, and financial health. Includes automated reporting and predictive analytics.',
    studentId: '3',
    studentName: 'Emma Thompson',
    graduationYear: 2024,
    school: 'BA',
    techStack: ['Vue.js', 'Python', 'SQLite', 'Chart.js', 'CSS3'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    banner: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    ],
    githubUrl: 'https://github.com/emmathompson/fintech-dashboard',
    liveDemoUrl: 'https://fintech-dashboard.netlify.app',
    createdAt: '2024-02-10'
  },
  {
    id: '4',
    title: 'AccessiMap - Accessibility-First Navigation',
    description: 'A mobile application that provides accessible navigation for users with disabilities. Features include voice navigation, wheelchair-accessible route planning, and real-time accessibility updates.',
    studentId: '4',
    studentName: 'David Kim',
    graduationYear: 2025,
    school: 'SSE',
    techStack: ['React Native', 'TypeScript', 'Firebase', 'Google Maps API', 'Expo'],
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    banner: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=400&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    ],
    githubUrl: 'https://github.com/davidkim/accessimap',
    liveDemoUrl: 'https://accessimap.app',
    createdAt: '2024-03-05'
  },
  {
    id: '5',
    title: 'AI-Powered Study Assistant',
    description: 'An intelligent study companion that creates personalized study plans, tracks progress, and provides AI-generated practice questions based on course materials.',
    studentId: '1',
    studentName: 'Sarah Chen',
    graduationYear: 2024,
    school: 'SSE',
    techStack: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    banner: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    ],
    githubUrl: 'https://github.com/sarahchen/ai-study-assistant',
    liveDemoUrl: 'https://ai-study-assistant.vercel.app',
    createdAt: '2024-01-30'
  },
  {
    id: '6',
    title: 'Cultural Heritage VR Experience',
    description: 'An immersive virtual reality experience that allows users to explore historical sites and cultural artifacts in 3D. Built for educational institutions and museums.',
    studentId: '2',
    studentName: 'Alex Rodriguez',
    graduationYear: 2023,
    school: 'SHSS',
    techStack: ['Unity', 'C#', 'WebXR', 'Blender', 'Three.js'],
    thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    banner: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=400&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    ],
    githubUrl: 'https://github.com/alexrodriguez/cultural-vr',
    liveDemoUrl: 'https://cultural-vr-experience.com',
    createdAt: '2023-12-15'
  }
];



