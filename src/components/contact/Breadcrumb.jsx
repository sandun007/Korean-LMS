import React from 'react'

function Breadcrumb() {
    return (
        <div>
            <nav aria-label="Breadcrumbabout" className="bg-[var(--color-surface)] px-5 md:px-10 lg:px-20 py-6 w-full">
                <div className="mx-auto max-w-[1320px] flex flex-col items-center gap-4">
                    <h1 className="
                            text-[var(--color-foreground)]
                            font-inter text-2xl md:text-3xl
                            font-semibold leading-8
                            tracking-[-0.01em] text-center">
                        Contact
                    </h1>

                    <div className="flex items-center gap-2 text-sm">
                        <a href="/" className="
                                text-[var(--color-muted)]
                                font-inter leading-[22px]
                                tracking-[-0.01em]
                                hover:text-[var(--color-foreground)]
                                hover:underline
                                transition-colors">
                            Home
                        </a>

                        <span className="
                                text-[var(--color-muted)]
                                font-inter leading-[22px]
                                tracking-[-0.01em] select-none"
                                aria-hidden="true">
                            /
                        </span>
                        <span className="
                                text-[var(--color-foreground)]
                                font-inter font-medium leading-[22px]
                                tracking-[-0.01em]"
                                aria-current="page">
                            Contact
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Breadcrumb;
