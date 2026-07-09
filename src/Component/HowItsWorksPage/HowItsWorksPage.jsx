
import { Search, Calendar, Video, ShieldCheck, Shield, Banknote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function HowItsWorksPage() {
  return (
    <div className="min-h-screen bg-[#070b19] text-white font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* 1. Hero Section (How SkillSwap Works) */}
      <section className="max-w-4xl mx-auto text-center px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#e2e8f0] mb-6">
          How SkillSwap Works
        </h1>
        <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
          The bridge between aspiration and mastery. We connect high-performance professionals with world-class mentors through a precision-engineered learning ecosystem.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs md:text-sm font-medium text-gray-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-indigo-400" />
            <span>Expert Vetted</span>
          </div>
          <div className="hidden md:block h-4 w-px bg-gray-800"></div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-indigo-400" />
            <span>Secure Infrastructure</span>
          </div>
        </div>
      </section>

      {/* 2. The Journey Section (Steps 1 to 4) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Sticky/Column Content */}
          <div className="lg:col-span-4 lg:sticky lg:top-10 h-fit">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">The Journey</h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Follow our structured path to evolve your professional expertise. From discovery to full mastery, every step is optimized for high-fidelity knowledge transfer.
            </p>
            <div className="rounded-xl overflow-hidden border border-gray-900 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                alt="Collaboration Team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Process Steps Timeline */}
          <div className="lg:col-span-8 space-y-12 md:space-y-16">
            
            {/* Step 1 */}
            <div className="flex gap-4 md:gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-600/20">1</div>
                <div className="w-0.5 flex-1 bg-gradient-to-b from-indigo-600 to-indigo-950 mt-2"></div>
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-lg md:text-xl mb-3">
                  <Search className="h-5 w-5" />
                  <h3>Discover</h3>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                  Browse an elite roster of industry leaders, from Silicon Valley engineers to Wall Street analysts. Use our precision search filters to find the exact domain expertise you require.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Software Architecture', 'Quantitative Finance', 'Product Strategy'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#161f38] text-gray-400 border border-gray-800 text-xs rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 md:gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-600/20">2</div>
                <div className="w-0.5 flex-1 bg-gradient-to-b from-indigo-600 to-indigo-950 mt-2"></div>
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-lg md:text-xl mb-3">
                  <Calendar className="h-5 w-5" />
                  <h3>Connect</h3>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Our integrated scheduling system removes the friction of coordination. View real-time availability across global timezones and book sessions instantly with a single click.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 md:gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-600/20">3</div>
                <div className="w-0.5 flex-1 bg-gradient-to-b from-indigo-600 to-indigo-950 mt-2"></div>
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-lg md:text-xl mb-3">
                  <Video className="h-5 w-5" />
                  <h3>Learn</h3>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Engage in high-fidelity 1:1 video calls specifically designed for technical education. Features include low-latency screen sharing, collaborative code editing, and session recording for review.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 md:gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-600/20">4</div>
                <div className="h-0 w-0"></div> {/* End of Timeline Line */}
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-lg md:text-xl mb-3">
                  <span className="text-lg">🎖️</span>
                  <h3>Master</h3>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Post-session, receive curated resources and actionable feedback. Build a long-term network with your mentors and track your progress through our skill-mapping dashboard.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Engineered for Trust Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Engineered for Trust</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#0f162a] border border-gray-900 rounded-xl p-6 md:p-8 hover:border-indigo-900/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#161f38] border border-gray-800 flex items-center justify-center text-indigo-400 mb-6">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-200 mb-3">Verified Mentors</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Every mentor undergoes a rigorous 4-step vetting process including identity verification, background checks, and technical interviews to ensure only industry leaders are on the platform.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0f162a] border border-gray-900 rounded-xl p-6 md:p-8 hover:border-indigo-900/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#161f38] border border-gray-800 flex items-center justify-center text-indigo-400 mb-6">
              <Banknote className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-200 mb-3">Secure Payments</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Our specialized escrow system holds payments securely until the session is completed and both parties are satisfied. Professional billing and automated invoicing for corporate reimbursements.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0f162a] border border-gray-900 rounded-xl p-6 md:p-8 hover:border-indigo-900/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#161f38] border border-gray-800 flex items-center justify-center text-indigo-400 mb-6">
              <Calendar className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-200 mb-3">Flexible Scheduling</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Life happens. Our flexible reschedule and cancellation policy respects the high-performance schedules of both mentors and mentees, providing peace of mind for every booking.
            </p>
          </div>

        </div>
      </section>

      {/* 4. CTA & Footer Section */}
      <section className="border-t border-gray-900 bg-[#0a0f24]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
          
          {/* CTA Group */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-8 tracking-tight">
              Ready to start your journey?
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link to='/signUp' className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg text-sm transition-colors shadow-lg shadow-indigo-600/10">
                <span>Sign Up Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to='/category' className="bg-transparent border border-gray-800 hover:border-gray-700 hover:bg-[#161f38]/30 text-gray-300 font-semibold py-3 px-6 rounded-lg text-sm transition-all">
                Browse Pricing
              </Link>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-900 text-xs text-gray-500">
            <div className="text-center md:text-left">
              <span className="text-gray-300 font-bold text-base tracking-wide block mb-1">SkillSwap</span>
              <p>© 2026 SkillSwap. Precision Engineering for Professionals.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-400 font-medium">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Contact Support</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">API Documentation</a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}