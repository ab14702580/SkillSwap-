// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; // প্যাজিনেশন স্টাইল

import '../../index.css';

// Pagination মডিউলটি যুক্ত করা হলো
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router';
import Background from '../Background/Background';

export default function Hero() {
    return (
        <>


            <div className="glowing-bg text-slate-100 font-sans min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-indigo-500 selection:text-white">


                <Background  videoSpeed={1.0}  />
                <main className="w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

                    <div className="lg:col-span-7 flex flex-col space-y-8 text-left max-w-3xl">
                        {/* Main Heading with Premium Sizing and Gradient touch */}
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-glow">
                            Empower Your <br className="hidden md:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-100 to-indigo-200">Intelligence</span>
                        </h1>

                        {/* Description Text matching precise copy */}
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
                            Next-generation high-performance infrastructure designed for technical precision and professional clarity. Optimize your intelligence flow with zero-latency observability and edge-native scale.
                        </p>

                        {/* Interactive CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            {/* onClick ফাংশন বাদ দেওয়া হয়েছে */}
                            <Link to='/signUp' className="group inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base transition-all duration-300 transform active:scale-95 shadow-lg shadow-indigo-600/25">
                                <span>Get Started</span>
                                {/* Arrow icon */}
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>

                            {/* onClick ফাংশন বাদ দেওয়া হয়েছে */}
                            <button className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900 hover:border-slate-700 text-white font-bold text-base transition-all duration-300 transform active:scale-95">
                                <Link to='/howItWork'>How Its Work</Link>
                                {/* Play Outline Icon matching image perfectly */}
                                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Card & Stats Display */}
                    <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center lg:pl-4 mt-6 lg:mt-0">

                        {/* Background glow behind the card */}
                        <div className="absolute -inset-4 rounded-3xl bg-indigo-600/10 blur-3xl -z-10"></div>

                        {/* Main Content Card (Modified Design) */}
                        {/* 1. backdrop-blur-3xl and bg-slate-900/30 for better blur and transparency.
                          2. Subtle border with border-slate-800/80 for contrast.
                          3. Indigo glow and shadow shadow-[0_4px_60px_#4f46e51a].
                        */}
                        <div className="w-full max-w-md bg-slate-900/30 border border-slate-800/80 rounded-[29px] p-6 glowing-card relative overflow-hidden transition-all duration-500 hover:border-slate-700/80 backdrop-blur-3xl shadow-[0_4px_60px_#4f46e51a]">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide><div>
                                    {/* Inner top grid of icons */}
                                    <div className="flex justify-between items-center mb-6">
                                        {/* id রিমুভ করা হয়েছে */}
                                        <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 transition-all duration-300">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>

                                        {/* Right static monitoring icon */}
                                        <div className="p-2.5 bg-slate-900 rounded-lg text-slate-500 border border-slate-800">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Dynamic Headline (id রিমুভ করা হয়েছে) */}
                                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide transition-all duration-300">
                                        Secure Infrastructure
                                    </h3>

                                    {/* Dynamic Description Body (id রিমুভ করা হয়েছে) */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-10 min-h-[72px] transition-all duration-300">
                                        Military-grade encryption and hardware-root-of-trust for every node. Ensure your proprietary intelligence remains yours across every transit point.
                                    </p>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        {/* Inner top grid of icons */}
                                        <div className="flex justify-between items-center mb-6">
                                            {/* id রিমুভ করা হয়েছে */}
                                            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 transition-all duration-300">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </div>

                                            {/* Right static monitoring icon */}
                                            <div className="p-2.5 bg-slate-900 rounded-lg text-slate-500 border border-slate-800">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Dynamic Headline (id রিমুভ করা হয়েছে) */}
                                        <h3 className="text-xl font-bold text-white mb-3 tracking-wide transition-all duration-300">
                                            Secure Infrastructure
                                        </h3>

                                        {/* Dynamic Description Body (id রিমুভ করা হয়েছে) */}
                                        <p className="text-slate-400 text-sm leading-relaxed mb-10 min-h-[72px] transition-all duration-300">
                                            Military-grade encryption and hardware-root-of-trust for every node. Ensure your proprietary intelligence remains yours across every transit point.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        {/* Inner top grid of icons */}
                                        <div className="flex justify-between items-center mb-6">
                                            {/* id রিমুভ করা হয়েছে */}
                                            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 transition-all duration-300">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </div>

                                            {/* Right static monitoring icon */}
                                            <div className="p-2.5 bg-slate-900 rounded-lg text-slate-500 border border-slate-800">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Dynamic Headline (id রিমুভ করা হয়েছে) */}
                                        <h3 className="text-xl font-bold text-white mb-3 tracking-wide transition-all duration-300">
                                            Secure Infrastructure
                                        </h3>

                                        {/* Dynamic Description Body (id রিমুভ করা হয়েছে) */}
                                        <p className="text-slate-400 text-sm leading-relaxed mb-10 min-h-[72px] transition-all duration-300">
                                            Military-grade encryption and hardware-root-of-trust for every node. Ensure your proprietary intelligence remains yours across every transit point.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        {/* Inner top grid of icons */}
                                        <div className="flex justify-between items-center mb-6">
                                            {/* id রিমুভ করা হয়েছে */}
                                            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 transition-all duration-300">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </div>

                                            {/* Right static monitoring icon */}
                                            <div className="p-2.5 bg-slate-900 rounded-lg text-slate-500 border border-slate-800">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Dynamic Headline (id রিমুভ করা হয়েছে) */}
                                        <h3 className="text-xl font-bold text-white mb-3 tracking-wide transition-all duration-300">
                                            Secure Infrastructure
                                        </h3>

                                        {/* Dynamic Description Body (id রিমুভ করা হয়েছে) */}
                                        <p className="text-slate-400 text-sm leading-relaxed mb-10 min-h-[72px] transition-all duration-300">
                                            Military-grade encryption and hardware-root-of-trust for every node. Ensure your proprietary intelligence remains yours across every transit point.
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>


                    </div>
                </main>

                {/* Dynamic Alert Box (id রিমুভ করা হয়েছে) */}
                <div className="fixed top-6 right-6 z-50 transform translate-x-80 opacity-0 transition-all duration-300 pointer-events-none">
                    <div className="bg-slate-950 border border-slate-800 text-white px-5 py-4 rounded-xl shadow-2xl flex items-center space-x-3.5 max-w-md">
                        <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-sm text-slate-100"></p>
                            <p className="text-xs text-slate-400 mt-0.5"></p>
                        </div>
                    </div>
                </div>

                {/* Watch Demo Modal Backdrop & Window (id এবং onClick রিমুভ করা হয়েছে) */}
                <div className="fixed inset-0 bg-brand-deep/80 backdrop-blur-md z-50 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300">
                    <div className="bg-[#070b13] border border-slate-800 rounded-2xl w-full max-w-2xl p-6 m-4 shadow-2xl relative transform scale-95 transition-all duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                                <span className="font-mono text-xs text-indigo-400 tracking-wider">LIVE PLATFORM INTERACTION DEMO</span>
                            </div>
                            <button className="text-slate-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative bg-slate-950 rounded-xl aspect-video border border-slate-900 overflow-hidden flex flex-col justify-center items-center">
                            <div className="absolute inset-0 bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] bg-size-[16px_16px] opacity-30"></div>

                            <div className="w-full h-full p-4 font-mono text-[10px] text-emerald-400/90 overflow-y-auto flex flex-col space-y-1">
                                <p className="text-slate-500">// Booting V4.2 Intelligence Engine Demo State...</p>
                                <p>SYSTEM_BOOT: Initiating Secure Transits...</p>
                            </div>

                            <div className="absolute inset-0 bg-slate-950/80 flex flex-col items-center justify-center group cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-indigo-600/20 group-hover:bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center transition-all duration-300 transform group-hover:scale-105">
                                    <svg className="w-7 h-7 text-indigo-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-semibold text-slate-300 mt-4 group-hover:text-white transition-colors">Start Interactive Demo System Simulation</span>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-between items-center text-xs text-slate-500">
                            <span>Press ESC to exit demo viewer</span>
                            <button className="px-3 py-1.5 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white border border-indigo-500/20 hover:border-transparent rounded transition-all duration-200">Get Early Access</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}