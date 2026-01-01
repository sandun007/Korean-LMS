import React from 'react';

function TopHeader() {
    return (
        <nav
            className=" bg-gradient-to-b from-[var(--color-dark)]/60 to-[var(--color-dark)]/40 backdrop-blur-lg border-b border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.3)] hidden md:block"
        >
            <div className="px-6 lg:px-8 py-3 flex items-center justify-between">
                <ul className="flex items-center gap-6 lg:gap-8 text-sm font-medium">
                    <li>
                        <a href="/" className="text-[var(--color-primary-foreground)] hover:text-[var(--color-primary)] transition">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/course" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">
                            Courses
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">
                            Books
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="flex items-center gap-6 text-sm">
                    <button className="flex items-center gap-1 text-[var(--color-muted-light)] hover:text-[var(--color-primary-foreground)] transition">
                        USD <span className="ml-1">↓</span>
                    </button>
                    <button className="flex items-center gap-1 text-[var(--color-muted-light)] hover:text-[var(--color-primary-foreground)] transition">
                        English <span className="ml-1">↓</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default TopHeader;