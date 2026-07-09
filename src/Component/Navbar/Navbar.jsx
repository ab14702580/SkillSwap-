import { Menu } from 'lucide-react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const user = false;
    return (
        <div>
            <div>
                <nav className="relative w-full bg-brand-deep/80 backdrop-blur-md">
                    <input type="checkbox" id="menu-toggle" className="peer hidden" />
                    <div className="flex items-center justify-between px-5 sm:px-6 h-17">
                        <NavLink to="/" className="flex items-center gap-2 shrink-0">
                            <div className='flex gap-2.5 items-center'>
                                <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/20">
                                    {/* Grid Icon representation */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                    </svg>
                                </div>
                                <span className="text-[16px] font-semibold text-[#F4F1EA] tracking-wide">SkillSwap</span>
                            </div>
                        </NavLink>
                        <div className="hidden sm:flex items-center justify-center flex-1">
                            <div className="flex items-center gap-0.5 bg-[#1a1d24b0] backdrop-blur-3xl rounded-full p-1">

                                <NavLink to="/" className="flex items-center gap-1.5 text-[13px] font-medium px-4 py-2 bg-[#3D6BFF] rounded-full text-[#F4F1EA] ">

                                    <i className="ti ti-home text-[15px]"></i>

                                    Home

                                </NavLink>

                                <a href="#" className="flex items-center gap-1.5 text-[13px] font-medium px-4 py-2 rounded-full text-[#F4F1EA]/60">

                                    <i className="ti ti-user text-[15px]"></i>

                                    My Profile

                                </a>

                            </div>

                        </div>



                        <div className="hidden sm:flex items-center gap-2.5">

                            {
                                (user ? <>
                                    <div className="relative group">

                                        <button aria-label="User avatar" className="w-[34px] h-[34px] rounded-full bg-[#1A1D24] border-[1.5px] border-[#3D6BFF] text-[#7C9CFF] text-xs font-medium flex items-center justify-center">

                                            SR

                                        </button>

                                        <div role="tooltip" className="absolute right-0 top-[calc(100%+8px)] whitespace-nowrap bg-[#F4F1EA] text-[#111318] text-xs font-medium px-2.5 py-1.5 rounded-md opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 pointer-events-none">

                                            Sam Rivera

                                        </div>

                                    </div>
                                    <button className="flex items-center gap-1.5 cursor-pointer text-[13px] font-medium text-[#F4F1EA]/80 border border-[#F4F1EA]/15 px-3.5 py-[7px] rounded-lg">

                                        <i className="ti ti-logout text-[15px]"></i>

                                        Logout

                                    </button>
                                </> : <>
                                    <div className='flex gap-5'>
                                        <NavLink to='/signUp' className="flex items-center bg-[#4069FA] gap-1.5 cursor-pointer text-[13px] font-medium text-[#F4F1EA]/80 border border-[#F4F1EA]/15 px-3.5 py-[7px] rounded-lg">

                                            <i className="ti ti-logout text-[15px]"></i>

                                            Sign Up

                                        </NavLink>
                                        <NavLink to='/login' className="flex items-center gap-1.5 cursor-pointer text-[13px] font-medium text-[#F4F1EA]/80 border border-[#F4F1EA]/15 px-3.5 py-[7px] rounded-lg">

                                            <i className="ti ti-logout text-[15px]"></i>

                                            Log In

                                        </NavLink>

                                    </div>
                                </>)
                            }



                        </div>



                        <label htmlFor="menu-toggle" className="sm:hidden flex items-center justify-center w-9 h-9 text-[#F4F1EA] cursor-pointer">

                            <Menu size={16} />

                        </label>



                    </div>



                    <div className="hidden peer-checked:flex sm:hidden flex-col gap-1 px-5 pb-4 border-t border-[#F4F1EA]/10">



                        <a href="#" className="flex items-center gap-2 text-[14px] font-medium text-[#F4F1EA] bg-[#3D6BFF] px-4 py-2.5 rounded-lg mt-3">

                            <i className="ti ti-home text-[16px]"></i>

                            Home

                        </a>

                        <a href="#" className="flex items-center gap-2 text-[14px] font-medium text-[#F4F1EA]/70 px-4 py-2.5 rounded-lg">

                            <i className="ti ti-user text-[16px]"></i>

                            My Profile

                        </a>



                        <div className="h-px bg-[#F4F1EA]/10 my-2"></div>



                        <div className="flex items-center gap-3 px-4 py-2">

                            <span className="w-9 h-9 rounded-full bg-[#1A1D24] border-[1.5px] border-[#3D6BFF] text-[#7C9CFF] text-xs font-medium flex items-center justify-center">SR</span>

                            <span className="text-[14px] font-medium text-[#F4F1EA]">Sam Rivera</span>

                        </div>

                        <button className="flex items-center gap-2 text-[14px] font-medium text-[#F4F1EA]/70 px-4 py-2.5 rounded-lg text-left">

                            <i className="ti ti-logout text-[16px]"></i>

                            Logout

                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;