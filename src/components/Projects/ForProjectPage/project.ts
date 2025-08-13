// import ProjectCard from '@/components/UI/ProjectCard';
// import {projects} from '@/data/projects';

// export default function ProjectsPage() {
//   const featuredProjects = projects.filter((p) => p.featured);
//   const otherProjects = projects.filter((p) => !p.featured);

//   return (
//     <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             My Projects
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             A collection of web applications, SaaS products, and full-stack
//             solutions I&apos;ve built using modern technologies
//           </p>
//         </div>

//         {/* Featured Projects */}
//         {featuredProjects.length > 0 && (
//           <section className="mb-16">
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
//               Featured Projects
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {featuredProjects.map((project) => (
//                 <ProjectCard key={project.id} project={project} />
//               ))}
//             </div>
//           </section>
//         )}

//         {/* All Projects */}
//         <section>
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
//             All Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {otherProjects.map((project) => (
//               <ProjectCard key={project.id} project={project} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
