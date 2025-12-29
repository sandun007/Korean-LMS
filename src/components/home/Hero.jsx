import React from 'react';

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
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 z-10 p-8 md:p-12 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                        Learn with expert<br />anytime anywhere
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-8">
                        Our mission is to help people to find the best course online and learn with expert anytime, anywhere.
                    </p>
                    <button className="px-8 py-4 bg-orange-600 text-white text-lg font-semibold hover:bg-orange-700 rounded transition">
                        Create Account
                    </button>
                </div>
            </section>
        </>
    );
}

export default Hero;