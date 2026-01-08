"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
// @ts-ignore
import React, { useEffect, useRef, useState } from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gray-100 dark:bg-neutral-950 font-sans md:px-10 lg:py-10"
      ref={containerRef}
    >
        <div className="max-w-7xl mx-auto py-16 md:py-20 px-4 md:px-8 lg:px-10">
            <div className="mb-10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-xl overflow-hidden shadow-lg">
                    <img
                        src="https://storylearning.com/wp-content/uploads/2024/11/Best-way-to-learn-Korean.jpg"
                        alt="Online Korean lesson setup"
                        className="w-full h-32 md:h-48 object-cover"
                    />
                    <img
                        src="https://www.shutterstock.com/image-photo/asian-female-teacher-stands-front-600nw-2620019181.jpg"
                        alt="Korean teacher smiling"
                        className="w-full h-32 md:h-48 object-cover"
                    />
                    <img
                        src="https://admin.migii.net/uploads/ckeditor/1759993251.png"
                        alt="TOPIK success certificate"
                        className="w-full h-32 md:h-48 object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1546198632-9ef6368bef12?auto=format&fit=crop&q=80&w=800"
                        alt="K-drama inspired learning vibe - Seoul night aesthetic"
                        className="w-full h-32 md:h-48 object-cover"
                    />
                </div>
            </div>

            <PointerHighlight
                pointerClassName="text-[var(--color-dark)]"
                rectangleClassName="leading-loose lg:py-10"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r
                from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent lg:py-5">
                    My Korean Teaching Journey
                </h2>
            </PointerHighlight>

            <div className="max-w-3xl">
                <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 mb-6 leading-relaxed font-medium">
                    안녕하세요! I'm a passionate Korean language teacher from Seoul,
                    helping learners worldwide fall in love with 한국어 through fun,
                    culture-rich online classes — from complete beginners to TOPIK 6 hopefuls.
                </p>

                <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-8">
                    From university classrooms to Zoom screens and my own LMS platform,
                    here's the story of how I turned my love for Korean into a mission to help others speak it confidently.
                </p>

                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-medium italic">
                    Scroll through the timeline below to see the key moments of my journey ✈️🇰🇷
                </p>
            </div>
        </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
