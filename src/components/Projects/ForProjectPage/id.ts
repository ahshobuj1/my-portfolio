// import Image from 'next/image';
// import Link from 'next/link';
// import {projects} from '@/data/projects';

// interface ProjectDetailsProps {
//   params: {id: string};
// }

// const ProjectDetails = async ({params}: ProjectDetailsProps) => {
//   const project = projects.find((p) => p.id === params.id);

//   if (!project) {
//     return null;
//   }

//   return (
//     <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-blue-200">
//       <div className="max-w-6xl mx-auto">
//         {/* Back Button */}
//         <Link
//           href="/projects"
//           className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
//           ← Back to Projects
//         </Link>

//         {/* Project Header */}
//         <div className="mb-12">
//           <div className="flex items-center gap-4 mb-4">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
//               {project.name}
//             </h1>
//             {project.featured && (
//               <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                 Featured
//               </span>
//             )}
//           </div>
//           <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
//             {project.title}
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap gap-4 mb-8">
//             <a
//               href={project.liveLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
//               View Live Demo ↗
//             </a>
//             <a
//               href={project.githubLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
//               View Code ↗
//             </a>
//           </div>
//         </div>

//         {/* Project Images Gallery */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
//           {project?.images?.map((image, index) => (
//             <div
//               key={index}
//               className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
//               <Image
//                 src={image}
//                 alt={`${project.name} screenshot ${index + 1}`}
//                 fill
//                 className="object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             {/* Description */}
//             <section className="mb-8">
//               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                 About This Project
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                 {project.longDescription}
//               </p>
//             </section>

//             {/* Features */}
//             {project?.features && (
//               <section className="mb-8">
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                   Key Features
//                 </h2>
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   {project.features.map((feature, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <span className="text-green-500 mt-1">✓</span>
//                       <span className="text-gray-600 dark:text-gray-300">
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </section>
//             )}

//             {/* Challenges */}
//             {project?.challenges && (
//               <section>
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                   Technical Challenges
//                 </h2>
//                 <ul className="space-y-3">
//                   {project.challenges.map((challenge, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <span className="text-orange-500 mt-1">⚡</span>
//                       <span className="text-gray-600 dark:text-gray-300">
//                         {challenge}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </section>
//             )}
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             {/* Project Info */}
//             <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
//               <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
//                 Project Details
//               </h3>
//               <dl className="space-y-3">
//                 <div>
//                   <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                     Category
//                   </dt>
//                   <dd className="text-sm text-gray-900 dark:text-white capitalize">
//                     {project.category}
//                   </dd>
//                 </div>
//                 <div>
//                   <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                     Completed
//                   </dt>
//                   <dd className="text-sm text-gray-900 dark:text-white">
//                     {project.completedDate}
//                   </dd>
//                 </div>
//               </dl>
//             </div>

//             {/* Technologies */}
//             <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
//               <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
//                 Technologies Used
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {project.skills.map((skill) => (
//                   <span
//                     key={skill}
//                     className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
