import React from 'react';
import { useTranslation} from "react-i18next";

function TopHeader() {
    const { t } = useTranslation();
    return (
        <nav
            className=" bg-gradient-to-b from-[var(--color-dark)]/60 to-[var(--color-dark)]/40 backdrop-blur-lg border-b border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.3)] hidden md:block"
        >
            <div className="px-6 lg:px-8 py-3 flex items-center justify-between">
                <ul className="flex items-center gap-6 lg:gap-8 text-sm font-medium">
                    <li>
                        <a href="/" className="text-[var(--color-primary-foreground)] hover:text-[var(--color-primary)] transition">
                            {t('Nav.home')}
                        </a>
                    </li>
                    <li>
                        <a href="/course" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">
                            {t('Nav.courses')}
                        </a>
                    </li>
                    <li>
                        <a href="/books" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">
                            {t('Nav.books')}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">
                            {t('Nav.gallery')}
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">
                            {t('Nav.about')}
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-[var(--color-muted)] hover:text-[var(--color-primary-foreground)] transition">
                            {t('Nav.contact')}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopHeader;