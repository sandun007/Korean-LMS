
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

                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/50 via-transparent to-transparent"></div>

                <div className="relative z-10 flex items-end h-full pb-12 md:pb-20 px-8 md:px-12 max-w-4xl">
                    <div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-primary-foreground)] leading-tight mb-6">
                            Learn with expert anytime anywhere
                        </h1>
                        <p className="text-lg md:text-xl text-[var(--color-primary-foreground)]/90 mb-8 max-w-2xl">
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