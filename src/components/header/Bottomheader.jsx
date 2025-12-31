
import React, { useState } from 'react';

function Bottomheader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-white border-b border-[var(--color-border)] shadow-sm">
            <div className="px-4 sm:px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2 md:gap-3">
                    {/*logo */}
                    <div className="relative w-9 h-9 md:w-10 md:h-10">
                        {/* paste logos */}
                    </div>
                    <span className="text-[var(--color-primary)] font-inter text-2xl md:text-3xl font-bold tracking-[-0.03em]">
                        Simple Korean
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    <button
                        className="
                        px-6 py-3 rounded-lg font-semibold text-base
                        bg-[var(--color-primary-light)] text-[var(--color-primary)]
                        hover:bg-[var(--color-primary-light-hover)] transition">
                        Create Account
                    </button>
                    <button
                        className="
                            px-6 py-3 rounded-lg font-semibold text-base
                            bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
                            hover:bg-[var(--color-primary-hover)] transition">
                        Sign In
                    </button>
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
                <nav className="flex flex-col gap-4 px-6 py-4 bg-white border-t border-[var(--color-border)]">

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