import React from 'react';
import { useTranslation } from 'react-i18next';

function Actionbar() {
    const { t } = useTranslation();
    return (
        <>
            <div className="bg-white border-b border-[var(--color-border)]">
                {/* Top Row: Filter + Search + Sort */}
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        {/* Left: Filter + Search */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            {/* Filter Button */}
                            <button className="flex items-center gap-3 px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                {t('Course.action.filter')}
                                <span className="px-2 py-1 text-xs font-semibold bg-[var(--color-primary)] text-white rounded-full">
                                    3
                                </span>
                            </button>

                            {/* Search Input */}
                            <div className="relative w-full sm:w-96">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-[var(--color-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    defaultValue="Grammar"
                                    className="w-full pl-12 pr-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] transition"
                                    placeholder="Search courses..."
                                />
                            </div>
                        </div>

                        {/* Right: Sort By */}
                        <div className="flex items-center gap-3">
                            <span className="text-[var(--color-subtle)] text-sm">
                                {t('Course.action.sort')}
                            </span>
                            <button className="flex items-center justify-between w-48 px-4 py-3 border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] transition">
                                <span className="text-[var(--color-foreground)]">
                                    {t('Course.action.trend')}
                                </span>
                                <svg className="w-5 h-5 text-[var(--color-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Suggestions + Results */}
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 border-t border-[var(--color-border)]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[var(--color-subtle)]">
                                {t('Course.action.sug')}
                            </span>
                            {["user interface", "user experience", "web design", "interface", "app"].map((tag) => (
                                <span key={tag} className="text-[var(--color-primary)] hover:underline cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-[var(--color-subtle)]">
                            3,145,684 results found for “UI/UX Design”
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Actionbar;
