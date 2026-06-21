export default function Hero({ personalData }) {
  const handleScrollToWork = (e) => {
    e.preventDefault();
    const targetEl = document.getElementById('projects');
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-[#09090b]"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-blue-500/5 blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center">
        {/* Open to Work Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-xs font-mono mb-8 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="xl:text-[17px]">Open to work opportunities</span>
        </div>

        {/* Large Name/Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-100 tracking-tight leading-none mb-6">
          {personalData.name}
        </h1>

        {/* Professional Subheading */}
        <p className="text-lg sm:text-2xl font-medium text-blue-400 tracking-wide mb-4">
          {personalData.title}
        </p>

        {/* Small Intro Paragraph */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed lg:text-lg">
          {personalData.subtitle}. Specializing in building scalable, user-centric web applications using the MERN stack.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
          <a
            href="#projects"
            onClick={handleScrollToWork}
            className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-[#09090b] bg-zinc-100 rounded-full hover:bg-white hover:scale-102 transition-all duration-300 shadow-lg shadow-white/5"
          >
            View Selected Work
          </a>
          <a
            href={personalData.resumeLink}
            className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-zinc-100 bg-zinc-900 border border-neutral-800 rounded-full hover:bg-zinc-800 hover:border-neutral-700 hover:scale-102 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Stats Grid - inspired by Ankita Saurav's stats grid */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-2xl border-t border-neutral-900 pt-10">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-4xl font-extrabold text-zinc-100 font-mono">3+</span>
            <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider font-medium mt-1">
              Projects Shipped
            </span>
          </div>
          <div className="flex flex-col items-center border-x border-neutral-900 px-2 sm:px-6">
            <span className="text-2xl sm:text-4xl font-extrabold text-zinc-100 font-mono">6m</span>
            <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider font-medium mt-1">
              Internship Exp.
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-4xl font-extrabold text-zinc-100 font-mono">100%</span>
            <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider font-medium mt-1">
              Vercel Deployed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
