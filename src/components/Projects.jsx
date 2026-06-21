export default function Projects({ projectsData }) {
 
  const getProjectTags = (id) => {
    switch (id) {
      case 1:
        return ['MERN STACK', 'AI INTEGRATION', 'SHIPPED'];
      case 2:
        return ['FULL STACK', 'EDTECH', 'SHIPPED'];
      case 3:
        return ['FRONTEND', 'GAMING', 'SHIPPED'];
      default:
        return ['WEB APP'];
    }
  };

  return (
    <section 
      id="projects" 
      className="px-4 sm:px-6 lg:px-8 py-20 bg-[#09090b] border-t border-neutral-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest block mb-2">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="bg-[#18181b] border border-neutral-800 rounded-2xl flex flex-col justify-between overflow-hidden group hover:border-neutral-700 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Card Top: Visual & Tags */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  {/* Large visual representation */}
                  <span className="text-3xl p-3 bg-zinc-900 border border-neutral-800 rounded-xl group-hover:border-neutral-700 transition-colors duration-300">
                    {project.image}
                  </span>
                  
                  {/* Status Badges */}
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {getProjectTags(project.id).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className={`px-2 py-0.5 text-[9px] font-mono font-medium rounded-md tracking-wider ${
                          tag === 'SHIPPED' 
                            ? 'bg-emerald-500/5 border border-emerald-500/20 text-emerald-400' 
                            : 'bg-zinc-900 border border-neutral-800 text-zinc-400'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom: Tech Pills & Actions */}
              <div className="px-6 pb-6 mt-auto">
                {/* Tech list */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono text-zinc-500 bg-zinc-900 border border-neutral-800 rounded xl:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-900 font-mono text-xs">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/10 hover:border-emerald-500/20 rounded-lg transition-all duration-300 text-center"
                  >
                    <span className="xl:text-xs">Live Demo</span>
                    {/* Link External Arrow SVG */}
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all duration-300 text-center"
                  >
                    <span className="xl:text-sm">Code</span>
                    {/* Github Icon Outline SVG */}
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
