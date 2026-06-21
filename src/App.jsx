import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothFollower from './components/SmoothFollower';

function App() {
  return (<>
      <SmoothFollower/>
    <div className="bg-[#09090b] text-zinc-100 min-h-screen  antialiased selection:bg-blue-500/20 selection:text-blue-300">
      {/* Navigation Bar */}
      <Navbar personalData={portfolioData.personal} />

      {/* Hero Section */}
      <Hero personalData={portfolioData.personal} />

      {/* About Section */}
      <About 
        personalData={portfolioData.personal} 
        achievements={portfolioData.achievements} 
        education={portfolioData.education} 
      />

      {/* Skills Section */}
      <Skills skillsData={portfolioData.skills} />

      {/* Projects Section */}
      <Projects projectsData={portfolioData.projects} />

      {/* Experience Section */}
      <Experience experienceData={portfolioData.experience} />

      {/* Contact Section */}
      <Contact 
        personalData={portfolioData.personal} 
        socialData={portfolioData.social} 
      />

      {/* Footer */}
      <Footer personalData={portfolioData.personal} />
    </div>
    </>
  );
}

export default App;
