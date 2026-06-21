export default function Skills({ skillsData }) {
  // Map categories to user-friendly titles and custom icons/styling
  const categories = [
    {
      key: 'frontend',
      title: 'Frontend Development',
      description: 'Building client-side applications and user interfaces',
      icon: (
        <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      key: 'backend',
      title: 'Backend Engineering',
      description: 'Developing server-side architecture and business logic',
      icon: (
        <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      key: 'database',
      title: 'Databases & Storage',
      description: 'Designing data schemas and managing query states',
      icon: (
        <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      key: 'tools',
      title: 'Tools & DevOps',
      description: 'Version control, API clients, and development setups',
      icon: (
        <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      key: 'other',
      title: 'Other Skills',
      description: 'Collaborative techniques and architectural principles',
      icon: (
        <svg className="h-5 w-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="skills" 
      className="px-4 sm:px-6 lg:px-8 py-20 bg-[#09090b] border-t border-neutral-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest block mb-2">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Skills & Stack
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const list = skillsData[cat.key] || [];
            if (list.length === 0) return null;

            return (
              <div 
                key={cat.key}
                className="bg-[#18181b] border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between group hover:border-neutral-700 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="p-2 bg-zinc-900 border border-neutral-800 rounded-xl group-hover:border-neutral-700 transition-colors duration-300">
                      {cat.icon}
                    </span>
                    <h3 className="text-base font-bold text-zinc-100 xl:text-xl">{cat.title}</h3>
                  </div>

                  <p className="text-xs text-zinc-500 mb-6 leading-relaxed xl:text-sm">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {list.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 text-xs font-mono text-zinc-300 bg-zinc-900/50 border border-neutral-800 rounded-md hover:border-neutral-700 hover:text-zinc-100 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
