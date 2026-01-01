import Typewriter from "typewriter-effect";

function Hero() {
    return (
        <>
            <section className="relative h-[600px] md:h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/HeroClip.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/20 pointer-events-none" />

                <div className="relative z-10 flex items-end justify-end h-full pb-12 md:pb-20 pl-6 sm:pl-8 md:pl-12 lg:pl-16 pr-0 md:pr-4 lg:pr-6 xl:pr-12 max-w-none mx-0">

                    <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl text-right ml-auto">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-primary-foreground)] leading-tight mb-6">
                            Learn with experts{" "}
                            <span className="text-[var(--color-primary)]">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "anytime, anywhere",
                                            "24/7 premium access",
                                            "at your own pace",
                                            "unlock your potential",
                                            "for a brighter future",
                                            "on any device",
                                            "endless growth ahead",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        cursor: "|",
                                        delay: 60,
                                        deleteSpeed: 40,
                                        pauseFor: 1800,
                                    }}
                                />
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-[var(--color-primary-foreground)]/90 mb-8">
                            Our mission is to help people to find the best course online and learn with expert anytime, anywhere.
                        </p>
                        <button className="px-8 py-4 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-lg font-semibold hover:bg-[var(--color-primary-hover)] rounded-lg transition shadow-lg">
                            Create Account
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;