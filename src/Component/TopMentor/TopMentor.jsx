
// Swiper React components এবং styles ইম্পোর্ট করুন
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper styles অবশই ইম্পোর্ট করে নিবেন আপনার প্রজেক্টে
import 'swiper/css';
import 'swiper/css/pagination';

const TopMentor = () => {
  const providers = [
    {
      id: 1,
      name: 'Alex Martin',
      category: 'MUSIC',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
      title: 'Beginner Guitar Lessons',
      rating: '4.8',
      price: '20',
      slots: '3 slots left',
    },
    {
      id: 2,
      name: 'Sara Hossain',
      category: 'LANGUAGE',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      title: 'Spoken English Practice',
      rating: '4.6',
      price: '10',
      slots: '5 slots left',
    },
    {
      id: 3,
      name: 'David Chen',
      category: 'PROGRAMMING',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
      title: 'Introduction to Python',
      rating: '4.9',
      price: '35',
      slots: '8 slots left',
    },
    {
      id: 4,
      name: 'Elena Rostova',
      category: 'ART & DESIGN',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80',
      title: 'Watercolor Landscape Painting',
      rating: '4.7',
      price: '25',
      slots: '4 slots left',
    },
    // স্লাইড করার জন্য আরও কিছু ডামি ডাটা যোগ করা হলো
    {
      id: 5,
      name: 'Michael Chang',
      category: 'PROGRAMMING',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
      title: 'Web Development Bootcamp',
      rating: '5.0',
      price: '40',
      slots: '2 slots left',
    },
  ];

  return (
    <div className="bg-[#050B1A] text-white min-h-screen px-6 py-12 md:px-12 lg:px-24 font-sans">
      
      {/* হেডার সেকশন */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
        <div>
          <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">
            Premium Instructors
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-1">
            Top Rated Providers
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-3 leading-relaxed">
            Connect with elite mentors verified by our performance-based logic. SkillSwap ensures technical precision in every session.
          </p>
        </div>
        
        {/* ফিল্টার ড্রপডাউন */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <span className="text-xs text-gray-400">Filter by:</span>
          <select className="bg-[#131B2E] border border-gray-700 text-xs rounded px-3 py-1.5 focus:outline-none focus:border-purple-500 cursor-pointer text-gray-300">
            <option>Rating (High to Low)</option>
          </select>
        </div>
      </div>

      {/* মডিফাইড সুইপার স্লাইডার */}
      <Swiper
        slidesPerView={1}                // মোবাইলে ১টি কার্ড দেখাবে
        spaceBetween={24}                // কার্ডগুলোর মাঝের গ্যাপ (Tailwind gap-6 এর সমান)
        slidesPerGroup={1}               // প্রতিবার ১টি করে কার্ড সরবে
        loop={true}                      // ইনফিনিটি লুপ হবে
        autoplay={{
          delay: 2000,                   // ঠিক ২ সেকেন্ড পর পর স্লাইড হবে
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination', // কাস্টম ডট কন্ট্রোল করার জন্য
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,            // ট্যাবে বা স্মল স্ক্রিনে ২টি কার্ড
          },
          1024: {
            slidesPerView: 4,            // ডেস্কটপে একসাথে ৪টি কার্ড থাকবে
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper !pb-14"       // নিচের ডটসের জন্য প্যাডিং
      >
        {providers.map((provider) => (
          <SwiperSlide key={provider.id} className="h-auto">
            <div className="bg-[#0D1527] border border-gray-800/60 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:border-purple-600/50 flex flex-col h-full justify-between">
              
              {/* ইমেজ ও ক্যাটাগরি */}
              <div className="relative h-48 w-full overflow-hidden group">
                <img 
                  src={provider.image} 
                  alt={provider.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#1E293B]/90 backdrop-blur-sm text-[10px] font-bold tracking-wider px-2.5 py-1 rounded text-gray-300 border border-gray-700">
                  {provider.category}
                </span>
              </div>

              {/* কার্ড বডি */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h3 className="text-lg font-bold tracking-wide truncate">
                      {provider.name}
                    </h3>
                    <div className="flex items-center gap-1 bg-[#1E293B] px-1.5 py-0.5 rounded text-xs text-gray-300 border border-gray-700 shrink-0">
                      <span className="text-purple-400 text-[10px]">★</span>
                      <span className="font-semibold">{provider.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-400 font-medium mb-6 line-clamp-1">
                    {provider.title}
                  </p>
                </div>

                {/* প্রাইস এবং বাটন */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-0.5">Price</span>
                      <div className="text-sm font-semibold">
                        <span className="text-xl font-bold text-gray-200">${provider.price}</span>
                        <span className="text-gray-500 font-normal">/hr</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-0.5">Availability</span>
                      <span className="text-xs font-semibold text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                        {provider.slots}
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-[#5025D9] hover:bg-[#6333F2] text-white text-xs font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors duration-200">
                    Book Session <span>→</span>
                  </button>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ফুটার নেভিগেশন ও কাস্টম ডটস */}
      <div className="flex flex-col items-center gap-4">
        <button className="text-sm font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
          View All Providers <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        
        {/* Swiper এর নিজস্ব ডটস এখানে রেন্ডার হবে যা image_3a1aff.png এর ডটসের মতো কাজ করবে */}
        <div className="custom-swiper-pagination flex justify-center gap-2 mt-2"></div>
      </div>

    </div>
  );
};

export default TopMentor;