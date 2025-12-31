import React from 'react'

function Connectus() {
    return (
        <div>
            <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
                <div className="
                mx-auto max-w-[1320px]
                grid grid-cols-1 lg:grid-cols-2
                gap-12 lg:gap-16 xl:gap-24
                items-center">

                    <div className="flex flex-col gap-6 md:gap-8">
                        <h2 className="
                          text-[var(--color-foreground)]
                          font-inter text-4xl sm:text-5xl md:text-[52px]
                          font-semibold leading-tight
                          tracking-[-0.02em]">
                            Connect with us
                        </h2>

                        <p className="
                            text-[var(--color-subtle)]
                            font-inter text-lg sm:text-xl
                            leading-7 sm:leading-8
                            max-w-[500px]">
                            Want to chat? We’d love to hear from you! Reach out to our friendly Customer Success Team
                            for questions about speaking events, partnerships, advertising, collaborations, or just to
                            say hello and share your Korean learning journey.
                        </p>

                        {/* Copy Email Button */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <button
                                type="button"
                                onClick={() => {
                                    navigator.clipboard.writeText("support@simplekorean.com");
                                    alert("Email copied to clipboard!");
                                }}
                                className="flex items-center justify-center gap-3
                                    bg-[var(--color-primary)]
                                    hover:bg-[var(--color-primary-hover)]
                                    text-[var(--color-primary-foreground)]
                                    font-inter font-semibold text-base
                                    px-8 py-4 rounded-lg
                                    transition-colors duration-200
                                    shadow-md hover:shadow-lg
                                    w-fit">
                                <svg
                                    width="20"
                                    height="16"
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18 1H2C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H18C18.5523 15 19 14.5523 19 14V2C19 1.44772 18.5523 1 18 1Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1 3.5L9.5 9.5L18 3.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>Copy Email</span>
                            </button>

                            <p className="text-[var(--color-muted)] text-sm sm:text-base">
                                support@simplekorean.com
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="https://thumbs.dreamstime.com/b/employee-group-portrait-young-smiling-people-business-team-happy-laughing-teenagers-friends-together-vector-cartoon-characters-157491325.jpg"
                            alt="Friendly customer success team at Simple Korean ready to help you learn Korean"
                            className="
                            w-full rounded-2xl
                            shadow-2xl object-cover
                            aspect-[4/3] sm:aspect-[5/4] lg:aspect-[3/2]"
                            width={800}
                            height={600}
                            loading="lazy"/>

                        <div className="
                            absolute bottom-6 right-6
                            bg-[var(--color-primary)]
                            text-white text-sm font-medium
                            px-5 py-2 rounded-lg shadow-md">
                            Here to help!
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Connectus;