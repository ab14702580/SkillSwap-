import { Star } from 'lucide-react';
import { use } from 'react';

const skillsData = fetch('/skillData.json').then(res => res.json())

export default function PopularSkills() {

    const data = use(skillsData)
    const popularData = data.sort((a , b) => b.rating - a.rating || a.slotsAvailable - b.slotsAvailable).slice(0,4);
    console.log(popularData)

  return (
    <div className="bg-[#020813] text-white min-h-screen p-8 sm:p-12 md:p-16 font-sans select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title Section */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-wider text-slate-100 uppercase font-mono">
            POPULAR SKILLS
          </h2>
          <p className="text-[#64748b] text-sm md:text-base mt-2 font-medium">
            Learn from industry experts and master new abilities.
          </p>
        </div>

        {/* 4-Column Grid UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularData.map((skill) => (
            <div 
              key={skill.skillId} 
              className="bg-[#0b1329] border border-[#1e293b]/40 rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-slate-700/60 transition duration-300"
            >
              {/* Image and Floating Rating Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img 
                  src={skill.image} 
                  alt={skill.skillName} 
                  className="w-full h-full object-cover opacity-80" 
                />
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded flex items-center gap-1 text-[11px] font-semibold text-slate-300">
                  <Star className="w-3 h-3 fill-slate-400 stroke-none" />
                  {skill.rating.toFixed(1)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] tracking-widest text-blue-400 font-bold uppercase block mb-1">
                    {skill.category}
                  </span>
                  
                  <h3 className="text-[17px] font-semibold tracking-wide text-slate-200 mb-2 line-clamp-1" title={skill.skillName}>
                    {skill.skillName}
                  </h3>
                  
                  <p className="text-xs text-[#64748b] leading-relaxed tracking-wide font-medium min-h-[36px] line-clamp-2 mb-4">
                    {skill.description}
                  </p>

                  {/* Provider metadata & Slots indicator */}
                  <div className="flex justify-between items-center text-[11px] text-slate-400 border-t border-[#1e293b]/30 pt-3 mb-4">
                    <span className="truncate max-w-[110px]" title={skill.providerName}>
                      By {skill.providerName}
                    </span>
                    <span className={`${skill.slotsAvailable <= 3 ? 'text-amber-500 font-bold' : 'text-slate-400'} font-medium`}>
                      {skill.slotsAvailable} slots left
                    </span>
                  </div>
                </div>

                {/* Footer Price and Action Button */}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="text-xl font-bold tracking-tight text-slate-200">
                    ${skill.price}
                  </span>
                  <button className="bg-[#1e293b] hover:bg-[#2e3e57] text-slate-200 text-xs font-bold px-4 py-2 rounded-md transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}