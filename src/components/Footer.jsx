export default function Footer({ personalData }) {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const targetEl = document.getElementById(id);
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#09090b] border-t border-neutral-900 px-4 sm:px-6 lg:px-8 py-12 text-center text-xs font-mono text-zinc-500">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Copyright */}
        <div>
          <span className="xl:text-xs">&copy; {currentYear} {personalData.name}. All rights reserved.</span>
        </div>

        {/* Middle Side: Quick Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#home" onClick={(e) => handleScrollToSection(e, 'home')} className="hover:text-zinc-300 transition-colors xl:text-sm">
            Home
          </a>
          <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')} className="hover:text-zinc-300 transition-colors  colors xl:text-sm">
            About
          </a>
          <a href="#skills" onClick={(e) => handleScrollToSection(e, 'skills')} className="hover:text-zinc-300 transition-colors colors xl:text-sm">
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')} className="hover:text-zinc-300 transition-colors colors xl:text-sm">
            Projects
          </a>
          <a href="#experience" onClick={(e) => handleScrollToSection(e, 'experience')} className="hover:text-zinc-300 transition-colors colors xl:text-sm">
            Experience
          </a>
          <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')} className="hover:text-zinc-300 transition-colors colors xl:text-sm">
            Contact
          </a>
        </div>

        {/* Right Side: Credit */}
        <div>
          <span className="xl:text-xs">Made with React + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
