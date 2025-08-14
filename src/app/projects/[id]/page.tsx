import {projects} from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';

const ProjectDetails = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="bg-[#f0f4f8] dark:bg-[#0f1b2b] min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-[#2aa9ff] hover:text-[#1e88cc] mb-8 font-medium transition-colors">
          ← Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#12304b] dark:text-[#e0e7ff]">
              {project.name}
            </h1>
            {project.featured && (
              <span className="bg-[#2aa9ff] text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                Featured
              </span>
            )}
          </div>
          <p className="text-lg text-[#12304b]/80 dark:text-[#cbd5e1] mb-6">
            {project.title}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2aa9ff] hover:bg-[#1e88cc] text-white px-6 py-3 rounded-lg font-medium transition-colors shadow">
              View Live Demo ↗
            </Link>
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-main text-primary-main px-6 py-3 rounded-lg font-medium transition-colors">
              View Code ↗
            </Link>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {project?.images?.map((image, index) => (
            <div
              key={index}
              className="relative h-64 lg:h-80 rounded-xl overflow-hidden group shadow-lg">
              <Image
                src={image}
                alt={`${project.name} screenshot ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-[#12304b] dark:text-[#e0e7ff] mb-4">
                About This Project
              </h2>
              <p className="text-[#12304b]/80 dark:text-[#cbd5e1] leading-relaxed">
                {project.longDescription}
              </p>
            </section>

            {/* Features */}
            {project?.features && (
              <section>
                <h2 className="text-2xl font-bold text-[#12304b] dark:text-[#e0e7ff] mb-4">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-[#12304b]/80 dark:text-[#cbd5e1]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Challenges */}
            {project?.challenges && (
              <section>
                <h2 className="text-2xl font-bold text-[#12304b] dark:text-[#e0e7ff] mb-4">
                  Technical Challenges
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">⚡</span>
                      <span className="text-[#12304b]/80 dark:text-[#cbd5e1]">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Project Info */}
            <div className="bg-[#e6f0ff] dark:bg-[#12304b]/20 rounded-xl p-6 shadow">
              <h3 className="text-lg font-bold text-[#12304b] dark:text-[#e0e7ff] mb-4">
                Project Details
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-[#12304b]/60 dark:text-[#cbd5e1]">
                    Category
                  </dt>
                  <dd className="text-sm text-[#12304b] dark:text-[#e0e7ff] capitalize">
                    {project.category}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-[#12304b]/60 dark:text-[#cbd5e1]">
                    Completed
                  </dt>
                  <dd className="text-sm text-[#12304b] dark:text-[#e0e7ff]">
                    {project.completedDate}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Technologies */}
            <div className="bg-[#e6f0ff] dark:bg-[#12304b]/20 rounded-xl p-6 shadow">
              <h3 className="text-lg font-bold text-[#12304b] dark:text-[#e0e7ff] mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#2aa9ff]/20 text-[#2aa9ff] dark:bg-[#2aa9ff]/30 dark:text-[#2aa9ff] px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
