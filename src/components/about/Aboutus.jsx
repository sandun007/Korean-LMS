import React from 'react'

function Aboutus() {
    return (
        <div>
            <section className="bg-[var(--color-surface)] py-16 sm:py-20 md:py-24 lg:py-28 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
                <div className="mx-auto max-w-[1320px]
                    grid grid-cols-1 lg:grid-cols-2
                    gap-10 lg:gap-16 xl:gap-20
                    items-center">

                    <div className="flex flex-col gap-6 md:gap-8">

                        <p className="
                            text-[var(--color-primary)]
                            font-inter text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                            font-extrabold leading-none
                            tracking-[-0.02em]
                            opacity-90">
                            2010 – Today
                        </p>

                        <h2 className="
                            text-[var(--color-foreground)]
                            font-inter text-3xl sm:text-4xl md:text-5xl lg:text-[52px]
                            font-semibold leading-tight
                            tracking-[-0.02em]
                            max-w-[90%]">
                            Making Korean accessible to everyone, everywhere
                        </h2>

                        <p className="
                            text-[var(--color-muted)]
                            font-inter text-base sm:text-lg md:text-xl
                            leading-7 sm:leading-8
                            max-w-[600px]">
                            Since our beginning, we've been dedicated to sharing the Korean language and culture with learners around the world. Through clear lessons, real conversations, Hangul mastery, and cultural insights, we help thousands confidently speak Korean — whether for travel, K-dramas, heritage, or personal growth.
                        </p>
                    </div>

                    <div className="relative">
                        <img src="https://images.stockcake.com/public/2/7/4/2749cd2f-26ad-4676-8adf-db3271b052c5_large/professional-team-smiling-stockcake.jpg"
                            alt="Professional team at Simple Korean sharing Korean language knowledge"
                            className="w-full rounded-xl md:rounded-2xl
                            shadow-xl object-cover
                            aspect-[4/3] sm:aspect-[5/4] lg:aspect-[3/2]"
                            width={800}
                            height={533}
                            loading="lazy"
                        />
                        <div className="
                            absolute bottom-4 right-4
                            bg-[var(--color-primary)]
                            text-[var(--color-primary-foreground)]
                            text-sm md:text-base font-medium
                            px-4 py-2 rounded-md shadow-md">
                            Team since 2010
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutus;