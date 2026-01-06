import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t , i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <footer className="bg-[var(--color-dark)] text-[var(--color-primary-foreground)]">
                <div className="border-t border-[var(--color-divider)] py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                {t('Footer.start')}
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] font-semibold rounded-lg transition">
                                    {t('Footer.join')}
                                </button>
                                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 font-semibold rounded-lg transition">
                                    {t('Footer.brows')}
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="text-4xl md:text-5xl font-bold">6.3k+</p>
                                <p className="text-[var(--color-muted-light)] mt-2">
                                    {t('Footer.online')}
                                </p>
                            </div>
                            <div>
                                <p className="text-4xl md:text-5xl font-bold">26k+</p>
                                <p className="text-[var(--color-muted-light)] mt-2">
                                    {t('Footer.ins')}
                                </p>
                            </div>
                            <div>
                                <p className="text-4xl md:text-5xl font-bold">99.9%</p>
                                <p className="text-[var(--color-muted-light)] mt-2">
                                    {t('Footer.rate')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[var(--color-divider)] py-12">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-10">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[var(--color-primary)] font-inter text-2xl md:text-3xl font-bold tracking-[-0.03em]">
                                    {t('Footer.name')}
                                </span>
                            </div>
                            <p className="text-[var(--color-muted-light)] text-sm mb-8 max-w-md">
                                {t('Footer.expert')}
                            </p>

                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition">Facebook</a>
                                <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition">Instagram</a>
                                <a href="#" className="p-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition">LinkedIn</a>
                                <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition">Twitter</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium mb-5">
                                {t('Footer.category.name')}
                            </h4>
                            <ul className="space-y-3 text-[var(--color-muted-light)]">
                                <li><a href="#" className="hover:text-[var(--color-primary-foreground)] transition">
                                    {t('Footer.category.basics')}
                                </a></li>
                                <li><a href="#" className="hover:text-[var(--color-primary-foreground)] transition">
                                    {t('Footer.category.con')}
                                </a></li>
                                <li><a href="#" className="hover:text-[var(--color-primary-foreground)] transition">
                                    {t('Footer.category.grammar')}
                                </a></li>
                                <li><a href="#" className="hover:text-[var(--color-primary-foreground)] transition">
                                    {t('Footer.category.top')}
                                </a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium mb-5">
                                {t('Footer.links.name')}
                            </h4>
                            <ul className="space-y-3 text-[var(--color-muted-light)]">
                                <li><a href="#" className="hover:text-[var(--color-primary-foreground)] transition">
                                    {t('Footer.links.about')}
                                </a></li>
                                <li><a href="#" className="hover:text-[var(--color-primary-foreground)] flex items-center gap-2 transition">
                                    {t('Footer.links.brows')}
                                    <span>→</span>
                                </a></li>
                                <li><a href="#" className="hover:text-[var(--color-primary-foreground)] transition">
                                    {t('Footer.links.contact')}
                                </a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium mb-5">
                                {t('Footer.support.name')}
                            </h4>
                            <ul className="space-y-3 text-[var(--color-muted-light)]">
                                <li><a href="#" className="hover:text-[var(--color-primary-foreground)] transition">
                                    {t('Footer.support.help')}
                                </a></li>
                                <li><a href="#" className="hover:text-[var(--color-primary-foreground)] transition">
                                    {t('Footer.support.faq')}
                                </a></li>
                                <li><a href="#" className="hover:text-[var(--color-primary-foreground)] transition">
                                    {t('Footer.support.term')}
                                </a></li>
                                <li><a href="#" className="hover:text-[var(--color-primary-foreground)] transition">
                                    {t('Footer.support.name')}
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#363B47] py-6">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>
                            © 2025 Simple Korean. All rights reserved.
                        </p>
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-white hover:text-[var(--color-primary)] transition text-sm">
                                {i18n.language === 'en' ? 'English' : '한국어'} <span className="ml-1">↓</span>
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
                                <select
                                    value={i18n.language || 'en'}
                                    onChange={(e) => changeLanguage(e.target.value)}
                                    className="
                                        w-full bg-[var(--color-dark)]/60 backdrop-blur-sm
                                        px-4 py-2.5 pr-10
                                        text-sm text-[var(--color-primary-foreground)]
                                        border border-white/10 rounded-lg
                                        focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50
                                        cursor-pointer appearance-none
                                        relative"
                                >
                                    <option value="en">English</option>
                                    <option value="kr">한국어</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
