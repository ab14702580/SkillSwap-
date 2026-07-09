import { Camera, Clock, ShieldCheck, Star, Zap, Sun, ArrowLeft } from 'lucide-react';
import { use } from 'react';
import { useNavigate, useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';

const data = fetch('/skillData.json').then(res => res.json());

const CardDetails = () => {
    const navigate = useNavigate();
    const details = use(data);
    const { id } = useParams();
    console.log(id, details)
    // প্রোভাইড করা ডাটা অবজেক্ট
    const handelBack = () => navigate(-1);
    const skillData = details.find(item => item.skillId == id);

    return (<div>
        <header className='sticky top-0 z-50'>
            <Navbar />
        </header>

    <div className="min-h-screen bg-[#070b1e] text-slate-300 font-sans flex flex-col justify-between">
        <button
                        onClick={handelBack} // অথবা আপনার রাউটিং লজিক (যেমন: navigate(-1))
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[#161f38] text-gray-300 border border-gray-800 hover:text-white hover:bg-[#1e294b] hover:border-gray-700 transition-all duration-200 group shadow-md mb-5 max-w-25 mt-10"
                    >
                        <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform duration-200 text-indigo-400" />
                        <span>Back</span>
                    </button>
      {/* মেইন কন্টেন্ট কন্টেইনার */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* বাম পাশের মেইন সেকশন */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* হেডার / টাইটেল সেকশন */}
          <div className="space-y-4">
            <span className="bg-[#4f16ed] text-white text-xs font-semibold px-2.5 py-1 rounded uppercase tracking-wider">
              {skillData.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              {skillData.skillName}
            </h1>
            
            {/* রেটিং এবং প্রোভাইডার */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
              <div className="flex items-center text-amber-400">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <Star className="w-4 h-4 fill-current text-slate-600" />
                <span className="ml-2 text-white font-medium">{skillData.rating}</span>
                <span className="ml-1">(128 reviews)</span>
              </div>
              <span className="hidden md:inline text-slate-600">|</span>
              <div>
                by <span className="text-blue-400 font-medium">{skillData.providerName}</span>
              </div>
            </div>
          </div>

          {/* ইমেজ সেকশন (ডিজাইন অনুযায়ী প্লেসমেন্ট) */}
          <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            <img 
              src={skillData.image} 
              alt={skillData.skillName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* ডেসক্রিপশন বক্স */}
          <div className="bg-[#0f1631] border border-slate-800/60 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-3">Description</h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              {skillData.description}
            </p>
          </div>

          {/* ৩টি কী-ফিচার কার্ডস */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Shutter Speed */}
            <div className="bg-[#0f1631] border border-slate-800/60 p-5 rounded-xl text-center flex flex-col items-center justify-center space-y-2">
              <Clock className="w-6 h-6 text-blue-400" />
              <h3 className="font-semibold text-white text-sm">Shutter Speed</h3>
              <p className="text-xs text-slate-400">Master motion blur and high-speed action.</p>
            </div>
            
            {/* Aperture */}
            <div className="bg-[#0f1631] border border-slate-800/60 p-5 rounded-xl text-center flex flex-col items-center justify-center space-y-2">
              <Camera className="w-6 h-6 text-purple-400" />
              <h3 className="font-semibold text-white text-sm">Aperture</h3>
              <p className="text-xs text-slate-400">Control depth of field and bokeh effects.</p>
            </div>

            {/* ISO Control */}
            <div className="bg-[#0f1631] border border-slate-800/60 p-5 rounded-xl text-center flex flex-col items-center justify-center space-y-2">
              <Sun className="w-6 h-6 text-amber-400" />
              <h3 className="font-semibold text-white text-sm">ISO Control</h3>
              <p className="text-xs text-slate-400">Balance exposure and digital noise.</p>
            </div>
          </div>

          {/* What you'll learn সেকশন */}
          <div className="bg-[#0f1631] border border-slate-800/60 p-6 rounded-xl shadow-lg space-y-5">
            <h2 className="text-xl font-semibold text-white">What you'll learn</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-500/10 p-1 rounded-full border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Technical Mastery</h4>
                  <p className="text-xs text-slate-400">Full manual control over shutter speed, aperture, and ISO settings.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-500/10 p-1 rounded-full border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Composition Rules</h4>
                  <p className="text-xs text-slate-400">Advanced framing techniques, leading lines, and the rule of thirds.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-500/10 p-1 rounded-full border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Post-Processing Workflow</h4>
                  <p className="text-xs text-slate-400">Basic RAW editing and color grading essentials.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ডান পাশের বুকিং ফর্ম / সাইডবার */}
        <div className="lg:col-span-1">
          <div className="bg-[#0f1631] border border-slate-800 p-6 rounded-xl shadow-xl sticky top-20 space-y-6">
            
            {/* প্রাইস এবং স্লট */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Session Price</p>
                <p className="text-3xl font-bold text-white">${skillData.price.toFixed(2)}</p>
              </div>
              <span className="bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold px-2.5 py-1 rounded tracking-wide uppercase">
                {skillData.slotsAvailable} Slots Left
              </span>
            </div>

            {/* ইনপুট ফর্ম */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-[#070b1e] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#4f16ed] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-[#070b1e] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#4f16ed] transition-colors"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#4f16ed] hover:bg-[#4312cf] text-white font-semibold py-3 px-4 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                Book Now <Zap className="w-4 h-4 fill-current" />
              </button>
            </form>

            <div className="text-center">
              <span className="text-xs text-slate-500 font-mono">Skill ID: #{skillData.skillId}</span>
            </div>

            <hr className="border-slate-800/80" />

            {/* এক্সট্রা ইনফো */}
            <div className="space-y-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-slate-500 mt-0.5" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ফুটার সেকশন */}
      <footer className="w-full border-t border-slate-900 bg-[#070b1e] py-6 px-4 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-sm tracking-wide">SkillSwap</span>
            <span>© 2026 SkillSwap. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#help" className="hover:text-slate-300 transition-colors">Help Center</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
    </div>)
};

export default CardDetails;