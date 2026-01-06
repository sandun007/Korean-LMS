import React from 'react'
import { CometCard } from "@/components/ui/comet-card";
import { useTranslation } from "react-i18next";

function Featurebooks() {
    const { t } = useTranslation();

    const books = [
        {
            key: "yonsei-1",
            price: "$35",
            rating: "4.8",
            readers: "12K",
            image: "https://m.media-amazon.com/images/I/81dA2yoGohL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            key: "ttmik-level1",
            price: "$25",
            rating: "4.9",
            readers: "45K",
            image: "https://cdn.shopify.com/s/files/1/0836/5041/2860/files/001T-1_1_5x_120966df-a6af-49e0-b22f-f43176dfb25d.webp?v=1728202135",
        },
        {
            key: "integrated-beginning1",
            price: "$40",
            rating: "4.7",
            readers: "8K",
            image: "https://m.media-amazon.com/images/I/61FE4I9v+tL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            key: "grammar-in-use-beginning",
            price: "$38",
            rating: "4.9",
            readers: "28K",
            image: "https://m.media-amazon.com/images/I/81OcO6NFg0L._AC_UF1000,1000_QL80_.jpg",
        },
        {
            key: "topik-master",
            price: "$32",
            rating: "4.8",
            readers: "15K",
            image: "https://m.media-amazon.com/images/I/71yH3W+I99L._AC_UF1000,1000_QL80_.jpg",
        },
    ];

    return (
        <>
            <section className="py-16 md:py-24 bg-[var(--color-surface)]">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] text-center mb-12">
                        {t('FeatureBooks.heading')}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {books.map((book) => (

                            <CometCard
                                key={book.key}
                                className="h-full flex flex-col"
                            >
                                <div className="h-64 overflow-hidden rounded-t-xl">
                                    <img
                                        src={book.image}
                                        alt={t(`FeatureBooks.list.${book.key}.title`)}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="flex flex-col flex-grow p-5">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-medium px-3 py-1 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-full">
                                            {t(`FeatureBooks.list.${book.key}.category`)}
                                        </span>
                                        <span className="text-xl font-bold text-[var(--color-primary)]">
                                            {book.price}
                                      </span>
                                    </div>
                                    <h3 className="text-sm md:text-base font-medium text-[var(--color-foreground)] line-clamp-3 min-h-[4.5rem] mb-4">
                                        {t(`FeatureBooks.list.${book.key}.title`)}
                                    </h3>
                                    <div className="flex justify-between items-center text-sm text-[var(--color-subtle)]">
                                        <div className="flex items-center gap-1">
                                            <span className="text-[var(--color-rating)]">⭐</span>
                                            <span className="font-medium">{book.rating}</span>
                                        </div>
                                        <span>
                                           {book.readers} {t('FeatureBooks.readers')}
                                        </span>
                                    </div>
                                </div>
                            </CometCard>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="text-[var(--color-primary)] font-medium hover:underline flex items-center gap-2 mx-auto">
                            {t('FeatureBooks.viewAll')}
                            <span className="text-lg">→</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featurebooks;
