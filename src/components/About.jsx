export default function About({ personalData, achievements, education }) {
  return (
    <section 
      id="about" 
      className="px-4 sm:px-6 lg:px-8 py-20 bg-[#09090b] border-t border-neutral-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest block mb-2">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Styled Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-stretch">
            <div className="w-full bg-[#18181b] border border-neutral-800 rounded-2xl p-6 relative overflow-hidden group hover:border-neutral-700 transition-all duration-300">
              {/* Card Accent Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-blue-500/5 blur-xl group-hover:bg-blue-500/10 transition-all duration-300" />
              
              {/* Profile Image/Avatar Placeholder */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-zinc-900 border border-neutral-800 flex items-center justify-center text-4xl shadow-inner relative">
                  👨🏻‍💻
                  {/* Small online/open dot indicator */}
                  <span className="absolute bottom-1 right-1 block h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-[#18181b]" />
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4 text-center lg:text-left">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">{personalData.name}</h3>
                  <p className="text-sm text-zinc-500">{personalData.title}</p>
                </div>

                <div className="border-t border-neutral-800 pt-4 space-y-3 font-mono text-xs">
                  <div className="flex items-center space-x-3 text-zinc-400 justify-center lg:justify-start">
                    {/* Location Icon */}
                    <svg className="h-4 w-4 text-zinc-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="xl:text-sm">{personalData.location}</span>
                  </div>

                  <a 
                    href={`mailto:${personalData.email}`}
                    className="flex items-center space-x-3 text-zinc-400 hover:text-zinc-200 transition-colors justify-center lg:justify-start xl:text-sm"
                  >
                    {/* Mail Icon */}
                    <svg className="h-4 w-4 text-zinc-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{personalData.email}</span>
                  </a>

                  <a 
                    href={`tel:${personalData.phone}`}
                    className="flex items-center space-x-3 text-zinc-400 hover:text-zinc-200 transition-colors justify-center lg:justify-start xl:text-sm" 
                  >
                    {/* Phone Icon */}
                    <svg className="h-4 w-4 text-zinc-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{personalData.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Achievements, Education */}
          <div className="lg:col-span-7 space-y-10">
            {/* Bio Text */}
            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              <p>
                {personalData.bio}
              </p>
              <p>
                As a developer, I enjoy bridging the gap between design and development. I love building APIs that handle data efficiently and designing visual layouts that are intuitive and load in milliseconds.
              </p>
            </div>

            {/* Achievements Checklist */}
            <div>
              <h3 className="text-zinc-100 font-semibold mb-4 text-sm sm:text-base xl:text-2xl">Key Achievements</h3>
              <div className="grid grid-cols-1 gap-3.5">
                {achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-zinc-400 text-sm">
                    {/* Checkmark SVG */}
                    <span className="flex-shrink-0 mt-0.5 p-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Info */}
            <div>
              <h3 className="text-zinc-100 font-semibold mb-4 text-sm sm:text-base xl:text-2xl">Education</h3>
              <div className="space-y-4">
                {education.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-[#18181b] border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h4 className="font-bold text-zinc-100 text-sm sm:text-base">{item.degree}</h4>
                      <span className="text-xs font-mono px-2.5 py-0.5 bg-zinc-900 border border-neutral-800 text-zinc-400 rounded-full w-fit">
                        Class of {item.year}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400">{item.institution}</p>
                    <p className="text-xs text-zinc-500 mt-1">{item.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
