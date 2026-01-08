// @ts-ignore
import React from "react";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    category?: string;
    image?: string;
    logo?: string;
    link?: string;
    type?: "content" | "simple-image";
}


const ContentCard: React.FC<CaseStudyCardProps> = ({title, category, image, logo,}) => (
    <div
        className="relative flex h-full flex-col items-start justify-between rounded-lg p-4"
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        {image && <div className="absolute inset-0 rounded-lg bg-black opacity-70" />}
        <div className="relative z-10">
            {category && <div className="text-xs text-gray-200">{category}</div>}
            {title && (
                <div className="mr-2 text-lg font-bold leading-tight tracking-wide text-red-300">
                    {title}
                </div>
            )}
        </div>
        {logo && (
            <img src={logo} alt={title ?? "logo"} className="z-10 h-9 rounded-lg" />
        )}
    </div>
);

// Simple image-only version
const SimpleImageCard: React.FC<CaseStudyCardProps> = ({ image }) => (
    <div
        className="relative flex w-full flex-col items-start justify-between rounded-lg p-4"
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    />
);

// The magic hover wrapper (book tilt + sliding tab)
const HoverRevealSlip = ({ show }: { show: React.ReactNode }) => {
    const common = "absolute flex w-full h-full [backface-visibility:hidden]";

    return (
        <div className="group relative h-60 w-52 [perspective:1000px]">
            {/* Static back cover */}
            <div className="absolute inset-0 h-full w-48 rounded-lg bg-gray-50 shadow-md" />

            {/* Tilting front on hover */}
            <div
                className={cn(
                    "relative z-50 h-full w-48 origin-left transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(-30deg)]"
                )}
            >
                <div className={cn("h-full w-full rounded-lg bg-white shadow-md", common)}>
                    {show}
                </div>
            </div>

            {/* Green "CLICK TO READ" tab that slides out */}
            <div
                className={cn(
                    "absolute bottom-0 right-0 z-10 flex h-48 w-14 -translate-x-10 transform items-start " +
                    "justify-start rounded-r-lg bg-green-600 pl-2 pt-2 text-xs font-bold text-white " +
                    "transition-transform duration-300 ease-in-out [backface-visibility:hidden] group-hover:translate-x-0 group-hover:rotate-[5deg]"
                )}
            >
                <div className="-rotate-90 whitespace-nowrap pb-16 pr-9">
                    CLICK TO READ
                </div>
            </div>
        </div>
    );
};

// Exported main component
export default function CaseStudyCard({title, category, link, image, logo, type = "content", ...props}: CaseStudyCardProps) {
    return (
        <div className="flex gap-8" {...props}>
            <a href={link} className="block">
                <HoverRevealSlip
                    show={
                        type === "content" ? (
                            <ContentCard
                                title={title}
                                category={category}
                                image={image}
                                logo={logo}
                            />
                        ) : (
                            <SimpleImageCard image={image} />
                        )
                    }
                />
            </a>
        </div>
    );
}