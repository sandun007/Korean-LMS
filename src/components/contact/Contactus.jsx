import React from 'react'

function Contactus() {
    return (
        <div>
            <section className="bg-white">
                <div className="pt-16 md:pt-20 lg:pt-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 text-center">
                    <h1 className="
                        text-[var(--color-foreground)]
                        font-inter text-4xl sm:text-5xl md:text-[52px] lg:text-[56px]
                        font-semibold leading-tight
                        tracking-[-0.01em]">
                        Contact Us
                    </h1>
                </div>
                <div className="
                    py-12 sm:py-16 md:py-20 lg:py-24
                    px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
                    <div className="
                        mx-auto max-w-[1320px]
                        grid grid-cols-1 lg:grid-cols-2
                        gap-12 lg:gap-16 xl:gap-24
                        items-start">
                        <div className="flex flex-col gap-8 md:gap-10">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-start gap-6">
                                    <span
                                        className="
                                        text-[var(--color-primary)]
                                        font-inter text-base font-medium
                                        leading-none w-[160px] sm:w-[180px] md:w-[200px] shrink-0">
                                        Address
                                    </span>
                                    <p className="
                                        text-[var(--color-foreground)]
                                        font-inter text-base leading-6
                                        flex-1">
                                        1702 Olympic Boulevard<br className="sm:hidden" /> Santa Monica, CA 90404
                                    </p>
                                </div>
                                <div className="h-px bg-[var(--color-border)] w-full" />

                                <div className="flex items-start gap-6">
                                    <span
                                        className="
                                        text-[var(--color-primary)]
                                        font-inter text-base font-medium
                                        leading-none w-[160px] sm:w-[180px] md:w-[200px] shrink-0 ">
                                        Phone Number
                                    </span>
                                    <div className="flex flex-col gap-2 flex-1">
                                        <p className="text-[var(--color-foreground)] font-inter text-base leading-6">
                                            (480) 555-0103
                                        </p>
                                        <p className="text-[var(--color-foreground)] font-inter text-base leading-6">
                                            (219) 555-0114
                                        </p>
                                    </div>
                                </div>
                                <div className="h-px bg-[var(--color-border)] w-full" />

                                <div className="flex items-start gap-6">
                                    <span
                                        className="
                                        text-[var(--color-primary)]
                                        font-inter text-base font-medium
                                        leading-none w-[160px] sm:w-[180px] md:w-[200px] shrink-0">
                                        Email address
                                    </span>
                                    <div className="flex flex-col gap-2 flex-1">
                                        <p className="text-[var(--color-foreground)] font-inter text-base leading-6">
                                            help.eduguard@gmail.com
                                        </p>
                                        <p className="text-[var(--color-foreground)] font-inter text-base leading-6">
                                            career.eduguard@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="
                            flex flex-col gap-8
                            bg-white p-8 md:p-10 lg:p-12
                            rounded-2xl
                            border border-[var(--color-border)]
                            shadow-sm">
                            <div className="flex flex-col gap-3">
                                <h2 className="
                                    text-[var(--color-foreground)]
                                    font-inter text-2xl md:text-3xl
                                    font-semibold leading-8">
                                    Get In Touch
                                </h2>
                                <p className="
                                    text-[var(--color-muted)]
                                    font-inter text-base leading-6">
                                    Feel free to contact us — we love to make new partners & friends
                                </p>
                            </div>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="firstName"
                                        className="text-[var(--color-foreground)] font-inter text-sm leading-[22px] tracking-[-0.01em]">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        placeholder="First name..."
                                        className="
                                            border border-[var(--color-border)]
                                            rounded-lg px-4 py-3 text-base
                                            placeholder:text-[var(--color-muted-light)]
                                            focus:outline-none focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20
                                            transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="lastName"
                                        className="text-[var(--color-foreground)] font-inter text-sm leading-[22px] tracking-[-0.01em]">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        placeholder="Last name..."
                                        className="
                                            border border-[var(--color-border)]
                                            rounded-lg px-4 py-3 text-base
                                            placeholder:text-[var(--color-muted-light)]
                                            focus:outline-none focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20
                                            transition-all"
                                    />
                                </div>
                                <div className="md:col-span-2 flex flex-col gap-1.5">
                                    <label
                                        htmlFor="email"
                                        className="text-[var(--color-foreground)] font-inter text-sm leading-[22px] tracking-[-0.01em]"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email Address"
                                        className="
                                            border border-[var(--color-border)]
                                            rounded-lg px-4 py-3 text-base
                                            placeholder:text-[var(--color-muted-light)]
                                            focus:outline-none focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20
                                            transition-all"
                                    />
                                </div>
                                <div className="md:col-span-2 flex flex-col gap-1.5">
                                    <label
                                        htmlFor="subject"
                                        className="text-[var(--color-foreground)] font-inter text-sm leading-[22px] tracking-[-0.01em]"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        type="text"
                                        placeholder="Message Subject"
                                        className="
                                            border border-[var(--color-border)]
                                            rounded-lg px-4 py-3 text-base
                                            placeholder:text-[var(--color-muted-light)]
                                            focus:outline-none focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20
                                            transition-all"
                                    />
                                </div>
                                <div className="md:col-span-2 flex flex-col gap-1.5">
                                    <label
                                        htmlFor="message"
                                        className="text-[var(--color-foreground)] font-inter text-sm leading-[22px] tracking-[-0.01em]"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Your message..."
                                        className="
                                            border border-[var(--color-border)]
                                            rounded-lg px-4 py-3 text-base
                                            placeholder:text-[var(--color-muted-light)]
                                            focus:outline-none focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/20
                                            transition-all resize-y min-h-[140px]"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="
                                            flex items-center justify-center gap-3
                                            bg-[var(--color-primary)]
                                            hover:bg-[var(--color-primary-hover)]
                                            text-[var(--color-primary-foreground)]
                                            font-inter font-semibold text-lg
                                            px-8 py-4 rounded-lg
                                            transition-colors duration-200
                                            w-full md:w-auto shadow-md hover:shadow-lg"
                                    >
                                        Send Message
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 19 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.7022 9.71366L1.86645 0.84562C1.73323 0.771016 1.58041 0.738851 1.42842 0.753425C1.27642 0.767998 1.1325 0.828615 1.01588 0.927175C0.899263 1.02573 0.815504 1.15754 0.7758 1.30498C0.736096 1.45241 0.742339 1.60846 0.793694 1.75225L3.78067 10.1158C3.83893 10.2789 3.83893 10.4572 3.78067 10.6203L0.793694 18.9838C0.742339 19.1276 0.736096 19.2836 0.7758 19.4311C0.815503 19.5785 0.899262 19.7103 1.01588 19.8089C1.1325 19.9074 1.27643 19.9681 1.42842 19.9826C1.58041 19.9972 1.73323 19.965 1.86645 19.8904L17.7022 11.0224C17.8185 10.9573 17.9154 10.8623 17.9828 10.7473C18.0502 10.6323 18.0858 10.5014 18.0858 10.368C18.0858 10.2347 18.0502 10.1038 17.9828 9.98879C17.9154 9.87377 17.8185 9.7788 17.7022 9.71366Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contactus;