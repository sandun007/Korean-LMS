import React from 'react'

function Map() {
    return (
        <div>
            <section className="bg-[var(--color-surface)]">
                <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
                    <div className="mx-auto max-w-[1320px] flex flex-col gap-8 md:gap-10">
                        <div className="text-center md:text-left">
                            <h2 className="
                                text-[var(--color-foreground)]
                                font-inter text-3xl sm:text-4xl md:text-5xl
                                font-semibold leading-tight
                                tracking-[-0.01em]">
                                Find Us
                            </h2>
                            <p className="
                                text-[var(--color-muted)]
                                font-inter text-lg sm:text-xl
                                mt-3 max-w-2xl mx-auto md:mx-0">
                                We're located in Sri Jayawardenepura Kotte, near the heart of Sri Lanka's administrative capital.
                            </p>
                        </div>
                        {/* Map */}
                        <div className="overflow-hidden rounded-2xl shadow-xl border border-[var(--color-border)]">
                            <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15885.000000000001!2d79.892481!3d6.894070!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e8b7a9e8f3c!2sSri%20Jayawardenepura%20Kotte%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1730000000000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Map of Sri Jayawardenepura Kotte, Sri Lanka"
                                ></iframe>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start text-center md:text-left">
                            <div>
                                <p className="text-[var(--color-primary)] font-medium text-lg">Sri Jayawardenepura Kotte</p>
                                <p className="text-[var(--color-muted)] text-base">
                                    Legislative Capital of Sri Lanka
                                </p>
                            </div>
                            <div className="hidden sm:block h-10 w-px bg-[var(--color-border)] mx-4 self-center" />
                            <div>
                                <p className="text-[var(--color-muted)] text-base">
                                    Coordinates: 6.89407° N, 79.90248° E
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Map;
