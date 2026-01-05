import React from 'react'
import { CometCard } from "@/components/ui/comet-card.tsx";

function Topcourse() {
    const courses = [
        {
            title: "First Step Korean (Yonsei University)",
            category: "Beginner",
            price: "$49",
            rating: "4.9",
            students: "53K",
            image: "https://cdn.innovativelanguage.com/sns/em/content/lp/alphabet/thumbnail/Alphabet_korean.jpg",
        },
        {
            title: "Learn to Speak Korean Now 01",
            category: "Conversation",
            price: "$59",
            rating: "4.9",
            students: "540K",
            image: "https://c8.alamy.com/comp/HE5NRK/learn-korean-language-online-education-concept-HE5NRK.jpg",
        },
        {
            title: "Practical Korean for Beginners",
            category: "Vocabulary",
            price: "$39",
            rating: "4.8",
            students: "26K",
            image: "https://www.missellykorean.com/wp-content/uploads/2022/07/Korean-alphabet-Hangul-Chart-PDF-thumbnail.png",
        },
        {
            title: "TOPIK Preparation Course",
            category: "Exam Prep",
            price: "$69",
            rating: "4.7",
            students: "3.6K",
            image: "https://cdn.talktomeinkorean.com/wp-content/uploads/2023/11/11171125/TOPIK-MVP_course_thumbnailfin-low.webp",
        },
        {
            title: "Korean Through K-Pop & Dramas",
            category: "Fun Learning",
            price: "$45",
            rating: "4.8",
            students: "45K",
            image: "https://media.cnn.com/api/v1/images/stellar/prod/230105094142-04-korean-language-learning.jpg?q=w_1110,c_fill",
        },
    ];
    return (
        <>
            <section className="py-16 md:py-24 bg-[var(--color-surface)]">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] text-center mb-12">
                        Best Selling Korean Courses
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {courses.map((course) => (
                            <CometCard
                                key={course.title}
                                className="h-full"
                            >
                                <CometCard>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </CometCard>

                                <div className="p-5">
                                    <div className="flex justify-between items-center mb-3">
                                        <CometCard>
                                            <span className="text-xs font-medium px-3 py-1 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-full">
                                            {course.category}
                                        </span>
                                        </CometCard>

                                        <span className="text-xl font-bold text-[var(--color-primary)]">
                                            {course.price}
                                        </span>
                                    </div>
                                    <h3 className="text-sm md:text-base font-medium text-[var(--color-foreground)] line-clamp-2 mb-4">
                                        {course.title}
                                    </h3>
                                    <div className="flex justify-between items-center text-sm text-[var(--color-subtle)]">
                                        <div className="flex items-center gap-1">
                                            <span className="text-[var(--color-rating)]">⭐</span>
                                            <span className="font-medium">{course.rating}</span>
                                        </div>
                                        <span>{course.students} students</span>
                                    </div>
                                </div>
                            </CometCard>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="text-[var(--color-primary)] font-medium hover:underline flex items-center gap-2 mx-auto">
                            View All Courses
                            <span className="text-lg">→</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Topcourse;