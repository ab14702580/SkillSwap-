import { useState } from "react";
import { Link } from "react-router";



export default function Login() {
    const [pass , setPass] = useState(false)
    const handelPass = () => {
        setPass(!pass)
    }
  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans flex flex-col md:flex-row selection:bg-indigo-500 selection:text-white">
      
      {/* LEFT SIDE: Brand / Hero Section */}
      <div className="w-full md:w-1/2 bg-[#020617] p-8 md:p-16 lg:p-24 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-900">
        
        {/* Top: Logo */}
        <Link to='/' className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/20">
            {/* Grid Icon representation */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
          </div>
          <span className="font-semibold text-lg tracking-wide text-white">SkillSwap</span>
        </Link>

        {/* Middle: Content */}
        <div className="my-auto py-12 md:py-0 max-w-md">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
            Intelligence at <br />
            <span className="text-indigo-400">Scale</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
            Access the future of distributed infrastructure. Seamlessly manage high-performance compute cycles across global node clusters.
          </p>
          
          {/* Subtle Accent Bars */}
          <div className="flex gap-2 w-32">
            <div className="h-0.5 bg-indigo-500 flex-1 rounded-full opacity-60"></div>
            <div className="h-0.5 bg-slate-800 flex-1 rounded-full"></div>
          </div>
        </div>

        {/* Bottom: Version info */}
        <div className="text-xs uppercase tracking-widest text-slate-600 font-mono hidden md:block">
          System Ready // v4.2.0
        </div>
      </div>

      {/* RIGHT SIDE: Login Form Section */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-between items-center bg-[#030712]">
        
        {/* Form Container */}
        <div className="w-full max-w-md my-auto py-8 md:py-0">
          
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Welcome back</h2>
            <p className="text-sm text-slate-400">Enter your credentials to access your operator dashboard.</p>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="operator@kineticlogic.io"
                className="w-full bg-[#0b1329] border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"

                  required
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider" htmlFor="password">
                  Password
                </label>
                <a href="#forgot" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={(pass ? 'text' : 'password')}
                  className="w-full bg-[#0b1329] border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all pr-10"
                  required
                />
                {/* Eye Icon */}
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-400 cursor-pointer" onClick={handelPass}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium text-sm rounded-lg py-3 hover:bg-indigo-500 active:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 mt-2"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-900"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="bg-[#030712] px-4 text-slate-500 text-[10px] font-semibold">Or continue with</span>
            </div>
          </div>

          {/* OAuth Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {/* Google */}
            <button className="flex items-center justify-center gap-2 bg-[#0b1329] border border-slate-800 rounded-lg py-2.5 text-sm font-medium hover:bg-slate-900 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Google</span>
            </button>
            {/* GitHub */}
            <button className="flex items-center justify-center gap-2 bg-[#0b1329] border border-slate-800 rounded-lg py-2.5 text-sm font-medium hover:bg-slate-900 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span>GitHub</span>
            </button>
          </div>

          {/* Footer Sign Up link */}
          <div className="text-center mt-8 text-sm text-slate-500">
            Don't have an account?{' '}
            <Link to="/signUp" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Sign up
            </Link>
          </div>

        </div>

        {/* Bottom: Legal text */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-[10px] text-slate-600 font-medium uppercase tracking-wider mt-4">
          <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          <span>© 2024 Kinetic Logic</span>
        </div>

      </div>
    </div>
  );
}