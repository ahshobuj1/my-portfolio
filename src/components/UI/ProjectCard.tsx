'use client';

import Image from 'next/image';
import Link from 'next/link';
import {TProject} from '@/types';

interface ProjectCardProps {
  project: TProject;
}

export default function ProjectCard({project}: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {project.featured && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
            {project.category.toUpperCase()}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
            {project.skills.length > 4 && (
              <span className="text-gray-500 text-xs">
                +{project.skills.length - 4} more
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                onClick={(e) => e.stopPropagation()}>
                Live Demo ↗
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-sm font-medium"
                onClick={(e) => e.stopPropagation()}>
                GitHub ↗
              </a>
            </div>
            <span className="text-gray-500 text-xs">
              {project.completedDate}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
