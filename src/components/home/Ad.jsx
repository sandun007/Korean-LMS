import React , { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Ad() {
    const { t } = useTranslation();

    useEffect(() => {
        const intervalTime = 5000;
        const slideIds = ['slide1', 'slide2', 'slide3', 'slide4'];

        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideIds.length;
            const nextId = slideIds[currentIndex];

            window.history.replaceState(null, '', `#${nextId}`);

            const carousel = document.querySelector('.carousel');
            const nextSlide = document.getElementById(nextId);

            if (carousel && nextSlide) {
                carousel.scrollTo({
                    left: nextSlide.offsetLeft,
                    behavior: 'smooth'
                });
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="carousel w-full rounded-3xl shadow-2xl overflow-x-auto snap-x snap-mandatory scroll-smooth h-[300px] md:h-[400px]">
                    {/*Slide 1*/}
                    <div id="slide1" className="carousel-item relative w-full h-full flex-shrink-0 snap-start">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[#0C1C8C]"></div>
                        <div className="relative px-8 py-12 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 text-white z-10 h-full">
                            <div className="text-center md:text-left max-w-2xl">
                                <div className="inline-block mb-4 px-6 py-2 bg-white/15 backdrop-blur-sm rounded-full text-base font-semibold">
                                    {t('Ad.offer')}
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                                    {t('Ad.master')}
                                    <br className="hidden md:block" />
                                    {t('Ad.with')}
                                    <span className="font-extrabold">{t('Ad.access')}</span>
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
                        {/* Navigation arrows */}
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between w-[calc(100%-2.5rem)]">
                            <a href="#slide4" className="btn btn-circle bg-white/30 backdrop-blur-sm border-none text-white hover:bg-white/50">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-white/30 backdrop-blur-sm border-none text-white hover:bg-white/50">❯</a>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full h-full flex-shrink-0 snap-start">
                        <img
                            src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=1200"
                            alt="Korean student studying online with laptop"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <h2 className="text-white text-4xl font-bold">Korean Online Learning</h2>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between w-[calc(100%-2.5rem)]">
                            <a href="#slide1" className="btn btn-circle bg-white/30 backdrop-blur-sm border-none text-white hover:bg-white/50">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-white/30 backdrop-blur-sm border-none text-white hover:bg-white/50">❯</a>
                        </div>
                    </div>
                    {/*Slide 3*/}
                    <div id="slide3" className="carousel-item relative w-full h-full flex-shrink-0 snap-start">
                        <img
                            src="https://c8.alamy.com/comp/2CWBB8M/young-korean-woman-studying-with-laptop-at-home-enjoying-online-education-2CWBB8M.jpg"
                            alt="Young Korean woman online studying"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <h2 className="text-white text-4xl font-bold drop-shadow-lg">E-Learning at Home</h2>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between w-[calc(100%-2.5rem)]">
                            <a href="#slide2" className="btn btn-circle bg-white/30 backdrop-blur-sm border-none text-white hover:bg-white/50">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-white/30 backdrop-blur-sm border-none text-white hover:bg-white/50">❯</a>
                        </div>
                    </div>
                    {/*Slide 4*/}
                    <div id="slide4" className="carousel-item relative w-full h-full flex-shrink-0 snap-start">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/054/213/769/large_2x/portrait-asian-woman-student-girl-online-distant-teacher-wear-headset-talking-conference-call-speak-looking-at-laptop-at-home-office-chat-job-interview-distance-language-course-e-learning-class-photo.jpg"
                            alt="Korean student in online class with headset"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <h2 className="text-white text-4xl font-bold drop-shadow-lg">Virtual Korean Classroom</h2>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between w-[calc(100%-2.5rem)]">
                            <a href="#slide3" className="btn btn-circle bg-white/30 backdrop-blur-sm border-none text-white hover:bg-white/50">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-white/30 backdrop-blur-sm border-none text-white hover:bg-white/50">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ad;