import React from 'react';
import { useTranslation } from 'react-i18next';

function Ad() {
    const { t } = useTranslation();
    return (
        <section className="py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="relative bg-gradient-to-r from-[var(--color-primary)] to-[#0C1C8C] rounded-3xl overflow-hidden shadow-2xl">

                    <div className="absolute inset-0 bg-black/10"></div>

                    <div className="relative px-8 py-12 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 text-white z-10">

                        <div className="text-center md:text-left max-w-2xl">
                            <div className="inline-block mb-4 px-6 py-2 bg-white/15 backdrop-blur-sm rounded-full text-base font-semibold">
                                {t('Ad.offer')}
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                                {t('Ad.master')}
                                <br className="hidden md:block" />
                                {t('Ad.with')}
                                <span className="font-extrabold">
                                    {t('Ad.access')}
                                </span>
                            </h3>
                            <p className="text-lg md:text-xl opacity-95 mb-8">
                                {t('Ad.unlimited')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button className="px-10 py-4 bg-white text-[var(--color-primary)] font-bold text-lg rounded-xl shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
                                    {t('Ad.trial')}
                                </button>
                                <button className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition">
                                    {t('Ad.plan')}
                                </button>
                            </div>
                        </div>

                        <div className="hidden md:block relative">
                            <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border-4 border-white/30 shadow-2xl overflow-hidden ring-4 ring-white/30 animate-pulse-slow">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg"
                                    alt="South Korea flag"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute -top-8 -right-10 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-bold shadow-xl text-xl transform rotate-6">
                                {t('Ad.off')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ad;