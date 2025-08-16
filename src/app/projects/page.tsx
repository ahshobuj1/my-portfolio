import ProjectCard from '@/components/UI/ProjectCard';
import {projects} from '@/data/projects';
import {Container} from '@mui/material';

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div>
      <Container sx={{my: 2}}>
        <div>
          {/* Header */}
          <div className="text-center my-12 ">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-main dark:text-white mb-4 uppercase">
              My Projects
            </h1>
            <p className="text-xl text-secondary-main dark:text-white max-w-3xl mx-auto">
              A collection of web applications, SaaS products, and full-stack
              solutions I&apos;ve built using modern technologies
            </p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-secondary-main dark:text-white mb-8 uppercase">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* All Projects */}
          <section>
            <h2 className="text-2xl font-bold text-secondary-main dark:text-white mb-8 uppercase">
              All Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
