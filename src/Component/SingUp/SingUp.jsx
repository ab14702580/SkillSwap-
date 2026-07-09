import React from 'react';
import { Link } from 'react-router';

export default function SingUp() {
    return (
        <div className="h-screen w-screen bg-[#030712] text-slate-200 font-sans flex flex-col md:flex-row overflow-hidden selection:bg-indigo-500 selection:text-white">

            {/* LEFT SIDE: Brand / Hero Section */}
            <div className="w-full md:w-1/2 bg-[#020617] p-6 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-900/50 h-1/2 md:h-full overflow-hidden">

                {/* Top: Logo */}
                <Link to='/' className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>
                    </div>
                    <span className="font-semibold text-sm tracking-wide text-white uppercase">SkillSwap</span>
                </Link>

                {/* Middle/Bottom section: Header and Metrics */}
                <div className="max-w-md mt-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Join the Network
                    </h1>
                    <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed mb-8 md:mb-12">
                        Build on the next-generation infrastructure. Scale your logic with sub-millisecond precision.
                    </p>

                    {/* Metrics Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 border-t border-slate-900 pt-6">
                        <div>
                            <div className="text-base sm:text-lg md:text-xl font-bold text-indigo-400 font-mono tracking-tight">99.99%</div>
                            <div className="text-[9px] uppercase tracking-widest text-slate-500 font-medium mt-0.5">Uptime</div>
                        </div>
                        <div>
                            <div className="text-base sm:text-lg md:text-xl font-bold text-white font-mono tracking-tight">&lt;10ms</div>
                            <div className="text-[9px] uppercase tracking-widest text-slate-500 font-medium mt-0.5">Latency</div>
                        </div>
                        <div>
                            <div className="text-base sm:text-lg md:text-xl font-bold text-white font-mono tracking-tight">256-bit</div>
                            <div className="text-[9px] uppercase tracking-widest text-slate-500 font-medium mt-0.5">Security</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Register Form Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between items-center bg-[#030712] h-1/2 md:h-full overflow-y-auto no-scrollbar">

                {/* Form Container */}
                <div className="w-full max-w-md my-auto">

                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Create your account</h2>
                        <p className="text-xs text-slate-500">Enter your professional details to get started.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">

                        {/* Full Name Field */}
                        <div>
                            <label className="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" htmlFor="name">
                                Full Name
                            </label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </span>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Alan Turing"
                                    className="w-full bg-[#0b1329] border border-slate-800/80 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Work Email Field */}
                        <div>
                            <label className="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" htmlFor="email">
                                Work Email
                            </label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </span>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full bg-[#0b1329] border border-slate-800/80 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider" htmlFor="password">
                                    Password
                                </label>
                                <span className="text-[9px] text-slate-500 tracking-wider">MIN. 12 CHARACTERS</span>
                            </div>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                </span>
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full bg-[#0b1329] border border-slate-800/80 rounded-lg pl-10 pr-10 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                                    required
                                />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start gap-2.5 pt-1">
                            <input
                                id="terms"
                                type="checkbox"
                                className="mt-0.5 w-3.5 h-3.5 rounded bg-[#0b1329] border-slate-800 text-indigo-600 focus:ring-0 accent-indigo-600 cursor-pointer"
                                required
                            />
                            <label htmlFor="terms" className="text-[11px] text-slate-400 leading-normal select-none cursor-pointer">
                                I agree to the <a href="#terms" className="text-indigo-400 hover:underline">Terms of Service</a> and <a href="#privacy" className="text-indigo-400 hover:underline">Privacy Policy</a>.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-medium text-xs rounded-lg py-2.5 hover:bg-indigo-500 active:bg-indigo-700 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/10 mt-2"
                        >
                            <span>Create Account</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-900"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase tracking-widest">
                            <span className="bg-[#030712] px-3 text-slate-500 text-[9px] font-semibold">Or continue with</span>
                        </div>
                    </div>

                    {/* OAuth Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                        {/* GitHub */}
                        <button className="flex items-center justify-center gap-2 bg-[#0b1329] border border-slate-800/80 rounded-lg py-2 text-xs font-medium hover:bg-slate-900 transition-colors">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            <span>GitHub</span>
                        </button>
                        {/* Google */}
                        <button className="flex items-center justify-center gap-2 bg-[#0b1329] border border-slate-800/80 rounded-lg py-2 text-xs font-medium hover:bg-slate-900 transition-colors">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                            </svg>
                            <span>Google</span>
                        </button>
                    </div>

                    {/* Footer Navigation */}
                    <div className="text-center mt-6 text-xs text-slate-500">
                        Already have an account?{' '}
                        <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                            Sign in
                        </Link>
                    </div>

                </div>

                {/* Bottom: Legal text */}
                <div className="text-center text-[10px] text-slate-600 font-medium tracking-wide mt-4">
                    © 2024 Kinetic Logic. Secure, encrypted, and distributed.
                </div>

            </div>
        </div>
    );
}