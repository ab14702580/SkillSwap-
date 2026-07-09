import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* সব জায়গায় clasName পরিবর্তন করে className করা হয়েছে */}
      <div className="bg-[#030712] text-[#9ca3af] min-h-screen flex flex-col justify-between">

        <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
              Skill Swap
            </h1>
            <p className="text-base md:text-lg text-[#9ca3af] max-w-md leading-relaxed">
              Empowering technical teams with high-performance infrastructure and organized intelligence.
            </p>
          </div>

          <div className="w-full">
            <div className="rounded-xl overflow-hidden border border-[#1f2937] bg-[#0b0f19] p-1 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Server Room"
                className="w-full h-auto rounded-lg object-cover brightness-75 contrast-125 mix-blend-luminosity bg-blue-950/20"
              />
            </div>
          </div>
        </main>

        <footer className="bg-[#020617] border-t border-[#1f2937] w-full">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

            <div className="space-y-4">
              <div className='flex gap-2.5 items-center'>
                <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/20">
                  {/* Grid Icon representation */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                  </svg>
                </div>
                <span className="text-[16px] font-semibold text-[#F4F1EA] tracking-wide">SkillSwap</span>
              </div>
              <p className="text-[#6b7280] leading-relaxed pr-4">
                Precision engineering for modern operators. We provide the structural hierarchy and functional density required for high-performance SaaS environments.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-[#4b5563] uppercase tracking-wider">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <i className="fa-regular fa-envelope mt-0.5 text-[#4b5563]"></i>
                  <a href="mailto:support@saasplatform.com" className="hover:text-white transition-colors">support@saasplatform.com</a>
                </li>
                <li className="flex items-start gap-2.5 text-[#6b7280]">
                  <i className="fa-solid fa-location-dot mt-0.5 text-[#4b5563]"></i>
                  <span>123 Tech Lane,San Francisco, CA</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-[#4b5563] uppercase tracking-wider">Connect</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5">
                  <i className="fa-solid fa-share-nodes text-[#4b5563]"></i>
                  <a href="#" className="hover:text-white transition-colors">Twitter</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="fa-solid fa-briefcase text-[#4b5563]"></i>
                  <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="fa-code text-[#4b5563]"></i>
                  <a href="#" className="hover:text-white transition-colors">GitHub</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-[#4b5563] uppercase tracking-wider">Compliance</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-[#111827] bg-[#01040f] py-4 text-xs">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[#4b5563]">
              <div>
                © 2024 Kinetic Logic. All rights reserved.
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  Status: <span className="text-[#10b981] font-medium">Operational</span>
                </span>
                <span>v2.4.0-stable</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;