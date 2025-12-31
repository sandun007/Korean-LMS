
function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
                <nav className="bg-[var(--color-dark)] border-b border-[var(--color-divider)] hidden md:block">
                    <div className="px-8 py-4 flex items-center justify-between">
                        <ul className="flex items-center space-x-8 text-sm font-medium">
                            <li><a href="#" className="text-[var(--color-primary-foreground)] hover:text-[var(--color-primary)] transition">Home</a></li>
                            <li><a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">Courses</a></li>
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

                <nav className="bg-white border-b border-[var(--color-border)] shadow-sm">
                    <div className="px-6 md:px-8 py-4 md:py-6 flex items-center justify-between">
                        {/*  left aligned on mobile, desktop center */}
                        <a href="/" className="text-2xl md:text-3xl font-bold text-(--color-primary)">
                            E-tutor
                        </a>
                        <div className="hidden md:flex items-center gap-4">
                           <button className="px-6 py-3 text-[var(--color-primary)] font-semibold bg-[var(--color-primary-light)] hover:bg-[var(--color-primary-light-hover)] rounded-lg transition">
                                Create Account
                            </button>
                           <button className="px-6 py-3 text-[var(--color-primary-foreground)] font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition">
                                Sign In
                            </button>
                        </div>
                        <button className="md:hidden text-3xl font-bold text-[var(--color-foreground)]">
                            ☰
                        </button>
                    </div>

                    <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
                        <button className="w-full py-3 text-[var(--color-primary)] font-semibold bg-[var(--color-primary-light)] hover:bg-[var(--color-primary-light-hover)] rounded-lg transition">
                            Create Account
                        </button>
                        <button className="w-full py-3 text-[var(--color-primary-foreground)] font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition">
                            Sign In
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;