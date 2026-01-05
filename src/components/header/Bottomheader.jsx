
import React, { useState } from 'react';

function Bottomheader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="isolate">
            <div className="bg-[var(--color-dark)]/30 backdrop-blur-xl border-t border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                px-4 sm:px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2 md:gap-3">
                    {/*logo */}
                    <div className="relative w-9 h-9 md:w-10 md:h-10">
                        {/* paste logos */}
                    </div>
                    <span className="text-[var(--color-primary-foreground)] font-inter text-2xl md:text-3xl font-bold tracking-[-0.03em]">
                        Simple Korean
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-6 lg:gap-8">

                    <div className="flex items-center gap-6">
                        <button
                            className="
                                px-6 py-3 rounded-lg font-semibold text-base
                                bg-[var(--color-primary-light)] text-[var(--color-primary)]
                                hover:bg-[var(--color-primary-light-hover)] transition"
                        >
                            Create Account
                        </button>
                        <button
                            className="
                                px-6 py-3 rounded-lg font-semibold text-base
                                bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
                                hover:bg-[var(--color-primary-hover)] transition">
                            Sign In
                        </button>

                        <div className="relative group">
                            <button className="flex items-center gap-1 text-[var(--color-muted-light)] hover:text-[var(--color-primary-foreground)] transition text-sm">
                                English <span className="ml-1">↓</span>
                            </button>

                            <div
                                className="
                                    absolute right-0 top-full mt-2 w-40
                                    bg-[var(--color-dark)]/95 backdrop-blur-md
                                    border border-white/10 rounded-lg
                                    shadow-2xl
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    transition-all duration-150"
                            >
                                <button className="block w-full text-left px-4 py-2.5 text-sm text-[var(--color-primary-foreground)] hover:bg-white/10 transition">
                                    English
                                </button>
                                <button className="block w-full text-left px-4 py-2.5 text-sm text-[var(--color-primary-foreground)] hover:bg-white/10 transition">
                                    한국어
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Mobile view*/}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-3xl text-[var(--color-foreground)]">
                    ☰
                </button>
            </div>

            <div className={`
                    md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav
                    className="
                        flex flex-col gap-5 px-6 py-6
                        bg-[var(--color-dark)]/30
                        backdrop-blur-xl
                        border-t border-white/15
                        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                        text-white"
                >

                    <a href="/" className="text-[var(--color-foreground)] text-base font-medium hover:text-[var(--color-primary)] transition">
                        Home
                    </a>
                    <a href="/course" className="text-[var(--color-foreground)] text-base font-medium hover:text-[var(--color-primary)] transition">
                        Courses
                    </a>
                    <a href="#" className="text-[var(--color-foreground)] text-base font-medium hover:text-[var(--color-primary)] transition">
                        Books
                    </a>
                    <a href="#" className="text-[var(--color-foreground)] text-base font-medium hover:text-[var(--color-primary)] transition">
                        Gallery
                    </a>
                    <a href="/about" className="text-[var(--color-foreground)] text-base font-medium hover:text-[var(--color-primary)] transition">
                        About
                    </a>
                    <a href="/contact" className="text-[var(--color-foreground)] text-base font-medium hover:text-[var(--color-primary)] transition">
                        Contact
                    </a>

                    <button className="
                        w-full py-3 rounded-lg font-semibold text-base
                        bg-[var(--color-primary-light)] text-[var(--color-primary)]
                        hover:bg-[var(--color-primary-light-hover)] transition">
                        Create Account
                    </button>
                    <button className="
                        w-full py-3 rounded-lg font-semibold text-base
                        bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
                        hover:bg-[var(--color-primary-hover)] transition">
                        Sign In
                    </button>

                </nav>
            </div>
        </div>
    );
}

export default Bottomheader;