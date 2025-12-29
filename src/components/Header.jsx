import React from 'react';

function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
                <nav className="bg-[#1D2026] border-b border-gray-800 hidden md:block">
                    <div className="px-8 py-4 flex items-center justify-between">
                        <ul className="flex items-center space-x-8 text-sm font-medium">
                            <li><a href="#" className="text-white hover:text-orange-400 transition">Home</a></li>
                            <li><a href="#" className="text-[#8C94A3] hover:text-white transition">Courses</a></li>
                            <li><a href="#" className="text-[#8C94A3] hover:text-white transition">About</a></li>
                            <li><a href="#" className="text-[#8C94A3] hover:text-white transition">Contact</a></li>
                            <li><a href="#" className="text-[#8C94A3] hover:text-white transition">Books</a></li>
                        </ul>

                        <div className="flex items-center space-x-6 text-sm">
                            <button className="flex items-center gap-1 text-[#A1A5B3] hover:text-white transition">
                                USD <span className="ml-1">↓</span>
                            </button>
                            <button className="flex items-center gap-1 text-[#A1A5B3] hover:text-white transition">
                                English <span className="ml-1">↓</span>
                            </button>
                        </div>
                    </div>
                </nav>

                <nav className="bg-white border-b border-[#E9EAF0]">
                    <div className="px-6 md:px-8 py-4 md:py-6 flex items-center justify-between">
                        {/*  left aligned on mobile, centered on desktop if needed */}
                        <a href="/" className="text-2xl md:text-3xl font-bold text-orange-600">
                            E-tutor
                        </a>
                        <div className="hidden md:flex items-center gap-4">
                            <button className="px-6 py-3 text-[#FF6636] font-semibold bg-[#FFEEE8] hover:bg-orange-100 rounded transition">
                                Create Account
                            </button>
                            <button className="px-6 py-3 text-white font-semibold bg-[#FF6636] hover:bg-orange-600 rounded transition">
                                Sign In
                            </button>
                        </div>
                        <button className="md:hidden text-3xl font-bold text-[#1D2026]">
                            ☰
                        </button>
                    </div>

                    <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
                        <button className="w-full py-3 text-[#FF6636] font-semibold bg-[#FFEEE8] hover:bg-orange-100 rounded transition">
                            Create Account
                        </button>
                        <button className="w-full py-3 text-white font-semibold bg-[#FF6636] hover:bg-orange-600 rounded transition">
                            Sign In
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;