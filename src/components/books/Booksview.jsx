import React from 'react';
import CaseStudyCard from "@/components/animata/card/case-study-card";

const koreanBooks = [
    {
        title: "Integrated Korean: Beginning 1",
        image: "https://i.ebayimg.com/images/g/qmgAAOSwboZn~0~~/s-l1200.jpg",
        price: "$35–$45",
        link: "https://uhpress.hawaii.edu/title/integrated-korean-beginning-1-third-edition/",
        category: "Beginner",
    },
    {
        title: "Talk To Me In Korean Level 1",
        image: "https://m.media-amazon.com/images/I/61FE4I9v+tL._AC_UF1000,1000_QL80_.jpg",
        price: "$20–$30",
        link: "https://talktomeinkorean.com/product/lv1p/",
        category: "Beginner",
    },
    {
        title: "Yonsei Korean 1",
        image: "https://m.media-amazon.com/images/I/81dA2yoGohL.jpg",
        price: "$25–$35",
        link: "https://www.yskli.com/",
        category: "Beginner",
    },
    {
        title: "Korean Grammar in Use - Beginning",
        image: "https://m.media-amazon.com/images/I/415mQoupjKL.jpg_.jpg",
        price: "$20–$30",
        link: "https://www.darakwon.co.kr/",
        category: "Beginner",
    },
    {
        title: "Korean Made Simple 1",
        image: "https://m.media-amazon.com/images/I/61hm7wYthHL.jpg_.jpg",
        price: "$15–$25",
        link: "https://gobillykorean.com/korean-made-simple/",
        category: "Beginner",
    },
    {
        title: "Seoul National University Korean 1A",
        image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/bd/20/dc/14426301/1507-1/tsp20250923084619/TALK-TO-ME-IN-KOREAN-LEVEL-1-NOUVELLE-EDITION-Bilingue-Coreen-Anglais-MP3-a-Telecharger.jpg",
        price: "$30–$40",
        link: "https://www.twoponds.co.kr/en/snu",
        category: "Beginner",
    },
    {
        title: "Korean Picture Dictionary",
        image: "https://splashofdelight.wordpress.com/wp-content/uploads/2013/05/cam04261766298873.jpg",
        price: "$15–$25",
        link: "https://www.tuttlepublishing.com/books/korean-picture-dictionary",
        category: "Beginner",
    },
    {
        title: "Shortcut to Korean: K-Pop & K-Drama Cheat Sheet",
        image: "https://ihvml.com/wp-content/uploads/2023/06/Sogang-Korean-1A-Set-Student-and-workbook.jpg",
        price: "$10–$20",
        link: "https://amzn.to/shortcut-to-korean",
        category: "Beginner",
    },
];

function Booksview() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            <h1 className="text-4xl font-bold mb-10 text-center">Korean Language Learning Books</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 justify-items-center ">
                {koreanBooks.map((book, index) => (
                    <div
                        key={index}
                        className="
                        flex flex-col items-center text-center
                        rounded-xl
                        p-10 shadow-md hover:shadow-2xl transition-shadow duration-300
                        max-w-[300px] w-full
                        hover:bg-gray-200
                        relative"
                    >
                        <CaseStudyCard
                            image={book.image}
                            link={book.link}
                            type="simple-image"
                            className="w-full h-full bg-center bg-cover bg-no-repeat duration-300"
                        />

                        <div className="mt-4 w-full max-w-[280px] px-2 ">
                            <h3
                                className="
                                text-lg md:text-xl font-semibold text-[var(--color-primary)]
                                break-words hyphens-auto leading-tight pb-2"
                            >
                                {book.title}
                            </h3>
                            <span
                                className="
                                inline-flex items-center px-2.5 py-1
                                text-xs font-medium rounded-full
                                bg-blue-50 text-blue-700 border border-blue-200
                                whitespace-nowrap flex-shrink-0">
                                {book.category}
                            </span>

                            <hr className="w-full border-gray-200 my-3 " />

                            <p className="mt-2 text-base font-medium text-black xl:pt-4">
                                {book.price}
                            </p>
                            <button
                                className="
                                flex items-center justify-center
                                w-10 h-10 rounded-full
                                bg-white border-2 border-gray-300
                                text-red-500 hover:text-red-600
                                shadow-md hover:shadow-lg
                                transition-all duration-200
                                active:scale-95
                                absolute bottom-8 right-7
                                cursor-pointer"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Booksview;