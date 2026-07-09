import { use, useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router';

const data = fetch('/skillData.json').then(res => res.json());

export default function ExpertMentors() {
    const AllData = use(data) || []; // ডেটা লোড না হওয়া পর্যন্ত খালি অ্যারে হ্যান্ডেল করার জন্য
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // ১. ইউনিক ক্যাটাগরি লিস্ট তৈরি
    let categories = ['All', ...new Set(AllData.map(item => item.category))];

    // ২. সার্চ এবং ক্যাটাগরি অনুযায়ী ডেটা ফিল্টার করার লজিক
    const filteredMentors = AllData.filter((mentor) => {
        const matchesCategory = activeTab === 'All' || mentor.category === activeTab;
        const matchesSearch =
            mentor.skillName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mentor.providerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mentor.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });
    const navigate = useNavigate();
    const handelBack = () => navigate(-1)

    return (
        <div className="min-h-screen bg-[#070b19] text-white font-sans p-6 md:p-12">
            <button
                onClick={handelBack} // অথবা আপনার রাউটিং লজিক (যেমন: navigate(-1))
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[#161f38] text-gray-300 border border-gray-800 hover:text-white hover:bg-[#1e294b] hover:border-gray-700 transition-all duration-200 group shadow-md mb-5"
            >
                <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform duration-200 text-indigo-400" />
                <span>Back</span>
            </button>
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Expert Mentors</h1>
                        <p className="text-gray-400 text-sm md:text-base max-w-xl">
                            Learn from high-performance industry veterans in technology, business, and the arts. Technical precision for accelerated growth.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Find by skill, name, or expertise..."
                            className="w-full bg-[#161f38] border border-gray-800 rounded-lg pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-indigo-500 text-gray-200 placeholder-gray-500"
                        />
                    </div>
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === category
                                ? 'bg-indigo-600 text-white shadow-lg'
                                : 'bg-[#161f38] text-gray-400 hover:text-white border border-transparent hover:border-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Mentors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredMentors.map((mentor) => (
                        <div key={mentor.skillId} className="bg-[#0f162a] border border-gray-900 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-indigo-900/50 transition-all">

                            {/* Image Container with Badge */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <img
                                    src={mentor.image}
                                    alt={mentor.skillName}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <span className="absolute top-3 left-3 bg-indigo-600/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                                    {mentor.category}
                                </span>
                            </div>

                            {/* Card Content */}
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    {/* Provider Name and Rating */}
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-xs text-indigo-400 font-semibold tracking-wide uppercase">{mentor.providerName}</p>
                                        <div className="flex items-center gap-1 text-sm font-semibold text-amber-400">
                                            <span>★</span>
                                            <span>{mentor.rating}</span>
                                        </div>
                                    </div>

                                    {/* Skill Name */}
                                    <h3 className="text-base font-bold text-gray-100 mb-2 line-clamp-1">{mentor.skillName}</h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-xs leading-relaxed mb-6 h-10 line-clamp-2">
                                        {mentor.description}
                                    </p>
                                </div>

                                {/* Footer Info & Button */}
                                <div>
                                    <div className="flex justify-between items-center text-xs mb-4">
                                        <div>
                                            <p className="text-gray-500 uppercase font-semibold text-[10px]">Price</p>
                                            <p className="text-gray-200 font-bold text-base mt-0.5">${mentor.price}/hr</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-500 uppercase font-semibold text-[10px]">Available</p>
                                            <p className="text-emerald-400 font-medium mt-0.5">{mentor.slotsAvailable} slots left</p>
                                        </div>
                                    </div>

                                    <button className="w-full bg-[#b4bbfd] hover:bg-[#9ba4fc] text-[#070b19] font-bold py-3 px-4 rounded-lg text-sm transition-colors shadow-md">
                                        Book Session
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* No Data Found State */}
                {filteredMentors.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        No mentors found matching your criteria.
                    </div>
                )}

            </div>
        </div>
    );
}