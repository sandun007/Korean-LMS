import React from 'react';

function TopHeader() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-dark)] border-b border-[var(--color-divider)] hidden md:block">
            <div className="px-8 py-4 flex items-center justify-between">
                <ul className="flex items-center space-x-8 text-sm font-medium">
                    <li><a href="/" className="text-[var(--color-primary-foreground)] hover:text-[var(--color-primary)] transition">Home</a></li>
                    <li><a href="/course" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">Courses</a></li>
                    <li><a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">Books</a></li>
                    <li><a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">About</a></li>
                    <li><a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">Contact</a></li>
                </ul>

                <div className="flex items-center space-x-6 text-sm">
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