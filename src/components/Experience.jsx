export default function Experience({ experienceData }) {
  return (
    <section 
      id="experience" 
      className="px-4 sm:px-6 lg:px-8 py-20 bg-[#09090b] border-t border-neutral-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest block mb-2">
            History
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Work Experience
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-neutral-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experienceData.map((job) => (
            <div key={job.id} className="relative group">
              {/* Timeline Dot Indicator */}
              <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 border border-neutral-800 group-hover:border-blue-500 transition-colors duration-300">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors duration-300" />
              </span>

              {/* Experience Card */}
              <div className="bg-[#18181b] border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all duration-300">
                {/* Job Metadata Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors duration-300">
                      {job.position}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-mono text-zinc-400">
                      <span className="text-blue-400 font-semibold">{job.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Dates badge */}
                  <div className="flex flex-col items-start md:items-end flex-shrink-0 font-mono text-xs">
                    <span className="px-3 py-1 bg-zinc-900 border border-neutral-800 rounded-full text-zinc-300">
                      {job.startDate} — {job.endDate}
                    </span>
                    <span className="text-zinc-500 text-[10px] uppercase tracking-wider mt-1.5 font-medium">
                      Duration: {job.duration}
                    </span>
                  </div>
                </div>

                {/* Job Achievements / Bullet points */}
                <div className="space-y-3.5">
                  {job.description.map((bullet, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {/* Check icon or bullet dot */}
                      <span className="mt-1 flex-shrink-0">
                        <svg className="h-4 w-4 text-blue-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
