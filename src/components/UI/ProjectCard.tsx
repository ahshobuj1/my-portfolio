'use client';

import Link from 'next/link';
import {TProject} from '@/types';
import ScrollHoverImage from '../Projects/ScrollHoverImage';

export default function ProjectCard({project}: {project: TProject}) {
  return (
    <article className="group block">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
        {/* Main clickable area */}
        <Link href={`/projects/${project.id}`} className="block">
          {/* Image */}
          <div className="relative h-72 overflow-hidden">
            <ScrollHoverImage src={project.image} alt={project.name} />

            {project.featured && (
              <div className="absolute top-4 left-4 bg-primary-main text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </div>
            )}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
              {project.category.toUpperCase()}
            </div>
          </div>

          {/* Info */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-secondary-main dark:text-white mb-2 group-hover:text-primary-main transition-colors">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
          </div>
        </Link>

        {/* Skills */}
        <div className="px-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project?.skills?.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="bg-primary-main/10 text-primary-main px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
            {project?.skills?.length > 4 && (
              <span className="text-gray-500 text-xs py-1">
                +{project.skills.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Footer Links */}
        <div className="px-6 pb-6 flex items-center justify-between">
          <div className="flex space-x-3">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-main hover:underline transition-all text-sm font-medium">
              Live Demo ↗
            </Link>
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-main hover:underline text-sm font-medium">
              GitHub ↗
            </Link>
          </div>
          <time
            dateTime={project.completedDate}
            className="text-gray-500 text-xs">
            {project.completedDate}
          </time>
        </div>
      </div>
    </article>
  );
}
