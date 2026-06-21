import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('r26m_PXf4oGxQGn2C');

export default function Contact({ personalData, socialData }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setStatus('submitting');
    
    try {
      await emailjs.send(
        'service_dguzfbq',
        'template_14pmlrl',  
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          to_email: 'lovanshiaakash5@gmail.com'
        }
      );
      
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('idle');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      className="px-4 sm:px-6 lg:px-8 py-20 bg-[#09090b] border-t border-neutral-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest block mb-2">
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">Want to connect?</h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                Reach out for collaborations, project inquiries, or just to say hello. I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Quick Details */}
            <div className="space-y-4 font-mono text-xs text-zinc-400">
              <a 
                href={`mailto:${personalData.email}`} 
                className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-zinc-900/50 border border-neutral-800 hover:border-neutral-700 hover:text-zinc-100 transition-all duration-300 w-fit"
              >
                <svg className="h-4 w-4 text-zinc-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className='xl:text-sm'>{personalData.email}</span>
              </a>

              <a 
                href={`tel:${personalData.phone}`} 
                className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-zinc-900/50 border border-neutral-800 hover:border-neutral-700 hover:text-zinc-100 transition-all duration-300 w-fit xl:text-sm"
              >
                <svg className="h-4 w-4 text-zinc-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{personalData.phone}</span>
              </a>
            </div>

            {/* Socials Connection */}
            <div className="space-y-3">
              <h4 className="text-zinc-500 uppercase font-mono text-[10px] tracking-wider font-semibold xl:text-sm">
                Social Networks
              </h4>
              <div className="flex items-center space-x-3">
                {/* LinkedIn - ✅ FIXED */}
                <a
                  href={socialData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-neutral-800 hover:border-neutral-700 text-zinc-400 hover:text-zinc-100 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                
                {/* GitHub - ✅ FIXED */}
                <a
                  href={socialData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-neutral-800 hover:border-neutral-700 text-zinc-400 hover:text-zinc-100 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                </a>

                {/* Twitter - ✅ FIXED */}
                <a
                  href={socialData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-neutral-800 hover:border-neutral-700 text-zinc-400 hover:text-zinc-100 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-[#18181b] border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:border-neutral-700 transition-colors duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 text-sm bg-zinc-900 border border-neutral-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-neutral-600 transition-colors"
                  />
                </div>
                
                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 text-sm bg-zinc-900 border border-neutral-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-neutral-600 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Hey, let's talk about building..."
                  className="w-full px-4 py-3 text-sm bg-zinc-900 border border-neutral-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <div>
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`w-full py-3.5 px-6 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    status === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                      : status === 'submitting'
                      ? 'bg-zinc-800 border border-neutral-700 text-zinc-400 cursor-wait'
                      : 'bg-zinc-100 hover:bg-white text-[#09090b]'
                  }`}
                >
                  {status === 'success'
                    ? 'Message Sent Successfully ✓'
                    : status === 'submitting'
                    ? 'Sending Message...'
                    : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}