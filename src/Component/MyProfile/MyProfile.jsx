import { 
  User, 
  LayoutDashboard, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Share2, 
  PlusCircle,
  Award
} from 'lucide-react';

const MyProfile = () => {
  // ড্যাশবোর্ডের জন্য ডাইনামিক ডাটা অবজেক্ট
  const profileData = {
    name: "Alex Rivera",
    email: "alex.rivera@example.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80", // রিপ্রেজেন্টেটিভ প্রোফাইল ইমেজ
    badges: ["Professional Mentor", "Top 1% Architect"],
    metrics: {
      mentorees: "42",
      rating: "4.98",
      totalHours: "1.2k",
      tokens: "850"
    },
    bio: "Senior Software Architect with over 10 years of experience in JavaScript frameworks and cloud-native systems. I specialize in building scalable backend infrastructures and mentoring high-growth engineering teams. Passionate about SkillSwap's mission to decentralize technical expertise.",
    skills: [
      { name: "JavaScript Architecture", level: "Expert", percentage: 95 },
      { name: "Backend Systems", level: "Expert", percentage: 88 },
      { name: "Cloud Infrastructure", level: "Advanced", percentage: 72 }
    ]
  };

  return (
    <div className="min-h-screen bg-[#070b1e] text-slate-300 font-sans p-4 md:p-8 flex flex-col justify-between">
      
      <div className="max-w-7xl mx-auto w-full space-y-6">
        
        {/* শীর্ষ প্রোফাইল ব্যানার কার্ড */}
        <div className="bg-[#0f1631] border border-slate-850 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-[#4f16ed] shadow-inner">
              <img 
                src={profileData.avatar} 
                alt={profileData.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{profileData.name}</h1>
              <p className="text-sm text-slate-400 font-mono">{profileData.email}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-1">
                {profileData.badges.map((badge, idx) => (
                  <span 
                    key={idx} 
                    className={`text-[10px] md:text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                      idx === 0 
                        ? 'bg-slate-800 text-slate-300 border-slate-700' 
                        : 'bg-purple-950/40 text-purple-400 border-purple-900/50'
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <button className="bg-[#4f16ed] hover:bg-[#4312cf] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all active:scale-[0.98] shadow-lg flex items-center gap-2">
            Update Profile
          </button>
        </div>

        {/* মেইন গ্রিড লেআউট */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* বাম কলাম: সাইডবার এবং ম্যাট্রিক্স */}
          <div className="space-y-6 lg:col-span-1">
            
            {/* প্রোফাইল ম্যাট্রিক্স সেকশন */}
            <div className="bg-[#0f1631] border border-slate-850 rounded-xl p-5 shadow-lg space-y-4">
              <div className="border-l-4 border-purple-500 pl-3">
                <h3 className="text-sm font-semibold text-white tracking-wide uppercase">Profile Metrics</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#070b1e] border border-slate-900 p-4 rounded-lg text-center">
                  <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1">Mentorees</p>
                  <p className="text-2xl font-black text-white">{profileData.metrics.mentorees}</p>
                </div>
                <div className="bg-[#070b1e] border border-slate-900 p-4 rounded-lg text-center">
                  <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1">Rating</p>
                  <p className="text-2xl font-black text-white">{profileData.metrics.rating}</p>
                </div>
                <div className="bg-[#070b1e] border border-slate-900 p-4 rounded-lg text-center">
                  <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1">Total Hours</p>
                  <p className="text-2xl font-black text-white">{profileData.metrics.totalHours}</p>
                </div>
                <div className="bg-[#070b1e] border border-slate-900 p-4 rounded-lg text-center">
                  <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1">Tokens</p>
                  <p className="text-2xl font-black text-white">{profileData.metrics.tokens}</p>
                </div>
              </div>
            </div>

            {/* সাইডবার নেভিগেশন মেনু */}
            <div className="bg-[#0f1631] border border-slate-850 rounded-xl p-4 shadow-lg space-y-1">
              <button className="w-full flex items-center justify-between bg-[#4f16ed] text-white px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-colors">
                <div className="flex items-center gap-3">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </div>
              </button>
              
              <button className="w-full flex items-center justify-between hover:bg-slate-800/40 text-slate-400 hover:text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors group">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4" />
                  <span>Messages</span>
                </div>
                <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full group-hover:scale-105 transition-transform">
                  3
                </span>
              </button>

              <button className="w-full flex items-center gap-3 hover:bg-slate-800/40 text-slate-400 hover:text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>

              <button className="w-full flex items-center gap-3 hover:bg-rose-950/20 text-rose-400 px-4 py-3 rounded-lg text-sm font-medium transition-colors mt-2 border-t border-slate-800/40 pt-3">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>

            {/* শেয়ার স্কিল বাটন */}
            <button className="w-full bg-[#1b2347]/60 hover:bg-[#1b2347] border border-slate-800/80 hover:border-slate-700 p-5 rounded-xl flex flex-col items-center justify-center gap-2 group transition-all text-sm font-semibold text-slate-300 hover:text-white shadow-md">
              <Share2 className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span>Share a Skill</span>
            </button>

          </div>

          {/* ডান কলাম: পার্সোনাল ইনফো এবং স্কিল এক্সপার্টাইজ */}
          <div className="space-y-6 lg:col-span-2">
            
            {/* পার্সোনাল ইনফরমেশন ফর্ম সেকশন */}
            <div className="bg-[#0f1631] border border-slate-850 rounded-xl p-6 shadow-lg space-y-6">
              <div className="flex items-center gap-2.5 text-white border-b border-slate-800/60 pb-3">
                <User className="w-4 h-4 text-slate-400" />
                <h2 className="text-base font-bold tracking-wide">Personal Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    value={profileData.name} 
                    disabled
                    className="w-full bg-[#070b1e] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-300 font-medium cursor-not-allowed opacity-90"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    value={profileData.email} 
                    disabled
                    className="w-full bg-[#070b1e] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-300 font-medium cursor-not-allowed opacity-90"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1.5">Professional Bio</label>
                <textarea 
                  rows="5" 
                  value={profileData.bio}
                  disabled
                  className="w-full bg-[#070b1e] border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-400 leading-relaxed resize-none cursor-not-allowed opacity-90"
                />
              </div>
            </div>

            {/* স্কিল এক্সপার্টাইজ সেকশন */}
            <div className="bg-[#0f1631] border border-slate-850 rounded-xl p-6 shadow-lg space-y-6">
              <div className="flex items-center gap-2.5 text-white border-b border-slate-800/60 pb-3">
                <Award className="w-4 h-4 text-slate-400" />
                <h2 className="text-base font-bold tracking-wide">Skill Expertise</h2>
              </div>

              <div className="space-y-5">
                {profileData.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {skill.level} ({skill.percentage}%)
                      </span>
                    </div>
                    {/* কাস্টম প্রোগ্রেস বার */}
                    <div className="w-full bg-[#070b1e] h-2 rounded-full overflow-hidden border border-slate-900">
                      <div 
                        className="bg-[#4f16ed] h-full rounded-full transition-all duration-500" 
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* নতুন এক্সপার্টাইজ অ্যাড বাটন */}
              <button className="w-full md:w-auto flex items-center justify-center gap-2 border border-dashed border-slate-800 hover:border-slate-600 bg-slate-900/30 hover:bg-slate-900/60 text-slate-400 hover:text-white px-5 py-3 rounded-xl text-xs font-bold tracking-wide uppercase transition-all mt-4">
                <PlusCircle className="w-4 h-4" />
                <span>Add New Expertise</span>
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ফুটার সেকশন */}
      <footer className="w-full border-t border-slate-900 bg-[#070b1e] py-6 px-4 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-sm tracking-wide">SkillSwap</span>
            <span>© 2026 SkillSwap Inc. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-slate-300 transition-colors">About Us</a>
            <a href="#careers" className="hover:text-slate-300 transition-colors">Careers</a>
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#help" className="hover:text-slate-300 transition-colors">Help Center</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default MyProfile;